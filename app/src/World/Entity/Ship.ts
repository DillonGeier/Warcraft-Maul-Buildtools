import { CheckPoint } from './CheckPoint';
import { WorldMap } from '../WorldMap';
import { WarcraftMaul } from '../WarcraftMaul';
import { Sounds } from '../GlobalSettings';
import { SpawnedCreeps } from './SpawnedCreeps';
import { Creep } from './Creep';

export class Ship extends CheckPoint {
    ship: unit;
    private game: WarcraftMaul;
    worldMap: WorldMap;

    destination: rect = Rect(-5440.0, -5664.0, -5184.0, -4864.0); // Ship moves to here when game ends

    // killzone: CheckPoint;

    constructor(ship: unit, worldMap: WorldMap) {
        super(Rect(-768.00, -4992.00, 768.00, -4800.00), worldMap);
        this.ship = ship;
        this.worldMap = worldMap;
        this.game = this.worldMap.game;

    }

    MoveShip(): void {
        IssuePointOrder(this.ship, 'move', GetRectCenterX(this.destination), GetRectCenterY(this.destination));
    }

    checkPointAction(): void {
        const u: unit = GetEnteringUnit();

        if (this.game.gameEnded) {
            return;
        }
        if (this.game.gameRoundHandler.currentWave >= 36) {
            RemoveUnit(u);
        }
        const spawnedCreeps: SpawnedCreeps | undefined = this.worldMap.spawnedCreeps;
        if (spawnedCreeps !== undefined) {
            const creep: Creep | undefined = spawnedCreeps.unitMap.get(GetHandleIdBJ(GetEnteringUnit()));
            if (creep !== undefined) {
                if (creep.getId() === FourCC('uC72')) {
                    SendMessage('Archimonde has boarded the ship! |cFFFF0000YOU LOSE!|r');
                    this.game.gameLives = 0;
                } else {
                    //  this.game.gameLives--;
                    this.game.gameLives = this.game.gameLives - Math.ceil(GetUnitLifePercent(creep.creep) / 20) * 100;
                    // SendMessage(
                    //     `|c00ff0000A unit has boarded the ship!|r ${Math.floor(this.game.gameLives)} |c00ff0000chances left|r`);
                    if (this.game.gameLives <= 0) {
                        this.game.gameLives = 0;
                    }

                    SendMessage(
                        `|c00ff0000A unit has boarded the ship!|r ${Util.Round(this.game.gameLives / 100)}|c00ff0000% of your lives left|r`);
                }


                creep.targetCheckpoint = undefined;
                spawnedCreeps.unitMap.delete(GetHandleIdBJ(GetEnteringUnit()));
                RemoveUnit(creep.creep);

                PlaySoundBJ(Sounds.loseALifeSound);
                if (this.game.scoreBoard) {
                    MultiboardSetItemValueBJ(this.game.scoreBoard.board, 2, 4, `${Util.Round(this.game.gameLives / 100)}%`);
                    // MultiboardSetItemValueBJ(this.game.scoreBoard.board, 2, 4, `${this.game.gameLives}`);
                }

                if (this.game.gameLives <= 0) {
                    this.game.GameOver();
                }
            }
        }
    }
}

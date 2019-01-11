/**
 * Classes extending this class transpile to a Game Maker object
 * @Object
 */
declare class GMObject {

    public x: number;
    public y: number;
    public sprite_index: Sprite;
    public image_index: number;
    public image_angle: number;

    /**
     * Transpiles to Game Maker's create event
     * @Action 0 0
     */
    public create(): void;

}

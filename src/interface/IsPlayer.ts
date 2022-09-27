export interface IsPlayer{
    name: string;
    readonly country: string;

    getProperty(): number;
    play(): void;
}
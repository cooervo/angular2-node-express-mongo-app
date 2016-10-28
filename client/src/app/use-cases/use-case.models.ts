export class UseCaseVO{
    public _id: string;
    public title: string;
    public body: string;
    public milestones: MilestonesVO[];
}

export class MilestonesVO{
    public name: string;
    public start_date: Date;
    public end_date: Date;

}
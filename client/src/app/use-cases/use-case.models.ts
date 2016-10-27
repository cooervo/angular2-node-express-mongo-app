export class UseCaseVO{
    public _id: string;
    public title: string;
    public body: string;
    public milestones: MilestonesVO[];
}

export class MilestonesVO{
    public name: string;
    public startDate: Date;
    public endDate: Date;

}
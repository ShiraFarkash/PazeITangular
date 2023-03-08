export class OneTimeList {
    Id: number
    userID: number
    ProductionDate: Date
    endDate: Date | undefined
    status: boolean
    branchID: number | undefined
    constructor(Id: number, userID: number, ProductionDate: Date, status: boolean, endDate?: Date, branchID?: number) {
        this.Id = Id;
        this.userID = userID;
        this.ProductionDate = ProductionDate;
        this.status=status;
        this.endDate=undefined?undefined : endDate;
        this.branchID=undefined?undefined :branchID;

    }
}

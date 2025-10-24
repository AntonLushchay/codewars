// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
// helper.pageCount() // should == 2
// helper.itemCount() // should == 6
// helper.pageItemCount(0) // should == 4
// helper.pageItemCount(1) // last page - should == 2
// helper.pageItemCount(2) // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5) // should == 1 (zero based index)
// helper.pageIndex(2) // should == 0
// helper.pageIndex(20) // should == -1
// helper.pageIndex(-10) // should == -1

export class PaginationHelper {
    private collection: Array<unknown>;
    private itemsPerPage: number;

    private collectionLength: number;
    private totalPageCount: number;

    public constructor(collection: unknown[], itemsPerPage: number) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.collectionLength = collection.length;
        this.totalPageCount = Math.ceil(this.collectionLength / this.itemsPerPage);
    }

    public itemCount(): number {
        return this.collectionLength;
    }

    public pageCount(): number {
        return this.totalPageCount;
    }

    public pageItemCount(pageIndex: number): number {
        if (pageIndex < 0 || pageIndex >= this.totalPageCount) {
            return -1;
        } else if (pageIndex < this.totalPageCount - 1) {
            return this.itemsPerPage;
        } else {
            return this.collectionLength % this.itemsPerPage || this.itemsPerPage;
        }
    }

    public pageIndex(itemIndex: number): number {
        if (itemIndex < 0 || itemIndex >= this.collectionLength) return -1;
        let pageIndex = -1;
        while (itemIndex >= 0) {
            itemIndex -= this.itemsPerPage;
            pageIndex++;
        }
        return pageIndex;
    }
}
// ];
// const helper = new PaginationHelper(collection, 4);
// console.log(helper.pageItemCount(2));
// console.log(helper.pageIndex(9));

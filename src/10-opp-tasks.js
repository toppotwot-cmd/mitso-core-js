class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // Returns the number of items within the entire collection
  itemCount() {
    return this.collection.length;
  }

  // Returns the total number of pages
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  // Returns the number of items on the specified page
  pageItemCount(pageIndex) {
    if (
      !Number.isInteger(pageIndex)
      || pageIndex < 0
      || pageIndex >= this.pageCount()
    ) {
      return -1;
    }

    const remainingItems = this.itemCount() - pageIndex * this.itemsPerPage;

    return Math.min(this.itemsPerPage, remainingItems);
  }

  // Determines which page contains the specified item
  pageIndex(itemIndex) {
    if (
      !Number.isInteger(itemIndex)
      || itemIndex < 0
      || itemIndex >= this.itemCount()
    ) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

module.exports = {
  PaginationHelper,
};

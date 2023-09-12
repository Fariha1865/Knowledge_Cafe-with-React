export function getFromLocalStorage(){
    
    const bookmarkList = JSON.parse(localStorage.getItem('bookMarks'));
    if(bookmarkList)
    {
        return bookmarkList;
    }else{
        return [];
    }
}

export function addItemToStorage(title){

        let bookmarkList  = getFromLocalStorage();
        bookmarkList = [...bookmarkList,title]
        setToLocalStorage(bookmarkList);
}

export function setToLocalStorage(bookmarkList){

    localStorage.setItem('bookMarks',JSON.stringify(bookmarkList));

}
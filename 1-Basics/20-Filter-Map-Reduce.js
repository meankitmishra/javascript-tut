const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((nums)=> nums > 4)
//can be written as this also 
/*  const newNums = myNums.filter((nums)=>{
        return nums>4
    }) */
    console.log(newNums);

const myNewNums = []

myNums.forEach((num)=>{
    if (num>4) {
        myNewNums.push(num);
    }
})

console.log(myNewNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((book)=>book.genre === 'History')

  console.log(userBooks);

  const newNumber = myNums.map((num)=>{return num + 10})

  console.log(newNumber);

  const nums = [1,2,3,4]

  const myTotal = nums.reduce((acc,curr)=>acc+curr , 0)

  console.log(myTotal);
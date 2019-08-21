const {isValid,
    generateMultiplyArray,
    printMultiplyTable,
    createMultiplyTable}=require('../main');

 it ('should generate result string', () => {
        //given
        const array = [];
        array[0] = [];
        array[0][0] = "2*2=4";
    
        //when
        const result = printMultiplyTable(array);
    
        //then
        expect(result).toBe("2*2=4 \n");
 });

it ('should numbers be valid', () => {
    // given
    const firstNumber=1;
    const secondNumber=2;
    //when
    const result=isValid(firstNumber,secondNumber);
    //then
    expect(result).toBe(true);
});

it ('should generated array with table items', () => {
    // given
    const firstNumber=2;
    const secondNumber=3;
    //when
    var  generatetArray=generateMultiplyArray(firstNumber, secondNumber);
    //then
    expect( generatetArray[0][0]).toBe("2*2=4");
    expect( generatetArray[1][0]).toBe("2*3=6");
    expect( generatetArray[1][1]).toBe("3*3=9");
});

it ('should print multiply table', () => {
    //given
    const firstNumber = 2;
    const secondNumber = 3;
    //when
    const result =createMultiplyTable(firstNumber,secondNumber);
    //then
    expect(result).toBe("2*2=4 \n2*3=6 3*3=9 \n");
});

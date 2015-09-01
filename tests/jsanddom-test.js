/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test",  function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    var divResult = divide( 4, 2 );
   ok( divResult==2, 'Expected 2 as the result, the result was: ' + divResult );
});
/********************************
Please create your tests below...
********************************/
test( "Reverse a string", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    // Make sure the result from the revrse string function is valid
    ok( reverseString( 'abc' )== 'cba', 'Expected cba as the result, the result was: ' + reverseString( 'abc' ) );
});


test( "find Min Value", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    // Make sure the result from the revrse string function is valid
    ok( findMinValue( 2,5,9 )== 2, 'Expected 2 as the result, the result was: ' + findMinValue( 2,5,9 ) );
});


test( "find Unique Value", function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 
var lst = [5, 3, 5, 8, 5, 2];
    // Make sure the result from the revrse string function is valid
    ok( findDistinctValues( lst )== '5,3,8,2', 'Expected 5,3,8,2 as the result, the result was: ' + findDistinctValues( lst ) );
});

test( "do Fizz Buzz",4, function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 
	var multipleList = [3];
	var multipleList2=[5];
	var multipleList3=[3,5];

    // Make sure the result from the revrse string function is valid
    ok( doFizzBuzz(multipleList3,'fizzBuzz',true)== 'fizzBuzz', 'Expected fizzBuzz as the result, the result was: ' + doFizzBuzz(multipleList3,'fizzBuzz',true) );
    ok( doFizzBuzz(multipleList2,'Buzz',false)== 'Buzz', 'Expected Buzz as the result, the result was: ' + doFizzBuzz(multipleList2,'Buzz',false) );
    ok( doFizzBuzz(multipleList,'fizz',false)== 'fizz', 'Expected fizz as the result, the result was: ' + doFizzBuzz(multipleList,'fizz',false) );
});



test( "split List Str Using Comma", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 
var lst ="a,b,c,d";
    // Make sure the result from the revrse string function is valid
    ok( splitListStrUsingComma( lst )== 'a,b,c,d', 'Expected a,b,c,d as the result, the result was: ' + splitListStrUsingComma( lst ) );
});



test( "sum", function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    // Make sure the result from the revrse string function is valid
    ok( sum( 1,2,3 )== 6, 'Expected 6 as the result, the result was: ' + sum( 1,2,3 ) );
});



test( "isOnlyWhitespace", function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    // Make sure the result from the revrse string function is valid
    ok( isOnlyWhitespace( "hello sir how are you" )== true, 'Expected true as the result, the result was: ' + isOnlyWhitespace( "hello sir how are you" ) );
});
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
    const newyork={
        name:'Newyork',
        population: 9000000,
        state:'Newyork',
        founded:'September 18, 1851',
        timezone:'EST — Eastern Standard Time',
    }
function showme(city=[])
{
    for (let key in city) { // iterates over each property in the phone object, stores in ‘key’ variable
        console.log('key: ' + key); // prints each object property name (key) in turn
        console.log('value: ' + city[key]); // prints each object value in turn
        }
    }
    showme(sydney);
    showme(newyork);
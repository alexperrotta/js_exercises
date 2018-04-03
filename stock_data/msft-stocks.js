console.log("script executed");

var stocks = {
        "2017-07-14 14:21:00": {
            "1. open": "72.2400",
            "2. high": "73.0600",
            "3. low": "71.9600",
            "4. close": "73.0500",
            "5. volume": "12642985"
        },
        "2017-07-13": {
            "1. open": "71.5000",
            "2. high": "72.0399",
            "3. low": "71.3100",
            "4. close": "71.7700",
            "5. volume": "20149208"
        },
        "2017-07-12": {
            "1. open": "70.6900",
            "2. high": "71.2800",
            "3. low": "70.5500",
            "4. close": "71.1500",
            "5. volume": "17747461"
        },
        "2017-07-11": {
            "1. open": "70.0000",
            "2. high": "70.6800",
            "3. low": "69.7500",
            "4. close": "69.9900",
            "5. volume": "16880205"
        },
        "2017-07-10": {
            "1. open": "69.4600",
            "2. high": "70.2500",
            "3. low": "69.2000",
            "4. close": "69.9800",
            "5. volume": "14903400"
        },
        "2017-07-07": {
            "1. open": "68.7000",
            "2. high": "69.8400",
            "3. low": "68.7000",
            "4. close": "69.4600",
            "5. volume": "15897154"
        },
        "2017-07-06": {
            "1. open": "68.2700",
            "2. high": "68.7800",
            "3. low": "68.1200",
            "4. close": "68.5700",
            "5. volume": "20909161"
        },
        "2017-07-05": {
            "1. open": "68.2550",
            "2. high": "69.4400",
            "3. low": "68.2200",
            "4. close": "69.0800",
            "5. volume": "21176272"
        },
        "2017-07-03": {
            "1. open": "69.3300",
            "2. high": "69.6000",
            "3. low": "68.0200",
            "4. close": "68.1700",
            "5. volume": "16164331"
        },
        "2017-06-30": {
            "1. open": "68.7800",
            "2. high": "69.3800",
            "3. low": "68.7400",
            "4. close": "68.9300",
            "5. volume": "23039328"
        },
        "2017-06-29": {
            "1. open": "69.3800",
            "2. high": "69.4900",
            "3. low": "68.0900",
            "4. close": "68.4900",
            "5. volume": "28231562"
        },
        "2017-06-28": {
            "1. open": "69.2100",
            "2. high": "69.8410",
            "3. low": "68.7900",
            "4. close": "69.8000",
            "5. volume": "25226070"
        },
        "2017-06-27": {
            "1. open": "70.1100",
            "2. high": "70.1800",
            "3. low": "69.1800",
            "4. close": "69.2100",
            "5. volume": "24862560"
        },
        "2017-06-26": {
            "1. open": "71.4000",
            "2. high": "71.7100",
            "3. low": "70.4400",
            "4. close": "70.5300",
            "5. volume": "19308122"
        },
        "2017-06-23": {
            "1. open": "70.0900",
            "2. high": "71.2500",
            "3. low": "69.9200",
            "4. close": "71.2100",
            "5. volume": "23176418"
        },
        "2017-06-22": {
            "1. open": "70.5400",
            "2. high": "70.5900",
            "3. low": "69.7100",
            "4. close": "70.2600",
            "5. volume": "22222851"
        },
        "2017-06-21": {
            "1. open": "70.2100",
            "2. high": "70.6200",
            "3. low": "69.9400",
            "4. close": "70.2700",
            "5. volume": "19190623"
        },
        "2017-06-20": {
            "1. open": "70.8200",
            "2. high": "70.8700",
            "3. low": "69.8700",
            "4. close": "69.9100",
            "5. volume": "20775590"
        },
        "2017-06-19": {
            "1. open": "70.5000",
            "2. high": "70.9400",
            "3. low": "70.3500",
            "4. close": "70.8700",
            "5. volume": "23146852"
        },
        "2017-06-16": {
            "1. open": "69.7300",
            "2. high": "70.0300",
            "3. low": "69.2200",
            "4. close": "70.0000",
            "5. volume": "46911637"
        },
        "2017-06-15": {
            "1. open": "69.2700",
            "2. high": "70.2100",
            "3. low": "68.8000",
            "4. close": "69.9000",
            "5. volume": "25701569"
        },
        "2017-06-14": {
            "1. open": "70.9100",
            "2. high": "71.1000",
            "3. low": "69.4300",
            "4. close": "70.2700",
            "5. volume": "25271276"
        },
        "2017-06-13": {
            "1. open": "70.0200",
            "2. high": "70.8200",
            "3. low": "69.9600",
            "4. close": "70.6500",
            "5. volume": "24815455"
        },
        "2017-06-12": {
            "1. open": "69.2500",
            "2. high": "69.9400",
            "3. low": "68.1300",
            "4. close": "69.7800",
            "5. volume": "47363986"
        },
        "2017-06-09": {
            "1. open": "72.0350",
            "2. high": "72.0800",
            "3. low": "68.5900",
            "4. close": "70.3200",
            "5. volume": "48619420"
        },
        "2017-06-08": {
            "1. open": "72.5100",
            "2. high": "72.5200",
            "3. low": "71.5000",
            "4. close": "71.9500",
            "5. volume": "23982410"
        },
        "2017-06-07": {
            "1. open": "72.6350",
            "2. high": "72.7700",
            "3. low": "71.9500",
            "4. close": "72.3900",
            "5. volume": "21895156"
        },
        "2017-06-06": {
            "1. open": "72.3000",
            "2. high": "72.6200",
            "3. low": "72.2700",
            "4. close": "72.5200",
            "5. volume": "31220057"
        },
        "2017-06-05": {
            "1. open": "71.9700",
            "2. high": "72.8900",
            "3. low": "71.8100",
            "4. close": "72.2800",
            "5. volume": "29507429"
        },
        "2017-06-02": {
            "1. open": "70.4400",
            "2. high": "71.8600",
            "3. low": "70.2400",
            "4. close": "71.7600",
            "5. volume": "34586054"
        },
        "2017-06-01": {
            "1. open": "70.2400",
            "2. high": "70.6100",
            "3. low": "69.4510",
            "4. close": "70.1000",
            "5. volume": "21066468"
        },
        "2017-05-31": {
            "1. open": "70.5300",
            "2. high": "70.7400",
            "3. low": "69.8100",
            "4. close": "69.8400",
            "5. volume": "29538356"
        },
        "2017-05-30": {
            "1. open": "69.7900",
            "2. high": "70.4100",
            "3. low": "69.7700",
            "4. close": "70.4100",
            "5. volume": "16901792"
        },
        "2017-05-26": {
            "1. open": "69.8000",
            "2. high": "70.2200",
            "3. low": "69.5200",
            "4. close": "69.9600",
            "5. volume": "19644260"
        },
        "2017-05-25": {
            "1. open": "68.9700",
            "2. high": "69.8800",
            "3. low": "68.9100",
            "4. close": "69.6200",
            "5. volume": "21702912"
        },
        "2017-05-24": {
            "1. open": "68.8700",
            "2. high": "68.8800",
            "3. low": "68.4500",
            "4. close": "68.7700",
            "5. volume": "14422965"
        },
        "2017-05-23": {
            "1. open": "68.7200",
            "2. high": "68.7500",
            "3. low": "68.3800",
            "4. close": "68.6800",
            "5. volume": "15347877"
        },
        "2017-05-22": {
            "1. open": "67.8900",
            "2. high": "68.5000",
            "3. low": "67.5000",
            "4. close": "68.4500",
            "5. volume": "15484530"
        },
        "2017-05-19": {
            "1. open": "67.5000",
            "2. high": "68.0950",
            "3. low": "67.4300",
            "4. close": "67.6900",
            "5. volume": "26496478"
        },
        "2017-05-18": {
            "1. open": "67.4000",
            "2. high": "68.1300",
            "3. low": "67.1400",
            "4. close": "67.7100",
            "5. volume": "24789790"
        },
        "2017-05-17": {
            "1. open": "68.8900",
            "2. high": "69.1000",
            "3. low": "67.4300",
            "4. close": "67.4800",
            "5. volume": "29964198"
        },
        "2017-05-16": {
            "1. open": "68.2300",
            "2. high": "69.4400",
            "3. low": "68.1600",
            "4. close": "69.4100",
            "5. volume": "33250702"
        },
        "2017-05-15": {
            "1. open": "68.1400",
            "2. high": "68.4800",
            "3. low": "67.5700",
            "4. close": "68.4300",
            "5. volume": "30705323"
        },
        "2017-05-12": {
            "1. open": "68.6100",
            "2. high": "68.6100",
            "3. low": "68.0400",
            "4. close": "68.3800",
            "5. volume": "17073013"
        },
        "2017-05-11": {
            "1. open": "68.3600",
            "2. high": "68.7300",
            "3. low": "68.1200",
            "4. close": "68.4600",
            "5. volume": "27985424"
        },
        "2017-05-10": {
            "1. open": "68.9900",
            "2. high": "69.5600",
            "3. low": "68.9200",
            "4. close": "69.3100",
            "5. volume": "17842038"
        },
        "2017-05-09": {
            "1. open": "68.8600",
            "2. high": "69.2800",
            "3. low": "68.6800",
            "4. close": "69.0400",
            "5. volume": "22318181"
        },
        "2017-05-08": {
            "1. open": "68.9700",
            "2. high": "69.0500",
            "3. low": "68.4200",
            "4. close": "68.9400",
            "5. volume": "18446053"
        },
        "2017-05-05": {
            "1. open": "68.9000",
            "2. high": "69.0300",
            "3. low": "68.4850",
            "4. close": "69.0000",
            "5. volume": "18882845"
        },
        "2017-05-04": {
            "1. open": "69.0300",
            "2. high": "69.0800",
            "3. low": "68.6400",
            "4. close": "68.8100",
            "5. volume": "21421413"
        },
        "2017-05-03": {
            "1. open": "69.3800",
            "2. high": "69.3800",
            "3. low": "68.7100",
            "4. close": "69.0800",
            "5. volume": "28725646"
        },
        "2017-05-02": {
            "1. open": "69.7100",
            "2. high": "69.7100",
            "3. low": "69.1300",
            "4. close": "69.3000",
            "5. volume": "23000828"
        },
        "2017-05-01": {
            "1. open": "68.6800",
            "2. high": "69.5500",
            "3. low": "68.5000",
            "4. close": "69.4100",
            "5. volume": "31304672"
        },
        "2017-04-28": {
            "1. open": "68.9100",
            "2. high": "69.1400",
            "3. low": "67.6900",
            "4. close": "68.4600",
            "5. volume": "38940853"
        },
        "2017-04-27": {
            "1. open": "68.1500",
            "2. high": "68.3800",
            "3. low": "67.5800",
            "4. close": "68.2700",
            "5. volume": "32219234"
        },
        "2017-04-26": {
            "1. open": "68.0800",
            "2. high": "68.3100",
            "3. low": "67.6200",
            "4. close": "67.8300",
            "5. volume": "25544417"
        },
        "2017-04-25": {
            "1. open": "67.9000",
            "2. high": "68.0400",
            "3. low": "67.6000",
            "4. close": "67.9200",
            "5. volume": "29983174"
        },
        "2017-04-24": {
            "1. open": "67.4800",
            "2. high": "67.6600",
            "3. low": "67.1000",
            "4. close": "67.5300",
            "5. volume": "29721254"
        },
        "2017-04-21": {
            "1. open": "65.6700",
            "2. high": "66.7000",
            "3. low": "65.4500",
            "4. close": "66.4000",
            "5. volume": "32522645"
        },
        "2017-04-20": {
            "1. open": "65.4600",
            "2. high": "65.7500",
            "3. low": "65.1400",
            "4. close": "65.5000",
            "5. volume": "22299477"
        },
        "2017-04-19": {
            "1. open": "65.6500",
            "2. high": "65.7500",
            "3. low": "64.8900",
            "4. close": "65.0400",
            "5. volume": "26992771"
        },
        "2017-04-18": {
            "1. open": "65.3300",
            "2. high": "65.7100",
            "3. low": "65.1600",
            "4. close": "65.3900",
            "5. volume": "15155611"
        },
        "2017-04-17": {
            "1. open": "65.0400",
            "2. high": "65.4900",
            "3. low": "65.0100",
            "4. close": "65.4800",
            "5. volume": "16689265"
        },
        "2017-04-13": {
            "1. open": "65.2900",
            "2. high": "65.8600",
            "3. low": "64.9500",
            "4. close": "64.9500",
            "5. volume": "17896483"
        },
        "2017-04-12": {
            "1. open": "65.4200",
            "2. high": "65.5100",
            "3. low": "65.1100",
            "4. close": "65.2300",
            "5. volume": "17108513"
        },
        "2017-04-11": {
            "1. open": "65.6000",
            "2. high": "65.6100",
            "3. low": "64.8500",
            "4. close": "65.4800",
            "5. volume": "18791533"
        },
        "2017-04-10": {
            "1. open": "65.6100",
            "2. high": "65.8200",
            "3. low": "65.3600",
            "4. close": "65.5300",
            "5. volume": "17952742"
        },
        "2017-04-07": {
            "1. open": "65.8500",
            "2. high": "65.9600",
            "3. low": "65.4400",
            "4. close": "65.6800",
            "5. volume": "14089274"
        },
        "2017-04-06": {
            "1. open": "65.6000",
            "2. high": "66.0550",
            "3. low": "65.4800",
            "4. close": "65.7300",
            "5. volume": "18103453"
        },
        "2017-04-05": {
            "1. open": "66.3000",
            "2. high": "66.3500",
            "3. low": "65.4443",
            "4. close": "65.5600",
            "5. volume": "21448594"
        },
        "2017-04-04": {
            "1. open": "65.3900",
            "2. high": "65.8100",
            "3. low": "65.2800",
            "4. close": "65.7300",
            "5. volume": "12997449"
        },
        "2017-04-03": {
            "1. open": "65.8100",
            "2. high": "65.9400",
            "3. low": "65.1900",
            "4. close": "65.5500",
            "5. volume": "20400871"
        },
        "2017-03-31": {
            "1. open": "65.6500",
            "2. high": "66.1900",
            "3. low": "65.4500",
            "4. close": "65.8600",
            "5. volume": "21040331"
        },
        "2017-03-30": {
            "1. open": "65.4200",
            "2. high": "65.9800",
            "3. low": "65.3600",
            "4. close": "65.7100",
            "5. volume": "15122823"
        },
        "2017-03-29": {
            "1. open": "65.1200",
            "2. high": "65.5000",
            "3. low": "64.9500",
            "4. close": "65.4700",
            "5. volume": "13618424"
        },
        "2017-03-28": {
            "1. open": "64.9600",
            "2. high": "65.4700",
            "3. low": "64.6500",
            "4. close": "65.2900",
            "5. volume": "20080358"
        },
        "2017-03-27": {
            "1. open": "64.6300",
            "2. high": "65.2200",
            "3. low": "64.3500",
            "4. close": "65.1000",
            "5. volume": "18614662"
        },
        "2017-03-24": {
            "1. open": "65.3600",
            "2. high": "65.4500",
            "3. low": "64.7600",
            "4. close": "64.9800",
            "5. volume": "22617105"
        },
        "2017-03-23": {
            "1. open": "64.9400",
            "2. high": "65.2400",
            "3. low": "64.7700",
            "4. close": "64.8700",
            "5. volume": "19269203"
        },
        "2017-03-22": {
            "1. open": "64.1200",
            "2. high": "65.1400",
            "3. low": "64.1200",
            "4. close": "65.0300",
            "5. volume": "20680015"
        },
        "2017-03-21": {
            "1. open": "65.1900",
            "2. high": "65.5000",
            "3. low": "64.1300",
            "4. close": "64.2100",
            "5. volume": "26640480"
        },
        "2017-03-20": {
            "1. open": "64.9100",
            "2. high": "65.1800",
            "3. low": "64.7200",
            "4. close": "64.9300",
            "5. volume": "14598083"
        },
        "2017-03-17": {
            "1. open": "64.9100",
            "2. high": "65.2400",
            "3. low": "64.6800",
            "4. close": "64.8700",
            "5. volume": "49219686"
        },
        "2017-03-16": {
            "1. open": "64.7500",
            "2. high": "64.7600",
            "3. low": "64.3000",
            "4. close": "64.6400",
            "5. volume": "20674296"
        },
        "2017-03-15": {
            "1. open": "64.5500",
            "2. high": "64.9200",
            "3. low": "64.2500",
            "4. close": "64.7500",
            "5. volume": "24833810"
        },
        "2017-03-14": {
            "1. open": "64.5300",
            "2. high": "64.5500",
            "3. low": "64.1500",
            "4. close": "64.4100",
            "5. volume": "14280202"
        },
        "2017-03-13": {
            "1. open": "65.0100",
            "2. high": "65.1900",
            "3. low": "64.5700",
            "4. close": "64.7100",
            "5. volume": "20100035"
        },
        "2017-03-10": {
            "1. open": "65.1100",
            "2. high": "65.2600",
            "3. low": "64.7500",
            "4. close": "64.9300",
            "5. volume": "19538245"
        },
        "2017-03-09": {
            "1. open": "65.1900",
            "2. high": "65.2000",
            "3. low": "64.4800",
            "4. close": "64.7300",
            "5. volume": "19846832"
        },
        "2017-03-08": {
            "1. open": "64.2600",
            "2. high": "65.0800",
            "3. low": "64.2500",
            "4. close": "64.9900",
            "5. volume": "21510907"
        },
        "2017-03-07": {
            "1. open": "64.1900",
            "2. high": "64.7800",
            "3. low": "64.1900",
            "4. close": "64.4000",
            "5. volume": "18520987"
        },
        "2017-03-06": {
            "1. open": "63.9700",
            "2. high": "64.5600",
            "3. low": "63.8100",
            "4. close": "64.2700",
            "5. volume": "18750255"
        },
        "2017-03-03": {
            "1. open": "63.9900",
            "2. high": "64.2800",
            "3. low": "63.6200",
            "4. close": "64.2500",
            "5. volume": "18139405"
        },
        "2017-03-02": {
            "1. open": "64.6900",
            "2. high": "64.7500",
            "3. low": "63.8800",
            "4. close": "64.0100",
            "5. volume": "24539597"
        },
        "2017-03-01": {
            "1. open": "64.1300",
            "2. high": "64.9900",
            "3. low": "64.0200",
            "4. close": "64.9400",
            "5. volume": "26937459"
        },
        "2017-02-28": {
            "1. open": "64.0800",
            "2. high": "64.2000",
            "3. low": "63.7600",
            "4. close": "63.9800",
            "5. volume": "23239825"
        },
        "2017-02-27": {
            "1. open": "64.5400",
            "2. high": "64.5400",
            "3. low": "64.0500",
            "4. close": "64.2300",
            "5. volume": "15871507"
        },
        "2017-02-24": {
            "1. open": "64.5300",
            "2. high": "64.8000",
            "3. low": "64.1400",
            "4. close": "64.6200",
            "5. volume": "21796800"
        },
        "2017-02-23": {
            "1. open": "64.4200",
            "2. high": "64.7300",
            "3. low": "64.1900",
            "4. close": "64.6200",
            "5. volume": "20273128"
        },
        "2017-02-22": {
            "1. open": "64.3300",
            "2. high": "64.3900",
            "3. low": "64.0500",
            "4. close": "64.3600",
            "5. volume": "19292651"
        }
    }

// multi-dimensional object

/*  Write functions to get the averages for the "open", "high", "low", and "close" 
values for all days. */

// This function only works for 1. open

function averageOpen() {
    // loop through each array at index 0 and add it to an empty array (open), 
    // then reduce sumOfOpen to get the sum
    // then divide it by the length of the array
    var sum = 0;
    var days = Object.keys(stocks); // this will give you an array of the days
    for (var i=0; i<days.length ; i++) {
        var currentDay = days[i]; // IMPORTANT
        var statsForAGivenDay = stocks[currentDay];

        var openValue = parseFloat(statsForAGivenDay["1. open"]); // make sure this is an integer and not a string
        sum = sum + openValue;
    }
    var average = sum / days.length;
    return average;
}
averageOpen();

// Note - can't use .length on an object, it has to be an array
// Objects don't have an order like an array does


/* This function below can be used for any value, notice the parameter,
    that way you don't have to create a separate function for each value 
    Turn everything that needs to be specific into a parameter
    */

var average(valueOfInterest) {
    var sum=;
    var days = Objects.keys(stocks);
    for (var i=0; i<days.length ; i++) {
        var currentDay = days[i];
        var statsForAGivenDay = stocks[currentDay];
        
        var value = parseFloat(statsForAGivenDay[valueOfInterest]);
        
        sum = sum + value;
    }
    var average = sum / days.length;
    return average;
}

average("1. open"); // we are passing in the string 1. open
average("2. high");


// or

var average(valueOfInterest) {
    var sum=;
    var days = Objects.keys(stocks);
    
    days.forEach(function(currentDay) {  // forEach is a function, a fancy for loop
        var statsForAGivenDay = stocks[currentDay];
        var value = parseFloat(statsForAGivenDay[valueOfInterest]);
        sum = sum + value;                        // we pass it a function and it creates the loop for us
    })

    var average = sum / days.length;
    return average;
}

average("1. open"); // we are passing in the string 1. open
average("2. high");








// Write a function to find the highest "high" for all days.
// Math.max()

function highestHigh() {
    var highest = Math.max(stocks[0]);
    return highest;
}

highestHigh();





// Write a function to find the lowest "low' for all days.
// Math.min()

function lowestLow() {
    var lowest = Math.min(stocks[0]);
    return lowest;
}

lowestLow();







/* Write a function that produces an array of objects. Each object should include 
the date, the open, and the close. */


function arrayOfObjects() {
    var days = Object.keys(stocks);
    var array = [];

    days.forEach(function(currentDay) {
        var statsForAGivenDay = stocks(currentDay);
        var currentDateOpenClose = {      // this will be an object
            date: currentDay,
            open: statsForAGivenDay["1. open"],
            close: statsForAGivenDay["4. close"]
        };  
 
        array.push(currentDateOpenClose);

    });

    return array;
}

console.log(arrayOfObjects());






/* 
var days = Object.keys(stocks); We are referring to the Object type, 
we're reaching into the keys property of Object
keys is a function - keys will spit out an array for every single object you pass in
days.forEach(function (day) {
  console.log(stocks[day]);
});

var dataz = days.map(function (day) {
  return stocks[day];
});  */







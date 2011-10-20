//
// date.utils.js
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.
//

function getDayOfTheWeek(date) {
    var weekDay = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    return weekDay[date.getDay()];
}

function getFullMonthName(date) {
    var monthName = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    return monthName[date.getMonth()];
}

function buildLongDateFormatString(element) {
    var dateElement = $(element).val().split("/");
    dateElement = new Date(dateElement[2],dateElement[0],dateElement[1]);
    return getDayOfTheWeek(dateElement) + " " + getFullMonthName(dateElement + 1) + " " + dateElement.getDate() + ", " + dateElement.getFullYear()
}

function buildShortDateFormatString(element) {
    var dateElement = $(element).val().split("/");
    dateElement = new Date(dateElement[2],dateElement[0],dateElement[1]);
    return dateElement.getMonth() + "/" + dateElement.getDate() + "/" + dateElement.getFullYear();
}

function formatDate() {
    dateVal = this.value;
    var retVal ="";

    var pattern1 = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/

    if (pattern1.test(dateVal)) {
        return;
    }

    if (dateVal.length == 4) {

        // 4404
        retVal = "0" + dateVal.substr(0,1) + "/0" + dateVal.substr(1,1) + "/" + "20" + dateVal.substr(2,2);
    }

    if (dateVal.length == 5) {
        // 04404
        if (parseInt(dateVal.substr(0,1)) == 0) {
            retVal = dateVal.substr(0,2) + "/0" + dateVal.substr(2,1) + "/" + "20" + dateVal.substr(3,2);
        }

        // 12404
        if (parseInt(dateVal.substr(0,1)) == 1) {
            retVal = dateVal.substr(0,2) + "/" + dateVal.substr(2,1) + "/" + "20" + dateVal.substr(3,2);
        }

        // 41204
        if (parseInt(dateVal.substr(0,1)) > 1) {
            retVal = "0" + dateVal.substr(0,1) + "/" + dateVal.substr(1,2) + "/20" + dateVal.substr(3,2);
        }
    }

    if (dateVal.length == 6) {

        // 040404 -or- 041204
        if (parseInt(dateVal.substr(0,1)) == 0) {
            retVal = dateVal.substr(0,2) + "/" + dateVal.substr(2,2) + "/" + "20" + dateVal.substr(4,2);
        }

        // 121204 -or- 120404
        if (parseInt(dateVal.substr(0,1)) == 1) {
            retVal = dateVal.substr(0,2) + "/" + dateVal.substr(2,2) + "/" + "20" + dateVal.substr(4,2);
        }

        // 442004
        if (parseInt(dateVal.substr(0,1)) > 1) {
            retVal = "0" + dateVal.substr(0,1) + "/0" + dateVal.substr(1,1) + "/" + dateVal.substr(2,4);
        }
    }

    if (dateVal.length == 7) {

        // 0442004
        if (parseInt(dateVal.substr(0,1)) == 0) {
            retVal = dateVal.substr(0,2) + "/0" + dateVal.substr(2,1) + "/" + dateVal.substr(3,4);
        }

        // 1242004
        if (parseInt(dateVal.substr(0,1)) == 1) {
            retVal = dateVal.substr(0,2) + "/0" + dateVal.substr(2,1) + "/" + dateVal.substr(4,2);
        }

        // 4042004
        if (parseInt(dateVal.substr(0,1)) > 1) {
            retVal = "0" + dateVal.substr(0,1) + "/" + dateVal.substr(1,2) + "/" + dateVal.substr(3,4);
        }
    }

    if (dateVal.length == 8) {

        // 12042004 -or- 12122004 -or- 04042004
        retVal = dateVal.substr(0,2) + "/" + dateVal.substr(2,2) + "/" + dateVal.substr(4,4);

    }

    this.value = retVal;
}

function formatTime(event) {
	var element = event.element();
	
	var sTime = element.value
	
	if (sTime.length == 3) {
		element.value = "0" + sTime.substring(0,1) + ":" + sTime.substring(1,2) + sTime.substring(2,3);
		
	}

	if (sTime.length == 4) {
		element.value = sTime.substring(0,1) + sTime.substring(1,2) + ":" + sTime.substring(2,3) + sTime.substring(3,4);
	}	
}



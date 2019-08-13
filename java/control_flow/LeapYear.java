package com.jm.coding_challenges.java.control_flow;
/*
Write a method isLeapYear with a parameter of type int named year.
The parameter needs to be greater than or equal to 1 and less than or equal to 9999.
If the parameter is not in that range return false.
Otherwise, if it is in the valid range, calculate if the year is a leap year and return true if it is a leap year, otherwise return false.
To determine whether a year is a leap year, follow these steps:
1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days). The method isLeapYear needs to return true.
5. The year is not a leap year (it has 365 days). The method isLeapYear needs to return false.
The following years are not leap years:
1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600
This is because they are evenly divisible by 100 but not by 400.
The following years are leap years:
1600, 1924, 2000, 2400
This is because they are evenly divisible by both 100 and 400.
*/
public class LeapYear {
    // Solution 1
    public static boolean isLeapYear(int year) {
        if(year >= 1 && year <= 9999) {
            if(year % 4 == 0) {
                if(year % 100 == 0) {
                    if(year % 400 == 0) {
                        return true;
                    }
                } else {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isLeapYear(2019)); // false
        System.out.println(isLeapYear(1924)); // true
    }

    // Solution 2
    public boolean isLeapYearSolution2(int year) {
        if(year >= 1 && year <= 9999) {
            if((year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                return true;
            }
        }
        return false;
    }
}

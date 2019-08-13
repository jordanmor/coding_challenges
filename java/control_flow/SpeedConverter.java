package com.jm.coding_challenges.java.control_flow;
/*
1.  Write a method called toMilesPerHour that has 1 parameter of type double with the name kilometersPerHour.
	This method needs to return the rounded value of the calculation of type long.

	If the parameter kilometersPerHour is less than 0, the method toMilesPerHour needs to return -1 to indicate an invalid value.

	Otherwise, if it is positive, calculate the value of miles per hour, round it and return it.
	For conversion and rounding, check the notes in the text below.

2.  Write another method called printConversion with 1 parameter of type double with the name kilometersPerHour.
	This method should not return anything (void) and it needs to calculate milesPerHour from the kilometersPerHour parameter.

	Then it needs to print a message in the format "XX km/h = YY mi/h".

	XX represents the original value kilometersPerHour.
	YY represents the rounded milesPerHour from the kilometersPerHour parameter.

	If the parameter kilometersPerHour is < 0 then print the text "Invalid Value".

	Use method Math.round to round the number of calculated miles per hour(double). The method round returns long.
*/
public class SpeedConverter {
    public static long toMilesPerHour(double kilometersPerHour) {
        if(kilometersPerHour < 0) {
            return -1;
        }
        return Math.round(kilometersPerHour / 1.609);
    }

    public static void printConversion(double kilometersPerHour) {
        if(kilometersPerHour < 0) {
            System.out.println("Invalid Value");
        } else {
            System.out.println(kilometersPerHour + " km/h = " + toMilesPerHour(kilometersPerHour) + " mi/h");
        }
    }

    public static void main(String[] args) {
        // toMilesPerHour(1.5); → should return value 1
        System.out.println(toMilesPerHour(1.5)); // 1
        // toMilesPerHour(10.25); → should return value 6
        System.out.println(toMilesPerHour(10.25)); // 6
        // printConversion(10.25); → should print the following text (into the console - System.out): 10.25 km/h = 6 mi/h
        printConversion(10.25); // 10.25 km/h = 6 mi/h
        // printConversion(75.114); → should print the following text (into the console - System.out): 75.114 km/h = 47 mi/h
        printConversion(75.114); // 75.114 km/h = 47 mi/h
    }
}

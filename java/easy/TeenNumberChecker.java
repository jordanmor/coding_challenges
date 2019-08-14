package com.jm.coding_challenges.java.easy;

/**
 * -- Challenge Instructions --
 *
 * We'll say that a number is "teen" if it is in the range 13 -19 (inclusive).
 * Write a method named hasTeen with 3 parameters of type int.
 * The method should return boolean and it needs to return true if one of the parameters
 * is in range 13(inclusive) - 19 (inclusive). Otherwise return false.
 *
 * Write another method named isTeen with 1 parameter of type int.
 * The method should return boolean and it needs to return true if the parameter
 * is in range 13(inclusive) - 19 (inclusive). Otherwise return false.
 *
 * Source: 	Tim Buchalka - "Java Programming Masterclass for Software Developers"
 */

public class TeenNumberChecker {

    public static boolean hasTeen(int numOne, int numTwo, int numThree) {
        return isTeen(numOne) || isTeen(numTwo) || isTeen(numThree);
    }
    public static boolean isTeen(int num) {
        return num >= 13 && num <= 19;
    }

    public static void main(String[] args) {
        // should return true since 19 is in range 13 - 19
        System.out.println(hasTeen(9, 99, 19));  // true
        // should return false since numbers 22, 23, 34 are not in range 1
        System.out.println(hasTeen(22, 23, 34)); // false
    }
}

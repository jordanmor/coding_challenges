package com.jm.coding_challenges.java.easy;

/**
 * -- Challenge Instructions --
 * Write a method areEqualByThreeDecimalPlaces with two parameters of type double.
 * The method should return boolean and it needs to return true if two double numbers
 * are the same up to three decimal places. Otherwise, return false.
 *
 * Source: Tim Buchalka - "Java Programming Masterclass for Software Developers"
 */

public class DecimalComparator {

    public static boolean areEqualByThreeDecimalPlaces(double numOne, double numTwo) {
        return (int) (numOne * 1000) == (int) (numTwo * 1000);
    }

    public static void main(String[] args) {
        System.out.println(areEqualByThreeDecimalPlaces(23.2346545, 23.2349999)); // true
        System.out.println(areEqualByThreeDecimalPlaces(10.123, 10.122)); // false
    }
}

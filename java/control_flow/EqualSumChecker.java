package com.jm.coding_challenges.java.control_flow;
/*
 Write a method hasEqualSum with 3 parameters of type int.
 The method should return boolean and it needs to return true if the sum
 of the first and second parameter is equal to the third parameter. Otherwise, return false.
 */
public class EqualSumChecker {

    public static boolean hasEqualSum(int numOne, int numTwo, int numThree) {
        if(numOne + numTwo == numThree) {
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(hasEqualSum(2, 2, 4)); // true
        System.out.println(hasEqualSum(3, 5, 7)); // false
    }
}

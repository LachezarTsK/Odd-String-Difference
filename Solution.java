
import java.util.Arrays;

public class Solution {

    private static final String ALL_DIFFERENCE_INTEGER_ARRAYS_THE_SAME = "";

    public String oddString(String[] words) {

        int[] first = createDifferenceIntegerArray(words[0]);
        int[] second = createDifferenceIntegerArray(words[1]);

        for (int i = 2; i < words.length; ++i) {
            int[] current = createDifferenceIntegerArray(words[i]);
            if (!Arrays.equals(first, current) && !Arrays.equals(second, current)) {
                return words[i];
            }
            if (!Arrays.equals(first, current)) {
                return words[0];
            }
            if (!Arrays.equals(second, current)) {
                return words[1];
            }
        }
        return ALL_DIFFERENCE_INTEGER_ARRAYS_THE_SAME;
    }

    private int[] createDifferenceIntegerArray(String word) {
        int[] differenceIntegerArray = new int[word.length() - 1];
        for (int i = 0; i < word.length() - 1; ++i) {
            differenceIntegerArray[i] = word.charAt(i + 1) - word.charAt(i);
        }
        return differenceIntegerArray;
    }
}

import java.util.LinkedList;
import java.util.List;

class LetterCombinations {

    public static void main(String[] args) {
        new LetterCombinations().generateLetterCombinations("23");
    }

    private LinkedList<String> generateLetterCombinations(String digits) {
        LinkedList<String> outputStringList = new LinkedList<>();
        String[] mapping = new String[]{"0", "1",  "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        if(digits.isEmpty()) {
            return outputStringList;
        }

        outputStringList.add("");

        for(int i = 0; i < digits.length(); i++) {
            int currentDigit = Character.getNumericValue(digits.charAt(i));
            System.out.println("i = " + i);
            while(outputStringList.peek().length() == i) {
                String currentString = outputStringList.remove();
                System.out.println("currentString = " + currentString);

                for(char currentChar : mapping[currentDigit].toCharArray()) {
                    System.out.println("currentString + currentChar = " +currentString + "+"+currentChar);
                    outputStringList.add(currentString + currentChar);
                }
            }
        }

        return outputStringList;


    }

}
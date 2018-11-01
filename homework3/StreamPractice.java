import java.util.TreeMap;
import java.util.regex.Pattern;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

public class StreamPractice {
    public static void main(String[] args) {
        var nonWord = Pattern.compile("[^\\p{L}']+");
        new BufferedReader(new InputStreamReader(System.in))
            .lines()
            .flatMap(line -> nonWord.splitAsStream(line.toLowerCase()))
            .filter(word -> !word.isEmpty())
            .collect(Collectors.groupingBy(w->w, TreeMap::new, Collectors.counting()))
            .forEach((word, count) -> System.out.printf("%s %d\n", word, count));
    }
}
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class SaveFile {
    public static void main(String[] args) {
        String filePath = "./app/backend/save_comments.txt";
        String message = "Hello world";

        try {
            File file = new File(filePath);
            FileWriter fileWriter = new FileWriter(file);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write(message);
            bufferedWriter.close();
            fileWriter.close();
            System.out.println("valid process");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

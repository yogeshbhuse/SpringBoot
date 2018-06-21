package com.yogesh.spring;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;

import java.io.File;
import java.io.FileOutputStream;

/**
 * @author bhuse_y  6/20/2018
 */
public class DocCreate {
    public static void createDocFile(String fileName) {

        try {
            File file = new File(fileName);
            FileOutputStream fos = new FileOutputStream(file.getAbsolutePath());
            XWPFDocument doc = new XWPFDocument();
            XWPFParagraph tempParagraph = doc.createParagraph();
            XWPFRun xwpfRun = tempParagraph.createRun();
            // Create Text to Write into created Document and set font size, font family
            xwpfRun.setText("This is a Document Creation");
            xwpfRun.setFontSize(12);
            xwpfRun.setFontFamily("Times New Roman");
            xwpfRun.setBold(true);
            xwpfRun.setItalic(true);
            xwpfRun.setTextPosition(20);
            doc.write(fos);
            fos.close();

            System.out.println(file.getAbsolutePath() + " created successfully!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        createDocFile("D:\\documentCreation.docx");
    }

}

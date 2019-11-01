## Specifications:
* **Spec1**: The program returns a range of numbers from 0 to the users inputted number
    * **Input**: "4"
    * **Output**: "0, 1, 2, 3, 4"
* **Spec2**: The program returns a range of numbers from 0 to the users inputted number with the following exceptions:
    * Number 1: replaced with "Beep!"
    * Number 2: replaced with "Boop!"
    * Numbers 3: replaced with "I'm sorry, Dave. I'm afraid I can't do that."
* **Spec3**: The program returns a range of numbers from 0 to the users inputted number with the following exceptions:
    * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
    * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
    * Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."
* **Spec4**: The program takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:
    * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
    * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
    * Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."
    
    These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,
    * The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
    * The number 21 should be replaced with "Boop".
    * The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
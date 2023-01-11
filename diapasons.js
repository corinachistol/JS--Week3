//RANGE -  NUMBERS

/*
    !(n>=0)  n<0
--------------------\
                    \     n>=0
                      -------------------------------->
                     |
    -----------------0--------------------10---------->
                                          /
    -------------------------------------/
               n< 10
                                          \------------>
                                            !(n< 10), n > 10


    1. Greater or equal to 0
      n >= 0
    2. lower than 10
      n < 10
    3. Between 0 and 10
      n >= 0 && n < 10
      n < 10 && n >= 0
    4. Not greater than 0
      n>=0

    5. HW: Not lower than 10
       !(n< 10), n > 10


*/

/*
                 n >=10 && n<=10           n >=20 && n<=30       
                  -----------              ----------- 
                 |          |             |          |
    ------------0----------10------------20---------30-------------->
                      n          &&            m


    6. between 0..10 or 20..30

              n >=10 && n<=10

          ...0 false  true
          0..10 true  true
          10... true  false



              n >=20 && n<=30

    7. n betwenn 0..10 and m between  20..30 
*/
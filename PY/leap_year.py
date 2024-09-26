def is_leap(year):
    leap = False
    
    # Write your logic here
    if year % 4 == 0:
        leap = True
        if year % 100 == 0:
            leap = False
            if year % 400 == 0:
                leap = True
   
    return leap

# OR

def is_leap(year):
    leap = False
    
    leap = (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)
    
    return leap
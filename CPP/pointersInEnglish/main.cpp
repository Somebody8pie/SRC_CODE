#include <iostream>



int main()
{
  int x = 4; // English: integer named x is set to 4
  int * pX = &x; // English: integer pointer named pX is set to the address of x
  int y = *pX; // English: integer named y is set to the thing pointed to by pX
  std::cout << y << '\n';
  return 0;
}

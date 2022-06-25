#include <raylib.h>

constexpr int winWidth = 900;
constexpr int winHeight = 600;

int main()
{
    InitWindow(winWidth,winHeight, "Window");
    
    while(!WindowShouldClose())
    {
        BeginDrawing();
        ClearBackground(BLACK);
        EndDrawing();
    }

    CloseWindow();
}
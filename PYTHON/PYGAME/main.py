import pygame

pygame.init()
screen = pygame.display.set_mode((1000,1000), flags=pygame.SCALED, vsync=1)

clock = pygame.time.Clock()
running = True

player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)
enemy_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2 + 100)

maze = [
    ['0','0','0','0','0'],
    ['1','1','1','1','1'],
    ['0','0','0','0','0']
]

while running:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    y=0
    for row in maze:
        x=0
        for tile in row:
            if  tile == 0:
                screen.blit()
            x += 1
        y += 1

    
    player_rect = pygame.Rect(player_pos.x,player_pos.y,60,60)
    enemy_rect = pygame.Rect(enemy_pos.x,enemy_pos.y,60,60)
    

    keys = pygame.key.get_pressed()
    if keys[pygame.K_a]:
        player_pos.x -= 10
    if keys[pygame.K_d]:
        player_pos.x += 10
    if keys[pygame.K_w]:
        player_pos.y -= 10
    if keys[pygame.K_s]:
        player_pos.y += 10
    
    


    screen.fill((250,250,250))
    pygame.draw.rect(screen, (250,0,0), enemy_rect)
    pygame.draw.rect(screen, (0,0,250), player_rect)
    
    if player_rect.colliderect(enemy_rect):
        running = False

    pygame.display.flip()
    clock.tick(60)
    
pygame.quit()

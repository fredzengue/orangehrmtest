Feature: Ajout d'un nouveau PIM

  Scenario: Ajout d'un nouveau avec toutes les informations correctes
    Given je navigue sur le lien "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    When je renseigne mon username "Admin"
    And je renseigne mon mot de passe "admin123"
    And je clique sur le bouton login
    Then jaccede sur dashboard
    When je clique sur le lien PIM
    And je clique sur le bouton Add
    Then jaccede à la page dajout dun nouvel employee
    When je renseigne le firstname "toto"
    And je renseigne le lastname "tata"
    And je clique sur le bouton save
    Then affichage dun toast de succes

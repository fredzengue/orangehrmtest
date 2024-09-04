Feature: recrutement d'un nouveau candidat

Scenario: ajouter un candidat
    Given aller sur le lien "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"
    When je renseigne "khaoula" dans le champs firstname dutilisateur
    And je saisi "khaoula" dans le champs middlname
    And je saisi "ELDI" dans le champs lastname
    And je choisi le job "Sales Representative"
    And je saisi "khaoual@gmail.com" dans le champs mail
    And je clique sur  le bouton add
    Then affichage le message denregistrament
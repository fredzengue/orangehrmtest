Feature: Login sur  le site de OrangeHRM

  @smock
  Scenario Outline: Login with correct credentials
   Given je navige sur la page OrangeHRM "<url>"
    When je rends un nom  d utilisateur "<username>"
    And le mot de passe correct "<password>"
    When je click sur le button submit
    Then je devrai voir  mon compte
    @env1
    Examples:
      | username | password  | url |
      | Admin    | admin123  | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login|

  
  Scenario Outline: Login with username correct and password not incorrect
   Given je navige sur la page OrangeHRM "<url>"
    When je rends un nom  d utilisateur "<username>"
    And le mot de passe correct "<password>"
    When je click sur le button submit
    Then display error message

    Examples:
      | username | password  | url |
      | Admin    | admin1232 |https://opensource-demo.orangehrmlive.com/web/index.php/auth/login|
 @sanity
  Scenario Outline: Login with username incorrect and password not correct
   Given je navige sur la page OrangeHRM "<url>"
    When je rends un nom  d utilisateur "<username>"
    And le mot de passe correct "<password>"
    When je click sur le button submit
    Then display error message

    Examples:
      | username | password |url |
      | Admine    | admin123  | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login|

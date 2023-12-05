# ARRS season 5

## Users
| Username | Password | Unlock time | Status |
|----------|----------|-------------|--------|
| [observer_unit_20](./Users/observer_unit_20.md) | 0fcf50356 | Start of the event | Solved |
| [human_resources_unit_001](./Users/human_resources_unit_001.md) | 5e065d5d04263346d7ea2cb28ca225a8 | some time before 18:20 GMT+1 | Solved |
| [human_resources_unit_400](./Users/human_resources_unit_400.md) | dc075e5a3d85be49b5035bbe7faebe89 | 18:30 GMT+1 | Solved |
| [observer_unit_12](./Users/observer_unit_12.md) | 2ab9929642539a8c6c7de73448861fb8 | 19:30 GMT+1 | Solved |
| [Supplymanager_unit092](./Users/Supplymanager_unit092.md) | VjFaV2IxVXdNVWhVYTJ4VlZrWndU | 15:00 GMT+1, 03.12. | Solved | 
| [officemanager_unit512](./Users/officemanager_unit512.md) | bHBXVW5OalZteHlXa1U1YW1FemF |  15:15 GMT+1, 03.12. | Solved |
| [jaintor_unit7783](./Users/jaintor_unit7783.md) | ERlZNbkJIVkZVeFdGVnRSbFZXT | 15:40 GMT+1, 03.12. | Solved |
| [directive_unit0019](./Users/directive_unit0019.md) | TFKUVZtMWpPVkJSUFQwPSAg | 15:49 GMT+1, 03.12. | Solved |


```mermaid
graph TD;
    start{{start of the event}} --> quest2-desc(["Down the Rabbit Hole - Part 2:
quest description"]);
    quest2-desc --> observer_unit_20;
    observer_unit_20 --name--> observer_unit_12;
    observer_unit_20 --name--> human_resources_unit_400;
    observer_unit_20 ----> human_resorces_unit_001;
    human_resorces_unit_001 --password--> human_resources_unit_400;
    human_resources_unit_400 --password--> observer_unit_12;
    observer_unit_12 --> quest2-sol(["Down the Rabbit Hole - Part 2:
quest solution"]);

    quest3(["Down the Rabbit Hole - Part 3: 
quest reward text"]) --> irl{{IRL coordinates with notes}};
    irl --> Supplymanager_unit092;
    Supplymanager_unit092 ----> officemanager_unit512;
    Supplymanager_unit092 --password--> jaintor_unit7783;
    Supplymanager_unit092 --password--> directive_unit0019;
    officemanager_unit512 --name--> jaintor_unit7783;
    jaintor_unit7783 --name--> directive_unit0019;
    directive_unit0019 --> quest4(["Down the Rabbit Hole - Part 4:
quest start"]);

    email(["Email Mr. Kermen"]) --> irl2{{IRL coordinates where to stash documents}};
    irl2 --> irl3{{IRL coordinates of a stashed phone?}}
```

## Possible users without passwords
-
  
## Possible passwords without known username
-


# Deutsch 
- https://kulturbanause.de/blog/css-container-queries-mit-container/


# MQ vs. CQ
- The  difference between media queries and container queries is that 
  - media queries are based on the size of the device viewport 
  - whereas container queries are based on the size of the containing element.

# container queries
- CQ basieren an Größe des enthaltendes 'Container' Elements
- enthaltendes 'Container' Element ist Element der umschliesst andere Unter-Elemente 
  welsche durch seine 'container queries' erfasst werden:
  - direkte Kinder-Elemente
  - Kinder der Kinder-Elemente
- Style der Kinder-Elemente wird durch ihr enthaltendes 'Container' Element festgelegt

# conditional logic der container queries
- basiert an größe der enthaltenden 'Container' Element
- wenn enthaltende 'Container' Element bestimmt Größe bzw. Breite erreicht 
  dann wird Style seiner Unter-Element automatisch entsprächend 
  der Style der enthaltenden 'Container' Element angepasst
- Komponente besitzt eigene 'Breakpoints' 
  die auf verfügbaren Raum im Elternelement 'Container'  reagiert
- Komponente reagiert dann, 
  wenn der Container eine bestimme Breite über- oder unterschreitet

# CSS-Eigenschaft 'contain' bzw. 'CSS Containment' 
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment
- Mit der CSS-Eigenschaft 'contain' wird dem Browser mitgeteilt, 
  in wiefern eine Komponente unabhängig vom Rest der Website ist.
- Die CSS-Eigenschaft „contain“ ermöglicht es einem Autor anzugeben, 
  dass ein Element und sein Inhalt so weit wie möglich unabhängig vom Rest des Dokumentbaums sind.  
- Werte der 'contain'
  - https://developer.mozilla.org/en-US/docs/Web/CSS/contain
  - layout
  - style
  - inline-size
- Schlussfolgerung
  - gab es schon bevor 'container queries'
  - Diente um Überlagerung und Beeinträchtigung zwischen Elementen zu regeln  
  - Jetzt wird zusätzlich für 'container queries' genutzt

# contain: inline-size
- Mit inline-size wird dem Browser mitgeteilt, dass die Komponente sich 
  auf der Inline-Achse in der Größe verändern kann – also in der Breite.
  - HORIZONTAL

# contain: block-size 
- beschränkt den Containment-Context auf die Block-Achse.  

# contain: style
- Gibt an, dass bei Eigenschaften, die Auswirkungen auf mehr als nur ein Element und 
  seine Nachkommen haben können, diese Effekte dem enthaltenden Element nicht entgehen

# contain: layout
- Gibt an, dass nichts außerhalb des Elements sein internes Layout beeinflussen darf 
  und umgekehrt.

# 'container-type' and 'container-name'
-  'container-type' and 'container-name' properties can be combined by using 'container' 

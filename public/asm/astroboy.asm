;
; ~~ASTROBOY~~
;     by kpunno
;
; avoid colliding with the asteroids
;
; controls: 
;	    UP: 'w'
; 	    DOWN: 's'
;

define	SCINIT	$ff81 ; init char screen
define	CHRIN	$ffcf ; char in
define	CHROUT	$ffd2 ; char out

define	PLYRHI	$11	; player high byte
define	PLYRLO	$10	; player low byte

define	NMYCNT	$20	; enemy count
define	NMYMAX	$21	; maximum enemies
define	NMYOFF	$22	; enemy offset from original pos

define 	NMY1LO	$31	; see above
define 	NMY1HI	$32

define 	NMY2LO	$33	; see above
define	NMY2HI	$34

define 	NMY3LO	$35	; see above
define	NMY3HI	$36

define 	NMY4LO	$37	; see above
define	NMY4HI	$38

define	PRNLO	$03	; low byte of print pointer
define	PRNHI	$04	; high byte of print pointer

LDA #02		; set page enemy one
STA NMY1HI
LDA #03		; set page enemy two
STA NMY2HI
LDA #04		; set page enemy three
STA NMY3HI
LDA #05		; set page enemy four
STA NMY4HI

INIT:
	LDA #02		; initialize player position (high byte)
	STA PLYRHI

	LDA #01		; initialize enemy max (one for each page)
	STA NMYMAX
	
	LDA #00
	STA PLYRLO	; init player low byte (16bit addr: $0200)
	STA NMYCNT	; enemy count currently 0
	STA NMYOFF	; enemy offset currently 0

	LDY PLYRLO	; colour in the player position
	LDA #3
	STA (PLYRLO),Y

;;------------------------------------------------------------
	;; subroutine provided by Chris Tyler

	JSR PRINT
	DCB "P","R","E","S","S",32,"s",32,"T","O",32,"S","T","A","R","T",0
;;------------------------------------------------------------

AWAITSTART:		; simply await 's' key to begin game
	JSR CHRIN
	CMP #$73
	BNE AWAITSTART

JSR SCINIT

INPUT:
	JSR CHRIN	; get char
	CMP #$73	; compare with 's'
	BEQ MOVEDOWN	; if equal, branch to LEFT move
	CMP #$77	; compare with 'w'
	BEQ MOVEUP	; if equal, branch to RIGHT move
	JMP LDENEMY

;; player movement

MOVEUP:
	LDY #0		; load y with 0
	LDA #0		; load a with black
	STA (PLYRLO),Y	; fill previous location

	LDA PLYRLO	; get player location
	CMP #0		; if player low byte is 0
	BEQ DECPAGE	; decrement the page

	SEC		; otherwise, set carry flag
	SBC #32		; subtract 32
	STA PLYRLO	; store new value in player low byte
	LDA #3		; load player colour
	STA (PLYRLO),Y	; store player colour at new location
	JMP INPUT

	DECPAGE:
		LDA PLYRHI
		CMP #2
		BEQ FIRSTADDR

		DEC PLYRHI
		LDA #$E0
		STA PLYRLO
		LDA #3
		STA (PLYRLO),Y
		JMP INPUT

	FIRSTADDR:
		LDA #3
		STA $0200
		JMP INPUT

MOVEDOWN:

	LDY #0		; load y with 0
	LDA #0		; load a with black
	STA (PLYRLO),Y	; fill previous location

	LDA PLYRLO	; get player address
	CLC		; clear carry
	ADC #32		; add 32 (move down)
	BCS INCPAGE	; if overflow occurs, BRANCH -> INCPAGE

	STA PLYRLO	; otherwise, new low byte goes into PLYRLO
	LDA #3		; load a with player colour
	STA (PLYRLO),Y	; store at new location
	JMP INPUT	; JUMP -> INPUT

	INCPAGE:		; overflow occurs
		LDA PLYRHI	; get high byte
		CMP #5		; if it is last page,
		BEQ LASTADDR	; BRANCH -> LASTADDR

		LDA #0		; otherwise, get black
		STA PLYRLO	; store at player location
		LDA #3		; get new colour
		INC PLYRHI	; increment high byte
		STA (PLYRLO),Y	; store new colour at new location
		JMP INPUT	; JUMP -> INPUT

	LASTADDR:
		LDA #3		; get player colour
		STA $05E0	; last address is constant, set here
		JMP INPUT	; JUMP -> INPUT



;; load enemies

LDENEMY:
	LDA NMYCNT	; load enemies
	CMP NMYMAX	; if equal to max enemies
	BCS MVENEMY	; branch -> MVENEMY

	INC NMYCNT	; prevent recurrence of loading enemies
			; until they reach end of their lifetime

	LDA $FE		; get random byte
	AND #07		; mask to get number: 0..7
	ASL		; shift until we get a multiple of
	ASL		; 32. The point being that the enemy
	ASL		; will always start at the end of the "line",
	ASL		; or right-side of the screen.
	ASL
	SEC
	SBC #1		; multiple of "32", so subtract one. 
			; (EOL is 31)

	STA NMY1LO	; set low byte as our
			; newfound pseudo-random byte.
	LDA $FE		; repeat this process for each enemy...
	AND #03
	ASL
	ASL
	ASL
	ASL
	ASL
	SEC
	SBC #1
	STA NMY2LO

	LDA $FE		; see above
	AND #03
	ASL
	ASL
	ASL
	ASL
	ASL
	SEC
	SBC #1
	STA NMY3LO

	LDA $FE		; see above
	AND #03
	ASL
	ASL
	ASL
	ASL
	ASL
	SEC
	SBC #1
	STA NMY4LO

	LDA #01		; set each enemy with the colour white
	STA (NMY1LO),Y
	STA (NMY2LO),Y
	STA (NMY3LO),Y
	STA (NMY4LO),Y

	JMP INPUT	; JUMP -> INPUT

MVENEMY:
	JSR SLOWDOWN	; slow down execution by:
			; executing subroutine, return when complete
	LDY #0
	LDA #0

	STA (NMY1LO),Y	; clear current enemy positions
	STA (NMY2LO),Y	; (make black)
	STA (NMY3LO),Y
	STA (NMY4LO),Y

	DEC NMY1LO	; decrement enemy positions
	DEC NMY2LO	; (move closer)
	DEC NMY3LO
	DEC NMY4LO

	LDA #1		; get enemy colour

	STA (NMY1LO),Y	; colour the new positions
	STA (NMY2LO),Y
	STA (NMY3LO),Y
	STA (NMY4LO),Y

	LDA (PLYRLO),Y	; get player position
	CMP #1		; if colour has changed (collision)
	BEQ GAMEOVER	; JUMP -> GAME OVER
	CMP #0		; if colour has changed (collision)
	BEQ GAMEOVER	; JUMP -> GAME OVER

	INC NMYOFF
	LDA NMYOFF
	CMP #$1f
	BEQ RELOADENEMIES
	
	JMP INPUT

RELOADENEMIES:		; enemies have reached end of their lifetime
	LDA #0
	STA (NMY1LO),Y	; erase them (make black)
	STA (NMY2LO),Y
	STA (NMY3LO),Y
	STA (NMY4LO),Y

	DEC NMYCNT	; indicate that enemies are gone.
	STA NMYOFF	; offset is reset to 0, they will be
			; repositioned.
	JMP INPUT	; JUMP -> INPUT

SLOWDOWN:	; game was basically unplayable at normal speed,
		; slow execution with no operations in a loop
	LDY #0
	NOP	; bunch of no operations
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	NOP
	INY	
	BEQ SLOWDOWN	; loop until overflow occurs
	RTS		; return


GAMEOVER:		; end of game
	LDA #10
	STA (PLYRLO),Y	; display a "splatter" of sorts
	LDY #1		; around the annihilated character
	STA (PLYRLO),Y
	LDY #32
	STA (PLYRLO),Y

;;------------------------------------------------------------

	;; subroutine PRINT provided by Chris Tyler
	JSR PRINT
	DCB "O","U","C","H","!",13
	DCB "Y","O","U",32,"C","O","L","L","I","D","E","D","!",0
;;------------------------------------------------------------


;;------------------------------------------------------------

	;; subroutine PRINT provided by Chris Tyler
PRINT:
	PLA
	CLC		
	ADC #$01	
	STA PRNLO	
	PLA		
	STA PRNHI	

	TYA
	PHA
	LDY #$00

PRINT_NEXT:
	LDA (PRNLO),Y
	BEQ PRINT_DONE
	JSR CHROUT
	INY
	JMP PRINT_NEXT
PRINT_DONE:
	TYA
	CLC
	ADC PRNLO
	STA PRNLO

	LDA PRNHI
	ADC #$00
	STA PRNHI

	PLA
	TAY

	LDA PRNHI
	PHA

	LDA PRNLO
	PHA

	RTS
;;------------------------------------------------------------

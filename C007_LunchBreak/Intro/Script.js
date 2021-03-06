// Chapter 7 - Lunch Break Load
function C007_LunchBreak_Intro_Load() {

	// Time is always 11:45 on the intro, no timer
	StopTimer(11.75 * 60 * 60 * 1000);
	LoadText();
	
}

// Chapter 7 - Lunch Break Run
function C007_LunchBreak_Intro_Run() {
	
	// Paints the background
	var ctx = document.getElementById("MainCanvas").getContext("2d");
	DrawImage(ctx, CurrentChapter + "/" + CurrentScreen + "/Background.jpg", 0, 0);

	// Write the chapter introduction
	DrawText(ctx, GetText("Intro1"), 600, 150, "White");
	if (TextPhase >= 1) DrawText(ctx, GetText("Intro2"), 600, 250, "White");
	if (TextPhase >= 2) DrawText(ctx, GetText("Intro3"), 600, 350, "White");
	if (TextPhase >= 3) DrawText(ctx, GetText("Intro4"), 600, 450, "White");

}

// Chapter 7 - Lunch Break Click
function C007_LunchBreak_Intro_Click() {
	TextPhase++;
	if (TextPhase >= 4) SetScene(CurrentChapter, "ActorSelect");
}
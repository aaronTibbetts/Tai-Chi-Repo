
// A raw string containing the CSV data for gesture and error descriptions.
const gestureErrorCsv = `gesture_id,gesture_name,error_code,error_desc
G01,Beginning position (Wuji),E00,No Error
G01,Beginning position (Wuji),E01,Feet too close together
G01,Beginning position (Wuji),E02,Feet too far apart
G01,Beginning position (Wuji),E03,Feet not parallel
G01,Beginning position (Wuji),E04,Knees locked or too straight
G01,Beginning position (Wuji),E05,Knees collapsing inward
G01,Beginning position (Wuji),E06,Weight uneven between feet
G01,Beginning position (Wuji),E07,Spine leaning forward or backward
G01,Beginning position (Wuji),E08,Shoulders lifted or tense
G01,Beginning position (Wuji),E09,Arms too stiff or held too high
G02,Tree posture (Taiji),E00,No Error
G02,Tree posture (Taiji),E01,Knees collapsing inward
G02,Tree posture (Taiji),E02,Shoulders lifted or tense
G02,Tree posture (Taiji),E03,Back not straight
G02,Tree posture (Taiji),E04,Arms too stiff
G02,Tree posture (Taiji),E05,Elbows too high or too low
G02,Tree posture (Taiji),E06,Hands too close to chest
G02,Tree posture (Taiji),E07,Weight not centered evenly
G02,Tree posture (Taiji),E08,Head leaning forward
G02,Tree posture (Taiji),E09,Hips not relaxed
G03,Open and close lotus flower,E00,No Error
G03,Open and close lotus flower,E01,Arms move unevenly
G03,Open and close lotus flower,E02,Hands not centered with chest
G03,Open and close lotus flower,E03,Elbows flare outward
G03,Open and close lotus flower,E04,Shoulders raised
G03,Open and close lotus flower,E05,Timing between opening and closing inconsistent
G03,Open and close lotus flower,E06,Chest too tense or collapsed
G03,Open and close lotus flower,E07,Movement too fast or jerky
G03,Open and close lotus flower,E08,Hands too high or too low
G03,Open and close lotus flower,E09,Weight shifting not coordinated
G04,Bring sky and earth together,E00,No Error
G04,Bring sky and earth together,E01,Arms not extending fully upward
G04,Bring sky and earth together,E02,Shoulders lifted during arm raise
G04,Bring sky and earth together,E03,Back arching instead of remaining straight
G04,Bring sky and earth together,E04,Hips not stable during motion
G04,Bring sky and earth together,E05,Hands misaligned with body centerline
G04,Bring sky and earth together,E06,Knees locked during transition
G04,Bring sky and earth together,E07,Movement lacks smooth vertical flow
G04,Bring sky and earth together,E08,Neck strained while looking up
G04,Bring sky and earth together,E09,Timing between hands and breath inconsistent
G05,Canalize energy,E00,No Error
G05,Canalize energy,E01,Arms move too quickly
G05,Canalize energy,E02,Shoulders or elbows tense
G05,Canalize energy,E03,Hands not following circular path
G05,Canalize energy,E04,Weight not evenly distributed
G05,Canalize energy,E05,Chest collapsed or stiff
G05,Canalize energy,E06,Hips not sinking naturally
G05,Canalize energy,E07,Spine leaning forward
G05,Canalize energy,E08,Breath and motion not synchronized
G05,Canalize energy,E09,Wrists too rigid
G06,Drive the monkey away,E00,No Error
G06,Drive the monkey away,E01,Arms crossing too close to body
G06,Drive the monkey away,E02,Front knee collapsing inward
G06,Drive the monkey away,E03,Back heel lifted too early
G06,Drive the monkey away,E04,Shoulders tensed during push
G06,Drive the monkey away,E05,Weight not shifting smoothly
G06,Drive the monkey away,E06,Head not aligned with torso
G06,Drive the monkey away,E07,Elbows locked
G06,Drive the monkey away,E08,Hands positioned too high
G06,Drive the monkey away,E09,Movement too abrupt
G07,Move hands like clouds,E00,No Error
G07,Move hands like clouds,E01,Arms not maintaining circular flow
G07,Move hands like clouds,E02,Upper body rotating too much or too little
G07,Move hands like clouds,E03,Shoulders lifted
G07,Move hands like clouds,E04,Hands out of sync during motion
G07,Move hands like clouds,E05,Feet not stepping parallel
G07,Move hands like clouds,E06,Weight shifting unevenly
G07,Move hands like clouds,E07,Hips not turning with torso
G07,Move hands like clouds,E08,Elbows flaring outward
G07,Move hands like clouds,E09,Movement rushed or uneven
G08,Part the wild horse’s mane,E00,No Error
G08,Part the wild horse’s mane,E01,Front knee extending beyond toes
G08,Part the wild horse’s mane,E02,Hands not aligned diagonally
G08,Part the wild horse’s mane,E03,Shoulders lifted
G08,Part the wild horse’s mane,E04,Back foot angle too wide
G08,Part the wild horse’s mane,E05,Arms not coordinated with step
G08,Part the wild horse’s mane,E06,Elbows locked or too high
G08,Part the wild horse’s mane,E07,Weight not centered
G08,Part the wild horse’s mane,E08,Head leaning forward
G08,Part the wild horse’s mane,E09,Hips not relaxed
G09,Golden rooster stands on one leg,E00,No Error
G09,Golden rooster stands on one leg,E01,Hips not level
G09,Golden rooster stands on one leg,E02,Standing knee locked
G09,Golden rooster stands on one leg,E03,Spine leaning forward or backward
G09,Golden rooster stands on one leg,E04,Arms unbalanced
G09,Golden rooster stands on one leg,E05,Elbows raised too high
G09,Golden rooster stands on one leg,E06,Shoulders tense
G09,Golden rooster stands on one leg,E07,Foot lifted too low or too high
G09,Golden rooster stands on one leg,E08,Head tilted
G09,Golden rooster stands on one leg,E09,Weight shifting during balance
G10,Fair lady works shuttles,E00,No Error
G10,Fair lady works shuttles,E01,Arms not coordinated diagonally
G10,Fair lady works shuttles,E02,Front knee collapsing inward
G10,Fair lady works shuttles,E03,Shoulders raised
G10,Fair lady works shuttles,E04,Weight not transferred smoothly
G10,Fair lady works shuttles,E05,Hands misaligned with centerline
G10,Fair lady works shuttles,E06,Back foot pointing outward
G10,Fair lady works shuttles,E07,Torso rotation incomplete
G10,Fair lady works shuttles,E08,Elbows too straight
G10,Fair lady works shuttles,E09,Movement too stiff
G11,Kick with heel,E00,No Error
G11,Kick with heel,E01,Supporting leg not stable
G11,Kick with heel,E02,Hips tilted
G11,Kick with heel,E03,Upper body leaning backward
G11,Kick with heel,E04,Arms not balanced
G11,Kick with heel,E05,Kick too high or uncontrolled
G11,Kick with heel,E06,Knee locked on supporting leg
G11,Kick with heel,E07,Shoulders tense
G11,Kick with heel,E08,Timing between arms and kick off
G11,Kick with heel,E09,Weight shifting prematurely
`;

// Define a type for a single row in our parsed data
export type GestureError = {
  gesture_id: string;
  gesture_name: string;
  error_code: string;
  error_desc: string;
};

// Parse the CSV data into an array of objects
function parseGestureErrors(csv: string): GestureError[] {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
      (obj as any)[header] = values[index];
      return obj;
    }, {} as GestureError);
  });
}

// Store the parsed data
const gestureErrorData = parseGestureErrors(gestureErrorCsv);

// Define the type for the detailed feedback we will construct
export type FeedbackDetails = {
  gestureName: string;
  errorDescriptions: string[];
};

/**
 * Takes the raw feedback from the analysis API and translates the gesture
 * and error codes into human-readable descriptions using the CSV data.
 * @param poseName The gesture ID from the API (e.g., "G01").
 * @param speechText The speech text which may contain error codes (e.g., "error 1, error 5").
 * @returns An object containing the full gesture name and a list of error descriptions.
 */
export function getFeedbackDetails(poseName: string, speechText: string): FeedbackDetails {
  const gestureId = poseName;

  // Find the first matching gesture to get the official name
  const gesture = gestureErrorData.find(g => g.gesture_id === gestureId);
  const gestureName = gesture ? gesture.gesture_name : 'Unknown Gesture';

  // Extract error numbers from the speech text. This regex finds all numbers that follow "error" or "errors".
  const errorNumbers = (speechText.match(/errors? (\d+(?:, \d+)*)/g) || [])
    .flatMap(match => match.replace(/errors? /g, '').split(',').map(n => parseInt(n.trim())));
  
  const errorDescriptions: string[] = [];

  if (errorNumbers.length > 0) {
    errorNumbers.forEach(num => {
      // Format the error number into an error code (e.g., 7 -> "E07")
      const errorCode = `E${num.toString().padStart(2, '0')}`;
      
      // Find the matching error description for the specific gesture and error code
      const error = gestureErrorData.find(
        g => g.gesture_id === gestureId && g.error_code === errorCode
      );
      
      if (error && error.error_desc !== 'No Error') {
        errorDescriptions.push(error.error_desc);
      }
    });
  }
  
  // If no specific errors were found and the API did not report "Great form",
  // we can provide a generic encouragement as a fallback.
  // If the form was good, this array will correctly be empty.
  if (errorDescriptions.length === 0 && !speechText.toLowerCase().includes('great form') && speechText.toLowerCase().includes('error')) {
     errorDescriptions.push("Maintain focus and continue with smooth, deliberate movements.");
  }


  return { gestureName, errorDescriptions };
}


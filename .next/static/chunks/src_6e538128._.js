(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/pose-estimation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "drawLandmarks": (()=>drawLandmarks),
    "initPoseLandmarker": (()=>initPoseLandmarker),
    "processVideo": (()=>processVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript)");
;
let poseLandmarker = undefined;
let drawingUtils = undefined;
async function initPoseLandmarker() {
    if (poseLandmarker) {
        console.log('Pose Landmarker already initialized.');
        return poseLandmarker;
    }
    try {
        const vision = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilesetResolver"].forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');
        poseLandmarker = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoseLandmarker"].createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',
                delegate: 'GPU'
            },
            runningMode: 'VIDEO',
            numPoses: 1,
            minPoseDetectionConfidence: 0.5,
            minPosePresenceConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        console.log('Pose Landmarker initialized successfully.');
        return poseLandmarker;
    } catch (error) {
        console.error('Error initializing PoseLandmarker:', error);
        throw error;
    }
}
function processVideo(video, landmarker, callback, lastVideoTimeRef) {
    if (video.currentTime !== lastVideoTimeRef.current && video.videoWidth > 0 && video.videoHeight > 0) {
        const startTimeMs = performance.now();
        const result = landmarker.detectForVideo(video, startTimeMs);
        lastVideoTimeRef.current = video.currentTime;
        callback(result, startTimeMs);
    }
}
function drawLandmarks(canvas, landmarks) {
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;
    if (!drawingUtils) {
        drawingUtils = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawingUtils"](canvasCtx);
    }
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    for (const landmark of landmarks){
        drawingUtils.drawLandmarks(landmark, {
            radius: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawingUtils"].lerp(data.from.z, -0.15, 0.1, 5, 1),
            color: 'hsl(var(--primary))',
            fillColor: 'hsl(var(--background))'
        });
        drawingUtils.drawConnectors(landmark, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoseLandmarker"].POSE_CONNECTIONS, {
            color: 'hsl(var(--primary))'
        });
    }
    canvasCtx.restore();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:ee6ac6 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"408571dc9829e2ff0d8cb683d7a241db5c0dd90006":"getPoseAnalysisFromCsv"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "getPoseAnalysisFromCsv": (()=>getPoseAnalysisFromCsv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPoseAnalysisFromCsv = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("408571dc9829e2ff0d8cb683d7a241db5c0dd90006", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPoseAnalysisFromCsv"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB0eXBlIHsgRmVlZGJhY2tEZXRhaWxzIH0gZnJvbSAnQC9saWIvZ2VzdHVyZS1lcnJvcnMnO1xuXG5jb25zdCBCQUNLRU5EX0JBU0VfVVJMID1cbiAgcHJvY2Vzcy5lbnYuRkxBU0tfQVBJX0JBU0VfVVJMPy50cmltKCkgfHwgJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMSc7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVF9NUyA9IDYwXzAwMDtcbmNvbnN0IEFOQUxZU0lTX1RJTUVPVVRfTVMgPSAxMjBfMDAwO1xuXG50eXBlIEJhY2tlbmRFcnJvclBheWxvYWQgPSB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICBkZXRhaWxzPzogdW5rbm93bjtcbn07XG5cbnR5cGUgQmFja2VuZEZlZWRiYWNrUmVzcG9uc2UgPSB7XG4gIGZlZWRiYWNrczogRmVlZGJhY2tbXTtcbn07XG5cbnR5cGUgQmFja2VuZEZlZWRiYWNrRGV0YWlsc1Jlc3BvbnNlID0ge1xuICBnZXN0dXJlTmFtZTogc3RyaW5nO1xuICBlcnJvckRlc2NyaXB0aW9uczogc3RyaW5nW107XG59O1xuXG50eXBlIEJhY2tlbmRQZXJzb25hbGl6ZWRSZXNwb25zZSA9IHtcbiAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XG4gIHRyYW5zbGF0aW9uRGV0YWlsczoge1xuICAgIGdlc3R1cmVOYW1lOiBzdHJpbmc7XG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICB9O1xufTtcblxudHlwZSBCYWNrZW5kU3VtbWFyeVJlc3BvbnNlID0gU3VtbWFyaXplRmVlZGJhY2tPdXRwdXQ7XG50eXBlIEJhY2tlbmRJbWFnZVJlc3BvbnNlID0gR2VuZXJhdGVJbWFnZU91dHB1dDtcbnR5cGUgQmFja2VuZFBpbmdSZXNwb25zZSA9IHsgbWVzc2FnZTogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFBlcnNvbmFsaXplZFRhaUNoaUZlZWRiYWNrT3V0cHV0ID0ge1xuICBzcGVlY2g6IHN0cmluZztcbiAgZXhwbGFuYXRpb246IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFN1bW1hcml6ZUZlZWRiYWNrT3V0cHV0ID0ge1xuICBzdW1tYXJ5U3BlZWNoOiBzdHJpbmc7XG4gIHN1bW1hcnlUZXh0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBHZW5lcmF0ZUltYWdlT3V0cHV0ID0ge1xuICBpbWFnZVVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQWlGZWVkYmFja1Jlc3VsdCA9XG4gIHwge1xuICAgICAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XG4gICAgICB0cmFuc2xhdGlvbkRldGFpbHM6IHtcbiAgICAgICAgZ2VzdHVyZU5hbWU6IHN0cmluZztcbiAgICAgICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgICB9XG4gIHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIEZlZWRiYWNrID0ge1xuICBwb3NlTmFtZTogc3RyaW5nO1xuICBzcGVlY2hUZXh0OiBzdHJpbmc7XG4gIGV4cGxhbmF0aW9uOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBbmFseXNpc1Jlc3VsdCA9IHsgZmVlZGJhY2tzOiBGZWVkYmFja1tdIH0gfCB7IGVycm9yOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIEdlbmVyYXRlSW1hZ2VSZXN1bHQgPSBHZW5lcmF0ZUltYWdlT3V0cHV0IHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmZ1bmN0aW9uIGJ1aWxkQmFja2VuZFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBiYXNlID0gQkFDS0VORF9CQVNFX1VSTC5lbmRzV2l0aCgnLycpXG4gICAgPyBCQUNLRU5EX0JBU0VfVVJMLnNsaWNlKDAsIC0xKVxuICAgIDogQkFDS0VORF9CQVNFX1VSTDtcbiAgY29uc3Qgc3VmZml4ID0gcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoIDogYC8ke3BhdGh9YDtcbiAgcmV0dXJuIGAke2Jhc2V9JHtzdWZmaXh9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0QmFja2VuZEVycm9yKHN0YXR1czogbnVtYmVyLCBwYXlsb2FkOiBCYWNrZW5kRXJyb3JQYXlsb2FkKTogc3RyaW5nIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gcGF5bG9hZC5lcnJvcj8udHJpbSgpIHx8IGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3N0YXR1c30uYDtcbiAgY29uc3QgZGV0YWlscyA9XG4gICAgdHlwZW9mIHBheWxvYWQuZGV0YWlscyA9PT0gJ3N0cmluZydcbiAgICAgID8gcGF5bG9hZC5kZXRhaWxzLnRyaW0oKVxuICAgICAgOiBwYXlsb2FkLmRldGFpbHNcbiAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwYXlsb2FkLmRldGFpbHMpXG4gICAgICAgIDogJyc7XG4gIHJldHVybiBkZXRhaWxzID8gYCR7ZXJyb3JNZXNzYWdlfSBEZXRhaWxzOiAke2RldGFpbHN9YCA6IGVycm9yTWVzc2FnZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbEJhY2tlbmQ8VD4oXG4gIHBhdGg6IHN0cmluZyxcbiAgaW5pdDogUmVxdWVzdEluaXQsXG4gIHRpbWVvdXRNcyA9IERFRkFVTFRfVElNRU9VVF9NU1xuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIHRpbWVvdXRNcyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJ1aWxkQmFja2VuZFVybChwYXRoKSwge1xuICAgICAgLi4uaW5pdCxcbiAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgbGV0IHBheWxvYWQ6IGFueSA9IHt9O1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBwYXlsb2FkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEJhY2tlbmRFcnJvcihyZXNwb25zZS5zdGF0dXMsIHBheWxvYWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF5bG9hZCBhcyBUO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0IHRpbWVkIG91dCBhZnRlciAke01hdGgucm91bmQodGltZW91dE1zIC8gMTAwMCl9IHNlY29uZHMuYCk7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9IGZpbmFsbHkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2VBbmFseXNpc0Zyb21Dc3YoY3N2RGF0YTogc3RyaW5nKTogUHJvbWlzZTxBbmFseXNpc1Jlc3VsdD4ge1xuICB0cnkge1xuICAgIGlmICghY3N2RGF0YSkge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdDU1YgZGF0YSBpcyBlbXB0eS4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsbEJhY2tlbmQ8QmFja2VuZEZlZWRiYWNrUmVzcG9uc2U+KFxuICAgICAgJy9hcGkvdjEvYW5hbHlzaXMvcHJlZGljdC1jc3YnLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY3N2RGF0YSB9KSxcbiAgICAgIH0sXG4gICAgICBBTkFMWVNJU19USU1FT1VUX01TXG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQuZmVlZGJhY2tzKSkge1xuICAgICAgcmV0dXJuIHsgZmVlZGJhY2tzOiByZXN1bHQuZmVlZGJhY2tzIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdBbmFseXNpcyBzdWNjZXNzZnVsLCBidXQgZmVlZGJhY2sgZGF0YSBpcyBtaXNzaW5nIGZyb20gdGhlIHJlc3BvbnNlLicgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHBvc2UgYW5hbHlzaXM6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgYW5hbHlzaXMuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVlZGJhY2tEZXRhaWxzQWN0aW9uKFxuICBwb3NlTmFtZTogc3RyaW5nLFxuICBzcGVlY2hUZXh0OiBzdHJpbmdcbik6IFByb21pc2U8RmVlZGJhY2tEZXRhaWxzPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbGxCYWNrZW5kPEJhY2tlbmRGZWVkYmFja0RldGFpbHNSZXNwb25zZT4oXG4gICAgJy9hcGkvdjEvZmVlZGJhY2svZGV0YWlscycsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcG9zZU5hbWUsIHNwZWVjaFRleHQgfSksXG4gICAgfVxuICApO1xuICByZXR1cm4ge1xuICAgIGdlc3R1cmVOYW1lOiByZXN1bHQuZ2VzdHVyZU5hbWUsXG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHJlc3VsdC5lcnJvckRlc2NyaXB0aW9ucyxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFpRmVlZGJhY2tGb3JBbmFseXNpcyhcbiAgZXhwZWN0ZWRQb3NlTmFtZTogc3RyaW5nLFxuICBhbmFseXNpc0ZlZWRiYWNrOiBGZWVkYmFjayxcbiAgcHJldmlvdXNGZWVkYmFjaz86IHN0cmluZ1xuKTogUHJvbWlzZTxBaUZlZWRiYWNrUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFhbmFseXNpc0ZlZWRiYWNrKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ05vIGFuYWx5c2lzIGZlZWRiYWNrIHByb3ZpZGVkLicgfTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kUGVyc29uYWxpemVkUmVzcG9uc2U+KFxuICAgICAgJy9hcGkvdjEvZmVlZGJhY2svcGVyc29uYWxpemVkJyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZXhwZWN0ZWRQb3NlTmFtZSxcbiAgICAgICAgICBhbmFseXNpc0ZlZWRiYWNrLFxuICAgICAgICAgIHByZXZpb3VzRmVlZGJhY2ssXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWlGZWVkYmFjazogcmVzdWx0LmFpRmVlZGJhY2ssXG4gICAgICB0cmFuc2xhdGlvbkRldGFpbHM6IHJlc3VsdC50cmFuc2xhdGlvbkRldGFpbHMsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIEFJIGZlZWRiYWNrOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2V0IGZlZWRiYWNrIGZyb20gQUkgY29hY2guIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmluYWxTdW1tYXJ5QWN0aW9uKFxuICBmZWVkYmFja0l0ZW1zOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxTdW1tYXJpemVGZWVkYmFja091dHB1dCB8IHsgZXJyb3I6IHN0cmluZyB9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsbEJhY2tlbmQ8QmFja2VuZFN1bW1hcnlSZXNwb25zZT4oJy9hcGkvdjEvZmVlZGJhY2svc3VtbWFyeScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZlZWRiYWNrSXRlbXMgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGZpbmFsIHN1bW1hcnk6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgZmluYWwgc3VtbWFyeSBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RHZW1pbmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kUGluZ1Jlc3BvbnNlPignL2FwaS92MS9haS9waW5nJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2UgfHwgJ0Nvbm5lY3Rpb24gc3VjY2Vzc2Z1bC4nO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIGBFcnJvcjogJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2VBY3Rpb24ocHJvbXB0OiBzdHJpbmcpOiBQcm9taXNlPEdlbmVyYXRlSW1hZ2VSZXN1bHQ+IHtcbiAgaWYgKCFwcm9tcHQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1Byb21wdCBjYW5ub3QgYmUgZW1wdHkuJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kSW1hZ2VSZXNwb25zZT4oJy9hcGkvdjEvbWVkaWEvZ2VuZXJhdGUtaW1hZ2UnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9tcHQgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGltYWdlOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgaW1hZ2UuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0FpSXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:d53ad7 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"702117c630acf89d0fa57332826d5a7c592f64605a":"getAiFeedbackForAnalysis"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "getAiFeedbackForAnalysis": (()=>getAiFeedbackForAnalysis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAiFeedbackForAnalysis = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("702117c630acf89d0fa57332826d5a7c592f64605a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAiFeedbackForAnalysis"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB0eXBlIHsgRmVlZGJhY2tEZXRhaWxzIH0gZnJvbSAnQC9saWIvZ2VzdHVyZS1lcnJvcnMnO1xuXG5jb25zdCBCQUNLRU5EX0JBU0VfVVJMID1cbiAgcHJvY2Vzcy5lbnYuRkxBU0tfQVBJX0JBU0VfVVJMPy50cmltKCkgfHwgJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMSc7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVF9NUyA9IDYwXzAwMDtcbmNvbnN0IEFOQUxZU0lTX1RJTUVPVVRfTVMgPSAxMjBfMDAwO1xuXG50eXBlIEJhY2tlbmRFcnJvclBheWxvYWQgPSB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICBkZXRhaWxzPzogdW5rbm93bjtcbn07XG5cbnR5cGUgQmFja2VuZEZlZWRiYWNrUmVzcG9uc2UgPSB7XG4gIGZlZWRiYWNrczogRmVlZGJhY2tbXTtcbn07XG5cbnR5cGUgQmFja2VuZEZlZWRiYWNrRGV0YWlsc1Jlc3BvbnNlID0ge1xuICBnZXN0dXJlTmFtZTogc3RyaW5nO1xuICBlcnJvckRlc2NyaXB0aW9uczogc3RyaW5nW107XG59O1xuXG50eXBlIEJhY2tlbmRQZXJzb25hbGl6ZWRSZXNwb25zZSA9IHtcbiAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XG4gIHRyYW5zbGF0aW9uRGV0YWlsczoge1xuICAgIGdlc3R1cmVOYW1lOiBzdHJpbmc7XG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICB9O1xufTtcblxudHlwZSBCYWNrZW5kU3VtbWFyeVJlc3BvbnNlID0gU3VtbWFyaXplRmVlZGJhY2tPdXRwdXQ7XG50eXBlIEJhY2tlbmRJbWFnZVJlc3BvbnNlID0gR2VuZXJhdGVJbWFnZU91dHB1dDtcbnR5cGUgQmFja2VuZFBpbmdSZXNwb25zZSA9IHsgbWVzc2FnZTogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFBlcnNvbmFsaXplZFRhaUNoaUZlZWRiYWNrT3V0cHV0ID0ge1xuICBzcGVlY2g6IHN0cmluZztcbiAgZXhwbGFuYXRpb246IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFN1bW1hcml6ZUZlZWRiYWNrT3V0cHV0ID0ge1xuICBzdW1tYXJ5U3BlZWNoOiBzdHJpbmc7XG4gIHN1bW1hcnlUZXh0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBHZW5lcmF0ZUltYWdlT3V0cHV0ID0ge1xuICBpbWFnZVVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQWlGZWVkYmFja1Jlc3VsdCA9XG4gIHwge1xuICAgICAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XG4gICAgICB0cmFuc2xhdGlvbkRldGFpbHM6IHtcbiAgICAgICAgZ2VzdHVyZU5hbWU6IHN0cmluZztcbiAgICAgICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgICB9XG4gIHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIEZlZWRiYWNrID0ge1xuICBwb3NlTmFtZTogc3RyaW5nO1xuICBzcGVlY2hUZXh0OiBzdHJpbmc7XG4gIGV4cGxhbmF0aW9uOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBbmFseXNpc1Jlc3VsdCA9IHsgZmVlZGJhY2tzOiBGZWVkYmFja1tdIH0gfCB7IGVycm9yOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIEdlbmVyYXRlSW1hZ2VSZXN1bHQgPSBHZW5lcmF0ZUltYWdlT3V0cHV0IHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmZ1bmN0aW9uIGJ1aWxkQmFja2VuZFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBiYXNlID0gQkFDS0VORF9CQVNFX1VSTC5lbmRzV2l0aCgnLycpXG4gICAgPyBCQUNLRU5EX0JBU0VfVVJMLnNsaWNlKDAsIC0xKVxuICAgIDogQkFDS0VORF9CQVNFX1VSTDtcbiAgY29uc3Qgc3VmZml4ID0gcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoIDogYC8ke3BhdGh9YDtcbiAgcmV0dXJuIGAke2Jhc2V9JHtzdWZmaXh9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0QmFja2VuZEVycm9yKHN0YXR1czogbnVtYmVyLCBwYXlsb2FkOiBCYWNrZW5kRXJyb3JQYXlsb2FkKTogc3RyaW5nIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gcGF5bG9hZC5lcnJvcj8udHJpbSgpIHx8IGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3N0YXR1c30uYDtcbiAgY29uc3QgZGV0YWlscyA9XG4gICAgdHlwZW9mIHBheWxvYWQuZGV0YWlscyA9PT0gJ3N0cmluZydcbiAgICAgID8gcGF5bG9hZC5kZXRhaWxzLnRyaW0oKVxuICAgICAgOiBwYXlsb2FkLmRldGFpbHNcbiAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwYXlsb2FkLmRldGFpbHMpXG4gICAgICAgIDogJyc7XG4gIHJldHVybiBkZXRhaWxzID8gYCR7ZXJyb3JNZXNzYWdlfSBEZXRhaWxzOiAke2RldGFpbHN9YCA6IGVycm9yTWVzc2FnZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbEJhY2tlbmQ8VD4oXG4gIHBhdGg6IHN0cmluZyxcbiAgaW5pdDogUmVxdWVzdEluaXQsXG4gIHRpbWVvdXRNcyA9IERFRkFVTFRfVElNRU9VVF9NU1xuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIHRpbWVvdXRNcyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJ1aWxkQmFja2VuZFVybChwYXRoKSwge1xuICAgICAgLi4uaW5pdCxcbiAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgbGV0IHBheWxvYWQ6IGFueSA9IHt9O1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBwYXlsb2FkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEJhY2tlbmRFcnJvcihyZXNwb25zZS5zdGF0dXMsIHBheWxvYWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF5bG9hZCBhcyBUO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0IHRpbWVkIG91dCBhZnRlciAke01hdGgucm91bmQodGltZW91dE1zIC8gMTAwMCl9IHNlY29uZHMuYCk7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9IGZpbmFsbHkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2VBbmFseXNpc0Zyb21Dc3YoY3N2RGF0YTogc3RyaW5nKTogUHJvbWlzZTxBbmFseXNpc1Jlc3VsdD4ge1xuICB0cnkge1xuICAgIGlmICghY3N2RGF0YSkge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdDU1YgZGF0YSBpcyBlbXB0eS4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsbEJhY2tlbmQ8QmFja2VuZEZlZWRiYWNrUmVzcG9uc2U+KFxuICAgICAgJy9hcGkvdjEvYW5hbHlzaXMvcHJlZGljdC1jc3YnLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY3N2RGF0YSB9KSxcbiAgICAgIH0sXG4gICAgICBBTkFMWVNJU19USU1FT1VUX01TXG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQuZmVlZGJhY2tzKSkge1xuICAgICAgcmV0dXJuIHsgZmVlZGJhY2tzOiByZXN1bHQuZmVlZGJhY2tzIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdBbmFseXNpcyBzdWNjZXNzZnVsLCBidXQgZmVlZGJhY2sgZGF0YSBpcyBtaXNzaW5nIGZyb20gdGhlIHJlc3BvbnNlLicgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHBvc2UgYW5hbHlzaXM6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgYW5hbHlzaXMuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVlZGJhY2tEZXRhaWxzQWN0aW9uKFxuICBwb3NlTmFtZTogc3RyaW5nLFxuICBzcGVlY2hUZXh0OiBzdHJpbmdcbik6IFByb21pc2U8RmVlZGJhY2tEZXRhaWxzPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbGxCYWNrZW5kPEJhY2tlbmRGZWVkYmFja0RldGFpbHNSZXNwb25zZT4oXG4gICAgJy9hcGkvdjEvZmVlZGJhY2svZGV0YWlscycsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcG9zZU5hbWUsIHNwZWVjaFRleHQgfSksXG4gICAgfVxuICApO1xuICByZXR1cm4ge1xuICAgIGdlc3R1cmVOYW1lOiByZXN1bHQuZ2VzdHVyZU5hbWUsXG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHJlc3VsdC5lcnJvckRlc2NyaXB0aW9ucyxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFpRmVlZGJhY2tGb3JBbmFseXNpcyhcbiAgZXhwZWN0ZWRQb3NlTmFtZTogc3RyaW5nLFxuICBhbmFseXNpc0ZlZWRiYWNrOiBGZWVkYmFjayxcbiAgcHJldmlvdXNGZWVkYmFjaz86IHN0cmluZ1xuKTogUHJvbWlzZTxBaUZlZWRiYWNrUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFhbmFseXNpc0ZlZWRiYWNrKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ05vIGFuYWx5c2lzIGZlZWRiYWNrIHByb3ZpZGVkLicgfTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kUGVyc29uYWxpemVkUmVzcG9uc2U+KFxuICAgICAgJy9hcGkvdjEvZmVlZGJhY2svcGVyc29uYWxpemVkJyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZXhwZWN0ZWRQb3NlTmFtZSxcbiAgICAgICAgICBhbmFseXNpc0ZlZWRiYWNrLFxuICAgICAgICAgIHByZXZpb3VzRmVlZGJhY2ssXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWlGZWVkYmFjazogcmVzdWx0LmFpRmVlZGJhY2ssXG4gICAgICB0cmFuc2xhdGlvbkRldGFpbHM6IHJlc3VsdC50cmFuc2xhdGlvbkRldGFpbHMsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIEFJIGZlZWRiYWNrOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2V0IGZlZWRiYWNrIGZyb20gQUkgY29hY2guIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmluYWxTdW1tYXJ5QWN0aW9uKFxuICBmZWVkYmFja0l0ZW1zOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxTdW1tYXJpemVGZWVkYmFja091dHB1dCB8IHsgZXJyb3I6IHN0cmluZyB9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsbEJhY2tlbmQ8QmFja2VuZFN1bW1hcnlSZXNwb25zZT4oJy9hcGkvdjEvZmVlZGJhY2svc3VtbWFyeScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZlZWRiYWNrSXRlbXMgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGZpbmFsIHN1bW1hcnk6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgZmluYWwgc3VtbWFyeSBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RHZW1pbmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kUGluZ1Jlc3BvbnNlPignL2FwaS92MS9haS9waW5nJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2UgfHwgJ0Nvbm5lY3Rpb24gc3VjY2Vzc2Z1bC4nO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIGBFcnJvcjogJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2VBY3Rpb24ocHJvbXB0OiBzdHJpbmcpOiBQcm9taXNlPEdlbmVyYXRlSW1hZ2VSZXN1bHQ+IHtcbiAgaWYgKCFwcm9tcHQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1Byb21wdCBjYW5ub3QgYmUgZW1wdHkuJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kSW1hZ2VSZXNwb25zZT4oJy9hcGkvdjEvbWVkaWEvZ2VuZXJhdGUtaW1hZ2UnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9tcHQgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGltYWdlOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgaW1hZ2UuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0ErS3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:e7f805 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"6003e69fae319c5ad4def4ef65e6c56ea8da8d631b":"getFeedbackDetailsAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "getFeedbackDetailsAction": (()=>getFeedbackDetailsAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getFeedbackDetailsAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6003e69fae319c5ad4def4ef65e6c56ea8da8d631b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFeedbackDetailsAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB0eXBlIHsgRmVlZGJhY2tEZXRhaWxzIH0gZnJvbSAnQC9saWIvZ2VzdHVyZS1lcnJvcnMnO1xuXG5jb25zdCBCQUNLRU5EX0JBU0VfVVJMID1cbiAgcHJvY2Vzcy5lbnYuRkxBU0tfQVBJX0JBU0VfVVJMPy50cmltKCkgfHwgJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMSc7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVF9NUyA9IDYwXzAwMDtcbmNvbnN0IEFOQUxZU0lTX1RJTUVPVVRfTVMgPSAxMjBfMDAwO1xuXG50eXBlIEJhY2tlbmRFcnJvclBheWxvYWQgPSB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICBkZXRhaWxzPzogdW5rbm93bjtcbn07XG5cbnR5cGUgQmFja2VuZEZlZWRiYWNrUmVzcG9uc2UgPSB7XG4gIGZlZWRiYWNrczogRmVlZGJhY2tbXTtcbn07XG5cbnR5cGUgQmFja2VuZEZlZWRiYWNrRGV0YWlsc1Jlc3BvbnNlID0ge1xuICBnZXN0dXJlTmFtZTogc3RyaW5nO1xuICBlcnJvckRlc2NyaXB0aW9uczogc3RyaW5nW107XG59O1xuXG50eXBlIEJhY2tlbmRQZXJzb25hbGl6ZWRSZXNwb25zZSA9IHtcbiAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XG4gIHRyYW5zbGF0aW9uRGV0YWlsczoge1xuICAgIGdlc3R1cmVOYW1lOiBzdHJpbmc7XG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICB9O1xufTtcblxudHlwZSBCYWNrZW5kU3VtbWFyeVJlc3BvbnNlID0gU3VtbWFyaXplRmVlZGJhY2tPdXRwdXQ7XG50eXBlIEJhY2tlbmRJbWFnZVJlc3BvbnNlID0gR2VuZXJhdGVJbWFnZU91dHB1dDtcbnR5cGUgQmFja2VuZFBpbmdSZXNwb25zZSA9IHsgbWVzc2FnZTogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFBlcnNvbmFsaXplZFRhaUNoaUZlZWRiYWNrT3V0cHV0ID0ge1xuICBzcGVlY2g6IHN0cmluZztcbiAgZXhwbGFuYXRpb246IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFN1bW1hcml6ZUZlZWRiYWNrT3V0cHV0ID0ge1xuICBzdW1tYXJ5U3BlZWNoOiBzdHJpbmc7XG4gIHN1bW1hcnlUZXh0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBHZW5lcmF0ZUltYWdlT3V0cHV0ID0ge1xuICBpbWFnZVVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQWlGZWVkYmFja1Jlc3VsdCA9XG4gIHwge1xuICAgICAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XG4gICAgICB0cmFuc2xhdGlvbkRldGFpbHM6IHtcbiAgICAgICAgZ2VzdHVyZU5hbWU6IHN0cmluZztcbiAgICAgICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgICB9XG4gIHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIEZlZWRiYWNrID0ge1xuICBwb3NlTmFtZTogc3RyaW5nO1xuICBzcGVlY2hUZXh0OiBzdHJpbmc7XG4gIGV4cGxhbmF0aW9uOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBbmFseXNpc1Jlc3VsdCA9IHsgZmVlZGJhY2tzOiBGZWVkYmFja1tdIH0gfCB7IGVycm9yOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIEdlbmVyYXRlSW1hZ2VSZXN1bHQgPSBHZW5lcmF0ZUltYWdlT3V0cHV0IHwgeyBlcnJvcjogc3RyaW5nIH07XG5cbmZ1bmN0aW9uIGJ1aWxkQmFja2VuZFVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBiYXNlID0gQkFDS0VORF9CQVNFX1VSTC5lbmRzV2l0aCgnLycpXG4gICAgPyBCQUNLRU5EX0JBU0VfVVJMLnNsaWNlKDAsIC0xKVxuICAgIDogQkFDS0VORF9CQVNFX1VSTDtcbiAgY29uc3Qgc3VmZml4ID0gcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoIDogYC8ke3BhdGh9YDtcbiAgcmV0dXJuIGAke2Jhc2V9JHtzdWZmaXh9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0QmFja2VuZEVycm9yKHN0YXR1czogbnVtYmVyLCBwYXlsb2FkOiBCYWNrZW5kRXJyb3JQYXlsb2FkKTogc3RyaW5nIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gcGF5bG9hZC5lcnJvcj8udHJpbSgpIHx8IGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3N0YXR1c30uYDtcbiAgY29uc3QgZGV0YWlscyA9XG4gICAgdHlwZW9mIHBheWxvYWQuZGV0YWlscyA9PT0gJ3N0cmluZydcbiAgICAgID8gcGF5bG9hZC5kZXRhaWxzLnRyaW0oKVxuICAgICAgOiBwYXlsb2FkLmRldGFpbHNcbiAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwYXlsb2FkLmRldGFpbHMpXG4gICAgICAgIDogJyc7XG4gIHJldHVybiBkZXRhaWxzID8gYCR7ZXJyb3JNZXNzYWdlfSBEZXRhaWxzOiAke2RldGFpbHN9YCA6IGVycm9yTWVzc2FnZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbEJhY2tlbmQ8VD4oXG4gIHBhdGg6IHN0cmluZyxcbiAgaW5pdDogUmVxdWVzdEluaXQsXG4gIHRpbWVvdXRNcyA9IERFRkFVTFRfVElNRU9VVF9NU1xuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjb250cm9sbGVyLmFib3J0KCksIHRpbWVvdXRNcyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJ1aWxkQmFja2VuZFVybChwYXRoKSwge1xuICAgICAgLi4uaW5pdCxcbiAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgbGV0IHBheWxvYWQ6IGFueSA9IHt9O1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBwYXlsb2FkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEJhY2tlbmRFcnJvcihyZXNwb25zZS5zdGF0dXMsIHBheWxvYWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF5bG9hZCBhcyBUO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0IHRpbWVkIG91dCBhZnRlciAke01hdGgucm91bmQodGltZW91dE1zIC8gMTAwMCl9IHNlY29uZHMuYCk7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9IGZpbmFsbHkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2VBbmFseXNpc0Zyb21Dc3YoY3N2RGF0YTogc3RyaW5nKTogUHJvbWlzZTxBbmFseXNpc1Jlc3VsdD4ge1xuICB0cnkge1xuICAgIGlmICghY3N2RGF0YSkge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdDU1YgZGF0YSBpcyBlbXB0eS4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsbEJhY2tlbmQ8QmFja2VuZEZlZWRiYWNrUmVzcG9uc2U+KFxuICAgICAgJy9hcGkvdjEvYW5hbHlzaXMvcHJlZGljdC1jc3YnLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY3N2RGF0YSB9KSxcbiAgICAgIH0sXG4gICAgICBBTkFMWVNJU19USU1FT1VUX01TXG4gICAgKTtcblxuICAgIGlmIChyZXN1bHQgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQuZmVlZGJhY2tzKSkge1xuICAgICAgcmV0dXJuIHsgZmVlZGJhY2tzOiByZXN1bHQuZmVlZGJhY2tzIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdBbmFseXNpcyBzdWNjZXNzZnVsLCBidXQgZmVlZGJhY2sgZGF0YSBpcyBtaXNzaW5nIGZyb20gdGhlIHJlc3BvbnNlLicgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHBvc2UgYW5hbHlzaXM6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgYW5hbHlzaXMuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmVlZGJhY2tEZXRhaWxzQWN0aW9uKFxuICBwb3NlTmFtZTogc3RyaW5nLFxuICBzcGVlY2hUZXh0OiBzdHJpbmdcbik6IFByb21pc2U8RmVlZGJhY2tEZXRhaWxzPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbGxCYWNrZW5kPEJhY2tlbmRGZWVkYmFja0RldGFpbHNSZXNwb25zZT4oXG4gICAgJy9hcGkvdjEvZmVlZGJhY2svZGV0YWlscycsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcG9zZU5hbWUsIHNwZWVjaFRleHQgfSksXG4gICAgfVxuICApO1xuICByZXR1cm4ge1xuICAgIGdlc3R1cmVOYW1lOiByZXN1bHQuZ2VzdHVyZU5hbWUsXG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHJlc3VsdC5lcnJvckRlc2NyaXB0aW9ucyxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFpRmVlZGJhY2tGb3JBbmFseXNpcyhcbiAgZXhwZWN0ZWRQb3NlTmFtZTogc3RyaW5nLFxuICBhbmFseXNpc0ZlZWRiYWNrOiBGZWVkYmFjayxcbiAgcHJldmlvdXNGZWVkYmFjaz86IHN0cmluZ1xuKTogUHJvbWlzZTxBaUZlZWRiYWNrUmVzdWx0PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFhbmFseXNpc0ZlZWRiYWNrKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ05vIGFuYWx5c2lzIGZlZWRiYWNrIHByb3ZpZGVkLicgfTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kUGVyc29uYWxpemVkUmVzcG9uc2U+KFxuICAgICAgJy9hcGkvdjEvZmVlZGJhY2svcGVyc29uYWxpemVkJyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZXhwZWN0ZWRQb3NlTmFtZSxcbiAgICAgICAgICBhbmFseXNpc0ZlZWRiYWNrLFxuICAgICAgICAgIHByZXZpb3VzRmVlZGJhY2ssXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYWlGZWVkYmFjazogcmVzdWx0LmFpRmVlZGJhY2ssXG4gICAgICB0cmFuc2xhdGlvbkRldGFpbHM6IHJlc3VsdC50cmFuc2xhdGlvbkRldGFpbHMsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIEFJIGZlZWRiYWNrOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2V0IGZlZWRiYWNrIGZyb20gQUkgY29hY2guIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmluYWxTdW1tYXJ5QWN0aW9uKFxuICBmZWVkYmFja0l0ZW1zOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxTdW1tYXJpemVGZWVkYmFja091dHB1dCB8IHsgZXJyb3I6IHN0cmluZyB9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsbEJhY2tlbmQ8QmFja2VuZFN1bW1hcnlSZXNwb25zZT4oJy9hcGkvdjEvZmVlZGJhY2svc3VtbWFyeScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZlZWRiYWNrSXRlbXMgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGZpbmFsIHN1bW1hcnk6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJztcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgZmluYWwgc3VtbWFyeSBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RHZW1pbmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kUGluZ1Jlc3BvbnNlPignL2FwaS92MS9haS9waW5nJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2UgfHwgJ0Nvbm5lY3Rpb24gc3VjY2Vzc2Z1bC4nO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIGBFcnJvcjogJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2VBY3Rpb24ocHJvbXB0OiBzdHJpbmcpOiBQcm9taXNlPEdlbmVyYXRlSW1hZ2VSZXN1bHQ+IHtcbiAgaWYgKCFwcm9tcHQpIHtcbiAgICByZXR1cm4geyBlcnJvcjogJ1Byb21wdCBjYW5ub3QgYmUgZW1wdHkuJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsQmFja2VuZDxCYWNrZW5kSW1hZ2VSZXNwb25zZT4oJy9hcGkvdjEvbWVkaWEvZ2VuZXJhdGUtaW1hZ2UnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9tcHQgfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGltYWdlOicsIGVycm9yKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLic7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgaW1hZ2UuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0E2SnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/api-test/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApiTestPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pose$2d$estimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pose-estimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$ee6ac6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:ee6ac6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$d53ad7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:d53ad7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$e7f805__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:e7f805 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function ApiTestPage() {
    _s();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isInitializing, setIsInitializing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasCameraPermission, setHasCameraPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [landmarkData, setLandmarkData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [csvForApi, setCsvForApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [uploadedCsvContent, setUploadedCsvContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rawAnalysisResponse, setRawAnalysisResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [finalAiResponse, setFinalAiResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const poseLandmarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const lastVideoTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApiTestPage.useEffect": ()=>{
            async function setup() {
                try {
                    const landmarker = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pose$2d$estimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initPoseLandmarker"])();
                    poseLandmarkerRef.current = landmarker;
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: true
                    });
                    setHasCameraPermission(true);
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                } catch (error) {
                    console.error('Initialization error:', error);
                    setHasCameraPermission(false);
                    toast({
                        variant: 'destructive',
                        title: 'Setup Failed',
                        description: 'Could not access camera or load model.'
                    });
                } finally{
                    setIsInitializing(false);
                }
            }
            setup();
            return ({
                "ApiTestPage.useEffect": ()=>{
                    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
                    if (videoRef.current?.srcObject) {
                        videoRef.current.srcObject.getTracks().forEach({
                            "ApiTestPage.useEffect": (track)=>track.stop()
                        }["ApiTestPage.useEffect"]);
                    }
                }
            })["ApiTestPage.useEffect"];
        }
    }["ApiTestPage.useEffect"], [
        toast
    ]);
    const processVideo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ApiTestPage.useCallback[processVideo]": (isRec)=>{
            if (!videoRef.current || !poseLandmarkerRef.current) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pose$2d$estimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processVideo"])(videoRef.current, poseLandmarkerRef.current, {
                "ApiTestPage.useCallback[processVideo]": (result, timestamp)=>{
                    if (isRec && result.landmarks && result.landmarks.length > 0) {
                        setLandmarkData({
                            "ApiTestPage.useCallback[processVideo]": (prev)=>[
                                    ...prev,
                                    {
                                        landmarks: result.landmarks[0],
                                        timestamp
                                    }
                                ]
                        }["ApiTestPage.useCallback[processVideo]"]);
                    }
                }
            }["ApiTestPage.useCallback[processVideo]"], lastVideoTime);
            animationFrameId.current = requestAnimationFrame({
                "ApiTestPage.useCallback[processVideo]": ()=>processVideo(isRec)
            }["ApiTestPage.useCallback[processVideo]"]);
        }
    }["ApiTestPage.useCallback[processVideo]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApiTestPage.useEffect": ()=>{
            if (hasCameraPermission && videoRef.current) {
                if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = requestAnimationFrame({
                    "ApiTestPage.useEffect": ()=>processVideo(isRecording)
                }["ApiTestPage.useEffect"]);
            } else {
                if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            }
            return ({
                "ApiTestPage.useEffect": ()=>{
                    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
                }
            })["ApiTestPage.useEffect"];
        }
    }["ApiTestPage.useEffect"], [
        hasCameraPermission,
        processVideo,
        isRecording
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApiTestPage.useEffect": ()=>{
            if (!isRecording && landmarkData.length > 0) {
                toast({
                    title: 'Recording stopped',
                    description: `${landmarkData.length} frames captured.`
                });
            }
        }
    }["ApiTestPage.useEffect"], [
        isRecording,
        landmarkData.length,
        toast
    ]);
    const startRecording = ()=>{
        setLandmarkData([]);
        setCsvForApi('');
        setRawAnalysisResponse('');
        setFinalAiResponse('');
        setUploadedCsvContent(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setIsRecording(true);
        toast({
            title: 'Recording started'
        });
    };
    const stopRecording = ()=>{
        setIsRecording(false);
        setLandmarkData((currentLandmarkData)=>{
            if (currentLandmarkData.length > 0) {
                generateCsv(currentLandmarkData);
            }
            return currentLandmarkData;
        });
    };
    const generateCsv = (data)=>{
        if (data.length === 0) {
            setCsvForApi('');
            return;
        }
        const landmarkNames = [
            "NOSE",
            "LEFT_EYE_INNER",
            "LEFT_EYE",
            "LEFT_EYE_OUTER",
            "RIGHT_EYE_INNER",
            "RIGHT_EYE",
            "RIGHT_EYE_OUTER",
            "LEFT_EAR",
            "RIGHT_EAR",
            "MOUTH_LEFT",
            "MOUTH_RIGHT",
            "LEFT_SHOULDER",
            "RIGHT_SHOULDER",
            "LEFT_ELBOW",
            "RIGHT_ELBOW",
            "LEFT_WRIST",
            "RIGHT_WRIST",
            "LEFT_PINKY",
            "RIGHT_PINKY",
            "LEFT_INDEX",
            "RIGHT_INDEX",
            "LEFT_THUMB",
            "RIGHT_THUMB",
            "LEFT_HIP",
            "RIGHT_HIP",
            "LEFT_KNEE",
            "RIGHT_KNEE",
            "LEFT_ANKLE",
            "RIGHT_ANKLE",
            "LEFT_HEEL",
            "RIGHT_HEEL",
            "LEFT_FOOT_INDEX",
            "RIGHT_FOOT_INDEX"
        ];
        const header = [
            'timestamp_ms',
            ...landmarkNames.flatMap((name)=>[
                    `${name}_x`,
                    `${name}_y`,
                    `${name}_z`
                ])
        ].join(',');
        const csvRows = data.map((frame)=>[
                frame.timestamp,
                ...frame.landmarks.flatMap((lm)=>[
                        lm.x,
                        lm.y,
                        lm.z
                    ])
            ].join(','));
        const csvContent = [
            header,
            ...csvRows
        ].join('\n');
        setCsvForApi(csvContent);
    };
    const handleAnalysis = async ()=>{
        const dataToSend = uploadedCsvContent ?? csvForApi;
        if (!dataToSend) {
            toast({
                variant: 'destructive',
                title: 'No Data',
                description: 'Record movement or upload a CSV file to analyze.'
            });
            return;
        }
        setIsAnalyzing(true);
        setRawAnalysisResponse('');
        setFinalAiResponse('');
        try {
            // Step 1: Get raw analysis from the prediction API
            const analysisResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$ee6ac6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPoseAnalysisFromCsv"])(dataToSend);
            if ('error' in analysisResult) {
                toast({
                    variant: 'destructive',
                    title: 'Analysis Failed',
                    description: analysisResult.error
                });
                setRawAnalysisResponse(JSON.stringify({
                    error: analysisResult.error
                }, null, 2));
                return;
            }
            const rawResponseString = `RAW API RESPONSE:\n${JSON.stringify(analysisResult, null, 2)}`;
            // We'll process the first feedback item.
            const firstFeedback = analysisResult.feedbacks[0];
            if (!firstFeedback) {
                toast({
                    variant: 'destructive',
                    title: 'Analysis Incomplete',
                    description: "Feedback array is empty."
                });
                setRawAnalysisResponse(rawResponseString + "\n\nError: Feedback array is empty.");
                return;
            }
            // Step 2: Get the translated names for debugging
            const translationDetails = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$e7f805__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFeedbackDetailsAction"])(firstFeedback.poseName, firstFeedback.speechText);
            const translationString = `\n\nTRANSLATED NAMES:\n${JSON.stringify(translationDetails, null, 2)}`;
            setRawAnalysisResponse(rawResponseString + translationString);
            toast({
                title: 'Analysis Complete',
                description: 'Now getting feedback from AI Coach...'
            });
            // Step 3: Get the final AI feedback
            const aiResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$d53ad7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAiFeedbackForAnalysis"])(firstFeedback.poseName, firstFeedback);
            if ('error' in aiResult) {
                toast({
                    variant: 'destructive',
                    title: 'AI Coach Failed',
                    description: aiResult.error
                });
                setFinalAiResponse(JSON.stringify({
                    error: aiResult.error
                }, null, 2));
            } else {
                toast({
                    title: 'Feedback Received'
                });
                setFinalAiResponse(JSON.stringify(aiResult.aiFeedback, null, 2));
            }
        } catch (e) {
            const error = e instanceof Error ? e : new Error('An unknown error occurred during analysis.');
            toast({
                variant: 'destructive',
                title: 'An Error Occurred',
                description: error.message
            });
            setFinalAiResponse(JSON.stringify({
                error: error.message
            }, null, 2));
        } finally{
            setIsAnalyzing(false);
        }
    };
    const handleFileUpload = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e)=>{
                const text = e.target?.result;
                setUploadedCsvContent(text);
                setCsvForApi(''); // Clear recorded data
                setLandmarkData([]);
                toast({
                    title: 'File Uploaded',
                    description: file.name
                });
            };
            reader.readAsText(file);
        }
    };
    const clearUpload = ()=>{
        setUploadedCsvContent(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        toast({
            title: 'Upload Cleared'
        });
    };
    const handleVideoLoaded = ()=>{
        if (videoRef.current) {
            videoRef.current.play();
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            animationFrameId.current = requestAnimationFrame(()=>processVideo(isRecording));
        }
    };
    const canAnalyze = !!csvForApi || !!uploadedCsvContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "API Analysis Test"
                        }, void 0, false, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: "Record movement or upload a CSV file, then send the data to the analysis API. The generated data and the JSON response will be displayed below."
                        }, void 0, false, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api-test/page.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "grid md:grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg flex items-center justify-between",
                                        children: [
                                            "Camera Feed",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-bold p-1 rounded ${isRecording ? 'bg-red-500 text-white' : 'bg-secondary'}`,
                                                children: isRecording ? 'RECORDING' : 'IDLE'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-test/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/api-test/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4 pt-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-video bg-black rounded-md flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    ref: videoRef,
                                                    className: "w-full h-full object-cover",
                                                    autoPlay: true,
                                                    muted: true,
                                                    playsInline: true,
                                                    onLoadedData: handleVideoLoaded
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, this),
                                                (isInitializing || hasCameraPermission === false) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white p-4 text-center",
                                                    children: [
                                                        isInitializing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                            className: "w-8 h-8 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 39
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                            className: "w-8 h-8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 85
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm",
                                                            children: isInitializing ? 'Initializing...' : 'Camera permission denied.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: startRecording,
                                                    disabled: isRecording || isInitializing || !hasCameraPermission,
                                                    className: "w-full",
                                                    children: "Start Recording"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: stopRecording,
                                                    disabled: !isRecording,
                                                    variant: "destructive",
                                                    className: "w-full",
                                                    children: "Stop Recording"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg",
                                        children: "API Controls"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-test/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4 pt-0 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "csv-upload",
                                                    children: "Upload CSV"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "csv-upload",
                                                            type: "file",
                                                            accept: ".csv",
                                                            onChange: handleFileUpload,
                                                            disabled: isAnalyzing,
                                                            ref: fileInputRef
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        uploadedCsvContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: clearUpload,
                                                            "aria-label": "Clear upload",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api-test/page.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleAnalysis,
                                            disabled: !canAnalyze || isAnalyzing,
                                            className: "w-full",
                                            children: [
                                                isAnalyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 36
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 87
                                                }, this),
                                                isAnalyzing ? 'Analyzing...' : 'Analyze Pose'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg",
                                        children: "Data & Response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-test/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4 pt-0 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "csv-output",
                                                    children: "Generated CSV"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "csv-output",
                                                    readOnly: true,
                                                    value: csvForApi,
                                                    placeholder: "CSV data from recording will appear here.",
                                                    className: "h-[80px] text-xs font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "raw-response",
                                                    children: "Raw API Response & Translation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "raw-response",
                                                    readOnly: true,
                                                    value: rawAnalysisResponse,
                                                    placeholder: "Raw JSON from the analysis API and the translated names will appear here.",
                                                    className: "h-[120px] text-xs font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "json-response",
                                                    children: "Final AI Response"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "json-response",
                                                    readOnly: true,
                                                    value: finalAiResponse,
                                                    placeholder: "The final AI coach feedback will appear here.",
                                                    className: "h-[120px] text-xs font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 307,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api-test/page.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/api-test/page.tsx",
            lineNumber: 247,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/api-test/page.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_s(ApiTestPage, "DzmtNrvPVzxHqRe4NtYNv0Uhj0I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ApiTestPage;
var _c;
__turbopack_context__.k.register(_c, "ApiTestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_6e538128._.js.map
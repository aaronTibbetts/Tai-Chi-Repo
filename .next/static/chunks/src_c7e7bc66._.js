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
"[project]/src/app/data:1e7590 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4042415b6b3ee90c5525e4838412d8a17de28648cc":"getPoseAnalysisFromCsv"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "getPoseAnalysisFromCsv": (()=>getPoseAnalysisFromCsv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getPoseAnalysisFromCsv = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4042415b6b3ee90c5525e4838412d8a17de28648cc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getPoseAnalysisFromCsv"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgcGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2ssIHR5cGUgUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQsIHR5cGUgUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tJbnB1dCB9IGZyb20gJ0AvYWkvZmxvd3MvcGVyc29uYWxpemVkLXRhaS1jaGktZmVlZGJhY2snO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUltYWdlLCB0eXBlIEdlbmVyYXRlSW1hZ2VPdXRwdXQsIHR5cGUgR2VuZXJhdGVJbWFnZUlucHV0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbWFnZSc7XHJcbmltcG9ydCB7IHN1bW1hcml6ZUZlZWRiYWNrLCB0eXBlIFN1bW1hcml6ZUZlZWRiYWNrSW5wdXQsIHR5cGUgU3VtbWFyaXplRmVlZGJhY2tPdXRwdXQgfSBmcm9tICdAL2FpL2Zsb3dzL3N1bW1hcml6ZS1mZWVkYmFjay1mbG93JztcclxuaW1wb3J0IHsgc2VxdWVuY2VzIH0gZnJvbSAnQC9saWIvc2VxdWVuY2VzJztcclxuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XHJcbmltcG9ydCB7IGdvb2dsZUFJIH0gZnJvbSAnQGdlbmtpdC1haS9nb29nbGUtZ2VuYWknO1xyXG5pbXBvcnQgeyBnZXRGZWVkYmFja0RldGFpbHMsIHR5cGUgRmVlZGJhY2tEZXRhaWxzIH0gZnJvbSAnQC9saWIvZ2VzdHVyZS1lcnJvcnMnO1xyXG5cclxuLy8gVGhpcyBpcyB0aGUgbmV3LCBtb3JlIGRlc2NyaXB0aXZlIHR5cGUgZm9yIHRoZSBmaW5hbCByZXN1bHQuXHJcbmV4cG9ydCB0eXBlIEFpRmVlZGJhY2tSZXN1bHQgPSB7XHJcbiAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XHJcbiAgdHJhbnNsYXRpb25EZXRhaWxzOiB7XHJcbiAgICBnZXN0dXJlTmFtZTogc3RyaW5nO1xyXG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xyXG4gIH07XHJcbn0gfCB7IGVycm9yOiBzdHJpbmcgfTtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBGZWVkYmFjayA9IHtcclxuICBwb3NlTmFtZTogc3RyaW5nO1xyXG4gIHNwZWVjaFRleHQ6IHN0cmluZztcclxuICBleHBsYW5hdGlvbjogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQW5hbHlzaXNSZXN1bHQgPSB7IGZlZWRiYWNrczogRmVlZGJhY2tbXSB9IHwgeyBlcnJvcjogc3RyaW5nIH07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2VBbmFseXNpc0Zyb21Dc3YoY3N2RGF0YTogc3RyaW5nKTogUHJvbWlzZTxBbmFseXNpc1Jlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNzdkRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdDU1YgZGF0YSBpcyBlbXB0eS4nIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBjc3ZCbG9iID0gbmV3IEJsb2IoW2NzdkRhdGFdLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBjc3ZCbG9iLCAncG9zZV9kYXRhLmNzdicpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdmVjLWFwaS05Y3Z3Lm9ucmVuZGVyLmNvbS9wcmVkaWN0LWNzdicsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIHJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtlcnJvclRleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgXHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWVkYmFja3MpIHtcclxuICAgICAgcmV0dXJuIHsgZmVlZGJhY2tzOiByZXN1bHQuZmVlZGJhY2tzIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJBbmFseXNpcyBzdWNjZXNzZnVsLCBidXQgZmVlZGJhY2sgZGF0YSBpcyBtaXNzaW5nIGZyb20gdGhlIHJlc3BvbnNlLlwiIH07XHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBwb3NlIGFuYWx5c2lzOlwiLCBlcnJvcik7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIjtcclxuICAgIHJldHVybiB7IGVycm9yOiBgRmFpbGVkIHRvIGdldCBhbmFseXNpcy4gRGV0YWlsczogJHtlcnJvck1lc3NhZ2V9YCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlZWRiYWNrRGV0YWlsc0FjdGlvbihwb3NlTmFtZTogc3RyaW5nLCBzcGVlY2hUZXh0OiBzdHJpbmcpOiBQcm9taXNlPEZlZWRiYWNrRGV0YWlscz4ge1xyXG4gICAgcmV0dXJuIGdldEZlZWRiYWNrRGV0YWlscyhwb3NlTmFtZSwgc3BlZWNoVGV4dCk7XHJcbn1cclxuXHJcbi8vIFVwZGF0ZWQgYWN0aW9uIHRvIGhhbmRsZSBwb3NlIG1pc21hdGNoZXMgYW5kIHJlZ3VsYXIgZmVlZGJhY2tcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFpRmVlZGJhY2tGb3JBbmFseXNpcyhcclxuICBleHBlY3RlZFBvc2VOYW1lOiBzdHJpbmcsXHJcbiAgYW5hbHlzaXNGZWVkYmFjazogRmVlZGJhY2ssXHJcbiAgcHJldmlvdXNGZWVkYmFjaz86IHN0cmluZ1xyXG4pOiBQcm9taXNlPEFpRmVlZGJhY2tSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFhbmFseXNpc0ZlZWRiYWNrKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiAnTm8gYW5hbHlzaXMgZmVlZGJhY2sgcHJvdmlkZWQuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcG9zZU5hbWU6IGFjdHVhbFBvc2VOYW1lLCBzcGVlY2hUZXh0IH0gPSBhbmFseXNpc0ZlZWRiYWNrO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSBJRHMgdG8gaHVtYW4tcmVhZGFibGUgdGV4dCBmb3IgdGhlIGRldGVjdGVkIHBvc2VcclxuICAgIGNvbnN0IHsgZ2VzdHVyZU5hbWUsIGVycm9yRGVzY3JpcHRpb25zIH0gPSBnZXRGZWVkYmFja0RldGFpbHMoYWN0dWFsUG9zZU5hbWUsIHNwZWVjaFRleHQpO1xyXG4gICAgXHJcbiAgICAvLyBUaGUgaW5wdXQgZm9yIHRoZSBBSSBmbG93IG5vdyBpbmNsdWRlcyBib3RoIGV4cGVjdGVkIGFuZCBhY3R1YWwgcG9zZXNcclxuICAgIGNvbnN0IGlucHV0OiBQZXJzb25hbGl6ZWRUYWlDaGlGZWVkYmFja0lucHV0ID0ge1xyXG4gICAgICBleHBlY3RlZFBvc2VOYW1lLFxyXG4gICAgICBhY3R1YWxQb3NlTmFtZTogZ2VzdHVyZU5hbWUsIC8vIFVzZSB0aGUgaHVtYW4tcmVhZGFibGUgbmFtZVxyXG4gICAgICBlcnJvckRlc2NyaXB0aW9ucyxcclxuICAgICAgcHJldmlvdXNFeHBsYW5hdGlvbjogcHJldmlvdXNGZWVkYmFja1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhaVJlc3VsdCA9IGF3YWl0IHBlcnNvbmFsaXplZFRhaUNoaUZlZWRiYWNrKGlucHV0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWlGZWVkYmFjazogYWlSZXN1bHQsXHJcbiAgICAgIHRyYW5zbGF0aW9uRGV0YWlsczoge1xyXG4gICAgICAgIGdlc3R1cmVOYW1lLCAvLyBUaGlzIGlzIHRoZSAqYWN0dWFsKiBnZXN0dXJlIHBlcmZvcm1lZFxyXG4gICAgICAgIGVycm9yRGVzY3JpcHRpb25zLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIEFJIGZlZWRiYWNrOlwiLCBlcnJvcik7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIjtcclxuICAgIHJldHVybiB7IGVycm9yOiBgRmFpbGVkIHRvIGdldCBmZWVkYmFjayBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbmFsU3VtbWFyeUFjdGlvbihmZWVkYmFja0l0ZW1zOiBzdHJpbmdbXSk6IFByb21pc2U8U3VtbWFyaXplRmVlZGJhY2tPdXRwdXQgfCB7IGVycm9yOiBzdHJpbmcgfT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbnB1dDogU3VtbWFyaXplRmVlZGJhY2tJbnB1dCA9IHsgZmVlZGJhY2tJdGVtcyB9O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VtbWFyaXplRmVlZGJhY2soaW5wdXQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgZmluYWwgc3VtbWFyeTpcIiwgZXJyb3IpO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuXCI7XHJcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgZmluYWwgc3VtbWFyeSBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RHZW1pbmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNhbGwgR2VtaW5pLi4uXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWkuZ2VuZXJhdGUoe1xyXG4gICAgICBtb2RlbDogZ29vZ2xlQUkubW9kZWwoJ2dlbWluaS0yLjAtZmxhc2gnKSxcclxuICAgICAgcHJvbXB0OiBcIkhlbGxvIEdlbWluaSwgdGhpcyBpcyBhIHRlc3QuIElmIHlvdSBzZWUgdGhpcywgcGxlYXNlIHJlc3BvbmQgd2l0aCAnQ29ubmVjdGlvbiBzdWNjZXNzZnVsLidcIixcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJHZW1pbmkgcmVzcG9uc2UgcmVjZWl2ZWQ6XCIsIHJlc3VsdC50ZXh0KTtcclxuICAgIHJldHVybiByZXN1bHQudGV4dDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGUgYXMgRXJyb3I7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsbGluZyBHZW1pbmk6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZSB8fCAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZW5lcmF0ZUltYWdlUmVzdWx0ID0gR2VuZXJhdGVJbWFnZU91dHB1dCB8IHsgZXJyb3I6IHN0cmluZyB9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2VBY3Rpb24ocHJvbXB0OiBzdHJpbmcpOiBQcm9taXNlPEdlbmVyYXRlSW1hZ2VSZXN1bHQ+IHtcclxuICAgIGlmICghcHJvbXB0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6ICdQcm9tcHQgY2Fubm90IGJlIGVtcHR5LicgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0OiBHZW5lcmF0ZUltYWdlSW5wdXQgPSB7IHByb21wdCB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlSW1hZ2UoaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIGltYWdlOlwiLCBlcnJvcik7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuXCI7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgaW1hZ2UuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQThCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:8231c8 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7080bcd0078e5b75fd7082e54efd417e19bf16c69a":"getAiFeedbackForAnalysis"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "getAiFeedbackForAnalysis": (()=>getAiFeedbackForAnalysis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAiFeedbackForAnalysis = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7080bcd0078e5b75fd7082e54efd417e19bf16c69a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAiFeedbackForAnalysis"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgcGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2ssIHR5cGUgUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQsIHR5cGUgUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tJbnB1dCB9IGZyb20gJ0AvYWkvZmxvd3MvcGVyc29uYWxpemVkLXRhaS1jaGktZmVlZGJhY2snO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUltYWdlLCB0eXBlIEdlbmVyYXRlSW1hZ2VPdXRwdXQsIHR5cGUgR2VuZXJhdGVJbWFnZUlucHV0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbWFnZSc7XHJcbmltcG9ydCB7IHN1bW1hcml6ZUZlZWRiYWNrLCB0eXBlIFN1bW1hcml6ZUZlZWRiYWNrSW5wdXQsIHR5cGUgU3VtbWFyaXplRmVlZGJhY2tPdXRwdXQgfSBmcm9tICdAL2FpL2Zsb3dzL3N1bW1hcml6ZS1mZWVkYmFjay1mbG93JztcclxuaW1wb3J0IHsgc2VxdWVuY2VzIH0gZnJvbSAnQC9saWIvc2VxdWVuY2VzJztcclxuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XHJcbmltcG9ydCB7IGdvb2dsZUFJIH0gZnJvbSAnQGdlbmtpdC1haS9nb29nbGUtZ2VuYWknO1xyXG5pbXBvcnQgeyBnZXRGZWVkYmFja0RldGFpbHMsIHR5cGUgRmVlZGJhY2tEZXRhaWxzIH0gZnJvbSAnQC9saWIvZ2VzdHVyZS1lcnJvcnMnO1xyXG5cclxuLy8gVGhpcyBpcyB0aGUgbmV3LCBtb3JlIGRlc2NyaXB0aXZlIHR5cGUgZm9yIHRoZSBmaW5hbCByZXN1bHQuXHJcbmV4cG9ydCB0eXBlIEFpRmVlZGJhY2tSZXN1bHQgPSB7XHJcbiAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XHJcbiAgdHJhbnNsYXRpb25EZXRhaWxzOiB7XHJcbiAgICBnZXN0dXJlTmFtZTogc3RyaW5nO1xyXG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xyXG4gIH07XHJcbn0gfCB7IGVycm9yOiBzdHJpbmcgfTtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBGZWVkYmFjayA9IHtcclxuICBwb3NlTmFtZTogc3RyaW5nO1xyXG4gIHNwZWVjaFRleHQ6IHN0cmluZztcclxuICBleHBsYW5hdGlvbjogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQW5hbHlzaXNSZXN1bHQgPSB7IGZlZWRiYWNrczogRmVlZGJhY2tbXSB9IHwgeyBlcnJvcjogc3RyaW5nIH07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2VBbmFseXNpc0Zyb21Dc3YoY3N2RGF0YTogc3RyaW5nKTogUHJvbWlzZTxBbmFseXNpc1Jlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNzdkRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdDU1YgZGF0YSBpcyBlbXB0eS4nIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBjc3ZCbG9iID0gbmV3IEJsb2IoW2NzdkRhdGFdLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBjc3ZCbG9iLCAncG9zZV9kYXRhLmNzdicpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdmVjLWFwaS05Y3Z3Lm9ucmVuZGVyLmNvbS9wcmVkaWN0LWNzdicsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIHJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtlcnJvclRleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgXHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWVkYmFja3MpIHtcclxuICAgICAgcmV0dXJuIHsgZmVlZGJhY2tzOiByZXN1bHQuZmVlZGJhY2tzIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJBbmFseXNpcyBzdWNjZXNzZnVsLCBidXQgZmVlZGJhY2sgZGF0YSBpcyBtaXNzaW5nIGZyb20gdGhlIHJlc3BvbnNlLlwiIH07XHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBwb3NlIGFuYWx5c2lzOlwiLCBlcnJvcik7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIjtcclxuICAgIHJldHVybiB7IGVycm9yOiBgRmFpbGVkIHRvIGdldCBhbmFseXNpcy4gRGV0YWlsczogJHtlcnJvck1lc3NhZ2V9YCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlZWRiYWNrRGV0YWlsc0FjdGlvbihwb3NlTmFtZTogc3RyaW5nLCBzcGVlY2hUZXh0OiBzdHJpbmcpOiBQcm9taXNlPEZlZWRiYWNrRGV0YWlscz4ge1xyXG4gICAgcmV0dXJuIGdldEZlZWRiYWNrRGV0YWlscyhwb3NlTmFtZSwgc3BlZWNoVGV4dCk7XHJcbn1cclxuXHJcbi8vIFVwZGF0ZWQgYWN0aW9uIHRvIGhhbmRsZSBwb3NlIG1pc21hdGNoZXMgYW5kIHJlZ3VsYXIgZmVlZGJhY2tcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFpRmVlZGJhY2tGb3JBbmFseXNpcyhcclxuICBleHBlY3RlZFBvc2VOYW1lOiBzdHJpbmcsXHJcbiAgYW5hbHlzaXNGZWVkYmFjazogRmVlZGJhY2ssXHJcbiAgcHJldmlvdXNGZWVkYmFjaz86IHN0cmluZ1xyXG4pOiBQcm9taXNlPEFpRmVlZGJhY2tSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFhbmFseXNpc0ZlZWRiYWNrKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiAnTm8gYW5hbHlzaXMgZmVlZGJhY2sgcHJvdmlkZWQuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcG9zZU5hbWU6IGFjdHVhbFBvc2VOYW1lLCBzcGVlY2hUZXh0IH0gPSBhbmFseXNpc0ZlZWRiYWNrO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSBJRHMgdG8gaHVtYW4tcmVhZGFibGUgdGV4dCBmb3IgdGhlIGRldGVjdGVkIHBvc2VcclxuICAgIGNvbnN0IHsgZ2VzdHVyZU5hbWUsIGVycm9yRGVzY3JpcHRpb25zIH0gPSBnZXRGZWVkYmFja0RldGFpbHMoYWN0dWFsUG9zZU5hbWUsIHNwZWVjaFRleHQpO1xyXG4gICAgXHJcbiAgICAvLyBUaGUgaW5wdXQgZm9yIHRoZSBBSSBmbG93IG5vdyBpbmNsdWRlcyBib3RoIGV4cGVjdGVkIGFuZCBhY3R1YWwgcG9zZXNcclxuICAgIGNvbnN0IGlucHV0OiBQZXJzb25hbGl6ZWRUYWlDaGlGZWVkYmFja0lucHV0ID0ge1xyXG4gICAgICBleHBlY3RlZFBvc2VOYW1lLFxyXG4gICAgICBhY3R1YWxQb3NlTmFtZTogZ2VzdHVyZU5hbWUsIC8vIFVzZSB0aGUgaHVtYW4tcmVhZGFibGUgbmFtZVxyXG4gICAgICBlcnJvckRlc2NyaXB0aW9ucyxcclxuICAgICAgcHJldmlvdXNFeHBsYW5hdGlvbjogcHJldmlvdXNGZWVkYmFja1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhaVJlc3VsdCA9IGF3YWl0IHBlcnNvbmFsaXplZFRhaUNoaUZlZWRiYWNrKGlucHV0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWlGZWVkYmFjazogYWlSZXN1bHQsXHJcbiAgICAgIHRyYW5zbGF0aW9uRGV0YWlsczoge1xyXG4gICAgICAgIGdlc3R1cmVOYW1lLCAvLyBUaGlzIGlzIHRoZSAqYWN0dWFsKiBnZXN0dXJlIHBlcmZvcm1lZFxyXG4gICAgICAgIGVycm9yRGVzY3JpcHRpb25zLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIEFJIGZlZWRiYWNrOlwiLCBlcnJvcik7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIjtcclxuICAgIHJldHVybiB7IGVycm9yOiBgRmFpbGVkIHRvIGdldCBmZWVkYmFjayBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbmFsU3VtbWFyeUFjdGlvbihmZWVkYmFja0l0ZW1zOiBzdHJpbmdbXSk6IFByb21pc2U8U3VtbWFyaXplRmVlZGJhY2tPdXRwdXQgfCB7IGVycm9yOiBzdHJpbmcgfT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbnB1dDogU3VtbWFyaXplRmVlZGJhY2tJbnB1dCA9IHsgZmVlZGJhY2tJdGVtcyB9O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VtbWFyaXplRmVlZGJhY2soaW5wdXQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgZmluYWwgc3VtbWFyeTpcIiwgZXJyb3IpO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuXCI7XHJcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgZmluYWwgc3VtbWFyeSBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RHZW1pbmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNhbGwgR2VtaW5pLi4uXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWkuZ2VuZXJhdGUoe1xyXG4gICAgICBtb2RlbDogZ29vZ2xlQUkubW9kZWwoJ2dlbWluaS0yLjAtZmxhc2gnKSxcclxuICAgICAgcHJvbXB0OiBcIkhlbGxvIEdlbWluaSwgdGhpcyBpcyBhIHRlc3QuIElmIHlvdSBzZWUgdGhpcywgcGxlYXNlIHJlc3BvbmQgd2l0aCAnQ29ubmVjdGlvbiBzdWNjZXNzZnVsLidcIixcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJHZW1pbmkgcmVzcG9uc2UgcmVjZWl2ZWQ6XCIsIHJlc3VsdC50ZXh0KTtcclxuICAgIHJldHVybiByZXN1bHQudGV4dDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGUgYXMgRXJyb3I7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsbGluZyBHZW1pbmk6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZSB8fCAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZW5lcmF0ZUltYWdlUmVzdWx0ID0gR2VuZXJhdGVJbWFnZU91dHB1dCB8IHsgZXJyb3I6IHN0cmluZyB9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2VBY3Rpb24ocHJvbXB0OiBzdHJpbmcpOiBQcm9taXNlPEdlbmVyYXRlSW1hZ2VSZXN1bHQ+IHtcclxuICAgIGlmICghcHJvbXB0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6ICdQcm9tcHQgY2Fubm90IGJlIGVtcHR5LicgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0OiBHZW5lcmF0ZUltYWdlSW5wdXQgPSB7IHByb21wdCB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlSW1hZ2UoaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIGltYWdlOlwiLCBlcnJvcik7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuXCI7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgaW1hZ2UuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQXNFc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:292bda [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60ab24652292fb8f62476be59476679adc47621d9c":"getFeedbackDetailsAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "getFeedbackDetailsAction": (()=>getFeedbackDetailsAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getFeedbackDetailsAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60ab24652292fb8f62476be59476679adc47621d9c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFeedbackDetailsAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgcGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2ssIHR5cGUgUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQsIHR5cGUgUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tJbnB1dCB9IGZyb20gJ0AvYWkvZmxvd3MvcGVyc29uYWxpemVkLXRhaS1jaGktZmVlZGJhY2snO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUltYWdlLCB0eXBlIEdlbmVyYXRlSW1hZ2VPdXRwdXQsIHR5cGUgR2VuZXJhdGVJbWFnZUlucHV0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbWFnZSc7XHJcbmltcG9ydCB7IHN1bW1hcml6ZUZlZWRiYWNrLCB0eXBlIFN1bW1hcml6ZUZlZWRiYWNrSW5wdXQsIHR5cGUgU3VtbWFyaXplRmVlZGJhY2tPdXRwdXQgfSBmcm9tICdAL2FpL2Zsb3dzL3N1bW1hcml6ZS1mZWVkYmFjay1mbG93JztcclxuaW1wb3J0IHsgc2VxdWVuY2VzIH0gZnJvbSAnQC9saWIvc2VxdWVuY2VzJztcclxuaW1wb3J0IHsgYWkgfSBmcm9tICdAL2FpL2dlbmtpdCc7XHJcbmltcG9ydCB7IGdvb2dsZUFJIH0gZnJvbSAnQGdlbmtpdC1haS9nb29nbGUtZ2VuYWknO1xyXG5pbXBvcnQgeyBnZXRGZWVkYmFja0RldGFpbHMsIHR5cGUgRmVlZGJhY2tEZXRhaWxzIH0gZnJvbSAnQC9saWIvZ2VzdHVyZS1lcnJvcnMnO1xyXG5cclxuLy8gVGhpcyBpcyB0aGUgbmV3LCBtb3JlIGRlc2NyaXB0aXZlIHR5cGUgZm9yIHRoZSBmaW5hbCByZXN1bHQuXHJcbmV4cG9ydCB0eXBlIEFpRmVlZGJhY2tSZXN1bHQgPSB7XHJcbiAgYWlGZWVkYmFjazogUGVyc29uYWxpemVkVGFpQ2hpRmVlZGJhY2tPdXRwdXQ7XHJcbiAgdHJhbnNsYXRpb25EZXRhaWxzOiB7XHJcbiAgICBnZXN0dXJlTmFtZTogc3RyaW5nO1xyXG4gICAgZXJyb3JEZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xyXG4gIH07XHJcbn0gfCB7IGVycm9yOiBzdHJpbmcgfTtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBGZWVkYmFjayA9IHtcclxuICBwb3NlTmFtZTogc3RyaW5nO1xyXG4gIHNwZWVjaFRleHQ6IHN0cmluZztcclxuICBleHBsYW5hdGlvbjogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQW5hbHlzaXNSZXN1bHQgPSB7IGZlZWRiYWNrczogRmVlZGJhY2tbXSB9IHwgeyBlcnJvcjogc3RyaW5nIH07XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc2VBbmFseXNpc0Zyb21Dc3YoY3N2RGF0YTogc3RyaW5nKTogUHJvbWlzZTxBbmFseXNpc1Jlc3VsdD4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWNzdkRhdGEpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdDU1YgZGF0YSBpcyBlbXB0eS4nIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBjc3ZCbG9iID0gbmV3IEJsb2IoW2NzdkRhdGFdLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBjc3ZCbG9iLCAncG9zZV9kYXRhLmNzdicpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdmVjLWFwaS05Y3Z3Lm9ucmVuZGVyLmNvbS9wcmVkaWN0LWNzdicsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIHJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtlcnJvclRleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgXHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWVkYmFja3MpIHtcclxuICAgICAgcmV0dXJuIHsgZmVlZGJhY2tzOiByZXN1bHQuZmVlZGJhY2tzIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogXCJBbmFseXNpcyBzdWNjZXNzZnVsLCBidXQgZmVlZGJhY2sgZGF0YSBpcyBtaXNzaW5nIGZyb20gdGhlIHJlc3BvbnNlLlwiIH07XHJcbiAgICB9XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBwb3NlIGFuYWx5c2lzOlwiLCBlcnJvcik7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIjtcclxuICAgIHJldHVybiB7IGVycm9yOiBgRmFpbGVkIHRvIGdldCBhbmFseXNpcy4gRGV0YWlsczogJHtlcnJvck1lc3NhZ2V9YCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlZWRiYWNrRGV0YWlsc0FjdGlvbihwb3NlTmFtZTogc3RyaW5nLCBzcGVlY2hUZXh0OiBzdHJpbmcpOiBQcm9taXNlPEZlZWRiYWNrRGV0YWlscz4ge1xyXG4gICAgcmV0dXJuIGdldEZlZWRiYWNrRGV0YWlscyhwb3NlTmFtZSwgc3BlZWNoVGV4dCk7XHJcbn1cclxuXHJcbi8vIFVwZGF0ZWQgYWN0aW9uIHRvIGhhbmRsZSBwb3NlIG1pc21hdGNoZXMgYW5kIHJlZ3VsYXIgZmVlZGJhY2tcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFpRmVlZGJhY2tGb3JBbmFseXNpcyhcclxuICBleHBlY3RlZFBvc2VOYW1lOiBzdHJpbmcsXHJcbiAgYW5hbHlzaXNGZWVkYmFjazogRmVlZGJhY2ssXHJcbiAgcHJldmlvdXNGZWVkYmFjaz86IHN0cmluZ1xyXG4pOiBQcm9taXNlPEFpRmVlZGJhY2tSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFhbmFseXNpc0ZlZWRiYWNrKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiAnTm8gYW5hbHlzaXMgZmVlZGJhY2sgcHJvdmlkZWQuJyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcG9zZU5hbWU6IGFjdHVhbFBvc2VOYW1lLCBzcGVlY2hUZXh0IH0gPSBhbmFseXNpc0ZlZWRiYWNrO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSBJRHMgdG8gaHVtYW4tcmVhZGFibGUgdGV4dCBmb3IgdGhlIGRldGVjdGVkIHBvc2VcclxuICAgIGNvbnN0IHsgZ2VzdHVyZU5hbWUsIGVycm9yRGVzY3JpcHRpb25zIH0gPSBnZXRGZWVkYmFja0RldGFpbHMoYWN0dWFsUG9zZU5hbWUsIHNwZWVjaFRleHQpO1xyXG4gICAgXHJcbiAgICAvLyBUaGUgaW5wdXQgZm9yIHRoZSBBSSBmbG93IG5vdyBpbmNsdWRlcyBib3RoIGV4cGVjdGVkIGFuZCBhY3R1YWwgcG9zZXNcclxuICAgIGNvbnN0IGlucHV0OiBQZXJzb25hbGl6ZWRUYWlDaGlGZWVkYmFja0lucHV0ID0ge1xyXG4gICAgICBleHBlY3RlZFBvc2VOYW1lLFxyXG4gICAgICBhY3R1YWxQb3NlTmFtZTogZ2VzdHVyZU5hbWUsIC8vIFVzZSB0aGUgaHVtYW4tcmVhZGFibGUgbmFtZVxyXG4gICAgICBlcnJvckRlc2NyaXB0aW9ucyxcclxuICAgICAgcHJldmlvdXNFeHBsYW5hdGlvbjogcHJldmlvdXNGZWVkYmFja1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhaVJlc3VsdCA9IGF3YWl0IHBlcnNvbmFsaXplZFRhaUNoaUZlZWRiYWNrKGlucHV0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWlGZWVkYmFjazogYWlSZXN1bHQsXHJcbiAgICAgIHRyYW5zbGF0aW9uRGV0YWlsczoge1xyXG4gICAgICAgIGdlc3R1cmVOYW1lLCAvLyBUaGlzIGlzIHRoZSAqYWN0dWFsKiBnZXN0dXJlIHBlcmZvcm1lZFxyXG4gICAgICAgIGVycm9yRGVzY3JpcHRpb25zLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIEFJIGZlZWRiYWNrOlwiLCBlcnJvcik7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC5cIjtcclxuICAgIHJldHVybiB7IGVycm9yOiBgRmFpbGVkIHRvIGdldCBmZWVkYmFjayBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbmFsU3VtbWFyeUFjdGlvbihmZWVkYmFja0l0ZW1zOiBzdHJpbmdbXSk6IFByb21pc2U8U3VtbWFyaXplRmVlZGJhY2tPdXRwdXQgfCB7IGVycm9yOiBzdHJpbmcgfT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBpbnB1dDogU3VtbWFyaXplRmVlZGJhY2tJbnB1dCA9IHsgZmVlZGJhY2tJdGVtcyB9O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VtbWFyaXplRmVlZGJhY2soaW5wdXQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgZmluYWwgc3VtbWFyeTpcIiwgZXJyb3IpO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuXCI7XHJcbiAgICByZXR1cm4geyBlcnJvcjogYEZhaWxlZCB0byBnZXQgZmluYWwgc3VtbWFyeSBmcm9tIEFJIGNvYWNoLiBEZXRhaWxzOiAke2Vycm9yTWVzc2FnZX1gIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RHZW1pbmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNhbGwgR2VtaW5pLi4uXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWkuZ2VuZXJhdGUoe1xyXG4gICAgICBtb2RlbDogZ29vZ2xlQUkubW9kZWwoJ2dlbWluaS0yLjAtZmxhc2gnKSxcclxuICAgICAgcHJvbXB0OiBcIkhlbGxvIEdlbWluaSwgdGhpcyBpcyBhIHRlc3QuIElmIHlvdSBzZWUgdGhpcywgcGxlYXNlIHJlc3BvbmQgd2l0aCAnQ29ubmVjdGlvbiBzdWNjZXNzZnVsLidcIixcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJHZW1pbmkgcmVzcG9uc2UgcmVjZWl2ZWQ6XCIsIHJlc3VsdC50ZXh0KTtcclxuICAgIHJldHVybiByZXN1bHQudGV4dDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGUgYXMgRXJyb3I7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsbGluZyBHZW1pbmk6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZSB8fCAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZW5lcmF0ZUltYWdlUmVzdWx0ID0gR2VuZXJhdGVJbWFnZU91dHB1dCB8IHsgZXJyb3I6IHN0cmluZyB9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW1hZ2VBY3Rpb24ocHJvbXB0OiBzdHJpbmcpOiBQcm9taXNlPEdlbmVyYXRlSW1hZ2VSZXN1bHQ+IHtcclxuICAgIGlmICghcHJvbXB0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6ICdQcm9tcHQgY2Fubm90IGJlIGVtcHR5LicgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0OiBHZW5lcmF0ZUltYWdlSW5wdXQgPSB7IHByb21wdCB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlSW1hZ2UoaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIGltYWdlOlwiLCBlcnJvcik7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkFuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuXCI7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGBGYWlsZWQgdG8gZ2VuZXJhdGUgaW1hZ2UuIERldGFpbHM6ICR7ZXJyb3JNZXNzYWdlfWAgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQWlFc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$1e7590__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:1e7590 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$8231c8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:8231c8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$292bda__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:292bda [app-client] (ecmascript) <text/javascript>");
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
            const analysisResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$1e7590__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getPoseAnalysisFromCsv"])(dataToSend);
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
            const translationDetails = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$292bda__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFeedbackDetailsAction"])(firstFeedback.poseName, firstFeedback.speechText);
            const translationString = `\n\nTRANSLATED NAMES:\n${JSON.stringify(translationDetails, null, 2)}`;
            setRawAnalysisResponse(rawResponseString + translationString);
            toast({
                title: 'Analysis Complete',
                description: 'Now getting feedback from AI Coach...'
            });
            // Step 3: Get the final AI feedback
            const aiResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$8231c8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAiFeedbackForAnalysis"])(analysisResult.feedbacks);
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
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: "Record movement or upload a CSV file, then send the data to the analysis API. The generated data and the JSON response will be displayed below."
                        }, void 0, false, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api-test/page.tsx",
                    lineNumber: 245,
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
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/api-test/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 253,
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
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this),
                                                (isInitializing || hasCameraPermission === false) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white p-4 text-center",
                                                    children: [
                                                        isInitializing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                            className: "w-8 h-8 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 39
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                            className: "w-8 h-8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 85
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm",
                                                            children: isInitializing ? 'Initializing...' : 'Camera permission denied.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 262,
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
                                                    lineNumber: 272,
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
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 252,
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
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 282,
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
                                                    lineNumber: 287,
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
                                                            lineNumber: 289,
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
                                                                lineNumber: 292,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-test/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 286,
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
                                                    lineNumber: 299,
                                                    columnNumber: 36
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-test/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 87
                                                }, this),
                                                isAnalyzing ? 'Analyzing...' : 'Analyze Pose'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 281,
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
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 305,
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
                                                    lineNumber: 310,
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
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 309,
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
                                                    lineNumber: 320,
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
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 319,
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
                                                    lineNumber: 330,
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
                                                    lineNumber: 331,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-test/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-test/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-test/page.tsx",
                            lineNumber: 304,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api-test/page.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/api-test/page.tsx",
            lineNumber: 244,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/api-test/page.tsx",
        lineNumber: 243,
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

//# sourceMappingURL=src_c7e7bc66._.js.map
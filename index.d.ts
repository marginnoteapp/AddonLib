
declare const enum NSStringEncoding /** ASCII encoding contains, 7-bit of information stored in 8 bits. */ {
  ASCIIStringEncoding = 1,
  ISO2022JP = 21,
  /** 8-bit ISO/IEC 8859-1, also knows as Latin1 encoding. */
  ISOLatin1 = 5,
  /** 8-bit ISO/IEC 8859-2, also knows as Latin2 encoding. */
  ISOLatin2 = 9,
  JapaneseEUC = 3,
  MacOSRoman = 30,
  NEXTSTEP = 2,
  NonLossyASCII = 7,
  ShiftJIS = 8,
  Symbol = 6,
  Unicode = 10,
  /** 16 bit-based variable length encoding, blocks are interpreted as big endian. */
  UTF16BigEndian = 2415919360,
  /** 16 bit-based variable length encoding, blocks are interpreted as litle endian. */
  UTF16LittleEndian = 2483028224,
  /** 32-bit unicode encoding. */
  UTF32 = 2348810496,
  /** 32 bit encoding, blocks are interpreted as big endian. */
  UTF32BigEndian = 2550137088,
  /** 32 bit encoding, blocks are interpreted as little endian. */
  UTF32LittleEndian = 2617245952,
  /** 8-bit based variable-length character encoding for Unicode. */
  UTF8 = 4,
  WindowsCP1250 = 15,
  WindowsCP1251 = 11,
  WindowsCP1252 = 12,
  WindowsCP1253 = 13,
  WindowsCP1254 = 14
}
declare const enum NSDataReadingOptions {
  Coordinated = 4,
  /** Use the kernel's virtual memory map to load the file, if possible. If sucessful, this replaces read/write memory that can be very expensive with discardable memory that is backed by a file. */
  Mapped = 1,
  /** Force NSData to try to use the kernel's mapping support to load the file. If sucessful, this replaces read/write memory that can be very expensive with discardable memory that is backed by a file. */
  MappedAlways = 8,
  /** Notify the kernel that it should not try to cache the contents of this file in its buffer cache. */
  Uncached = 2
}
declare const enum NSDataWritingOptions {
  Atomic = 1,
  FileProtectionComplete = 536870912,
  FileProtectionCompleteUnlessOpen = 805306368,
  FileProtectionCompleteUntilFirstUserAuthentication = 1073741824,
  FileProtectionMask = 4026531840,
  FileProtectionNone = 268435456,
  WithoutOverwriting = 2
}
declare const enum NSDataSearchOptions {
  /** Limits the search to the start (or end if SearchBackwards is specified) */
  SearchAnchored = 2,
  /** Starts search from the end, instead of the start. */
  SearchBackwards = 1
}
declare global {
  class NSString {
    static stringWithString(string: string): string;//复制一份字符串
    static localizedStringWithFormat(format: string, ...args: any[]): string;
    static localizedNameOfStringEncoding(encoding: NSStringEncoding): string;
    static stringWithCapacity(capacity: number): string;
    static stringWithContentsOfData(data: NSData): string;
    static stringWithFormat(format: string, ...args: any[]): string;
    static stringWithContentsOfFile(path: string): string;
    static stringWithContentsOfURL(url: NSURL): string;
    static stringWithContentsOfFileEncoding(path: string, encoding: NSStringEncoding): string;
    static stringWithContentsOfURLEncoding(url: NSURL, encoding: NSStringEncoding): string;
    static pathWithComponents(components: string[]): string;

  }
  class NSData {
    /**
       * @param string NSString*
       */
    static dataWithStringEncoding(string: string, encoding: NSStringEncoding): NSData;
    /**
     * @param bytes const void*
     * @param length NSUInteger
     */
    static dataWithBytesLength(bytes: any, length: number): NSData;
    /**
     * @param bytes void*
     * @param length NSUInteger
     */
    static dataWithBytesNoCopyLength(bytes: any, length: number): NSData;
    /**
     * @param bytes void*
     * @param length NSUInteger
     */
    static dataWithBytesNoCopyLengthFreeWhenDone(bytes: any, length: number, b: boolean): NSData;
    /**
     * @param path NSString*
     * @param errorPtr NSError**
     */
    static dataWithContentsOfFileOptionsError(path: string, readOptionsMask: NSDataReadingOptions, errorPtr: NSError): NSData;
    /**
     * @param url NSURL*
     * @param errorPtr NSError**
     */
    static dataWithContentsOfURLOptionsError(url: NSURL, readOptionsMask: NSDataReadingOptions, errorPtr: NSError): NSData;
    /**
     * @param path NSString*
     */
    static dataWithContentsOfFile(path: string): NSData;
    /**
     * @param url NSURL*
     */
    static dataWithContentsOfURL(url: NSURL): NSData;
    /**
     * @param data NSData*
     */
    static dataWithData(data: NSData): NSData;
    /**
     * @param path NSString*
     */
    static dataWithContentsOfMappedFile(path: string): NSData;
    constructor();
    /**
     * @returns NSUInteger
     */
    length(): number;
    /**
     * @returns const void*
     */
    bytes(): number;
    /**
     * @returns NSString*
     */
    description(): string;
    /**
     * @param buffer void*
     * @param length NSUInteger
     */
    getBytesLength(buffer: any, length: number): void;
    /**
     * @param buffer void*
     */
    getBytesRange(buffer: void, range: NSRange): void;
    /**
     * @param other NSData*
     */
    isEqualToData(other: NSData): boolean;
    /**
     * @returns NSData*
     */
    subdataWithRange(range: NSRange): NSData;
    /**
     * @param path NSString*
     */
    writeToFileAtomically(path: string, useAuxiliaryFile: boolean): boolean;
    /**
     * @param url NSURL*
     */
    writeToURLAtomically(url: NSURL, atomically: boolean): boolean;
    /**
     * @param path NSString*
     * @param errorPtr NSError**
     */
    writeToFileOptionsError(path: string, writeOptionsMask: NSDataWritingOptions, errorPtr: NSError): boolean;
    /**
     * @param url NSURL*
     * @param errorPtr NSError**
     */
    writeToURLOptionsError(url: NSURL, writeOptionsMask: NSDataWritingOptions, errorPtr: NSError): boolean;
    /**
     * @param dataToFind NSData*
     */
    rangeOfDataOptionsRange(dataToFind: NSData, mask: NSDataSearchOptions, searchRange: NSRange): NSRange;
    /**
     * @param block void (^)(const void*bytes,NSRange byteRange,BOOL*stop)
     */
    enumerateByteRangesUsingBlock(block: any): void;
    /**
     * @param buffer void*
     */
    getBytes(buffer: any): void;
    /**
     * @returns NSString*
     */
    base64Encoding(): string;
  }
  class NSMutableData {
    static new(): NSMutableData;
    constructor();
    appendData(data: NSData);
  }
}

declare global {
  class NSFileManager {
    static defaultManager(): NSFileManager;
    contentsOfDirectoryAtPath(path: string): string[];
    subpathsOfDirectoryAtPath(path: string): string[];
    fileExistsAtPath(path: string): boolean;
    isDirectoryAtPath(path: string): boolean;
    moveItemAtPathToPath(path: string, toPath: string): boolean;
    copyItemAtPathToPath(path: string, toPath: string): boolean;
    createDirectoryAtPathAttributes(path: string, attributes: NSDictionary): boolean;
    createDirectoryAtPathWithIntermediateDirectoriesAttributes(path: string, createIntermediates: boolean, attributes: NSDictionary): boolean;
  };
}

declare const enum NSJSONWritingOptions {
  PrettyPrinted = 0,
  SortedKeys = 1,
  FragmentsAllowed = 2,
  WithoutEscapingSlashes = 3
}
declare const enum NSJSONReadingOptions {
  MutableContainers = 1,
  MutableLeaves = 2,
  FragmentsAllowed = 4,
  JSON5Allowed = 8,
  TopLevelDictionaryAssumed = 16
}
declare global {
  const NSJSONSerialization: {
    isValidJSONObject(obj: NSData): boolean;
    JSONObjectWithDataOptions(data: NSData, options: NSJSONReadingOptions): any;
    dataWithJSONObjectOptions(obj: object, options: NSJSONWritingOptions): NSData;
  };
}
declare type NSJSONSerialization = {};

declare global {
  class NSLocale {
    static autoupdatingCurrentLocale(): NSLocale;
    static currentLocale(): NSLocale;
    static systemLocale(): NSLocale;
    /**
     * @param ident NSString*
     */
    static localeWithLocaleIdentifier(ident: string): NSLocale;
    /**
     * @returns NSArray*
     */
    static availableLocaleIdentifiers(): string[];
    /**
     * @returns NSArray*
     */
    static ISOLanguageCodes(): string[];
    /**
     * @returns NSArray*
     */
    static ISOCountryCodes(): string[];
    /**
     * @returns NSArray*
     */
    static ISOCurrencyCodes(): string[];
    /**
     * @returns NSArray*
     */
    static commonISOCurrencyCodes(): string[];
    /**
     * @returns NSArray*
     */
    static preferredLanguages(): string[];
    /**
     * @returns NSDictionary*
     * @param string NSString*
     */
    static componentsFromLocaleIdentifier(string: string): DictObj;
    /**
     * @returns NSString*
     * @param dict NSDictionary*
     */
    static localeIdentifierFromComponents(dict: DictObj): string;
    /**
     * @returns NSString*
     * @param string NSString*
     */
    static canonicalLocaleIdentifierFromString(string: string): string;
    /**
     * @returns NSString*
     * @param string NSString*
     */
    static canonicalLanguageIdentifierFromString(string: string): string;
    /**
     * @returns NSString*
     * @param lcid uint32_t
     */
    static localeIdentifierFromWindowsLocaleCode(lcid: number): string;
    /**
     * @returns uint32_t
     * @param localeIdentifier NSString*
     */
    static windowsLocaleCodeFromLocaleIdentifier(localeIdentifier: string): number;
    /**
     * @param isoLangCode NSString*
     */
    static characterDirectionForLanguage(isoLangCode: string): NSLocaleLanguageDirection;
    /**
     * @param isoLangCode NSString*
     */
    static lineDirectionForLanguage(isoLangCode: string): NSLocaleLanguageDirection;
    objectForKey(key: any): any;
    /**
     * @returns NSString*
     */
    displayNameForKeyValue(key: any, value: any): string;
    /**
     * @returns NSString*
     */
    localeIdentifier(): string;
  };
}
declare const enum NSLocaleLanguageDirection {
  BottomToTop = 4,
  LeftToRight = 1,
  RightToLeft = 2,
  TopToBottom = 3,
  Unknown = 0
}

declare global {
  class NSNotification {
    /**
     * @param name NSString*
     */
    static notificationWithNameObject(name: string, anObject: any): NSNotification;
    /**
     * @param name NSString*
     * @param aUserInfo NSDictionary*
     */
    static notificationWithNameObjectUserInfo(name: string, anObject: any, aUserInfo: DictObj): NSNotification;
    readonly name?: string;
    readonly object: any;
    readonly userInfo?: DictObj;
    /**
     * @param name NSString*
     * @param userInfo NSDictionary*
     */
    initWithNameObjectUserInfo(name: string, object: any, userInfo: DictObj): NSNotification;
  };
  class NSNotificationCenter {
    static defaultCenter(): NSNotificationCenter;
    init(): NSNotificationCenter;
    /**
     * @param selector the function name of {@link EventHandler} in {@link InstMember}
     * @param name event name
     */
    addObserverSelectorName(observer: any, selector: string, name: string): void;
    /**
     * @param notification NSNotification*
     */
    postNotification(notification: NSNotification): void;
    /**
     * @param name NSString*
     */
    postNotificationNameObject(name: string, anObject: any): void;
    /**
     * @param name NSString*
     * @param aUserInfo NSDictionary*
     */
    postNotificationNameObjectUserInfo(name: string, anObject: any, aUserInfo: DictObj): void;
    removeObserver(observer: any): void;
    /**
     * @param name NSString*
     */
    removeObserverName(observer: any, name: string): void;
    };
}

declare const enum NSURLBookmarkResolutionOptions {
  WithoutMounting = 512,
  WithoutUI = 256,
  WithSecurityScope = 1024
}
declare const enum NSURLBookmarkFileCreationOptions {
  MinimalBookmark = 512,
  PreferFileIDResolution = 256,
  SecurityScopeAllowOnlyReadAccess = 4096,
  SuitableForBookmarkFile = 1024,
  WithSecurityScope = 2048
}
declare const enum NSURLBookmarkCreationOptions {
  MinimalBookmark = 512,
  PreferFileIDResolution = 256,
  SecurityScopeAllowOnlyReadAccess = 4096,
  SuitableForBookmarkFile = 1024,
  WithSecurityScope = 2048
}

declare type NSTimeInterval = number;

declare global {  
  class NSURL {
    /**
     * @param path NSString*
     */
    static fileURLWithPathIsDirectory(path: string, isDir: boolean): NSURL;
    /**
     * @param path NSString*
     */
    static fileURLWithPath(path: string): NSURL;
    /**
     * @param path const char*
     * @param baseURL NSURL*
     */
    static fileURLWithFileSystemRepresentationIsDirectoryRelativeToURL(path: string, isDir: boolean, baseURL: NSURL): any;
    /**
     * @param URLString NSString*
     */
    static URLWithString(URLString: string): NSURL;
    /**
     * @param URLString NSString*
     * @param baseURL NSURL*
     */
    static URLWithStringRelativeToURL(URLString: string, baseURL: NSURL): any;
    /**
     * @param bookmarkData NSData*
     * @param relativeURL NSURL*
     * @param isStale BOOL*
     * @param error NSError**
     */
    static URLByResolvingBookmarkDataOptionsRelativeToURLBookmarkDataIsStaleError(bookmarkData: NSData, options: NSURLBookmarkResolutionOptions, relativeURL: NSURL, isStale: boolean, error: NSError): any;
    /**
     * @returns NSDictionary*
     * @param keys NSArray*
     * @param bookmarkData NSData*
     */
    static resourceValuesForKeysFromBookmarkData(keys: any[], bookmarkData: NSData): DictObj;
    /**
     * @param bookmarkData NSData*
     * @param bookmarkFileURL NSURL*
     * @param error NSError**
     */
    static writeBookmarkDataToURLOptionsError(bookmarkData: NSData, bookmarkFileURL: NSURL, options: NSURLBookmarkFileCreationOptions, error: NSError): boolean;
    /**
     * @returns NSData*
     * @param bookmarkFileURL NSURL*
     * @param error NSError**
     */
    static bookmarkDataWithContentsOfURLError(bookmarkFileURL: NSURL, error: NSError): NSData;
    /**
     * @param url NSURL*
     */
    static componentsWithURLResolvingAgainstBaseURL(url: NSURL, resolve: boolean): any;
    /**
     * @param URLString NSString*
     */
    static componentsWithString(URLString: string): any;
    static URLUserAllowedCharacterSet(): any;
    static URLPasswordAllowedCharacterSet(): any;
    static URLHostAllowedCharacterSet(): any;
    static URLPathAllowedCharacterSet(): any;
    static URLQueryAllowedCharacterSet(): any;
    static URLFragmentAllowedCharacterSet(): any;
    /**
     * @returns NSURL*
     * @param components NSArray*
     */
    static fileURLWithPathComponents(components: any[]): NSURL;
    percentEncodedFragment?: string;
    percentEncodedPath?: string;
    query?: string;
    percentEncodedPassword?: string;
    path?: string;
    host?: string;
    password?: string;
    scheme?: string;
    percentEncodedHost?: string;
    percentEncodedUser?: string;
    percentEncodedQuery?: string;
    user?: string;
    fragment?: string;
    port?: number | boolean;
    /**
     * @returns NSString*
     */
    absoluteString(): string;
    /**
     * @returns NSString*
     */
    relativeString(): string;
    /**
     * @returns NSURL*
     */
    baseURL(): NSURL;
    /**
     * @returns NSURL*
     */
    absoluteURL(): NSURL;
    /**
     * @returns NSString*
     */
    /**
     * @returns NSString*
     */
    resourceSpecifier(): string;
    /**
     * @returns NSString*
     */
    parameterString(): string;
    /**
     * @returns NSString*
     */
    relativePath(): string;
    /**
     * @param buffer char*
     */
    getFileSystemRepresentationMaxLength(buffer: string, maxBufferLength: number): boolean;
    /**
     * @returns const char*
     */
    fileSystemRepresentation(): string;
    isFileURL(): boolean;
    /**
     * @returns NSURL*
     */
    standardizedURL(): NSURL;
    /**
     * @param error NSError**
     */
    checkResourceIsReachableAndReturnError(error: NSError): boolean;
    isFileReferenceURL(): boolean;
    /**
     * @returns NSURL*
     */
    fileReferenceURL(): NSURL;
    /**
     * @returns NSURL*
     */
    filePathURL(): NSURL;
    /**
     * @param value out id*
     * @param key NSString*
     * @param error out NSError**
     */
    getResourceValueForKeyError(value: any, key: string, error: NSError): boolean;
    /**
     * @returns NSDictionary*
     * @param keys NSArray*
     * @param error NSError**
     */
    resourceValuesForKeysError(keys: any[], error: NSError): DictObj;
    /**
     * @param key NSString*
     * @param error NSError**
     */
    setResourceValueForKeyError(value: any, key: string, error: NSError): boolean;
    /**
     * @param keyedValues NSDictionary*
     * @param error NSError**
     */
    setResourceValuesError(keyedValues: DictObj, error: NSError): boolean;
    /**
     * @param key NSString*
     */
    removeCachedResourceValueForKey(key: string): void;
    removeAllCachedResourceValues(): void;
    /**
     * @param key NSString*
     */
    setTemporaryResourceValueForKey(value: any, key: string): void;
    /**
     * @returns NSData*
     * @param keys NSArray*
     * @param relativeURL NSURL*
     * @param error NSError**
     */
    bookmarkDataWithOptionsIncludingResourceValuesForKeysRelativeToURLError(options: NSURLBookmarkCreationOptions, keys: any[], relativeURL: NSURL, error: NSError): NSData;
    startAccessingSecurityScopedResource(): boolean;
    stopAccessingSecurityScopedResource(): void;
    /**
     * @returns NSURL*
     */
    URL(): NSURL;
    /**
     * @returns NSURL*
     * @param baseURL NSURL*
     */
    URLRelativeToURL(baseURL: NSURL): NSURL;
    /**
     * @returns NSString*
     * @param allowedCharacters NSCharacterSet*
     */
    stringByAddingPercentEncodingWithAllowedCharacters(allowedCharacters: NSCharacterSet): string;
    /**
     * @returns NSString*
     */
    stringByRemovingPercentEncoding(): string;
    /**
     * @returns NSString*
     */
    stringByAddingPercentEscapesUsingEncoding(enc: NSStringEncoding): string;
    /**
     * @returns NSString*
     */
    stringByReplacingPercentEscapesUsingEncoding(enc: NSStringEncoding): string;
    /**
     * @returns NSArray*
     */
    pathComponents(): string[];
    /**
     * @returns NSString*
     */
    lastPathComponent(): string;
    /**
     * @returns NSString*
     */
    pathExtension(): string;
    /**
     * @returns NSURL*
     * @param pathComponent NSString*
     */
    URLByAppendingPathComponent(pathComponent: string): NSURL;
    /**
     * @returns NSURL*
     * @param pathComponent NSString*
     */
    URLByAppendingPathComponentIsDirectory(pathComponent: string, isDirectory: boolean): NSURL;
    /**
     * @returns NSURL*
     */
    URLByDeletingLastPathComponent(): NSURL;
    /**
     * @returns NSURL*
     * @param pathExtension NSString*
     */
    URLByAppendingPathExtension(pathExtension: string): NSURL;
    /**
     * @returns NSURL*
     */
    URLByDeletingPathExtension(): NSURL;
    /**
     * @returns NSURL* */
    URLByStandardizingPath(): NSURL;
    /**
     * @returns NSURL*
     */
    URLByResolvingSymlinksInPath(): NSURL;
    readonly previewItemURL?: NSURL;
    readonly previewItemTitle?: string;
  }
  class NSTimer {
    /**
     * @returns NSTimer*
     * @param f JSValue*
     */
    static scheduledTimerWithTimeInterval(ti: NSTimeInterval, repeats: boolean, f: (timer: NSTimer) => void): NSTimer;
    fire(): void;
    /**
     * @returns NSDate*
     */
    fireDate(): Date;
    /**
     * @param date NSDate*
     */
    setFireDate(date: Date): void;
    timeInterval(): NSTimeInterval;
    tolerance(): NSTimeInterval;
    setTolerance(tolerance: NSTimeInterval): void;
    invalidate(): void;
    isValid(): boolean;
    userInfo(): any;
  };
  class NSURLConnection {
    static sendAsynchronousRequestQueueCompletionHandler(request: NSURLRequest, queue: NSOperationQueue, completionHandler: JSValue): NSURLRequest;
    static connectionWithRequest(request: NSURLRequest, delegate: any): NSURLConnection;
    static connectionWithRequestDelegate(request: NSURLRequest, delegate: any): NSURLConnection;
    originalRequest: NSURLRequest;
    currentRequest: NSURLRequest;
    response: NSHTTPURLResponse;
    error: NSError;
    delegate: any;
    cancel(): void;
    start(): void;
    scheduleInRunLoopForMode(aRunLoop: NSOperationQueue, mode: string): void;
    unscheduleFromRunLoopForMode(aRunLoop: NSOperationQueue, mode: string): void;
  }
  class NSURLRequest {
    static requestWithURL(url: NSURL): NSURLRequest;
    URL(): NSURL;
    setURL(url: NSURL): void;
  };
  type NSURLResponse = {
    statusCode(): number;
    expectedContentLength(): number;
    textEncodingName(): string;
    suggestedFilename(): string;
  };

  class NSMutableURLRequest extends NSURLRequest {
    static requestWithURL(url: NSURL): NSMutableURLRequest;
    HTTPMethod(): string;
    setURL(url: NSURL): void;
    setValueForHTTPHeaderField(value: string, field: string): void;
    setAllHTTPHeaderFields(headerFields: NSDictionary): void;
    setHTTPBody(data: NSData): void;
    setHTTPMethod(method: string): void;
    /**
     * double
     * */
    setTimeoutInterval(seconds: number): void;
  };
  declare type NSError = {
    domain: string;
    code: number;
    userInfo: NSDictionary;
    localizedDescription: string;
    localizedFailureReason: string;
    localizedRecoverySuggestion: string;
    localizedRecoveryOptions: NSDictionary;
  };
  declare type NSHTTPURLResponse = {
    statusCode: number;
    allHeaderFields: NSDictionary;
  };
  declare type NSURLConnection = {};
  const NSOperationQueue: {
    mainQueue(): NSOperationQueue;
  };
  declare type NSOperationQueue = {};
}

declare const enum UIAlertViewStyle {
  /**
   * The default alert view style. The default.
   */
  Default = 0,
  /**
   * Allows the user to enter text, but the text field is obscured.
   * 输入密码的场景
   */
  SecureTextInput = 1,
  /**
   * Allows the user to enter text.
   */
  PlainTextInput = 2,
  /**
   * Allows the user to enter a login id and a password.
   * @deprecated not support yet
   */
  LoginAndPasswordInput = 3
}
declare global {
  class UIAlertView {
    static showWithTitleMessageStyleCancelButtonTitleOtherButtonTitlesTapBlock(title: string, message: string, style: UIAlertViewStyle, cancelButtonTitle: string, otherButtonTitles: string[], tapBlock: (alert: UIAlertView, buttonIndex: number) => any): UIAlertView;
    static makeWithTitleMessageDelegateCancelButtonTitleOtherButtonTitles(title: string, message: string, delegate: any, cancelButtonTitle: string, otherButtonTitles: string[]): void;
    numberOfButtons: number;
    visible: boolean;
    title: string;
    message: string;
    delegate: any;
    cancelButtonIndex: number;
    alertViewStyle: UIAlertViewStyle;
    firstOtherButtonIndex: number;
    addButtonWithTitle(title: string): void;
    buttonTitleAtIndex(buttonIndex: number): string;
    textFieldAtIndex(textFieldIndex: number): UITextField;
    show(): void;
    dismissWithClickedButtonIndexAnimated(buttonIndex:number,animated:boolean):void;
  };
  class UIApplication {
    static sharedApplication(): UIApplication;
    networkActivityIndicatorVisible: boolean;
    idleTimerDisabled: boolean;
    scheduledLocalNotifications: UILocalNotification[];
    openURLOptionsCompletionHandler(url: NSURL, options: NSDictionary, completionHandler: JSValue): void;
    cancelLocalNotification(notification: UILocalNotification): void;
    scheduleLocalNotification(notification: UILocalNotification): void;

  };
}

declare const enum UIButtonType {
  system = 0
}
declare const enum NSLineBreakMode {
}
declare type UIEdgeInsets = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};
declare const enum UIControlState {
}
declare global {
  class UIButton extends UIControl {
    static buttonWithType(buttonType: UIButtonType): UIButton;
    buttonType: UIButtonType;
    titleEdgeInsets: UIEdgeInsets;
    lineBreakMode: NSLineBreakMode;
    adjustsImageWhenHighlighted: boolean;
    currentImage: UIImage;
    setTitleForState(title: string, state: UIControlState): void;
    setImageForState(image: UIImage, state: UIControlState): void;
    setTitleColorForState(color: UIColor, state: UIControlState): void;
    titleLabel: UILabel;
  }
  class PopupMenu extends UIView {
    static currentMenu(): PopupMenu
    static popupMenuWithItems(items: any[]): PopupMenu
    visible: boolean;
    items: PopupMenuItem[];
    readonly arrowDirection: any;
    readonly targetWinRect: CGRect;
    dismissAnimated(animated: boolean): void
    updateWithTargetRect(targetRect: CGRect): void
    showInViewTargetRectAnimatd(view: UIView, targetRect: CGRect, animated: boolean): void
  }
  class PopupMenuItem {
    title: string
    actionString: string
  }
}

declare class UIControl extends UIView {
  enabled: boolean;
  highlighted: boolean;
  selected: boolean;
  /**
   * UIControlEventTouchDown = 1 << 0, // on all touch downs
   * UIControlEventTouchDownRepeat = 1 << 1, // on multiple touchdowns (tap count > 1)
   * UIControlEventTouchDragInside = 1 << 2,
   * UIControlEventTouchDragOutside = 1 << 3,
   * UIControlEventTouchDragEnter = 1 << 4,
   * UIControlEventTouchDragExit = 1 << 5,
   * UIControlEventTouchUpInside = 1 << 6,
   * UIControlEventTouchUpOutside = 1 << 7,
   * UIControlEventTouchCancel = 1 << 8,
   * UIControlEventValueChanged = 1 << 12, // sliders, etc.
   * UIControlEventEditingDidBegin = 1 << 16, // UITextField
   * UIControlEventEditingChanged = 1 << 17,
   * UIControlEventEditingDidEnd = 1 << 18,
   * UIControlEventEditingDidEndOnExit = 1 << 19, // 'return key' ending editing
   * UIControlEventAllTouchEvents = 0x00000FFF, // for touch events
   * UIControlEventAllEditingEvents = 0x000F0000, // for UITextField
   * UIControlEventApplicationReserved = 0x0F000000, // range available for application use
   * UIControlEventSystemReserved = 0xF0000000, // range reserved for internal framework use
   * UIControlEventAllEvents = 0xFFFFFFFF
   * 
   * @param target 
   * @param action 
   * @param controlEvent 
   */
  addTargetActionForControlEvents(target: any, action: string, controlEvent: UIControlEvents): void;
  removeTargetActionForControlEvents(target: any, action: string, controlEvent: UIControlEvents): void;
}
declare const enum UIControlEvents {
}

declare class UIEvent {
}

declare const enum UIImageOrientation {
  /** Rotated 180 degrees.  */
  Down = 1,
  /** Flipped about its vertical axis and then rotated 180 degrees.  */
  DownMirrored = 5,
  /** Rotated 90 degrees counterclockwise.  */
  Left = 2,
  /** Flipped about its horizontal axis and then rotated 90 degrees counterclockwise.  */
  LeftMirrored = 6,
  /** Rotated 90 degrees clockwise.  */
  Right = 3,
  /** Flipped about its horizontal axis and then rotated 90 degrees clockwise.  */
  RightMirrored = 7,
  /** Default orientation.  */
  Up = 0,
  /** Flipped about its vertical axis.  */
  UpMirrored = 4
}
declare global {
  class UIColor {
    hexStringValue: string;
    colorWithAlphaComponent(alpha: CGFloat): UIColor;
    static colorWithHexString(rgbHex: string): UIColor;
    static colorWithWhiteAlpha(white: number, alpha: number): UIColor;
    static blackColor(): UIColor;
    static darkGrayColor(): UIColor;
    static lightGrayColor(): UIColor;
    static whiteColor(): UIColor;
    static grayColor(): UIColor;
    static redColor(): UIColor;
    static greenColor(): UIColor;
    static blueColor(): UIColor;
    static cyanColor(): UIColor;
    static yellowColor(): UIColor;
    static magentaColor(): UIColor;
    static orangeColor(): UIColor;
    static purpleColor(): UIColor;
    static brownColor(): UIColor;
    static clearColor(): UIColor;
  };
  class UIFont {
    /**
     *  默认 17
     */
    static systemFontOfSize(fontSize: number): UIFont;
    static boldSystemFontOfSize(fontSize: number): UIFont;
    static italicSystemFontOfSize(fontSize: number): UIFont;
    static fontWithNameSize(name: string, size: number): UIFont;
    static labelFontSize(): number;
    static systemFontSize(): number;
    static smallSystemFontSize(): number;
    static buttonFontSize(): number;
    static preferredFontForTextStyle(style: UIFontTextStyle): UIFont;
    static familyNames(): string[];
    static fontNamesForFamilyName(familyName: string): string[];

  };
  class UIImage {
    /**
     * @returns UIImage*
     * @param name NSString*
     */
    static imageNamed(name: string): UIImage;
    /**
     * @returns UIImage*
     * @param path NSString*
     */
    static imageWithContentsOfFile(path: string): UIImage;
    /**
     * @returns UIImage*
     * @param data NSData*
     */
    static imageWithData(data: NSData): UIImage;
    /**
     * @returns UIImage*
     * @param data NSData*
     */
    static imageWithDataScale(data: NSData, scale: CGFloat): UIImage;
    /**
     * @returns UIImage*
     */
    static imageWithCGImage(cgImage: any): UIImage;
    /**
     * @returns UIImage*
     */
    static imageWithCGImageScaleOrientation(cgImage: any, scale: CGFloat, orientation: UIImageOrientation): UIImage;
    drawAtPoint(point: CGPoint): void;
    drawAtPointBlendModeAlpha(point: CGPoint, blendMode: CGBlendMode, alpha: CGFloat): void;
    drawInRect(rect: CGRect): void;
    drawInRectBlendModeAlpha(rect: CGRect, blendMode: CGBlendMode, alpha: CGFloat): void;
    drawAsPatternInRect(rect: CGRect): void;
    /**
     * @returns UIImage*
     */
    resizableImageWithCapInsets(capInsets: UIEdgeInsets): UIImage;
    /**
     * @returns UIImage*
     */
    imageWithAlignmentRectInsets(alignmentInsets: UIEdgeInsets): UIImage;
    /**
     * @returns UIImage*
     * @param leftCapWidth NSInteger
     * @param topCapHeight NSInteger
     */
    stretchableImageWithLeftCapWidthTopCapHeight(leftCapWidth: number, topCapHeight: number): UIImage;
    /**
     * @returns NSData*
     * @param compressionQuality double
     */
    jpegData(compressionQuality: number): NSData;
    /**
     * @returns NSData*
     */
    pngData(): NSData;
  }
  class UIPasteboard {
    persistent: boolean;
    string?: string;
    /**
     *  NSInteger
     */
    readonly numberOfItems: number;
    URL?: NSURL;
    color?: UIColor;
    colors?: UIColor[];
    image?: UIImage;
    /**
     *  NSInteger
     */
    readonly changeCount: number;
    URLs?: NSURL[];
    images?: UIImage[];
    strings?: string[];
    items?: any[];
    readonly name?: string;
    /**
     * @returns NSArray*
     */
    pasteboardTypes(): any[];
    /**
     * @param pasteboardTypes NSArray*
     */
    containsPasteboardTypes(pasteboardTypes: any[]): boolean;
    /**
     * @returns NSData*
     * @param pasteboardType NSString*
     */
    dataForPasteboardType(pasteboardType: string): NSData;
    /**
     * @param pasteboardType NSString*
     */
    valueForPasteboardType(pasteboardType: string): any;
    /**
     * @param pasteboardType NSString*
     */
    setValueForPasteboardType(value: any, pasteboardType: string): void;
    /**
     * @param data NSData*
     * @param pasteboardType NSString*
     */
    setDataForPasteboardType(data: NSData, pasteboardType: string): void;
    /**
     * @returns NSArray*
     * @param itemSet NSIndexSet*
     */
    pasteboardTypesForItemSet(itemSet: NSIndexSet): any[];
    /**
     * @param pasteboardTypes NSArray*
     * @param itemSet NSIndexSet*
     */
    containsPasteboardTypesInItemSet(pasteboardTypes: any[], itemSet: NSIndexSet): boolean;
    /**
     * @returns NSIndexSet*
     * @param pasteboardTypes NSArray*
     */
    itemSetWithPasteboardTypes(pasteboardTypes: any[]): NSIndexSet;
    /**
     * @returns NSArray*
     * @param pasteboardType NSString*
     * @param itemSet NSIndexSet*
     */
    valuesForPasteboardTypeInItemSet(pasteboardType: string, itemSet: NSIndexSet): any[];
    /**
     * @returns NSArray*
     * @param pasteboardType NSString*
     * @param itemSet NSIndexSet*
     */
    dataForPasteboardTypeInItemSet(pasteboardType: string, itemSet: NSIndexSet): any[];
    /**
     * @param items NSArray*
     */
    addItems(items: any[]): void;
    /**
     * @returns UIPasteboard*
     */
    static generalPasteboard(): UIPasteboard;
    /**
     * @returns UIPasteboard*
     * @param pasteboardName NSString*
     */
    static pasteboardWithNameCreate(pasteboardName: string, create: boolean): UIPasteboard;
    /**
     * @returns UIPasteboard*
     */
    static pasteboardWithUniqueName(): UIPasteboard;
    /**
     * @param pasteboardName NSString*
     */
    static removePasteboardWithName(pasteboardName: string): void;
  }
  class UIPopoverController extends UIControl {
    constructor(viewController: UIViewController);
    delegate: any;
    contentViewController: UIViewController;
    popoverContentSize: CGSize;
    passthroughViews: NSArray<UIView>;
    popoverVisible: boolean;
    presentPopoverFromRect(rect: CGRect, view: UIView, arrowDirections: number, animated: boolean): void;
    dismissPopoverAnimated(animated: boolean): void;
    initWithContentViewController(viewController: UIViewController): UIPopoverController;
    presentPopoverFromBarButtonItem(item: UIBarButtonItem, permittedArrowDirections: number, animated: boolean): void;
    setContentViewControllerAnimated(viewController: UIViewController, animated: boolean): void;
  }
  declare class UIKeyCommand {
    undoManager: NSUndoManager;
    keyCommands: NSArray<UIKeyCommand>;
    modifierFlags: UIKeyModifierFlags;
    input: string;
    inputView: UIView;
    inputAccessoryView: UIView;
    textInputContextIdentifier: string;
    static keyCommandWithInputModifierFlagsAction(input:string,modifierFlags: UIKeyModifierFlags, action: string): UIKeyCommand;
  }
  declare class UIResponder {
    nextResponder: UIResponder;
    undoManager: NSUndoManager;
    keyCommands: NSArray<UIKeyCommand>;
    inputView: UIView;
    inputAccessoryView: UIView;
    canBecomeFirstResponder(): boolean;
    becomeFirstResponder(): boolean;
    canResignFirstResponder(): boolean;
    resignFirstResponder(): boolean;
    isFirstResponder(): boolean;
    static keyCommandWithInput(input:string,modifierFlags: UIKeyModifierFlags, action: string): UIKeyCommand;
    static clearTextInputContextIdentifier(identifier: string): void;
  }

}
declare global {
  class UISwitch extends UIControl {
    onTintColor: UIColor;
    on: boolean;
  }
}

declare const enum UITableViewStyle {
}
declare const enum UITableViewCellSeparatorStyle {
}
declare const enum UITableViewScrollPosition {
  /** Scrolls the cell to the bottom of the view. */
  Bottom = 3,
  /** Scrolls the row of interest to the middle of the view. */
  Middle = 2,
  /** Minimal scrolling to make the requested cell visible. */
  None = 0,
  /** Scrolls the row of interest to the top of the view. */
  Top = 1
}
declare const enum UITableViewRowAnimation {
  Fade = 0,
  Right = 1,
  Left = 2,
  Top = 3,
  Bottom = 4,
  None = 5,
  Middle = 6,
  Automatic = 7
}
declare class UITableView extends UIView {
  readonly style: UITableViewStyle;
  dataSource: any;
  rowHeight: CGFloat;
  separatorStyle: UITableViewCellSeparatorStyle;
  separatorColor?: UIColor;
  tableHeaderView?: UIView;
  tableFooterView?: UIView;
  backgroundView?: UIView;
  allowsSelection: boolean;
  /** not implemented */
  allowsSelectionDuringEditing: boolean;
  allowsMultipleSelectionDuringEditing: boolean;
  editing: boolean;
  sectionHeaderHeight: CGFloat;
  sectionFooterHeight: CGFloat;
  reloadData(): void;
  /**
   * @deprecated
   */
  reloadSectionIndexTitles(): void;
  /**
   * @deprecated
   */
  reloadSectionsWithRowAnimation(sections: number[], animation: UITableViewRowAnimation): void;
  /**
   * @deprecated
   */
  reloadRowsAtIndexPathsWithRowAnimation(indexPath: NSIndexPath[], animation: UITableViewRowAnimation): void;
  /**
   *  NSInteger
   */
  numberOfSections(): number;
  numberOfRowsInSection(section: number): number;
  rectForSection(section: number): CGRect;
  rectForHeaderInSection(section: number): CGRect;
  rectForFooterInSection(section: number): CGRect;
  /**
   *  @param indexPath NSIndexPath*
   */
  rectForRowAtIndexPath(indexPath: NSIndexPath): CGRect;
  /**
   *  @returns NSIndexPath*
   */
  indexPathForRowAtPoint(point: CGPoint): NSIndexPath;
  /**
   *  @returns NSIndexPath*
   */
  indexPathForCell(cell: UITableViewCell): NSIndexPath;
  /**
   *  @returns NSArray*
   */
  indexPathsForRowsInRect(rect: CGRect): any[];
  /**
   *  @param indexPath NSIndexPath*
   */
  cellForRowAtIndexPath(indexPath: NSIndexPath): UITableViewCell;
  /**
   *  @returns NSArray*
   */
  visibleCells(): any[];
  /**
   *  @returns NSArray*
   */
  indexPathsForVisibleRows(): any[];
  /**
   *  @returns UIView*
   *  NSInteger
   */
  headerViewForSection(section: number): UIView;
  /**
   *  @returns UIView*
   *  NSInteger
   */
  footerViewForSection(section: number): UIView;
  /**
   * @param indexPath NSIndexPath*
   */
  scrollToRowAtIndexPathAtScrollPositionAnimated(indexPath: NSIndexPath, scrollPosition: UITableViewScrollPosition, animated: boolean): void;
  scrollToNearestSelectedRowAtScrollPositionAnimated(scrollPosition: UITableViewScrollPosition, animated: boolean): void;
  setContentOffsetAnimated(offset: CGPoint, animated: boolean): void;
  rectForHeaderInSection(section: number): CGRect;
  rectForFooterInSection(section: number): CGRect;
  /**
   * @deprecated
   */
  deselectRowAtIndexPath(indexPath: NSIndexPath, animated: boolean): void;
}

declare const enum UITableViewCellSelectionStyle {
}
declare const enum UITableViewCellAccessoryTypeStyle {
}
declare const enum UITableViewCellStyle {
  Default = 0,
  Value1 = 1,
  Value2 = 2,
  Subtitle = 3
}
declare global {
  const UITableViewCell: {
    makeWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): UITableViewCell;
  };
}
declare type UITableViewCell = {
  readonly contentView: UIView;
  readonly textLabel: UILabel;
  readonly detailTextLabel: UILabel;
  readonly imageView: UIImageView;
  hidden: boolean;
  indexPath: NSIndexSet;
  backgroundView: UIView;
  selectedBackgroundView: UIView;
  selectionStyle: UITableViewCellAccessoryTypeStyle;
  accessoryType: UITableViewCellSelectionStyle;
  selected: boolean;
  /** not available */
  setSelected(selected: boolean, animated: boolean): void;
};

declare class UITableViewController extends UIViewController {
  [k: string]: any;
  view: UIView;
  tableView?: UITableView;
  clearsSelectionOnViewWillAppear: boolean;
}

declare const enum NSTextAlignment {
  Left = 0,
  Center = 1,
  Right = 2,
  Justified = 3,
  Natural = 4
}
declare enum UITextBorderStyle {
}
declare global {
  class UITextField extends UIControl {
    [x: string]: any;
    constructor(frame?: CGRect);
    delegate: any;
    textColor: UIColor;
    background: UIImage;
    placeholder: string;
    textAlignment: NSTextAlignment;
    leftView: UIView;
    font: any;
    text: string;
    rightView: UIView;
    editing: boolean;
    borderStyle: UITextBorderStyle;
  }
}

declare class UIViewController {
  loadView(): void;
  viewWillUnload(): void;
  viewDidUnload(): void;
  viewDidLoad(): void;
  isViewLoaded(): void;
  viewWillAppear(animated: boolean): void;
  viewDidAppear(animated: boolean): void;
  viewWillDisappear(animate: boolean): void;
  viewDidDisappear(animate: boolean): void;
  viewWillLayoutSubviews(): void;
  viewDidLayoutSubviews(): void;
  didReceiveMemoryWarning(): void;
  isBeingPresented(): boolean;
  isBeingDismissed(): boolean;
  isMovingToParentViewController(): boolean;
  isMovingFromParentViewController(): boolean;
}

declare const enum UIViewAutoresizing {
}
declare global {

  class UIView extends UIResponder {
    static new(): UIView;
    static animateWithDurationAnimationsCompletion(duration: number, animations: () => void, completion: () => void): void;
    static animateWithDurationAnimations(duration: number, animations: () => void): void;
    constructor(frame?: CGRect);
    bounds: CGRect;
    frame: CGRect;
    layer: CALayer;
    hidden: boolean;
    autoresizingMask: UIViewAutoresizing;
    superview: UIView;
    subviews: UIView[];
    center: CGPoint;
    tag: number;
    autoresizesSubviews: boolean;
    backgroundColor: UIColor;
    window: UIWindow;
    convertRectToView(rect: CGRect, view: UIView): CGRect;
    removeFromSuperview(): void;
    convertPointToView(point: CGPoint, view: UIView): CGPoint;
    addSubview(view: UIView): void;
    bringSubviewToFront(view: UIView): void;
    sendSubviewToBack(view: UIView): void;
    addGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;
    removeGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;
    isDescendantOfView(view: UIView): boolean;
    setNeedsLayout(): void;
  }
  class UITextView extends UIResponder {
    static new(): UITextView;
    static animateWithDurationAnimationsCompletion(duration: number, animations: () => void, completion: () => void): void;
    constructor(frame?: CGRect);
    bounds: CGRect;
    frame: CGRect;
    layer: CALayer;
    hidden: boolean;
    autoresizingMask: UIViewAutoresizing;
    font: UIFont;
    textColor: UIColor;
    superview: UIView;
    subviews: UIView[];
    bounces: Boolean;
    center: CGPoint;
    tag: number;
    text: String;
    editable: Boolean;
    scrollEnabled: boolean;
    autoresizesSubviews: boolean;
    backgroundColor: UIColor;
    selectedRange: { location: Number, length: Number };
    convertRectToView(rect: CGRect, view: UIView): CGRect;
    removeFromSuperview(): void;
    convertPointToView(point: CGPoint, view: UIView): CGPoint;
    addSubview(view: UIView): void;
    sizeThatFits(rect: CGSize): CGSize;
    addGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;
    removeGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;
  }
  class CALayer {
    static new(): CALayer;
    masksToBounds: boolean;
    frame: CGRect;
    cornerRadius: CGFloat;
    borderWidth: CGFloat;
    borderColor: UIColor;
    opacity: CGFloat;
    shadowOffset: CGSize;
    shadowRadius: number;
    shadowOpacity: number;
    shadowColor: UIColor;
    backgroundColor: UIColor;
    zPosition: number;
    addSublayer(layer: CALayer): void;
  }
}



declare const enum UIGestureRecognizerState {
}
declare const enum UISwipeGestureRecognizerDirection {
  Right = 1,
  Left = 2,
  Up = 4,
  Down = 8
}
declare global {
  class UIGestureRecognizer {
    constructor(target: any, action: string);
    state: UIGestureRecognizerState;
    delegate: any;
    enabled: boolean;
    view: UIView;
    cancelsTouchesInView: boolean;
    delaysTouchesBegan: boolean;
    delaysTouchesEnded: boolean;
    numberOfTouches(): number;
    addTargetAction(target: any, action: string): void;
    removeTargetAction(target: any, action: string): void;
    requireGestureRecognizerToFail(otherGestureRecognizer: UIGestureRecognizer): void;
    ignoreTouch(touch: UITouch): void;
    ignoreTouchForEvevnt(touch: UITouch, event: UIEvent): void;
    reset(): void;
    locationInView(view: UIView): CGPoint;
  }
  class UITapGestureRecognizer extends UIGestureRecognizer {
    numberOfTapsRequired: number;
    numberOfTouchesRequired: number;
  }
  class UISwipeGestureRecognizer extends UIGestureRecognizer {
    direction: UISwipeGestureRecognizerDirection;
    numberOfTouchesRequired: number;
  }
  class UIPanGestureRecognizer extends UIGestureRecognizer {
    minimumNumberOfTouches: number;
    maximumNumberOfTouches: number;
    translationInView(view: UIView): CGPoint;
  }
  class UILongPressGestureRecognizer extends UIGestureRecognizer {
    numberOfTapsRequired: number;
    numberOfTouchesRequired: number;
    allowableMovement: number;
    minimumPressDuration: number;
  }
}

declare global {
  class UIScrollView extends UIView {
    static new(): UIScrollView;
    constructor(frame: CGRect);
    contentOffset: CGPoint;
    contentSize: CGSize;
    delegate: any;
    showsVerticalScrollIndicator: Boolean;
    showsHorizontalScrollIndicator: Boolean;
    decelerating: Boolean;
    decelerationRate: CGFloat;
    directionalLockEnabled: Boolean;
    zooming: Boolean;
    alwaysBounceHorizontal: Boolean;
    pinchGestureRecognizer: any;
    scrollsToTop: Boolean;
    maximumZoomScale: CGFloat;
    minimumZoomScale: CGFloat;
    panGestureRecognizer: UIPanGestureRecognizer;
    scrollEnabled: Boolean;
    dragging: Boolean;
    bounces: Boolean;
    delaysContentTouches: Boolean;
    pagingEnabled: Boolean;
    zoomBouncing: Boolean;
    scrollIndicatorInsets: UIEdgeInsets;
    alwaysBounceVertical: Boolean;
    contentInset: UIEdgeInsets;
    bouncesZoom: Boolean;
    tracking: Boolean;
    indicatorStyle: any;
    zoomScale: CGFloat;
    canCancelContentTouches: Boolean;
    setContentOffsetAnimated(contentOffset: CGPoint, animated: Boolean): void;
    scrollRectToVisibleAnimated(rect: CGRect, animated: Boolean): void;
    flashScrollIndicators(): void;
    setZoomScaleAnimated(scale: CGFloat, animated: Boolean): void;
    zoomToRectAnimated(rect: CGRect, animated: Boolean): void;
  }
}

declare global {
  class UIWebView extends UIView {
    constructor(frame: CGRect);
    [k: string]: any;
    scalesPageToFit: boolean;
    autoresizingMask: number;
    delegate: any;
    scrollView: UIScrollView;
    loadFileURLAllowingReadAccessToURL(URL: NSURL, readAccessURL: NSURL): void;
    loadHTMLStringBaseURL(HTMLString: string, baseURL: NSURL): void;
    loadDataMIMETypeTextEncodingNameBaseURL(data: NSData, MIMEType: string, textEncodingName: string, baseURL: NSURL): void;
    evaluateJavaScript(script: string, res: (res: string) => void): void;
    loadRequest(request: NSURLRequest): void;
    request: NSURLRequest;
  }
  class UILabel extends UIView {
    constructor();
    text: string;
    font: UIFont;
    textColor: UIColor;
    textAlignment: NSTextAlignment;
    numberOfLines: number;
    lineBreakMode: number;
    opaque: boolean;
    adjustsFontSizeToFitWidth: boolean;
  }
  class UIWindow extends UIView {
    screen: UIScreen;
    keyWindow: boolean;
    rootViewController: UIViewController;
    windowLevel: number;
    becomeKeyWindow(): void;
    resignKeyWindow(): void;
    makeKeyWindow(): void;
    makeKeyAndVisible(): void;
    sendEvent(event: UIEvent);
    convertPointToWindow(point: CGPoint, window: UIWindow): CGPoint;
    convertPointFromWindow(point: CGPoint, window: UIWindow): CGPoint;
    convertRectToWindow(rect: CGRect, window: UIWindow): CGRect;
    convertRectFromWindow(rect: CGRect, window: UIWindow): CGRect;
  }
  class UILocalNotification {
    fireDate: Date;
    alertBody: string;
    soundName: string;
    userInfo: any;
    timeZone: TimeZone;
  }
}

declare type UIImageView = any;
declare type UITouch = any;
declare type CGFloat = number;
declare type CGBlendMode = any;
declare type CGPoint = {
  x: number;
  y: number;
};
declare type CGSize = {
  width: number;
  height: number;
};
declare type CGRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};
declare global {
  const UIDevice: {
    currentDevice(): UIDevice;
  };
}
declare type UIDevice = {
  systemVersion: string;
};


declare global {
  const NSUserDefaults: {
    standardUserDefaults(): NSUserDefaults;
    resetStandardUserDefaults(): void;
  };
  const NSUbiquitousKeyValueStore: {
    defaultStore(): NSUbiquitousKeyValueStore;
  };
}
declare type NSUbiquitousKeyValueStore = {
  objectForKey(key: string): object;
  setObjectForKey(value: object, key: string): void;
  synchronize(): boolean;
  removeObjectForKey(key: string): void;
};
declare type NSUserDefaults = {
  /**
   * @param defaultName NSString*
   */
  objectForKey(defaultName: string): object;
  /**
   * @param defaultName NSString*
   */
  setObjectForKey(value: object, defaultName: string): void;
  /**
   * @param defaultName NSString*
   */
  removeObjectForKey(defaultName: string): void;
  /**
   * @returns NSString*
   * @param defaultName NSString*
   */
  stringForKey(defaultName: string): string;
  /**
   * @returns NSArray*
   * @param defaultName NSString*
   */
  arrayForKey(defaultName: string): any[];
  /**
   * @returns NSDictionary*
   * @param defaultName NSString*
   */
  dictionaryForKey(defaultName: string): DictObj;
  /**
   * @returns NSData*
   * @param defaultName NSString*
   */
  dataForKey(defaultName: string): NSData;
  /**
   * @returns NSArray*
   * @param defaultName NSString*
   */
  stringArrayForKey(defaultName: string): any[];
  /**
   * @returns NSInteger
   * @param defaultName NSString*
   */
  integerForKey(defaultName: string): number;
  /**
   * @returns float
   * @param defaultName NSString*
   */
  floatForKey(defaultName: string): number;
  /**
   * @returns double
   * @param defaultName NSString*
   */
  doubleForKey(defaultName: string): number;
  /**
   * @param defaultName NSString*
   */
  boolForKey(defaultName: string): boolean;
  /**
   * @returns NSURL*
   * @param defaultName NSString*
   */
  URLForKey(defaultName: string): NSURL;
  /**
   * @param value NSInteger
   * @param defaultName NSString*
   */
  setIntegerForKey(value: number, defaultName: string): void;
  /**
   * @param value float
   * @param defaultName NSString*
   */
  setFloatForKey(value: number, defaultName: string): void;
  /**
   * @param value double
   * @param defaultName NSString*
   */
  setDoubleForKey(value: number, defaultName: string): void;
  /**
   * @param defaultName NSString*
   */
  setBoolForKey(value: boolean, defaultName: string): void;
  /**
   * @param url NSURL*
   * @param defaultName NSString*
   */
  setURLForKey(url: NSURL, defaultName: string): void;
  /**
   * @param registrationDictionary NSDictionary*
   */
  registerDefaults(registrationDictionary: DictObj): void;
  /**
   * @param suiteName NSString*
   */
  addSuiteNamed(suiteName: string): void;
  /**
   * @param suiteName NSString*
   */
  removeSuiteNamed(suiteName: string): void;
  /**
   * @returns NSDictionary*
   */
  dictionaryRepresentation(): DictObj;
  /**
   * @returns NSArray*
   */
  volatileDomainNames(): any[];
  /**
   * @returns NSDictionary*
   * @param domainName NSString*
   */
  volatileDomainForName(domainName: string): DictObj;
  /**
   * @param domain NSDictionary*
   * @param domainName NSString*
   */
  setVolatileDomainForName(domain: DictObj, domainName: string): void;
  /**
   * @param domainName NSString*
   */
  removeVolatileDomainForName(domainName: string): void;
  /**
   * @returns NSArray*
   */
  persistentDomainNames(): any[];
  /**
   * @returns NSDictionary*
   * @param domainName NSString*
   */
  persistentDomainForName(domainName: string): DictObj;
  /**
   * @param domain NSDictionary*
   * @param domainName NSString*
   */
  setPersistentDomainForName(domain: DictObj, domainName: string): void;
  /**
   * @param domainName NSString*
   */
  removePersistentDomainForName(domainName: string): void;
  synchronize(): boolean;
  /**
   * @param key NSString*
   */
  objectIsForcedForKey(key: string): boolean;
  /**
   * @param key NSString*
   * @param domain NSString*
   */
  objectIsForcedForKeyInDomain(key: string, domain: string): boolean;
};

declare global {
  const NSIndexSet: {
    indexSetWithIndex(index: number): NSIndexSet;
  };
}
declare type NSIndexSet = {
  isEqualToIndexSet(indexSet: NSIndexSet): boolean;
  firstIndex(): number;
  lastIndex(): number;
};

/**
 * callback function
 */
declare type JSValue = any;
/**
 * JSON Object
 */
declare type NSDictionary = any;
declare type NSRange = { location: number, length: number };
declare type NSMutableArray<T = any> = T[];
declare type NSCharacterSet = any;
declare type NSIndexPath = {
  row: number;
  section: number;
};
declare type NSNull = typeof NSNull;
declare global {
  const NSIndexPath: {
    indexPathForRowInSection(row: number, section: number): NSIndexPath;
  };
  class NSNull {
    static new(): NSNull;
  }
  const NSUUID: {
    UUID(): {
      /** have \- */
      UUIDString(): string;
    };
  };
}

declare const enum NotebookType {
  Hiden = 0,
  Doc = 1,
  MindMap = 2,
  FlashCard = 3
}
interface TextContent {
  /**
   * @example
   * String.fromCharCode(Number(char))
   */
  readonly char: string;
  readonly rect: NSValue;
}
/**
 * MarginNote database object
 */
declare class MbModelTool {
  getNotebookById(notebookid: string): MbTopic | undefined;
  getMediaByHash(hash: string): NSData | undefined;
  getNoteById(noteid: string): MbBookNote | undefined;
  getDocumentById(md5: string): MbBook | undefined;
  /**
   * Get note in review mode
   */
  getFlashcardByNoteId(noteid: string, notebookid: string): MbBookNote | undefined;
  /**
   * Get notes in review mode
   */
  getFlashcardsByNoteId(noteid: string): MbBookNote[] | undefined;
  /**
   * Whether has note in review mode
   */
  hasFlashcardByNoteId(noteid: string): boolean;
  savedb(): void;
  /**
   * Fetch all notebooks
   */
  allNotebooks(): MbTopic[];
  /**
   * Fetch all documents
   */
  allDocuments(): MbBook[];
  setNotebookSyncDirty(notebookid: string): void;
  saveHistoryArchiveKey(notebookid: string, key: string): any[];
  loadHistoryArchiveKey(notebookid: string, key: string): any[];
  deleteBookNote(noteid: string): void;
  /**
   * Delete note and its all descendant notes
   */
  deleteBookNoteTree(noteid: string): void;
  /**
   * Clone notes to a notebook, and return the cloned notes
   */
  cloneNotesToTopic(notes: MbBookNote[], notebookid: string): MbBookNote[];
  cloneNotesToFlashcardsToTopic(notes: MbBookNote[], notebookid: string): MbBookNote[];
  exportNotebookStorePath(notebookid: string, storePath: string): boolean;
  importNotebookFromStorePathMerge(storePath: string, merge: boolean): any;
  /**
   * Get handwriting notes in notebook mindmap
   */
  getSketchNotesForMindMap(notebookid: string): MbBookNote[];
  getSketchNotesForDocumentMd5Page(notebookid: string, docmd5: string, page: number): MbBookNote[];
}
declare global {
  const Database: {
    sharedInstance(): MbModelTool;
    /**
     * Transfrom unreadable OC dictionary to JS compatible
     */
    transDictionaryToJSCompatible(dic: any): any;
    /**
     * Transfrom unreadable OC array to JS compatible
     */
    transArrayToJSCompatible(arr: any): any;
  };

  /**
   * Note comments
   * @see {@link MbBookNote.comments}
   */
  declare type NoteComment = TextComment | HtmlComment | LinkComment | PaintComment | AudioComment;
  /**
   * Basic Comment, just text you typed
   * @see {@link NoteComment}
   */
  interface TextComment {
    type: "TextNote";
    /**
     * Get the content of the comment
     */
    text: string;
    /**
     * NoteID of the note, is only valid after merging the notes
     */
    noteid?: string;
    /**
     * Whether the comment is markdown
     */
    markdown?: boolean;
  }
  /**
   * Generate when html copied to note
   * @see {@link NoteComment}
   */
  interface HtmlComment {
    type: "HtmlNote";
    /**
     * Size of the render image
     */
    htmlSize: DictObj;
    /**
     * RTF
     */
    rtf: DictObj;
    /**
     * HTML code
     */
    html: string;
    /**
     * Text
     */
    text: string;
    /**
     * NoteID of the note
     */
    noteid?: string;
  }
  /**
   * Picture comment
   * @see {@link NoteComment}
   */
  interface PaintComment extends MNPic {
    type: "PaintNote";
  }
  /**
   * Audio comment
   * @see {@link AudioComment}
   */
  interface AudioComment {
    type: "AudioNote";
    audio: string;
    compressed: boolean;
  }
  /**
   * It not means link to another note and it will be generated when merge notes.
   * The notes merged into is the LinkComment
   * @see {@link NoteComment}
   */
  declare type LinkComment = LinkCommentText | LinkCommentPic;
  /**
   * @see {@link LinkComment}
   */
  interface LinkCommentText {
    type: "LinkNote";
    /**
     * NoteID of the note
     */
    noteid: string;
    /**
     * Text of the comment
     */
    q_htext: TextComment["text"];
  }
  /**
   * @see {@link LinkComment}
   */
  interface LinkCommentPic {
    type: "LinkNote";
    /**
     * NoteID of the note
     */
    noteid: string;
    /**
     * Text of the comment : {@link TextComment.text}
     */
    q_htext?: TextComment["text"];
    /**
     * Image of the comment : {@link MNPic}
     */
    q_hpic: MNPic;
  }
}



declare const enum GroupMode {
  Tree = 0,
  Frame = 1
}
/**
 * Notes of excerpt, mindmap nodes, and flashcards
 * @see {@link NodeNote} for better usage
 */
declare global {

class MbBook {
  /**
   * Last notebook which the document is in and opened
   */
  readonly currentTopicId?: string;
  /**
   * Date of last visit
   */
  readonly lastVisit?: Date;
  /**
   * docMd5 of the document
   */
  readonly docMd5?: string;
  /**
   * pathFile of the document
   */
  readonly pathFile?: string;
  /**
   * fullPathFile of the document
   */
  readonly fullPathFileName?: string;
  /**
   * Title of the document
   */
  readonly docTitle?: string;
  /**
   * Page count of the document
   */
  readonly pageCount: number;
  /**
   * Content of text layer of the document, not including OCR Pro layer
   * Each row and each character is an element of the array
   */
  textContentsForPageNo(pageNo: number): TextContent[][];
}
class MbTopic {
  /**
   * notebook title, can be modified
   */
  title?: string;
  /**
   * nodebook id
   */
  readonly topicId?: string;
  readonly lastVisit?: Date;
  /**
   * main document md5
   */
  readonly mainDocMd5?: string;
  readonly historyDate?: Date;
  readonly syncMode?: number | boolean;
  readonly categoryList?: string;
  readonly hashtags?: string;
  readonly docList?: string;
  readonly options?: DictObj;
  /**
   * doucments in the notebook
   */
  readonly documents?: MbBook[];
  /**
   * notes in the notebook
   */
  readonly notes?: MbBookNote[];
  /**
   * Hiden = 0,
   * Doc = 1,
   * MindMap = 2,
   * FlashCard = 3
   */
  readonly flags: NotebookType;
  hideLinksInMindMapNode: boolean;
}
  class MbBookNote {
    /**
     * Excerpt text of the note
     */
    excerptText?: string;
    excerptTextMarkdown: boolean;
    /**
     * Title of the note
     */
    noteTitle?: string;
    /**
     * A int value, 0-15
     * Index of the color
     */
    colorIndex: number;
    /**
     * A int value, 0-2
     * Index of the fill type
     */
    fillIndex: number;
    /**
     * @deprecated
     * not working
     */
    mindmapPosition: CGPoint;
    /**
     * Note id
     */
    readonly noteId: string;
    /**
     * MD5 of the document
     */
    readonly docMd5?: string;
    /**
     * Notebook id
     */
    readonly notebookId?: string;
    /**
     * Page number of the start position of the note
     */
    readonly startPage?: number;
    /**
     * Page number of the end position of the note
     */
    readonly endPage?: number;
    /**
     * Start position of the note, like x,y
     */
    readonly startPos?: string;
    /**
     * End position of the note, like x,y
     */
    readonly endPos?: string;
    /**
     * Excerpt picture of the note, just the area of you selected
     */
    readonly excerptPic?: ExcerptPic;
    /**
     * Date of the note created
     */
    readonly createDate: Date;
    /**
     * Date of the note modified
     */
    readonly modifiedDate?: Date;
    /**
     * List of media hash value seprated by '-'
     * @example
     * "mediaHash1-mediaHash2-mediaHash3"
     * note.mediaList?.split("-").map(hash => MNUtil.db.getMediaByHash(hash))
     */
    readonly mediaList?: string;
    /**
     * 文档摘录和它在脑图对应的卡片具有不同的id,通过originNoteId可以获得文档摘录的id
     * 
     */
    readonly originNoteId?: string;
    /**
     * Whether the note branch in mindmap is closed
     */
    readonly mindmapBranchClose?: number;
    /**
     * All the note text
     */
    readonly notesText?: string;
    /**
     * It Will be valid after merging itself into another note. It's the note id of the note it merged into.
     * @deprecated MarginNote v4.0
     */
    readonly groupNoteId?: string;
    /**
     * just the same as {@link MbBookNote.groupNoteId} in MarginNote v4.0
     */
    realGroupNoteIdForTopicId?(nodebookid: string): string;
    /**
    //  * Comments of the note, different from the excerptText
     */
    readonly comments: NoteComment[];
    /**
     * Parent-notes of the note
     */
    readonly parentNote?: MbBookNote;
    /**
     * List of Linked-note ID, used to locate the linked note card
     */
    readonly linkedNotes: {
      summary: boolean;
      /**
       * nodeid of the linked note
       */
      noteid: string;
      /**
       * text of the linked note
       */
      linktext: string;
    }[];
    /**
     * Child-notes of the note
     */
    readonly childNotes?: MbBookNote[];
    /**
     * Array of summarized note-id,只有概要卡片有这信息
     */
    readonly summaryLinks: string[];
    /**
     * A int value
     */
    readonly zLevel?: number;
    /**
     * Whether the card is hidden
     */
    readonly hidden?: boolean;
    /**
     * A int value
     */
    readonly toc?: number;
    readonly annotation?: boolean;
    /**
     * Whether the image has been OCR to text
     */
    textFirst: boolean;
    /**
     * Mindmap group mode of the node branch，框架模式
     */
    readonly groupMode?: GroupMode;
    /**
     * A int value
     * Whether the note has a flashcard
     */
    readonly flashcard?: number;
    /**
     * A int value，概要卡片为true，其他为false，概要卡片有summaryLinks信息，同时评论中也会有指向卡片的链接
     */
    readonly summary: boolean;
    /**
     * A int value
     */
    readonly flagged?: number;
    readonly textHighlight?: {
      highlight_text: string;
      coords_hash: string;
      maskList?: string[];
      textSelLst?: any[];
    };
    readonly options?: DictObj;
    readonly childMindMap?: MbBookNote;
    paste(): void;
    /**
     * Clear format of the note
     */
    clearFormat(): void;

    allNoteText(): string;
    /**
     * Merge another note to this note
     */
    merge(note: MbBookNote): void;
    /**
     * Add another note as child note
     */
    addChild(note: MbBookNote): void;
    /**
     * Append HTML comment to the note
     * @param html HTML text of the comment
     * @param text Pure text of the comment
     * @param size Size of the comment
     * @param tag Markdown editor plugin id. The HTML comment will be rendered by the plugin.
     * @returns
     */
    appendHtmlComment(html: string, text: string, size: CGSize, tag: string): void;
    /**
     * Append one text comment to the note
     */
    appendTextComment(text: string): void;
    /**
     * Append one text comment to the note, but it will be rendered as Markdown
     */
    appendMarkdownComment?(text: string): void;
    /**
     * Append Note Link to the note
     */
    appendNoteLink(note: MbBookNote): void;
    /**
     * Remove comment by index
     */
    removeCommentByIndex(index: number): void;
    /**
     * Number of handwritten strokes
     */
    getStrokesCount(): number;
    /**
     * Remove from parent
     * 去除当前note的父关系(没用过不确定具体效果)
     */
    removeFromParent(): void;
    insertChildBefore(note: MbBookNote, n: MbBookNote): void;
  }
}
/**
 * Base type of the picture in MarginNote
 */
interface MNPic {
  /**
   * A hash value. Use it to get the picture from {@link MNUtil.db.getMediaByHash} and encode it to base64
   * @example
   * MNUtil.db.getMediaByHash(pic.paint)?.base64Encoding()
   */
  paint: string;
  /**
   * CGSize, use {@link CGSizeValue2CGSize} to convert it to {@link CGSize}
   */
  size: NSValue;
}
/**
 * The area of the excerpt
 */
interface ExcerptPic extends MNPic {
  selLst: {
    [key: number]: {
      /**
       * Rotation of the picture
       */
      rotation: number;
      /**
       * CGRect Value, the position of the picture in the note
       * use {@link CGRectValue2CGRect} to convert it to {@link CGRect}
       */
      rect: NSValue;
      /**
       * CGRect Value, same as rect
       */
      imgRect: NSValue;
      pageNo: number;
    };
  };
}
declare global {
  const Note: {
    /**
     * Used to create a new note with title, notebook and document.
     * It can't be created to a specific position now.
     * @returns MbBookNote*
     * @example
     * Note.createWithTitleNotebookDocument('title', current-topic, current-book)
     */
    createWithTitleNotebookDocument(title: string, notebook: MbTopic, doc: MbBook): MbBookNote;
  };
  class DocumentController {
    readonly document?: MbBook;
    /**
     * MD5 of the document.
     */
    readonly docMd5?: string;
    /**
     * ID of Notebook
     */
    readonly notebookId?: string;
    /**
     * Focus note of document, usually the note you are clicking on
     */
    readonly focusNote?: MbBookNote;
    /**
     * Last focus note, only valid when you are selecting text
     */
    readonly lastFocusNote?: MbBookNote;
    /**
     * Visible focus note
     */
    readonly visibleFocusNote?: MbBookNote;
    /**
     * Text you are selecting
     */
    readonly selectionText?: string;
    /**
     * whether user is selecting text, false for image selection
     */
    readonly isSelectionText?: boolean;
    /**
     * Image from selection, usually converted to base64 to use.
     */
    imageFromSelection(): NSData;
    /**
     * Image from focusNode
     */
    imageFromFocusNote(): NSData;
    /**
     * start from 1. The virtual page has a large number of discontinuous pages
     * */
    readonly currPageNo: number;
    /**
     * start from 0, but if page deleted, the index will be 0.
     * */
    readonly currPageIndex: number;
    /**
     * convert page index to page number
     */
    indexFromPageNo(pageNo: number): number;
    /**
     * convert page number to page index
     */
    pageNoFromIndex(index: number): number;
    /**
     * Jump to the page index
     */
    setPageAtIndex(index: number): void;
    /**
     * Get all page indices from page number, which is not one-to-one mapping.
     */
    indicesFromPageNo(pageNo: number): number[];
    /**
     * Get the note from the current selection
     */
    highlightFromSelection(): MbBookNote;
  }
}

declare const enum OSType {
  iPadOS = 0,
  iPhoneOS = 1,
  macOS = 2
}
declare const enum StudyMode {
  doc0 = 0,
  doc1 = 1,
  /**
   * Mindmap mode
   */
  study = 2,
  review = 3
}
declare const enum DocMapSplitMode {
  allMap = 0,
  half = 1,
  allDoc = 2
}
declare class DocumentController {
  readonly document?: MbBook;
  /**
   * MD5 of the document.
   */
  readonly docMd5?: string;
  /**
   * ID of Notebook
   */
  readonly notebookId?: string;
  /**
   * Focus note of document, usually the note you are clicking on
   */
  readonly focusNote?: MbBookNote;
  /**
   * Last focus note, only valid when you are selecting text
   */
  readonly lastFocusNote?: MbBookNote;
  /**
   * Visible focus note
   */
  readonly visibleFocusNote?: MbBookNote;
  /**
   * Text you are selecting
   */
  readonly selectionText?: string;
  /**
   * whether user is selecting text, false for image selection
   */
  readonly isSelectionText?: boolean;
  /**
   * Image from selection, usually converted to base64 to use.
   */
  imageFromSelection(): NSData;
  /**
   * Image from focusNode
   */
  imageFromFocusNote(): NSData;
  /**
   * start from 1. The virtual page has a large number of discontinuous pages
   * */
  readonly currPageNo: number;
  /**
   * start from 0, but if page deleted, the index will be 0.
   * */
  readonly currPageIndex: number;
  /**
   * convert page index to page number
   */
  indexFromPageNo(pageNo: number): number;
  /**
   * convert page number to page index
   */
  pageNoFromIndex(index: number): number;
  /**
   * Jump to the page index
   */
  setPageAtIndex(index: number): void;
  /**
   * Get all page indices from page number, which is not one-to-one mapping.
   */
  indicesFromPageNo(pageNo: number): number[];
}
/**
 * MindMap Node
 */
declare class MindMapNode {
  readonly note: MbBookNote;
  readonly parentNode?: MindMapNode;
  readonly summaryLinks?: any[];
  readonly childNodes?: MindMapNode[];
  /**
   * Node rect in mindmap view
   */
  readonly frame: CGRect;
}
/**
 * View of MindMap
 */
declare class MindMapView extends UIView {
  /**
   * MindMap Nodes
   */
  readonly mindmapNodes?: MindMapNode[];
  /**
   * Nodes of selected
   */
  readonly selViewLst?: {
    note: MindMapNode;
    view: UIView;
  }[];
}
/**
 * Controller of notebook
 */
declare class NotebookController {
  /**
   * View of notebook Controller
   */
  readonly view: UIView;
  /**
   * Outline view
   */
  readonly outlineView: OutlineView;
  /**
   * MindMap view
   */
  readonly mindmapView: MindMapView;
  /**
   * Notebook id
   */
  readonly notebookId?: string;
  /**
   * Focus note
   */
  readonly focusNote?: MbBookNote;
  /**
   * Visible focus note
   */
  readonly visibleFocusNote?: MbBookNote;
}
/**
 * Outline view
 */
declare class OutlineView {
  noteFromIndexPath(indexPath: NSIndexPath): MbBookNote;
  frame: CGRect;
}
/**
 * Reader Controller
 */
declare class ReaderController {
  readonly currentDocumentController: DocumentController;
  /**
   * Document controllers
   */
  readonly documentControllers?: DocumentController[];
  /**
   * view of ReaderController
   * {@link UIView}
   */
  view: UIView;
}
/**
 * Study Controller
 */
declare class StudyController extends UIViewController {
  /**
   * View of the study controller
   */
  view: UIView;
  /**
   * Study Mode
   */
  readonly studyMode: StudyMode;
  /**
   * Narrow Mode
   */
  readonly narrowMode: boolean;
  /**
   * DocMap Split Mode
   * {@link DocMapSplitMode}
   */
  docMapSplitMode: DocMapSplitMode;
  /**
   * Right Map Mode
   */
  rightMapMode: boolean;
  /**
   * Get notebook controller
   */
  readonly notebookController: NotebookController;
  /**
   * Get reader controller
   */
  readonly readerController: ReaderController;
  readonly extensionPanelController: UIViewController;
  /**
   * @param noteId NSString*
   */
  focusNoteInMindMapById(noteId: string): void;
  /**
   * @param noteId NSString*
   */
  focusNoteInFloatMindMapById(noteId: string): void;
  /**
   * @param noteId NSString*
   */
  focusNoteInDocumentById(noteId: string): void;
  refreshAddonCommands(): void;
  openNotebookAndDocument(notebookId: string, docMd5: string): void;
  isNoteInReview(noteId: string): boolean;
  toggleExtensionPanel(): void;
}
declare global {

  class ApplicationInstance {
    /**
     * @value 4.0.2(97)
     *
     * 4.0.2 is version, 97 is build num
     */
    readonly appVersion: string;
    /**
     * @value 4.0.2(97)
     */
    readonly build: string;
    /**
     * Current theme
     */
    readonly currentTheme: "Gray" | "Default" | "Dark" | "Green" | "Sepia";
    /**
     * default tint color for dark background
     */
    readonly defaultTintColorForDarkBackground?: UIColor;
    /**
     * default tint color for selected
     */
    readonly defaultTintColorForSelected?: UIColor;
    /**
     * default tint color
     */
    readonly defaultTintColor?: UIColor;
    /**
     * default book page color
     */
    readonly defaultBookPageColor?: UIColor;
    /**
     * default note book color
     */
    readonly defaultNotebookColor?: UIColor;
    /**
     * default text color
     */
    readonly defaultTextColor?: UIColor;
    /**
     * default disable color
     */
    readonly defaultDisableColor?: UIColor;
    /**
     * default highlight blend color
     */
    readonly defaultHighlightBlendColor?: UIColor;
    /**
     * Focus window
     */
    readonly focusWindow?: UIWindow;
    /**
     * Database path
     */
    readonly dbPath?: string;
    /**
     * Document relative path
     */
    readonly documentPath?: string;
    /**
     * Cache path
     */
    readonly cachePath?: string;
    /**
     * Temp path
     */
    readonly tempPath?: string;
    /**
     * OS type
     */
    readonly osType: OSType;
    /**
     * Refresh Note data
     */
    refreshAfterDBChanged(notebookid: string): void;
    queryCommandWithKeyFlagsInWindow(command: string, keyFlags: number, window: UIWindow): DictObj;
    processCommandWithKeyFlagsInWindow(command: string, keyFlags: number, window: UIWindow): void;
    /**
     */
    openURL(url: NSURL): void;
    /**
     */
    alert(message: string): void;
    /**
     */
    showHUD(message: string, view: UIView, duration: number): void;
    /**
     */
    waitHUDOnView(message: string, view: UIView): void;
    /**
     */
    stopWaitHUDOnView(view: UIView): void;
    /**
     */
    saveFileWithUti(mfile: string, uti: string[]): void;
    /**
     */
    studyController(window: UIWindow): StudyController;
    /**
     * Check the notify sender is current window.
     * @param obj Usually sender
     * @param window
     */
    checkNotifySenderInWindow(obj: any, window: UIWindow): boolean;
    /**
     */
    openFileWithUTIs(types: string[], controller: UIViewController, callback: (file: string) => void): void;
    /**
     * Register a html comment editor
     * @param commentTag The markdown editor plugin id
     * @see "https://github.com/marginnoteapp/milkdown/blob/main/src/jsExtension/lifeCycle.ts#L80"
     */
    regsiterHtmlCommentEditor(commentEditor: DictObj, htmlEditor: JSValue, htmlRender: JSValue, commentTag: string): void;
    /**
     * Unregister a html comment editor
     * @param commentTag The markdown editor plugin id
     */
    unregsiterHtmlCommentEditor(commentTag: string): void;
    /**
     * 
     * @param filePath The file path of the document to import
     * @returns The imported document md5
     */
    importDocument(filePath: string): string;
  }
  /**
   * Application class
   */
  const Application: {
    /**
     * Create an Application instance
     */
    sharedInstance(): ApplicationInstance;
  };
}

declare global {
  /**
   * Application class
   */
  const customController: {
    view: UIView;
  };
}

declare global {
  /**
   * Speech text
   */
  const SpeechManager: {
    sharedInstance(): SpeechManager;
  };
  /**
   * Undo
   */
  const UndoManager: {
    sharedInstance(): UndoManager;
  };
  /**
   * zip & unzip tools
   */
  const ZipArchive: {
    initWithPath(path: string): ZipArchive;
    unzipFileAtPathToDestination(path: string, destination: string): boolean;
    unzipFileAtPathToDestinationOverwritePassword(path: string, destination: string, overwrite: boolean, password: string): boolean;
    createZipFileAtPathWithFilesAtPaths(path: string, filenames: string[]): boolean;
    createZipFileAtPathWithContentsOfDirectory(path: string, directoryPath: string): boolean;
  };
  class MenuController extends UIViewController {
    /**
     * new instance
     */
    static new(): MenuController;
    menuTableView?: UITableView;
    commandTable?: {
      title: string;
      /** OC Object */
      object: any;
      selector: string;
      height?: number;
      param: Record<string, any>;
      checked: boolean;
    }[];
    sections?: any[];
    rowHeight: number;
    secHeight: number;
    fontSize: number;
    preferredContentSize: {
      width: number;
      height: number;
    };
  }
}
declare type SpeechManager = {
  /**
   * start speech notes
   */
  startSpeechNotes(notes: any[]): void;
  /**
   * stop speech
   */
  stopSpeech(): void;
  /**
   * pause speech
   */
  pauseSpeech(): void;
  /**
   * continue speech
   */
  continueSpeech(): void;
  /**
   * previous speech
   */
  prevSpeech(): void;
  /**
   * next speech
   */
  nextSpeech(): void;
  canPrev(): boolean;
  canNext(): boolean;
  playText(text: string): void;
  playTextLanguageTxt(text: string, languageTxt: string): void;
  /**
   * If speaking
   */
  readonly speaking: boolean;
  /**
   * If paused
   */
  readonly paused: boolean;
  /**
   * when speak text
   */
  readonly sysSpeaking: boolean;
  /**
   * Scene window
   */
  sceneWindow?: UIWindow;
  languageCode?: string;
};
declare type UndoManager = {
  undoGrouping(actionName: string, notebookid: string, block: JSValue): void;
  /**
   * undo an action
   */
  undo(): void;
  /**
   * redo an action
   */
  redo(): void;
  /**
   * if can undo
   */
  canUndo(): boolean;
  /**
   * if can redo
   */
  canRedo(): boolean;
  /**
   * clear all actions
   */
  clearAll(): void;
};
declare type ZipArchive = {
  open(): boolean;
  writeFile(path: string): boolean;
  writeDataFilename(data: NSData, filename: string): boolean;
  close(): boolean;
};

declare global {
  const SQLiteDatabase: {
    databaseWithPath(path: string): SQLiteDatabase;
  };
}
declare type SQLiteDatabase = {
  open(): boolean;
  close(): boolean;
  goodConnection(): boolean;
  executeQueryWithArgumentsInArray(sql: string, args: any[]): SQLiteResultSet;
  executeQueryWithParameterDictionary(sql: string, args: object): SQLiteResultSet;
  executeUpdateWithParameterDictionary(sql: string, args: object): boolean;
  executeUpdateWithArgumentsInArray(sql: string, args: any[]): boolean;
  executeStatements(sql: string): boolean;
};
declare class SQLiteResultSet {
  stringForColumn(columnName: string): string;
  intForColumn(columnName: string): number;
  next(): boolean;
  close(): void;
  resultDictionary(): DictObj;
}

/**
 * Addon of MarginNote
 */
declare class JSExtension {
  [k: string]: any;
  readonly window?: UIWindow;
  /**
   * Query Addon Status, usally used for checking if activate the addon
   * @returns NSDictionary*
   */
  queryAddonCommandStatus(): {
    /**
     * path to icon file
     * image size must be 44x44 px
     */
    image: string;
    /**
     * object of the function, usually self
     */
    object: any;
    /**
     * selector of the function, for another word, when you click(tap) on the icon, what function will be executed
     * @example
     * toggle:
     */
    selector: string;
    /**
     * checked status
     */
    checked: boolean;
  } | null;
  additionalTitleLinksOfNotebook(notebookid: string): any[];
  viewControllerForTitleLink(titleLink: string): UIViewController;
  controllerWillLayoutSubviews(controller: UIViewController): void;
  additionalShortcutKeys(): any[];
  queryShortcutKeyWithKeyFlags(command: string, keyFlags: number): DictObj;
  processShortcutKeyWithKeyFlags(command: string, keyFlags: number): void;
}
/**
 * LifeCycle of Addon
 */
declare namespace JSExtensionLifeCycle {
  type InstanceMethods = Partial<{
    /**
     * Do something when MarginNote open a window
     * @returns void
     */
    sceneWillConnect(): void;
    /**
     *  Do something when MarginNote close a window
     */
    sceneDidDisconnect(): void;
    /**
     * Do something when MarginNote window resign active
     */
    sceneWillResignActive(): void;
    /**
     * Do something when activate MarginNote window
     */
    sceneDidBecomeActive(): void;
    /**
     * Do something when notebook open
     * @param topicid NSString*
     */
    notebookWillOpen(notebookid: string): void;
    /**
     * Do something when notebook close
     * @param topicid NSString*
     */
    notebookWillClose(notebookid: string): void;
    /**
     * Do something when document open
     * @param docmd5 NSString*
     */
    documentDidOpen(docmd5: string): void;
    /**
     * Do something when document close
     * @param docmd5 NSString*
     * @returns void
     */
    documentWillClose(docmd5: string): void;
  }>;
  type ClassMethods = Partial<{
    /**
     * Do something when addon finish loading
     * @returns void
     */
    addonDidConnect(): void;
    /**
     * Do something when addon shuts down
     * @returns void
     */
    addonWillDisconnect(): void;
    /**
     * Do something when application enter background
     * @returns void
     */
    applicationDidEnterBackground(): void;
    /**
     * Do something when application enter foreground
     * @returns void
     */
    applicationWillEnterForeground(): void;
    /**
     * @param notify UILocalNotification*
     * @returns void
     */
    applicationDidReceiveLocalNotification(notify: UILocalNotification): void;
  }>;
}

declare global {
  const JSB: {
    defineClass(declaration: string, instanceMethods?: any, classMethods?: any): any;
    require(name: string): any;
    log(format: string, arguments: string[] | string): void;
    dump(object: any): void;
    newAddon(mainPath: string): any;
  };
}
declare type DictObj = {
  [k: string]: any;
};
declare global {
  class MNUtil {
    static themeColor: {
      Gray: UIColor;
      Default: UIColor;
      Dark: UIColor;
      Green: UIColor;
      Sepia: UIColor;
    };
    static popUpNoteInfo: { noteId: string };
    static popUpSelectionInfo: { docController: DocumentController };
    static mainPath: string;
    static init(mainPath: string): void;
    static get version(): {
      version: string;
      type: string;
    };
    static get app(): ApplicationInstance;
    static get db(): MbModelTool;
    static get currentWindow(): UIWindow;
    static get studyController(): StudyController;
    static get studyView(): UIView;
    static get studyWidth(): number;
    static get studyHeight(): number;
    static get studyMode(): StudyMode;
    static get extensionPanelController(): ExtensionPanelController;
    static get extensionPanelView(): UIView;
    static get extensionPanelOn(): boolean;
    static get readerController(): ReaderController;
    static get notebookController(): NotebookController;
    static get docControllers(): DocumentController[];
    static get currentDocController(): DocumentController;
    static get mindmapView(): MindMapView;
    static get selectionText(): string;
    static get isSelectionText(): boolean;
    /**
     * 返回选中的内容，如果没有选中，则onSelection属性为false
     * 如果有选中内容，则同时包括text和image，并通过isText属性表明当时是选中的文字还是图片
     * Retrieves the current selection details.
     * 
     * This method checks for the current document controller's selection. If an image is found,
     * it generates the selection details using the `genSelection` method. If no image is found
     * in the current document controller, it iterates through all document controllers if the
     * study controller's document map split mode is enabled. If a selection is found in the
     * pop-up selection info, it also generates the selection details. If no selection is found,
     * it returns an object indicating no selection.
     * 
     * @returns {{onSelection: boolean, image: null|undefined|NSData, text: null|undefined|string, isText: null|undefined|boolean,docMd5:string|undefined,pageIndex:number|undefined}} The current selection details.
     */
    static get currentSelection(): {
      onSelection: boolean;
      image: null | undefined | NSData;
      text: null | undefined | string;
      isText: null | undefined | boolean;
      docMd5: string | undefined;
      pageIndex: number | undefined;
    };
    static get currentNotebookId(): string;
    static get currentNotebook(): MbTopic;
    static get currentDocmd5(): string;
    static get isZH(): boolean;
    static get currentThemeColor(): UIColor;
    static get clipboardText(): string;
    static get clipboardImage(): UIImage;
    static get clipboardImageData(): NSData;
    static get dbFolder(): string;
    static get cacheFolder(): string;
    static get documentFolder(): string;
    static get tempFolder(): string;
    static get splitLine(): number;
    /**
     * Retrieves the version and type of the application.
     * 
     * This method determines the version of the application by parsing the appVersion property.
     * It categorizes the version as either "marginnote4" or "marginnote3" based on the parsed version number.
     * Additionally, it identifies the operating system type (iPadOS, iPhoneOS, or macOS) based on the osType property.
     *  
     * @returns {{version: "marginnote4" | "marginnote3", type: "iPadOS" | "iPhoneOS" | "macOS"}} An object containing the application version and operating system type.
     */
    static appVersion(): {
      version: "marginnote4" | "marginnote3";
      type: "iPadOS" | "iPhoneOS" | "macOS";
    };
    static isIOS(): boolean;
    static isMacOS(): boolean;
    static isIPadOS(): boolean;
    static isNSNull(object: object): boolean;
    static getMNUtilVersion(): string;
    static countWords(): number;
    static showHUD(message: string, duration?: number, view?: UIView): void;
    static waitHUD(message: string, view?: UIView): void;
    static stopHUD(view?: UIView): void;
    /**
     * 自动检测类型并复制
     * @param {string|object|NSData|UIImage} object 
     */
    static copy(object: string | object | NSData | UIImage): void;
    static copyJSON(object: object): void;
    /**
     *
     * @param {NSData} imageData
     */
    static copyImage(imageData: NSData): void;
    static openURL(url: string): void;
    static getNoteById(noteid: string): MbBookNote;
    static getNoteBookById(notebookId: string): MbTopic;
    static getNoteFileById(noteId: string): {
      path: string;
      name: string;
      md5: string;
    }
    static getDocById(md5: string): MbBook;
    static getNoteIdByURL(url: string): string;
    static isfileExists(path: string): boolean;
    /**
     * 
     * @param {string}filePath The file path of the document to import
     * @returns {string} The imported document md5
     */
    static importDocument(filePath: string): string;
    static openDoc(md5: string, notebookId?: string): void
    static genFrame(x: number, y: number, width: number, height: number): {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    static setFrame(view: UIView, x: number, y: number, width: number, height: number): void;
    /**
     *
     * @param {DocumentController} docController
     * @returns
     */
    static genSelection(docController: DocumentController): {
      onSelection: boolean;
      image: NSData;
      isText: boolean;
      text: string;
      docMd5: string;
      pageIndex: number;
    };
    static parseWinRect(winRect: string): {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    static checkSender(sender: any, window?: UIWindow): boolean;
    /**
     *
     * @param {UIView} view
     */
    static isDescendantOfStudyView(view: UIView): boolean;
    static addObserver(observer: any, selector: string, name: string): void;
    static removeObserver(observer: any, name: string): void;
    static removeObservers(observer: any, notifications: string): void;
    static refreshAddonCommands(ignoreImport?: boolean): void;
    static refreshAfterDBChanged(notebookId?: string): void;
    static focusNoteInMindMapById(noteId: string, delay?: number): void;
    static focusNoteInFloatMindMapById(noteId: string, delay?: number): void;
    static focusNoteInDocumentById(noteId: string, delay?: number): void;
    static isValidJSON(jsonString: string): boolean;
    static getValidJSON(text: string): object;
    /**
     * Merges multiple consecutive whitespace characters into a single space, except for newlines.
     * 
     * This method processes the input string to replace multiple consecutive whitespace characters
     * (excluding newlines) with a single space. It also ensures that multiple consecutive newlines
     * are reduced to a single newline. The resulting string is then trimmed of any leading or trailing
     * whitespace.
     * 
     * @param {string} str - The input string to be processed.
     * @returns {string} The processed string with merged whitespace.
     */
    static mergeWhitespace(str: string): string;
    static undo(notebookId?: string): void;
    static redo(notebookId?: string): void;
    static undoGrouping(f: Function, notebookId?: string): void;
    static getImage(path: string, scale?: number): UIImage;
    static getFile(path: string): NSData;
    /**
     * Extracts the file name from a full file path.
     * 
     * This method takes a full file path as input and extracts the file name by finding the last occurrence
     * of the '/' character and then taking the substring from that position to the end of the string.
     * 
     * @param {string} fullPath
     * @returns {string}
     */
    static getFileName(fullPath: string): string;
    static getMediaByHash(hash: string): NSData;
    /**
     * 左 0, 下 1，3, 上 2, 右 4
     * @param {*} sender
     * @param {*} commandTable
     * @param {*} width
     * @param {*} position
     * @returns
     */
    static getPopoverAndPresent(sender: any, commandTable: object[], width?: number, preferredPosition?: number): UIPopoverController;
    /**
     *
     * @param {string} name
     * @param {*} userInfo
     */
    static postNotification(name: string, userInfo: object): void;
    /**
     * Parses a 6/8-digit hexadecimal color string into a color object.
     * 
     * @param {string} hex - The 6/8-digit hexadecimal color string to parse.
     * @returns {object} An object with the following properties: `color` (the parsed color string), and `opacity` (the opacity of the color).
     */
    static parseHexColor(hex: string): { color: string, opacity: number };
    static hexColorAlpha(hex: string, alpha: number): UIColor;
    static hexColor(hex: string): UIColor;
    static genNSURL(url: string): NSURL;
    static data2string(data: NSData): string;
    static readJSON(path: string): object;
    static writeJSON(path: string, object: object): void;
    static readText(path: string): string;
    static writeText(path: string, string: string): void;
    static readTextFromUrlSync(url: string): string;
    static xorEncryptDecrypt(input: string, key: string): string;
    static MD5(data: NSData): string;
    static md2html(md: string): string;
    static replaceMNImagesWithBase64(markdown: string): string;
    static escapeString(str: string): string;
    static getLocalDataByKey(key: string): object;
    static setLocalDataByKey(data: object, key: string): void;
    static getCloudDataByKey(key: string): object;
    static setCloudDataByKey(data: object, key: string): void;
    static saveFile(filePath: string, UTI: string[]): void;

    /**
     *
     * @param {T[]} arr
     * @param {boolean} noEmpty
     * @returns {T[]}
     */
    static unique(arr: T[], noEmpty?: boolean): T[];
    static typeOf(note: undefined | string | MNNote | MbBookNote | object): "undefined" | "string" | "NoteURL" | "number" | "MNNote" | "NSData" | "UIImage" | "MbBookNote" | "NoteConfig" | "object";
    static getNoteId(note: undefined | MbBookNote | string): string | undefined;
    static getDocImage(checkImageFromNote?: boolean, checkDocMapSplitMode?: boolean): NSData | undefined;
    static excuteCommand(command: string): void;
    static getRandomElement(arr: any[]): any
    /**
     *
     * @param {number[]} arr
     * @param {string} type
     */
    static sort(arr: number[], type?: "increment" | "decrement"): number[];
    static toggleExtensionPanel(): void;
    static getStatusCodeDescription(statusCode: string): string;
    static render(template: string, config: object): string;
    static constrain(value: number, min: number, max: number): number;
    static emojiNumber(index: number): string;
    static tableItem(title: string, object: any, selector: string, params?: object, checked?: boolean): object;
    static deepEqual(a: object, b: object): boolean;
    static moveElement(arr: string[], element: string, direction: "up" | "down" | "top" | "bottom"): string[];
    static async input(title: string, subTitle: string, items: string[]): Promise<{ input: string, button: number }>
    static async runJavaScript(webview: UIWebView, script: string): Promise<any>
    static async confirm(mainTitle: string, subTitle: string): Promise<boolean>;
    static async userSelect(mainTitle: string, subTitle: string, items: string[]): Promise<number>;
    static async importPDFFromFile(): Promise<string>
    static async importPDFFromFileAndOpen(): Promise<string>
    static async animate(func: Function, time?: number): Promise<any>;
    static async delay(seconds: number): Promise<void>;
    static async readTextFromUrlAsync(url: string): Promise<string>;
    /**
     *
     * @param {string[]} UTI
     * @returns {Promise<string>} file path
     */
    static async importFile(UTI: string | string[]): Promise<string>;
  }
  class MNConnection {
    static genURL(url: string): NSURL;
    static requestWithURL(url: string): void;
    /**
     * Loads a URL request into a web view.
     * 
     * This method loads the specified URL into the provided web view. It creates an NSURLRequest object
     * from the given URL and then instructs the web view to load this request.
     * 
     * @param {UIWebView} webview - The web view into which the URL should be loaded.
     * @param {string} url - The URL to be loaded into the web view.
     */
    static loadRequest(webview: UIWebView, url: path): void;
    /**
     * 
     * @param {UIWebView} webview 
     * @param {string} fileURL
     * @param {string} baseURL 
     */
    static loadFile(webview: UIWebView, file: string, baseURL: string): void;
    /**
     * 
     * @param {UIWebView} webview 
     * @param {string} html
     * @param {string} baseURL 
     */
    static loadHTML(webview: UIWebView, html: string, baseURL: string): void;
    /**
     * Initializes an HTTP request with the specified URL and options.
     * 
     * This method creates an NSMutableURLRequest object with the given URL and sets the HTTP method, timeout interval, and headers.
     * It also handles query parameters, request body, form data, and JSON payloads based on the provided options.
     * 
     * @param {string} url - The URL for the HTTP request.
     * @param {Object} options - The options for the HTTP request.
     * @param {string} [options.method="GET"] - The HTTP method (e.g., "GET", "POST").
     * @param {number} [options.timeout=10] - The timeout interval for the request in seconds.
     * @param {Object} [options.headers] - Additional headers to include in the request.
     * @param {Object} [options.search] - Query parameters to append to the URL.
     * @param {string} [options.body] - The request body as a string.
     * @param {Object} [options.form] - Form data to include in the request body.
     * @param {Object} [options.json] - JSON data to include in the request body.
     * @returns {NSMutableURLRequest} The initialized NSMutableURLRequest object.
     */
    static initRequest(url: string, options: object): void;
    /**
     * Sends an HTTP request asynchronously and returns the response data.
     * 
     * This method sends the specified HTTP request asynchronously using NSURLConnection. It returns a promise that resolves with the response data if the request is successful,
     * or with an error object if the request fails. The error object includes details such as the status code and error message.
     * 
     * @param {NSMutableURLRequest} request - The HTTP request to be sent.
     * @returns {Promise<Object>} A promise that resolves with the response data or an error object.
     */
    static async sendRequest(request: NSURLRequest | NSMutableURLRequest): Promise<Object | NSData>;
    /**
     * Fetches data from a specified URL with optional request options.
     * 
     * This method initializes a request with the provided URL and options, then sends the request asynchronously.
     * It returns a promise that resolves with the response data or an error object if the request fails.
     * 
     * @param {string} url - The URL to fetch data from.
     * @param {Object} [options={}] - Optional request options.
     * @param {string} [options.method="GET"] - The HTTP method to use for the request.
     * @param {number} [options.timeout=10] - The timeout interval for the request in seconds.
     * @param {Object} [options.headers={}] - Additional headers to include in the request.
     * @param {Object} [options.search] - Query parameters to append to the URL.
     * @param {string} [options.body] - The body of the request for POST, PUT, etc.
     * @param {Object} [options.form] - Form data to include in the request body.
     * @param {Object} [options.json] - JSON data to include in the request body.
     * @returns {Promise<Object|Error>} A promise that resolves with the response data or an error object.
     */
    static async fetch(url: string, options?: {}): Promise<Object | Error>;
    /**
     * Encodes a string to Base64.
     * 
     * This method encodes the provided string to a Base64 representation using the CryptoJS library.
     * It first parses the string into a WordArray and then converts this WordArray to a Base64 string.
     * 
     * @param {string} str - The string to be encoded to Base64.
     * @returns {string} The Base64 encoded string.
     */
    static btoa(str: string): string;
    /**
     * Reads a file from a WebDAV server using the provided URL, username, and password.
     * 
     * This method sends a GET request to the specified WebDAV URL with the provided username and password for authentication.
     * It returns a promise that resolves with the response data if the request is successful, or with an error object if the request fails.
     * 
     * @param {string} url - The URL of the file on the WebDAV server.
     * @param {string} username - The username for authentication.
     * @param {string} password - The password for authentication.
     * @returns {Promise<Object>} A promise that resolves with the response data or an error object.
     */
    static async readWebDAVFile(url: string, username: string, password: string): Promise<any>
    /**
     * Uploads a file to a WebDAV server using the provided URL, username, password, and file content.
     * 
     * This method sends a PUT request to the specified WebDAV URL with the provided username and password for authentication.
     * The file content is included in the request body. It returns a promise that resolves with the response data if the request is successful,
     * or with an error object if the request fails.
     * 
     * @param {string} url - The URL of the file on the WebDAV server.
     * @param {string} username - The username for authentication.
     * @param {string} password - The password for authentication.
     * @param {string} fileContent - The content of the file to be uploaded.
     * @returns {Promise<Object>} A promise that resolves with the response data or an error object.
     */
    static async uploadWebDAVFile(url: string, username: string, password: string): Promise<any>
    /**
     * Reads a file from a WebDAV server using the provided URL, username, and password.
     * 
     * This method sends a GET request to the specified WebDAV URL with the provided username and password for authentication.
     * It returns a promise that resolves with the response data if the request is successful, or with an error object if the request fails.
     * 
     * @param {string} url - The URL of the file on the WebDAV server.
     * @param {string} username - The username for authentication.
     * @param {string} password - The password for authentication.
     * @returns {NSURLConnection} A promise that resolves with the response data or an error object.
     */
    static readWebDAVFileWithDelegate(url: string, username: string, password: string): Promise<NSURLRequest>
    /**
     * 
     * @param {string} url 
     * @param {number} scale 
     * @returns {NSData|undefined}
     */
    static getOnlineImage(url: string, scale?: number): NSData
  }
  class MNButton {
    set superview(value: UIView): void;
    get superview(): UIView;
    set frame(value: CGRect): void;
    get frame(): CGRect;
    set bounds(value: CGRect): void;
    get bounds(): CGRect;
    set center(value: CGPoint): void;
    get center(): CGPoint;
    // set window(value: UIWindow): void;
    get window(): UIWindow | undefined;
    // set gestureRecognizers(value: NSArray<UIGestureRecognizer> | UIGestureRecognizer[]): void;
    get gestureRecognizers(): NSArray<UIGestureRecognizer> | UIGestureRecognizer[] | undefined;
    set backgroundColor(value: UIColor): void;
    get backgroundColor(): UIColor;
    set color(value: UIColor|string): void;
    get color(): UIColor;
    set hidden(value: boolean): void;
    get hidden(): boolean;
    set autoresizingMask(value: number): void;
    get autoresizingMask(): number;
    set opacity(value: number): void;
    get opacity(): number;
    set radius(value: number): void;
    get radius(): number;
    set cornerRadius(value: number): void;
    get cornerRadius(): number;
    set currentTitle(value: string): void;
    get currentTitle(): string;
    set title(value: string): void;
    get title(): string;
    set currentTitleColor(value: UIColor): void;
    get currentTitleColor(): UIColor;
    set currentImage(value: UIImage): void;
    get currentImage(): UIImage;
    get subviews(): NSArray<UIView> | UIView[];
    set masksToBounds(value: boolean): void;
    get masksToBounds(): boolean;
    setFrame(x: number, y: number, width: number, height: number): void;
    setColor(hexColor: string, alpha?: number): void;
    setTitle(title: string, state?: number): void;
    setTitleForState(title: string, state?: number): void;
    setTitleColorForState(color: UIColor, state?: number): void;
    setTitleColor(color: UIColor, state?: number): void;
    setImageForState(image: UIImage, state?: number): void;
    setImage(image: UIImage, state?: number): void;
    addSubview(view: UIView): void;
    removeFromSuperview(): void;
    bringSubviewToFront(view: UIView): void;
    sendSubviewToBack(view: UIView): void;
    isDescendantOfView(view: UIView): boolean;
    isDescendantOfStudyView(): boolean;
    isDescendantOfCurrentWindow(): boolean;
    setNeedsLayout(): void;
    layoutIfNeeded(): void;
    layoutSubviews(): void;
    setNeedsDisplay(): void;
    sizeThatFits(size: CGSize): CGSize;
    addTargetActionForControlEvents(target: any, action: string, controlEvent: UIControlEvents): void;
    removeTargetActionForControlEvents(target: any, action: string, controlEvent: UIControlEvents): void;
    /**
     * 
     * @param {any} target 
     * @param {string} selector 
     */
    addClickAction(target: any, selector: string): void;
    addPanGesture(target: any, selector: string): void;
    addLongPressGesture(target: any, selector: string): void;
    addSwipeGesture(target: any, selector: string): void;
    addGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;
    removeGestureRecognizer(gestureRecognizer: UIGestureRecognizer): void;


    static get highlightColor(): UIColor;
    static "new"(config?: {}): MNButton;
    static hexColorAlpha(hex: string, alpha: number): UIColor;
    static hexColor(hex: string): UIColor;
    static setColor(button: UIButton, hexColor: string, alpha?: number): void;
    static setTitle(button: UIButton, title: string, font?: number, bold?: boolean): void;
    /**
     *
     * @param {UIButton} button
     * @param {string|NSData} path
     */
    static setImage(button: UIButton, path: string | NSData): void;
    static setOpacity(button: UIButton, opacity: number): void;
    static setRadius(button: UIButton, radius?: number): void;
    static setConfig(button: UIButton, config: { color: string, alpha: number, opacity: number, radius: number }): void;
    static addClickAction(button: UIButton, target: any, selector: string): void;
    static addPanGesture(button: UIButton, target: any, selector: string): void;
    static addLongPressGesture(button: UIButton, target: any, selector: string): void;
    static addSwipeGesture(button: UIButton, target: any, selector: string): void;
    constructor(config: any);
    button: UIButton;
  }
  class MNNote {
    /**
     *
     * @param {MbBookNote|string|object} note
     */
    static "new"(note: MbBookNote | string | object): MNNote;
    static addErrorLog(error: any, source: string, info?: string): void;
    /**
     *
     * @param {MbBookNote} note
     * @returns
     */
    static getNoteExcerptTextPic(note: MbBookNote): {
      ocr: any[];
      html: any[];
      md: any[];
    };
    /**
     * Get picture base64 code wrapped in html and markdown
     * @param {MNPic} pic
     * @returns
     * - html: '<img class="MNPic" src="data:image/jpeg;base64,${base64}"/>'
     * - md: '![MNPic](data:image/jpeg;base64,${base64})'
     */
    static exportPic(pic: MNPic): {
      html: string;
      md: string;
    };
    static focusInMindMapById(noteId: string, delay?: number): void;
    static focusInDocumentById(noteId: string, delay?: number): void;
    static focusInFloatMindMapById(noteId: string, delay?: number): void;
    /**
     *
     * @param {MbBookNote|string} note
     */
    static focusInMindMap(note: MbBookNote | string, delay?: number): void;
    /**
     *
     * @param {MbBookNote|string} note
     */
    static focusInDocument(note: MbBookNote | string, delay: number): void;
    static focusInFloatMindMap(note: MbBookNote, delay: number): void;
    static getFocusNote(): MNNote;
    static getFocusNotes(): MNNote[];
    static getSelectedNotes(): MNNote[];
    static hasImageInNote(note: MbBookNote | MNNote | string): boolean;
    /**
     * 
     * @param {DocumentController}docController
     */
    static fromSelection(docController?: DocumentController): MNNote;
  /**
   * Clones a note to the specified notebook.
   * 
   * This method clones the provided note to the specified notebook. The note object can be of various types:
   * - An MbBookNote instance.
   * - A string representing a note URL.
   * - A string representing a note ID.
   * - A configuration object for creating a new note.
   * 
   * If the note object is a string representing a note URL, the method will attempt to retrieve the corresponding note from the URL.
   * If the note object is a string representing a note ID, the method will attempt to retrieve the corresponding note from the database.
   * If the note object is a configuration object, the method will create a new note with the specified properties.
   * 
   * @param {MbBookNote|string|MNNote} note - The note object to clone.
   * @param {string} [notebookId=MNUtil.currentNotebookId] - The ID of the notebook to clone the note to.
   * @returns {MNNote|undefined} The cloned MNNote instance or undefined if the note object is invalid.
   */
    static clone(note: MbBookNote | MNNote | string, notebookId?: string): MNNote;
    /**
       *
       * @param {MbBookNote} note
       * @returns
       */
    static getImageFromNote(note: MbBookNote, checkTextFirst?: boolean): NSData;
    static exist(noteId: string): boolean;
    /**
     *
     * @param {MbBookNote|string|object} note
     */
    constructor(note: MbBookNote | string | object);
    /** @type {MbBookNote} */
    note: MbBookNote;
    get noteId(): string;
    get notebookId(): string;
    get originNoteId(): string;
    get groupNoteId(): string;
    get groupMode(): GroupMode;
    get childNotes(): MNNote[];
    get parentNote(): MNNote;
    get noteURL(): string;
    get childMindMap(): MNNote | undefined;
    /**
     *
     * @returns {{descendant:MNNote[],treeIndex:number[][]}}
     */
    get descendantNodes(): {
      descendant: MNNote[];
      treeIndex: number[][];
    };
    get ancestorNodes(): MNNote[];
    get notes(): MbBookNote[];
    /**
     *
     * @param {string[]} titles
     * @returns
     */
    set titles(titles: string[]);
    get titles(): string[];
    get isOCR(): boolean;
    get textFirst(): boolean;
    /**
     *
     * @param {string} title
     * @returns
     */
    set title(title: string);
    get title(): string;
    
    /**
     *
     * @param {string} title
     * @returns
     */
    set noteTitle(title: string);
    get noteTitle(): string;
    set excerptText(text: string);
    get excerptText(): string;
    set excerptTextMarkdown(status: boolean);
    get excerptTextMarkdown(): boolean;
    /**
     *
     * @param {string} text
     * @returns
     */
    set mainExcerptText(text: string);
    get mainExcerptText(): string;
    get excerptPic(): ExcerptPic;
    get excerptPicData(): NSData;
    set colorIndex(index: number);
    get colorIndex(): number;
    set fillIndex(index: number);
    get fillIndex(): number;
    get createDate(): Date;
    get modifiedDate(): Date;
    get linkedNotes(): {
      summary: boolean;
      noteid: string;
      linktext: string;
    }[];
    get summaryLinks(): string[];
    get mediaList(): string;
    /**
     * set tags, will remove all old tags
     *
     * @param {string[]} tags
     * @returns
     */
    set tags(tags: string[]);
    /**
     * get all tags, without '#'
     * @returns {string[]}
     */
    get tags(): string[];
    /**
     *
     * @returns {NoteComment[]}
     */
    get comments(): NoteComment[];
    /**
     * @returns {{ocr:string[],html:string[],md:string[]}}
     */
    get excerptsTextPic(): {
      ocr: string[];
      html: string[];
      md: string[];
    };
    /**
     * @returns {{html:string[],md:string[]}}
     */
    get commentsTextPic(): {
      html: string[];
      md: string[];
    };
    /** @returns {string[]} */
    get excerptsText(): string[];
    /**
     * get all comment text
     * @returns {string[]}
     */
    get commentsText(): string[];
    /**
     * get all text and pic note will be OCR or be transformed to base64
     */
    get allTextPic(): {
      html: string;
      ocr: string;
      md: string;
    };
    /**
     * Get all text
     */
    get allText(): string;
    /**
     * Get all text.
     */
    get excerptsCommentsText(): string[];
    get docMd5(): string | undefined;
    realGroupNoteIdForTopicId(nodebookid: string): string;
    realGroupNoteForTopicId(nodebookid: string): MNNote;
    processMarkdownBase64Images(): void;
    allNoteText(): string;
    paste(): void;
    /**
     *
     * @param {MbBookNote|MNNote|string} note
     */
    merge(note: MbBookNote | MNNote | string): void;
    delete(withDescendant?: boolean, undoGrouping?: boolean): void;
    /**
     *
     * @param {MbBookNote|MNNote|string} note
     */
    addChild(note: MbBookNote | MNNote | string): void;
    /**
     *
     * @param {MbBookNote|MNNote} targetNote
     */
    addAsChildNote(targetNote: MbBookNote | MNNote, colorInheritance?: boolean): void;
    /**
     *
     * @param {MbBookNote|MNNote} targetNote
     */
    addAsBrotherNote(targetNote: MbBookNote | MNNote, colorInheritance?: boolean): void;
    /**
     *
     * @param {{title:String,excerptText:string,excerptTextMarkdown:boolean,content:String,markdown:Boolean,color:Number}} config
     * @returns {MNNote}
     */
    createChildNote(config: {
      title: string;
      excerptText: string;
      excerptTextMarkdown: boolean;
      content: string;
      markdown: boolean;
      color: number;
    }): MNNote;
    /**
     *
     * @param {{title:String,content:String,markdown:Boolean,color:Number}} config
     * @returns {MNNote}
     */
    createBrotherNote(config: {
      title: string;
      content: string;
      markdown: boolean;
      color: number;
    }): MNNote;
    hasImage(): boolean;
    /**
     * Append text comments as much as you want.
     * @param {string[]} comments
     * @example
     * node.appendTextComments("a", "b", "c")
     */
    appendTextComments(...comments: string[]): this;
    /**
     *
     * @param  {string} comment
     * @param  {number} index
     * @returns
     */
    appendMarkdownComment(comment: string, index: number): void;
    /**
     *
     * @param  {string} comment
     * @returns
     */
    appendTextComment(comment: string, index: number): void;
    /**
     *
     * @param {string} html
     * @param {string} text
     * @param {CGSize} size
     * @param {string} tag
     */
    appendHtmlComment(html: string, text: string, size: CGSize, tag: string, index: number): void;
    /**
     *
     * @param  {string[]} comments
     * @returns
     */
    appendMarkdownComments(...comments: string[]): void;
    sortCommentsByNewIndices(arr: number[]): void;
    moveComment(fromIndex: number, toIndex: number): void;
    moveCommentByAction(fromIndex: number, action: string): void;
    getCommentIndicesByCondition(condition: object): number[];
    /**
     *
     * @param {number} index
     */
    removeCommentByIndex(index: number): void;
    /**
     *
     * @param {number[]} indices
     */
    removeCommentsByIndices(indices: number[]): void;
    /**
     *
     * @param {{type:string,include:string,exclude:string,reg:string}} condition
     */
    removeCommentByCondition(condition: {
      type: string;
      include: string;
      exclude: string;
      reg: string;
    }): void;
    /**
     * Remove all comment but tag, link and also the filterd. And tags and links will be sat at the end。
     * @param filter not deleted
     * @param f call a function after deleted, before set tag and link
     */
    removeCommentButLinkTag(filter: any, f: any): Promise<this>;
    /**
     * @param {string[]} titles
     * append titles as much as you want
     */
    appendTitles(...titles: string[]): this;
    /**
     * @param {string[]} tags
     * append tags as much as you want
     */
    appendTags(...tags: string[]): this;
    /**
     * make sure tags are in the last comment
     */
    tidyupTags(): this;
    /**
     * @param {MbBookNote | string} comment
     * get comment index by comment
     */
    getCommentIndex(comment: MbBookNote | string, includeHtmlComment?: boolean): number;
    clearFormat(): void;
    /**
     *
     * @param {MNNote|MbBookNote} note
     * @param {string} type
     */
    appendNoteLink(note: MNNote | MbBookNote, type?: string): void;
    clone(): MNNote;
    removeFromParent():MNNote
    insertChildBefore():MNNote
    copyURL():void;
    /**
     *
     * @param {number} [delay=0]
     */
    async focusInMindMap(delay?: number): Promise<MNNote>;
    /**
     *
     * @param {number} [delay=0]
     */
    async focusInDocument(delay?: number): Promise<MNNote>;
    /**
     *
     * @param {number} [delay=0]
     */
    async focusInFloatMindMap(delay?: number): Promise<MNNote>;
    async getMDContent(withBase64 = false): Promise<string>;
  }
  class MNComment {
    constructor(comment:NoteComment) {
      
    }
    type:string
    detail:NoteComment
    index:number
    originalNoteId?:string
    get imageData():NSData|undefined
    get text():string|undefined
    set text(text:string)
    get tags():string[]|undefined
    get note():MNNote|undefined
    refresh():void
    copyImage():void
    copyText():void
    copy():void
    remove():void
    belongsToType(types:string[]):boolean
    static commentBelongsToType(comment:NoteComment,types:string[]):boolean
    static getCommentType(comment:NoteComment):string
    static from(note:MNNote|MbBookNote):MNComment[]|undefined
  }
  class MNExtensionPanel{
    static subviews: object
    static get currentWindow():UIWindow
    static get subviewNames():string[]
    static get app():Application
    static get studyController():StudyController
    static get controller():UIViewController
    static get view():UIView
    static get frame():CGRect
    static get width():number
    static get height():number
    static get on():boolean
    static show():void
    static hideExtentionPanel(window:UIWindow):void
    static toggle():void
    static subview(name:string):UIView
    static addSubview(name:string,view:UIView):void
    static removeSubview(name:string):void
  }
}

export { MNUtil, MNNote, MNButton, MNConnection, MNComment, Application, CALayer, CGBlendMode, CGFloat, CGPoint, CGRect, CGSize, DictObj, DocMapSplitMode, DocumentController, ExcerptPic, GroupMode, HtmlComment, JSExtension, JSExtensionLifeCycle, JSValue, LinkComment, LinkCommentPic, LinkCommentText, MNPic, MbBook, MbBookNote, MbModelTool, MbTopic, MindMapNode, MindMapView, NSCharacterSet, NSData, NSDataReadingOptions, NSDataSearchOptions, NSDataWritingOptions, NSDictionary, NSError, NSFileManager, NSHTTPURLResponse, NSIndexPath, NSIndexSet, NSJSONReadingOptions, NSJSONSerialization, NSJSONWritingOptions, NSLineBreakMode, NSLocale, NSLocaleLanguageDirection, NSMutableArray, NSMutableURLRequest, NSNotification, NSNotificationCenter, NSNull, NSOperationQueue, NSRange, NSStringEncoding, NSTextAlignment, NSTimeInterval, NSTimer, NSURL, NSURLBookmarkCreationOptions, NSURLBookmarkFileCreationOptions, NSURLBookmarkResolutionOptions, NSURLConnection, NSURLRequest, NSURLResponse, NSUserDefaults, NSValue, NoteComment, NotebookController, NotebookType, OSType, OutlineView, PaintComment, ReaderController, SQLiteDatabase, SQLiteResultSet, SpeechManager, StudyController, StudyMode, TextComment, UIAlertView, UIAlertViewStyle, UIApplication, UIButtonType, UIColor, UIControl, UIControlEvents, UIControlState, UIDevice, UIEdgeInsets, UIEvent, UIFont, UIGestureRecognizerState, UIImage, UIImageOrientation, UIImageView, UILocalNotification, UIPasteboard, UIResponder, UIScrollView, UISwipeGestureRecognizerDirection, UITableView, UITableViewCell, UITableViewCellAccessoryTypeStyle, UITableViewCellSelectionStyle, UITableViewCellSeparatorStyle, UITableViewCellStyle, UITableViewController, UITableViewRowAnimation, UITableViewScrollPosition, UITableViewStyle, UITextBorderStyle, UITouch, UIViewAutoresizing, UIViewController, UIWindow, UndoManager, ZipArchive };

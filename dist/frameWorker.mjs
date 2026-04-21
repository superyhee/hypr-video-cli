// Worker thread for parallel frame rendering — do not run directly.
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
    "use strict";
    function find(list, predicate, ac) {
      if (ac === void 0) {
        ac = Array.prototype;
      }
      if (list && typeof ac.find === "function") {
        return ac.find.call(list, predicate);
      }
      for (var i = 0; i < list.length; i++) {
        if (Object.prototype.hasOwnProperty.call(list, i)) {
          var item = list[i];
          if (predicate.call(void 0, item, i, list)) {
            return item;
          }
        }
      }
    }
    function freeze(object, oc) {
      if (oc === void 0) {
        oc = Object;
      }
      return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
    }
    function assign(target, source) {
      if (target === null || typeof target !== "object") {
        throw new TypeError("target is not an object");
      }
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
      return target;
    }
    var MIME_TYPE = freeze({
      /**
       * `text/html`, the only mime type that triggers treating an XML document as HTML.
       *
       * @see DOMParser.SupportedType.isHTML
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
       */
      HTML: "text/html",
      /**
       * Helper method to check a mime type if it indicates an HTML document
       *
       * @param {string} [value]
       * @returns {boolean}
       *
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
      isHTML: function(value) {
        return value === MIME_TYPE.HTML;
      },
      /**
       * `application/xml`, the standard mime type for XML documents.
       *
       * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
       * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_APPLICATION: "application/xml",
      /**
       * `text/html`, an alias for `application/xml`.
       *
       * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
       * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_TEXT: "text/xml",
      /**
       * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
       * but is parsed as an XML document.
       *
       * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
       * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
       */
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      /**
       * `image/svg+xml`,
       *
       * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
       * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
       * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
       */
      XML_SVG_IMAGE: "image/svg+xml"
    });
    var NAMESPACE = freeze({
      /**
       * The XHTML namespace.
       *
       * @see http://www.w3.org/1999/xhtml
       */
      HTML: "http://www.w3.org/1999/xhtml",
      /**
       * Checks if `uri` equals `NAMESPACE.HTML`.
       *
       * @param {string} [uri]
       *
       * @see NAMESPACE.HTML
       */
      isHTML: function(uri) {
        return uri === NAMESPACE.HTML;
      },
      /**
       * The SVG namespace.
       *
       * @see http://www.w3.org/2000/svg
       */
      SVG: "http://www.w3.org/2000/svg",
      /**
       * The `xml:` namespace.
       *
       * @see http://www.w3.org/XML/1998/namespace
       */
      XML: "http://www.w3.org/XML/1998/namespace",
      /**
       * The `xmlns:` namespace
       *
       * @see https://www.w3.org/2000/xmlns/
       */
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    exports.assign = assign;
    exports.find = find;
    exports.freeze = freeze;
    exports.MIME_TYPE = MIME_TYPE;
    exports.NAMESPACE = NAMESPACE;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
    var conventions = require_conventions();
    var find = conventions.find;
    var NAMESPACE = conventions.NAMESPACE;
    function notEmptyString(input) {
      return input !== "";
    }
    function splitOnASCIIWhitespace(input) {
      return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
    }
    function orderedSetReducer(current, element) {
      if (!current.hasOwnProperty(element)) {
        current[element] = true;
      }
      return current;
    }
    function toOrderedSet(input) {
      if (!input) return [];
      var list = splitOnASCIIWhitespace(input);
      return Object.keys(list.reduce(orderedSetReducer, {}));
    }
    function arrayIncludes(list) {
      return function(element) {
        return list && list.indexOf(element) !== -1;
      };
    }
    function copy(src, dest) {
      for (var p in src) {
        if (Object.prototype.hasOwnProperty.call(src, p)) {
          dest[p] = src[p];
        }
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function() {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        copy(pt, t2);
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknown Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message) this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      /**
       * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
       * @standard level1
       */
      length: 0,
      /**
       * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
       * @standard level1
       * @param index  unsigned long
       *   Index into the collection.
       * @return Node
       * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
       */
      item: function(index) {
        return index >= 0 && index < this.length ? this[index] : null;
      },
      toString: function(isHTML, nodeFilter) {
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter);
        }
        return buf.join("");
      },
      /**
       * @private
       * @param {function (Node):boolean} predicate
       * @returns {Node[]}
       */
      filter: function(predicate) {
        return Array.prototype.filter.call(this, predicate);
      },
      /**
       * @private
       * @param {Node} item
       * @returns {number}
       */
      indexOf: function(item) {
        return Array.prototype.indexOf.call(this, item);
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc !== inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        if (!list.$$length || ls.length < list.$$length) {
          for (var i = ls.length; i in list; i++) {
            if (Object.prototype.hasOwnProperty.call(list, i)) {
              delete list[i];
            }
          }
        }
        copy(ls, list);
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i] || null;
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = list.length;
      while (i--) {
        if (list[i] === node) {
          return i;
        }
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length++] = newAttr;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i < lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function(key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
      //for level2
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation() {
    }
    DOMImplementation.prototype = {
      /**
       * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
       * The different implementations fairly diverged in what kind of features were reported.
       * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
       *
       * @deprecated It is deprecated and modern browsers return true in all cases.
       *
       * @param {string} feature
       * @param {string} [version]
       * @returns {boolean} always true
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
       * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
       */
      hasFeature: function(feature, version) {
        return true;
      },
      /**
       * Creates an XML Document object of the specified type with its document element.
       *
       * __It behaves slightly different from the description in the living standard__:
       * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
       * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string|null} namespaceURI
       * @param {string} qualifiedName
       * @param {DocumentType=null} doctype
       * @returns {Document}
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      /**
       * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
       *
       * __This behavior is slightly different from the in the specs__:
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string} qualifiedName
       * @param {string} [publicId]
       * @param {string} [systemId]
       * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
       * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        return node;
      }
    };
    function Node() {
    }
    Node.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      // Modified in DOM Level 2:
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      // Modified in DOM Level 2:
      normalize: function() {
        var child = this.firstChild;
        while (child) {
          var next = child.nextSibling;
          if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
            this.removeChild(next);
            child.appendData(next.data);
          } else {
            child.normalize();
            child = next;
          }
        }
      },
      // Introduced in DOM Level 2:
      isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
      },
      // Introduced in DOM Level 2:
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      /**
       * Look up the prefix associated to the given namespace URI, starting from this node.
       * **The default namespace declarations are ignored by this method.**
       * See Namespace Prefix Lookup for details on the algorithm used by this method.
       *
       * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
       *
       * @param {string | null} namespaceURI
       * @returns {string | null}
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
       * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
       * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
       * @see https://github.com/xmldom/xmldom/issues/322
       */
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (Object.prototype.hasOwnProperty.call(map, prefix)) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c) {
      return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    function _visitNode(node, callback) {
      if (callback(node)) {
        return true;
      }
      if (node = node.firstChild) {
        do {
          if (_visitNode(node, callback)) {
            return true;
          }
        } while (node = node.nextSibling);
      }
    }
    function Document() {
      this.ownerDocument = this;
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
          delete cs[cs.length];
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      child.parentNode = null;
      child.previousSibling = null;
      child.nextSibling = null;
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function hasValidParentNodeType(node) {
      return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
    }
    function hasInsertableNodeType(node) {
      return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
    }
    function isDocTypeNode(node) {
      return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
    }
    function isElementNode(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }
    function isTextNode(node) {
      return node && node.nodeType === Node.TEXT_NODE;
    }
    function isElementInsertionPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function isElementReplacementPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      function hasElementChildThatIsNotChild(node) {
        return isElementNode(node) && node !== child;
      }
      if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function assertPreInsertionValidity1to5(parent, node, child) {
      if (!hasValidParentNodeType(parent)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
      }
      if (child && child.parentNode !== parent) {
        throw new DOMException(NOT_FOUND_ERR, "child not in parent");
      }
      if (
        // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
        !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
        // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
        // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
        // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
        isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
      ) {
        throw new DOMException(
          HIERARCHY_REQUEST_ERR,
          "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
        );
      }
    }
    function assertPreInsertionValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        if (find(parentChildNodes, isDocTypeNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
        if (!child && parentElementChild) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
        }
      }
    }
    function assertPreReplacementValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        let hasDoctypeChildThatIsNotChild2 = function(node2) {
          return isDocTypeNode(node2) && node2 !== child;
        };
        var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
        if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
      }
    }
    function _insertBefore(parent, node, child, _inDocumentAssertion) {
      assertPreInsertionValidity1to5(parent, node, child);
      if (parent.nodeType === Node.DOCUMENT_NODE) {
        (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
      }
      var cp = node.parentNode;
      if (cp) {
        cp.removeChild(node);
      }
      if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = node.firstChild;
        if (newFirst == null) {
          return node;
        }
        var newLast = node.lastChild;
      } else {
        newFirst = newLast = node;
      }
      var pre = child ? child.previousSibling : parent.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = child;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parent.firstChild = newFirst;
      }
      if (child == null) {
        parent.lastChild = newLast;
      } else {
        child.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parent;
        var targetDoc = parent.ownerDocument || parent;
        _updateOwnerDocument(newFirst, targetDoc);
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parent.ownerDocument || parent, parent);
      if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
        node.firstChild = node.lastChild = null;
      }
      return node;
    }
    function _updateOwnerDocument(node, newOwnerDocument) {
      if (node.ownerDocument === newOwnerDocument) {
        return;
      }
      node.ownerDocument = newOwnerDocument;
      if (node.nodeType === ELEMENT_NODE && node.attributes) {
        for (var i = 0; i < node.attributes.length; i++) {
          var attr = node.attributes.item(i);
          if (attr) {
            attr.ownerDocument = newOwnerDocument;
          }
        }
      }
      var child = node.firstChild;
      while (child) {
        _updateOwnerDocument(child, newOwnerDocument);
        child = child.nextSibling;
      }
    }
    function _appendSingleChild(parentNode, newChild) {
      if (newChild.parentNode) {
        newChild.parentNode.removeChild(newChild);
      }
      newChild.parentNode = parentNode;
      newChild.previousSibling = parentNode.lastChild;
      newChild.nextSibling = null;
      if (newChild.previousSibling) {
        newChild.previousSibling.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      var targetDoc = parentNode.ownerDocument || parentNode;
      _updateOwnerDocument(newChild, targetDoc);
      return newChild;
    }
    Document.prototype = {
      //implementation : null,
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      /**
       * The DocumentType node of the document.
       *
       * @readonly
       * @type DocumentType
       */
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        _insertBefore(this, newChild, refChild);
        _updateOwnerDocument(newChild, this);
        if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        _updateOwnerDocument(newChild, this);
        if (oldChild) {
          this.removeChild(oldChild);
        }
        if (isElementNode(newChild)) {
          this.documentElement = newChild;
        }
      },
      // Introduced in DOM Level 2:
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      // Introduced in DOM Level 2:
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      /**
       * The `getElementsByClassName` method of `Document` interface returns an array-like object
       * of all child elements which have **all** of the given class name(s).
       *
       * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
       *
       *
       * Warning: This is a live LiveNodeList.
       * Changes in the DOM will reflect in the array as the changes occur.
       * If an element selected by this array no longer qualifies for the selector,
       * it will automatically be removed. Be aware of this for iteration purposes.
       *
       * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
       * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
       */
      getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
          var ls = [];
          if (classNamesSet.length > 0) {
            _visitNode(base.documentElement, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE) {
                var nodeClassNames = node.getAttribute("class");
                if (nodeClassNames) {
                  var matches = classNames === nodeClassNames;
                  if (!matches) {
                    var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                    matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                  }
                  if (matches) {
                    ls.push(node);
                  }
                }
              }
            });
          }
          return ls;
        });
      },
      //document factory method:
      createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function(data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createCDATASection: function(data) {
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.nodeName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      createEntityReference: function(name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      // Introduced in DOM Level 2:
      createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      // Introduced in DOM Level 2:
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node);
    function Element() {
      this._nsMap = {};
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      //four real opeartion method
      appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      //get real attribute name,and remove it by removeAttributeNode
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
      },
      appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node);
    function Text() {
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node);
    function XMLSerializer2() {
    }
    XMLSerializer2.prototype.serializeToString = function(node, isHtml, nodeFilter) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter) {
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
            //{namespace:uri,prefix:''}
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!uri) {
        return false;
      }
      if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix === prefix) {
          return ns.namespace !== uri;
        }
      }
      return true;
    }
    function addSerializedAttribute(buf, qualifiedName, value) {
      buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
      if (!visibleNamespaces) {
        visibleNamespaces = [];
      }
      if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
          if (typeof node == "string") {
            buf.push(node);
            return;
          }
        } else {
          return;
        }
      }
      switch (node.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var len = attrs.length;
          var child = node.firstChild;
          var nodeName = node.tagName;
          isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
          var prefixedNodeName = nodeName;
          if (!isHTML && !node.prefix && node.namespaceURI) {
            var defaultNS;
            for (var ai = 0; ai < attrs.length; ai++) {
              if (attrs.item(ai).name === "xmlns") {
                defaultNS = attrs.item(ai).value;
                break;
              }
            }
            if (!defaultNS) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                  defaultNS = namespace.namespace;
                  break;
                }
              }
            }
            if (defaultNS !== node.namespaceURI) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.namespace === node.namespaceURI) {
                  if (namespace.prefix) {
                    prefixedNodeName = namespace.prefix + ":" + nodeName;
                  }
                  break;
                }
              }
            }
          }
          buf.push("<", prefixedNodeName);
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (attr.prefix == "xmlns") {
              visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
            } else if (attr.nodeName == "xmlns") {
              visibleNamespaces.push({ prefix: "", namespace: attr.value });
            }
          }
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
              var prefix = attr.prefix || "";
              var uri = attr.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
          }
          if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
            var prefix = node.prefix || "";
            var uri = node.namespaceURI;
            addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
            visibleNamespaces.push({ prefix, namespace: uri });
          }
          if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
            buf.push(">");
            if (isHTML && /^script$/i.test(nodeName)) {
              while (child) {
                if (child.data) {
                  buf.push(child.data);
                } else {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                }
                child = child.nextSibling;
              }
            } else {
              while (child) {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                child = child.nextSibling;
              }
            }
            buf.push("</", prefixedNodeName, ">");
          } else {
            buf.push("/>");
          }
          return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var child = node.firstChild;
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
            child = child.nextSibling;
          }
          return;
        case ATTRIBUTE_NODE:
          return addSerializedAttribute(buf, node.name, node.value);
        case TEXT_NODE:
          return buf.push(
            node.data.replace(/[<&>]/g, _xmlEncoder)
          );
        case CDATA_SECTION_NODE:
          return buf.push("<![CDATA[", node.data, "]]>");
        case COMMENT_NODE:
          return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
          var pubid = node.publicId;
          var sysid = node.systemId;
          buf.push("<!DOCTYPE ", node.name);
          if (pubid) {
            buf.push(" PUBLIC ", pubid);
            if (sysid && sysid != ".") {
              buf.push(" ", sysid);
            }
            buf.push(">");
          } else if (sysid && sysid != ".") {
            buf.push(" SYSTEM ", sysid, ">");
          } else {
            var sub = node.internalSubset;
            if (sub) {
              buf.push(" [", sub, "]");
            }
            buf.push(">");
          }
          return;
        case PROCESSING_INSTRUCTION_NODE:
          return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
          return buf.push("&", node.nodeName, ";");
        //case ENTITY_NODE:
        //case NOTATION_NODE:
        default:
          buf.push("??", node.nodeName);
      }
    }
    function importNode(doc, node, deep) {
      var node2;
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node2 = node.cloneNode(false);
          node2.ownerDocument = doc;
        //var attrs = node2.attributes;
        //var len = attrs.length;
        //for(var i=0;i<len;i++){
        //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
        //}
        case DOCUMENT_FRAGMENT_NODE:
          break;
        case ATTRIBUTE_NODE:
          deep = true;
          break;
      }
      if (!node2) {
        node2 = node.cloneNode(false);
      }
      node2.ownerDocument = doc;
      node2.parentNode = null;
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(importNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function cloneNode(doc, node, deep) {
      var node2 = new node.constructor();
      for (var n in node) {
        if (Object.prototype.hasOwnProperty.call(node, n)) {
          var v = node[n];
          if (typeof v != "object") {
            if (v != node2[n]) {
              node2[n] = v;
            }
          }
        }
      }
      if (node.childNodes) {
        node2.childNodes = new NodeList();
      }
      node2.ownerDocument = doc;
      switch (node2.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var attrs2 = node2.attributes = new NamedNodeMap();
          var len = attrs.length;
          attrs2._ownerElement = node2;
          for (var i = 0; i < len; i++) {
            node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
          }
          break;
          ;
        case ATTRIBUTE_NODE:
          deep = true;
      }
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(cloneNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        let getTextContent2 = function(node) {
          switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              var buf = [];
              node = node.firstChild;
              while (node) {
                if (node.nodeType !== 7 && node.nodeType !== 8) {
                  buf.push(getTextContent2(node));
                }
                node = node.nextSibling;
              }
              return buf.join("");
            default:
              return node.nodeValue;
          }
        };
        getTextContent = getTextContent2;
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            return getTextContent2(this);
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    var getTextContent;
    exports.DocumentType = DocumentType;
    exports.DOMException = DOMException;
    exports.DOMImplementation = DOMImplementation;
    exports.Element = Element;
    exports.Node = Node;
    exports.NodeList = NodeList;
    exports.XMLSerializer = XMLSerializer2;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
    "use strict";
    var freeze = require_conventions().freeze;
    exports.XML_ENTITIES = freeze({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    });
    exports.HTML_ENTITIES = freeze({
      Aacute: "\xC1",
      aacute: "\xE1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xC2",
      acirc: "\xE2",
      acute: "\xB4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xC6",
      aelig: "\xE6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xC0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      AMP: "&",
      amp: "&",
      And: "\u2A53",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apacir: "\u2A6F",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xC5",
      aring: "\xE5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xC3",
      atilde: "\xE3",
      Auml: "\xC4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      Barwed: "\u2306",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      Because: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxDL: "\u2557",
      boxDl: "\u2556",
      boxdL: "\u2555",
      boxdl: "\u2510",
      boxDR: "\u2554",
      boxDr: "\u2553",
      boxdR: "\u2552",
      boxdr: "\u250C",
      boxH: "\u2550",
      boxh: "\u2500",
      boxHD: "\u2566",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxhd: "\u252C",
      boxHU: "\u2569",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxUL: "\u255D",
      boxUl: "\u255C",
      boxuL: "\u255B",
      boxul: "\u2518",
      boxUR: "\u255A",
      boxUr: "\u2559",
      boxuR: "\u2558",
      boxur: "\u2514",
      boxV: "\u2551",
      boxv: "\u2502",
      boxVH: "\u256C",
      boxVh: "\u256B",
      boxvH: "\u256A",
      boxvh: "\u253C",
      boxVL: "\u2563",
      boxVl: "\u2562",
      boxvL: "\u2561",
      boxvl: "\u2524",
      boxVR: "\u2560",
      boxVr: "\u255F",
      boxvR: "\u255E",
      boxvr: "\u251C",
      bprime: "\u2035",
      Breve: "\u02D8",
      breve: "\u02D8",
      brvbar: "\xA6",
      Bscr: "\u212C",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      Cap: "\u22D2",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xC7",
      ccedil: "\xE7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xB8",
      Cedilla: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      CenterDot: "\xB7",
      centerdot: "\xB7",
      Cfr: "\u212D",
      cfr: "\u{1D520}",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      cir: "\u25CB",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xAE",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      Colon: "\u2237",
      colon: ":",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      Conint: "\u222F",
      conint: "\u222E",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      copf: "\u{1D554}",
      coprod: "\u2210",
      Coproduct: "\u2210",
      COPY: "\xA9",
      copy: "\xA9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      Cross: "\u2A2F",
      cross: "\u2717",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      Cup: "\u22D3",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      CupCap: "\u224D",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      Dagger: "\u2021",
      dagger: "\u2020",
      daleth: "\u2138",
      Darr: "\u21A1",
      dArr: "\u21D3",
      darr: "\u2193",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      DD: "\u2145",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xB0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      Diamond: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xA8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      downarrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xC9",
      eacute: "\xE9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      ecir: "\u2256",
      Ecirc: "\xCA",
      ecirc: "\xEA",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      eDot: "\u2251",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xC8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp: "\u2003",
      emsp13: "\u2004",
      emsp14: "\u2005",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      Escr: "\u2130",
      escr: "\u212F",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xD0",
      eth: "\xF0",
      Euml: "\xCB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      ExponentialE: "\u2147",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      ForAll: "\u2200",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      Fscr: "\u2131",
      fscr: "\u{1D4BB}",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      gE: "\u2267",
      ge: "\u2265",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      Gg: "\u22D9",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gl: "\u2277",
      gla: "\u2AA5",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gnE: "\u2269",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      Gt: "\u226B",
      GT: ">",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      hArr: "\u21D4",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      Hfr: "\u210C",
      hfr: "\u{1D525}",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      Hopf: "\u210D",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xCD",
      iacute: "\xED",
      ic: "\u2063",
      Icirc: "\xCE",
      icirc: "\xEE",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      Ifr: "\u2111",
      ifr: "\u{1D526}",
      Igrave: "\xCC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Im: "\u2111",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      Int: "\u222C",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      Iscr: "\u2110",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xCF",
      iuml: "\xEF",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      Lang: "\u27EA",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xAB",
      Larr: "\u219E",
      lArr: "\u21D0",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      lAtail: "\u291B",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lBarr: "\u290E",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      lE: "\u2266",
      le: "\u2264",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      leftarrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      Ll: "\u22D8",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lnE: "\u2268",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftarrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      Lscr: "\u2112",
      lscr: "\u{1D4C1}",
      Lsh: "\u21B0",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      Lt: "\u226A",
      LT: "<",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      Mscr: "\u2133",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      nearhk: "\u2924",
      neArr: "\u21D7",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlarr: "\u219A",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nLeftarrow: "\u21CD",
      nleftarrow: "\u219A",
      nLeftrightarrow: "\u21CE",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      nopf: "\u{1D55F}",
      Not: "\u2AEC",
      not: "\xAC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nRightarrow: "\u21CF",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xD1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nvDash: "\u22AD",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwArr: "\u21D6",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xD3",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      Ocirc: "\xD4",
      ocirc: "\xF4",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xD2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      Or: "\u2A54",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xD8",
      oslash: "\xF8",
      osol: "\u2298",
      Otilde: "\xD5",
      otilde: "\xF5",
      Otimes: "\u2A37",
      otimes: "\u2297",
      otimesas: "\u2A36",
      Ouml: "\xD6",
      ouml: "\xF6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      Popf: "\u2119",
      popf: "\u{1D561}",
      pound: "\xA3",
      Pr: "\u2ABB",
      pr: "\u227A",
      prap: "\u2AB7",
      prcue: "\u227C",
      prE: "\u2AB3",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      Prime: "\u2033",
      prime: "\u2032",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportion: "\u2237",
      Proportional: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      Qopf: "\u211A",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      QUOT: '"',
      quot: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      Rang: "\u27EB",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      rAtail: "\u291C",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      RBarr: "\u2910",
      rBarr: "\u290F",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      Re: "\u211C",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      REG: "\xAE",
      reg: "\xAE",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      Rfr: "\u211C",
      rfr: "\u{1D52F}",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      rightarrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      Ropf: "\u211D",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      Rscr: "\u211B",
      rscr: "\u{1D4C7}",
      Rsh: "\u21B1",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      Sc: "\u2ABC",
      sc: "\u227B",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      sccue: "\u227D",
      scE: "\u2AB4",
      sce: "\u2AB0",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      searhk: "\u2925",
      seArr: "\u21D8",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xAD",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      Square: "\u25A1",
      square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      Sub: "\u22D0",
      sub: "\u2282",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      Subset: "\u22D0",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      sum: "\u2211",
      sung: "\u266A",
      Sup: "\u22D1",
      sup: "\u2283",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      Supset: "\u22D1",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swArr: "\u21D9",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      Therefore: "\u2234",
      therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      thinsp: "\u2009",
      ThinSpace: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xDE",
      thorn: "\xFE",
      Tilde: "\u223C",
      tilde: "\u02DC",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      TRADE: "\u2122",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xDA",
      uacute: "\xFA",
      Uarr: "\u219F",
      uArr: "\u21D1",
      uarr: "\u2191",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xDB",
      ucirc: "\xFB",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xD9",
      ugrave: "\xF9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xA8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      uparrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      updownarrow: "\u2195",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      upsi: "\u03C5",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xDC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      vArr: "\u21D5",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      Vbar: "\u2AEB",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      VDash: "\u22AB",
      Vdash: "\u22A9",
      vDash: "\u22A8",
      vdash: "\u22A2",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      Verbar: "\u2016",
      verbar: "|",
      Vert: "\u2016",
      vert: "|",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      Wedge: "\u22C0",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      Xi: "\u039E",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xDD",
      yacute: "\xFD",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xA5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      Yuml: "\u0178",
      yuml: "\xFF",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      Zfr: "\u2128",
      zfr: "\u{1D537}",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      Zopf: "\u2124",
      zopf: "\u{1D56B}",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    });
    exports.entityMap = exports.HTML_ENTITIES;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
    var NAMESPACE = require_conventions().NAMESPACE;
    var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype = new Error();
    ParseError.prototype.name = ParseError.name;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse(
          source,
          defaultNSMap,
          entityMap,
          domBuilder,
          this.errorHandler
        );
        domBuilder.endDocument();
      }
    };
    function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (Object.hasOwnProperty.call(entityMap, k)) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source))) {
          lineStart = m.index;
          lineEnd = lineStart + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!source.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source.substr(start));
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 3);
              var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
              var config = parseStack.pop();
              if (end < 0) {
                tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                      domBuilder.endPrefixMapping(prefix);
                    }
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack.push(config);
              }
              end++;
              break;
            // end elment
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
      function addAttribute(qname, value2, startIndex) {
        if (el.attributeNames.hasOwnProperty(qname)) {
          errorHandler.fatalError("Attribute " + qname + " redefined");
        }
        el.addValue(
          qname,
          // @see https://www.w3.org/TR/xml/#AVNormalize
          // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
          // - recursive replacement of (DTD) entity references
          // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
          value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
          startIndex
        );
      }
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c = source.charAt(p);
        switch (c) {
          case "=":
            if (s === S_ATTR) {
              attrName = source.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p);
              }
              start = p + 1;
              p = source.indexOf(c, start);
              if (p > 0) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                break;
              case S_ATTR_SPACE:
                el.closed = true;
                break;
              //case S_EQ:
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              //normal
              case S_ATTR_NOQUOT_VALUE:
              //Compatible state
              case S_ATTR:
                value = source.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value, start);
                } else {
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p;
          /*xml space '\x20' | #x9 | #xD | #xA; */
          case "\x80":
            c = " ";
          default:
            if (c <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                //case S_TAG:void();break;
                //case S_ATTR:void();break;
                //case S_ATTR_NOQUOT_VALUE:void();break;
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            _copy(currentNSMap, currentNSMap = {});
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = NAMESPACE.XMLNS;
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = NAMESPACE.XML;
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
              domBuilder.endPrefixMapping(prefix);
            }
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
          text = text.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source, target) {
      for (var n in source) {
        if (Object.prototype.hasOwnProperty.call(source, n)) {
          target[n] = source[n];
        }
      }
    }
    function parseDCC(source, start, domBuilder, errorHandler) {
      var next = source.charAt(start + 2);
      switch (next) {
        case "-":
          if (source.charAt(start + 3) === "-") {
            var end = source.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source.substr(start + 3, 6) == "CDATA[") {
            var end = source.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = false;
            var sysid = false;
            if (len > 3) {
              if (/^public$/i.test(matchs[2][0])) {
                pubid = matchs[3][0];
                sysid = len > 4 && matchs[4][0];
              } else if (/^system$/i.test(matchs[2][0])) {
                sysid = matchs[3][0];
              }
            }
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(name, pubid, sysid);
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source, start, domBuilder) {
      var end = source.indexOf("?>", start);
      if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes() {
      this.attributeNames = {};
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
      //	,getIndex:function(uri, localName)){
      //		if(localName){
      //
      //		}else{
      //			var qName = uri
      //		}
      //	},
      //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
      //	getType:function(uri,localName){}
      //	getType:function(i){},
    };
    function split(source, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source);
      while (match = reg.exec(source)) {
        buf.push(match);
        if (match[1]) return buf;
      }
    }
    exports.XMLReader = XMLReader;
    exports.ParseError = ParseError;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
    var conventions = require_conventions();
    var dom = require_dom();
    var entities = require_entities();
    var sax = require_sax();
    var DOMImplementation = dom.DOMImplementation;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = sax.ParseError;
    var XMLReader = sax.XMLReader;
    function normalizeLineEndings(input) {
      return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
    }
    function DOMParser2(options) {
      this.options = options || { locator: {} };
    }
    DOMParser2.prototype.parseFromString = function(source, mimeType) {
      var options = this.options;
      var sax2 = new XMLReader();
      var domBuilder = options.domBuilder || new DOMHandler();
      var errorHandler = options.errorHandler;
      var locator = options.locator;
      var defaultNSMap = options.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax2.domBuilder = options.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = NAMESPACE.HTML;
      }
      defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
      var normalize = options.normalizeLineEndings || normalizeLineEndings;
      if (source && typeof source === "string") {
        sax2.parse(
          normalize(source),
          defaultNSMap,
          entityMap
        );
      } else {
        sax2.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function(msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      //LexicalHandler
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
          this.doc.doctype = dt;
        }
      },
      /**
       * @see org.xml.sax.ErrorHandler
       * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       */
      warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function(error) {
        throw new ParseError(error, this.locator);
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
      DOMHandler.prototype[key] = function() {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    exports.__DOMHandler = DOMHandler;
    exports.normalizeLineEndings = normalizeLineEndings;
    exports.DOMParser = DOMParser2;
  }
});

// ../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/@xmldom+xmldom@0.8.11/node_modules/@xmldom/xmldom/lib/index.js"(exports) {
    var dom = require_dom();
    exports.DOMImplementation = dom.DOMImplementation;
    exports.XMLSerializer = dom.XMLSerializer;
    exports.DOMParser = require_dom_parser().DOMParser;
  }
});

// ../../server/src/renderer/WorkerFrameRenderer.ts
var WorkerFrameRenderer_exports = {};
__export(WorkerFrameRenderer_exports, {
  WorkerFrameRenderer: () => WorkerFrameRenderer
});
import { Worker } from "worker_threads";
import * as path4 from "path";
import * as os4 from "os";
var WorkerFrameRenderer;
var init_WorkerFrameRenderer = __esm({
  "../../server/src/renderer/WorkerFrameRenderer.ts"() {
    "use strict";
    WorkerFrameRenderer = class {
      constructor() {
        /** Worker 数量：min(8, cpuCount-1)，至少 2 */
        this.numWorkers = Math.min(8, Math.max(2, os4.cpus().length - 1));
      }
      /**
       * 并行渲染所有帧，按 frameIndex 顺序通过 onFrameBuffer 回调交付给调用方。
       *
       * @param session    序列化后的渲染上下文（传给 Workers）
       * @param totalFrames 总帧数
       * @param onFrameBuffer  按顺序调用：(frameIndex, ArrayBuffer) => Promise<void>
       * @param onProgress    每帧完成时调用
       */
      async renderAllFrames(session2, totalFrames, onFrameBuffer, onProgress) {
        const resolvers = new Array(totalFrames);
        const framePromises = Array.from(
          { length: totalFrames },
          (_, i) => new Promise((resolve2, reject) => {
            resolvers[i] = { resolve: resolve2, reject };
          })
        );
        const ext = import.meta.url.endsWith(".ts") ? "ts" : import.meta.url.endsWith(".mjs") ? "mjs" : "js";
        const workerPath = path4.join(import.meta.dirname, `frameWorker.${ext}`);
        const workerExecArgv = ext === "ts" ? ["--require", "tsx/cjs"] : [];
        let nextFrameToDispatch = 0;
        const workers = [];
        const workerCurrentFrame = /* @__PURE__ */ new Map();
        const dispatch = (w) => {
          if (nextFrameToDispatch >= totalFrames) return;
          const fi = nextFrameToDispatch++;
          workerCurrentFrame.set(w, fi);
          w.postMessage({ type: "renderFrame", frameIndex: fi });
        };
        const actualWorkers = Math.min(this.numWorkers, totalFrames);
        for (let i = 0; i < actualWorkers; i++) {
          workers.push(
            new Worker(workerPath, {
              workerData: session2,
              execArgv: workerExecArgv
            })
          );
        }
        await Promise.all(
          workers.map(
            (w, i) => new Promise((resolve2, reject) => {
              const timeout = setTimeout(
                () => reject(new Error(`Worker ${i} init timeout`)),
                3e4
              );
              w.once("message", (msg) => {
                if (msg.type === "ready") {
                  clearTimeout(timeout);
                  resolve2();
                }
              });
              w.once("error", (e) => {
                clearTimeout(timeout);
                reject(e);
              });
            })
          )
        );
        for (const w of workers) {
          w.on("message", (msg) => {
            workerCurrentFrame.delete(w);
            if (msg.type === "frameResult") {
              resolvers[msg.frameIndex].resolve(msg.buffer);
            } else if (msg.type === "frameError") {
              resolvers[msg.frameIndex].reject(new Error(msg.error));
            }
            dispatch(w);
          });
          w.on("error", (err) => {
            const msg = err instanceof Error ? err.message : String(err);
            const fi = workerCurrentFrame.get(w);
            const crashErr = new Error(`Worker crashed at frame ${fi ?? "?"}: ${msg}`);
            if (fi !== void 0) {
              resolvers[fi]?.reject(crashErr);
              workerCurrentFrame.delete(w);
            }
            for (const r of resolvers) {
              try {
                r?.reject(crashErr);
              } catch {
              }
            }
          });
          dispatch(w);
        }
        try {
          for (let i = 0; i < totalFrames; i++) {
            const buffer = await framePromises[i];
            await onFrameBuffer(i, buffer);
            onProgress(i);
          }
        } finally {
          for (const w of workers) {
            try {
              w.terminate();
            } catch {
            }
          }
          const abortErr = new Error("Rendering aborted");
          for (const r of resolvers) {
            try {
              r?.reject(abortErr);
            } catch {
            }
          }
        }
      }
    };
  }
});

// ../../server/src/renderer/frameWorker.ts
import { isMainThread, parentPort, workerData } from "worker_threads";
import { Canvas as Canvas2, loadImage as loadImage4 } from "skia-canvas";

// ../../server/src/renderer/ServerRenderExporter.ts
import { Canvas, loadImage as loadImage3 } from "skia-canvas";
import * as path5 from "path";
import * as os5 from "os";
import * as fs5 from "fs";
import { spawn as spawnProcess, execSync } from "child_process";
import sharp2 from "sharp";

// ../../shared/utils/LRUCache.ts
var LRUCache = class {
  constructor(_max) {
    this._max = _max;
    this._map = /* @__PURE__ */ new Map();
  }
  get(key) {
    const v = this._map.get(key);
    if (v !== void 0) {
      this._map.delete(key);
      this._map.set(key, v);
    }
    return v;
  }
  set(key, value) {
    if (this._map.has(key)) this._map.delete(key);
    this._map.set(key, value);
    if (this._map.size > this._max) {
      this._map.delete(this._map.keys().next().value);
    }
  }
  get size() {
    return this._map.size;
  }
};

// ../../shared/caption-animation/captionAnimationConstants.ts
var NEON_COLORS = [
  "#FF1493",
  // 深粉红
  "#00FFFF",
  // 青色
  "#00FF00",
  // 绿色
  "#FF00FF",
  // 洋红
  "#FFFF00",
  // 黄色
  "#FF6600"
];
var ANIMATION_SPEEDS = {
  NEON_FLICKER: 3e-3,
  NEON_COLOR_CYCLE: 1e-3,
  NEON_CHAR_PHASE: 0.3,
  WAVE_FREQUENCY: 4e-3,
  WAVE_CHAR_PHASE: 0.6,
  BREATHE_FREQUENCY: 2e-3,
  FLOAT_FREQUENCY: 15e-4,
  GLITCH_FREQUENCY: 8e-3,
  CHAR_STAGGER_OVERLAP: 0.4,
  WORD_POP_OVERLAP: 0.15,
  CHAR_BLUR_REVEAL_OVERLAP: 0.4,
  COLOR_FLOW_SPEED: 2e-3
};
var ANIMATION_SIZES = {
  SLIDE_DISTANCE_RATIO: 0.1,
  NEON_BASE_STROKE_WIDTH: 2,
  NEON_MIN_STROKE_WIDTH: 1,
  KARAOKE_GLOW_STROKE_WIDTH: 2,
  KARAOKE_GRADIENT_RANGE: 3,
  BLUR_MAX: 8,
  WAVE_AMPLITUDE: 6,
  BREATHE_AMPLITUDE: 0.04,
  FLOAT_AMPLITUDE: 8,
  GLITCH_AMPLITUDE: 6,
  ROTATE_END_ANGLE: 90,
  WORD_POP_OVERSHOOT: 1.5,
  CHAR_BLUR_MAX: 6,
  BLUR_SHIMMER_WARM_R: 255,
  BLUR_SHIMMER_WARM_G: 215,
  BLUR_SHIMMER_WARM_B: 0
};
var ANIMATION_THRESHOLDS = {
  TYPEWRITER_COMPLETE: 0.98,
  BOUNCE_OPACITY_RATIO: 0.3,
  WORD_STAGGER_OVERLAP: 0.3,
  BLUR_SHIMMER_OVERLAP: 0.45
};
var CACHE_CONFIG = {
  CHAR_WIDTH_MAX_SIZE: 500,
  GRAPHEME_CACHE_MAX_SIZE: 500,
  WORD_BOUNDARY_CACHE_MAX_SIZE: 256
};
var KARAOKE_PRESET_STYLE_MAP = {
  "karaoke-glow": "glow",
  "karaoke-underline": "underline",
  "karaoke-gradient": "gradient",
  "karaoke-bold": "bold",
  "karaoke-rainbow": "rainbow"
};
var _segmenter = null;
var _graphemeCache = new LRUCache(CACHE_CONFIG.GRAPHEME_CACHE_MAX_SIZE);
function toGraphemes(text) {
  const cached = _graphemeCache.get(text);
  if (cached) return cached;
  if (!_segmenter) {
    _segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  }
  const result = Array.from(_segmenter.segment(text), (s) => s.segment);
  _graphemeCache.set(text, result);
  return result;
}
var _wordBoundaryCache = new LRUCache(CACHE_CONFIG.WORD_BOUNDARY_CACHE_MAX_SIZE);
function getWordBoundaries(text) {
  let cached = _wordBoundaryCache.get(text);
  if (cached) return cached;
  const chars = toGraphemes(text);
  const boundaries = [];
  let i = 0;
  while (i < chars.length) {
    while (i < chars.length && /\s/.test(chars[i])) i++;
    const wordStart = i;
    while (i < chars.length && !/\s/.test(chars[i])) i++;
    if (i > wordStart) boundaries.push(i);
  }
  _wordBoundaryCache.set(text, boundaries);
  return boundaries;
}
function getRainbowColor(index, total) {
  const hue = index / Math.max(total, 1) * 360;
  return `hsl(${hue}, 100%, 50%)`;
}
function srtTimeToMs(srtTime) {
  if (!srtTime) return 0;
  const norm = srtTime.replace(",", ".");
  const parts = norm.split(":");
  let h = 0, m = 0, sec = 0;
  if (parts.length === 3) {
    h = parseInt(parts[0], 10) || 0;
    m = parseInt(parts[1], 10) || 0;
    sec = parseFloat(parts[2]) || 0;
  } else if (parts.length === 2) {
    m = parseInt(parts[0], 10) || 0;
    sec = parseFloat(parts[1]) || 0;
  } else if (parts.length === 1) {
    sec = parseFloat(parts[0]) || 0;
  }
  return (h * 3600 + m * 60 + sec) * 1e3;
}
var CaptionIndex = class {
  constructor(captions) {
    this.lastHitIdx = -1;
    this.entries = captions.map((c) => ({
      startMs: srtTimeToMs(c.startTime),
      endMs: srtTimeToMs(c.endTime),
      caption: c
    })).sort((a, b) => a.startMs - b.startMs);
  }
  findAt(timeSec) {
    const tMs = timeSec * 1e3;
    if (this.lastHitIdx >= 0) {
      const e = this.entries[this.lastHitIdx];
      if (tMs >= e.startMs && tMs < e.endMs) return e.caption;
    }
    const entries = this.entries;
    let lo = 0;
    let hi = entries.length - 1;
    let result = -1;
    while (lo <= hi) {
      const mid = lo + hi >>> 1;
      if (entries[mid].startMs <= tMs) {
        result = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    if (result >= 0 && tMs < entries[result].endMs) {
      this.lastHitIdx = result;
      return entries[result].caption;
    }
    return null;
  }
};

// ../../shared/render/DataConverter.ts
var DataConverter = class _DataConverter {
  static convertTracks(tracks, editorElements, animations, keyframeTracks) {
    const elementMap = new Map(editorElements.map((el) => [el.id, el]));
    const animationsByTarget = this.groupAnimationsByTarget(animations);
    const keyframesByTarget = this.groupKeyframesByTarget(keyframeTracks || []);
    return tracks.map((track) => ({
      id: track.id,
      name: track.name,
      type: track.type,
      elements: track.elementIds.map((elementId) => {
        const element = elementMap.get(elementId);
        if (!element) return null;
        return this.convertElement(
          element,
          animationsByTarget.get(elementId) || [],
          keyframesByTarget.get(elementId) || []
        );
      }).filter(Boolean),
      isVisible: !!track.isVisible,
      isLocked: track.isLocked ?? false,
      muted: false
    }));
  }
  /**
   * Convert a single editor element to a RenderElement.
   */
  static convertElement(element, animations, keyframeTracks = []) {
    const placement = element.placement || {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      flipX: false,
      flipY: false
    };
    const timeFrame = element.timeFrame;
    const duration = (timeFrame.end - timeFrame.start) / 1e3;
    let centerX;
    let centerY;
    const isValidNumber = (n) => typeof n === "number" && Number.isFinite(n) && !isNaN(n);
    if (isValidNumber(placement.centerX) && isValidNumber(placement.centerY)) {
      centerX = placement.centerX;
      centerY = placement.centerY;
    } else if (isValidNumber(placement.x) && isValidNumber(placement.y) && isValidNumber(placement.width) && isValidNumber(placement.height)) {
      centerX = placement.x + placement.width / 2;
      centerY = placement.y + placement.height / 2;
    } else {
      centerX = placement.width ? placement.width / 2 : 960;
      centerY = placement.height ? placement.height / 2 : 540;
    }
    const baseElement = {
      id: element.id,
      type: element.type,
      startTime: timeFrame.start / 1e3,
      duration,
      trimStart: 0,
      trimEnd: 0,
      hidden: false,
      x: placement.x ?? 0,
      y: placement.y ?? 0,
      centerX,
      centerY,
      width: placement.width ?? 100,
      height: placement.height ?? 100,
      rotation: placement.rotation ?? 0,
      scaleX: placement.scaleX ?? 1,
      scaleY: placement.scaleY ?? 1,
      opacity: element.opacity ?? 1,
      flipX: placement.flipX ?? false,
      flipY: placement.flipY ?? false,
      blendMode: element.blendMode,
      cropX: placement.cropX,
      cropY: placement.cropY,
      cropWidth: placement.cropWidth,
      cropHeight: placement.cropHeight,
      // Mask
      ...element.mask?.enabled ? {
        maskEnabled: true,
        maskShapeType: element.mask.shapeType,
        maskX: element.mask.x ?? 0,
        maskY: element.mask.y ?? 0,
        maskScaleX: element.mask.scaleX ?? 1,
        maskScaleY: element.mask.scaleY ?? 1,
        maskRotation: element.mask.rotation ?? 0,
        maskInverted: element.mask.inverted ?? false,
        maskSides: element.mask.sides,
        maskInnerRadius: element.mask.innerRadius,
        maskFeather: element.mask.feather,
        maskPathData: element.mask.pathData,
        maskMode: element.mask.mode ?? "clip",
        maskEffectType: element.mask.effectType,
        maskEffectIntensity: element.mask.effectIntensity
      } : {},
      animations: animations.map((a) => _DataConverter.convertAnimation(a)),
      keyframeTracks: keyframeTracks.filter(
        (t) => t.enabled && t.keyframes.length > 0
      )
    };
    const props = element.properties;
    const visualProps = () => ({
      borderWidth: props.border?.width || 0,
      borderColor: props.border?.color,
      borderStyle: props.border?.style,
      borderRadius: props.border?.borderRadius || 0,
      effectType: props.effect?.type,
      filterIntensity: props.effect?.intensity ?? 1,
      brightness: props.filters?.brightness ?? 0,
      contrast: props.filters?.contrast ?? 0,
      saturation: props.filters?.saturation ?? 0,
      hue: props.filters?.hue ?? 0,
      blur: props.filters?.blur ?? 0,
      // Background removal (frontend-only)
      bgRemovalEnabled: props.bgRemoval?.enabled ?? false,
      bgRemovalMode: props.bgRemoval?.mode,
      bgRemovalBlurAmount: props.bgRemoval?.blurAmount,
      bgRemovalSolidColor: props.bgRemoval?.solidColor,
      bgRemovalReplacementImageSrc: props.bgRemoval?.replacementImageSrc,
      bgRemovalResultUrl: props.bgRemoval?.resultUrl
    });
    const playableProps = () => ({
      muted: Boolean(element.muted) || false,
      mediaStartTime: props.mediaStartTime || 0,
      volume: element.volume ?? props.volume ?? 1,
      playbackSpeed: element.playbackSpeed ?? props.playbackRate ?? 1,
      preservePitch: element.preservePitch ?? props.preservePitch ?? true,
      fadeInDuration: props.fadeInDuration ?? element.fadeInDuration ?? 500,
      fadeOutDuration: props.fadeOutDuration ?? element.fadeOutDuration ?? 500,
      audioEffect: props.audioEffect
    });
    switch (element.type) {
      case "video":
        return {
          ...baseElement,
          src: props.src,
          ...playableProps(),
          ...visualProps()
        };
      case "image": {
        const src = props.src || "";
        const isSvg = _DataConverter.isSvgSource(src);
        return {
          ...baseElement,
          type: isSvg ? "svg" : "image",
          src: props.src,
          ...isSvg && props.isAnimatedSvg ? { isAnimatedSvg: true } : {},
          ...visualProps()
        };
      }
      // "svg" 作为 canvasState 元素的直接类型（CLI/API 直接构造时使用）
      case "svg":
        return {
          ...baseElement,
          type: "svg",
          src: props.src,
          ...props.isAnimatedSvg ? { isAnimatedSvg: true } : {},
          ...visualProps()
        };
      case "gif":
        return {
          ...baseElement,
          src: props.src,
          ...visualProps()
        };
      case "audio":
        return {
          ...baseElement,
          src: props.src,
          ...playableProps()
        };
      case "text": {
        const styles = props.styles || [];
        const isBold = styles.includes("bold");
        const isItalic = styles.includes("italic");
        const underline = styles.includes("underline");
        const linethrough = styles.includes("linethrough") || styles.includes("strike") || styles.includes("strikethrough");
        const finalFontWeight = isBold ? "bold" : props.fontWeight?.toString() || "normal";
        const finalFontStyle = isItalic ? "italic" : "normal";
        const fabricObject = element.fabricObject;
        let actualWidth = placement.width ?? 100;
        let actualHeight = placement.height ?? 100;
        let actualText = props.text;
        let textboxWidth = placement.width ?? 100;
        let wrappedLines;
        if (fabricObject && fabricObject.type === "text") {
          actualWidth = fabricObject.width || actualWidth;
          actualHeight = fabricObject.height || actualHeight;
          actualText = fabricObject.text || props.text;
          textboxWidth = fabricObject.width || textboxWidth;
          if (fabricObject.dynamicMinWidth !== void 0) {
            textboxWidth = Math.max(fabricObject.dynamicMinWidth, actualWidth);
          }
          if (Array.isArray(fabricObject.textLines) && fabricObject.textLines.length > 0) {
            wrappedLines = fabricObject.textLines;
          }
        }
        return {
          ...baseElement,
          width: actualWidth,
          height: actualHeight,
          text: actualText,
          fontSize: props.fontSize || 24,
          fontFamily: props.fontFamily || "Arial",
          fontWeight: finalFontWeight,
          fontStyle: finalFontStyle,
          color: props.fontColor || "#000000",
          textAlign: props.textAlign || "center",
          backgroundColor: props.backgroundColor,
          strokeWidth: props.strokeWidth || 0,
          strokeColor: props.strokeColor,
          shadowColor: props.shadowColor,
          shadowBlur: props.shadowBlur,
          shadowOffsetX: props.shadowOffsetX,
          shadowOffsetY: props.shadowOffsetY,
          underline,
          linethrough,
          textboxWidth,
          wrappedLines,
          padding: fabricObject?.padding || 5,
          lineHeight: fabricObject?.lineHeight ?? props.lineHeight ?? 1.16,
          charSpacing: fabricObject?.charSpacing ?? props.charSpacing ?? 0,
          useGradient: props.useGradient ?? false,
          gradientColors: props.gradientColors
        };
      }
      case "shape":
        return {
          ...baseElement,
          fill: props.fill || "#000000",
          stroke: props.stroke || "transparent",
          strokeWidth: props.strokeWidth || 0,
          shapeType: props.shapeType,
          shapeBorderRadius: props.borderRadius || 0,
          shapePoints: props.points
        };
      case "effect":
        return {
          ...baseElement,
          globalEffectLayers: props.effectLayers
        };
      default:
        return baseElement;
    }
  }
  static convertAnimation(animation) {
    let group;
    if (animation.group === "in" || animation.group === "out" || animation.group === "emphasis") {
      group = animation.group;
    } else {
      group = _DataConverter.getAnimationGroup(animation.type);
    }
    const duration = group === "emphasis" ? animation.duration || 0 : (animation.duration || 0) / 1e3;
    return {
      id: animation.id,
      type: animation.type,
      duration,
      group,
      easing: animation.easing,
      properties: animation.properties || {}
    };
  }
  static getAnimationGroup(animationType) {
    if (animationType.endsWith("In")) return "in";
    if (animationType.endsWith("Out")) return "out";
    return "emphasis";
  }
  static groupAnimationsByTarget(animations) {
    const grouped = /* @__PURE__ */ new Map();
    for (const animation of animations) {
      const targetId = animation.targetId;
      if (!targetId) continue;
      if (!grouped.has(targetId)) {
        grouped.set(targetId, []);
      }
      grouped.get(targetId).push(animation);
    }
    return grouped;
  }
  static groupKeyframesByTarget(keyframeTracks) {
    const grouped = /* @__PURE__ */ new Map();
    for (const track of keyframeTracks) {
      if (!track.targetId) continue;
      if (!grouped.has(track.targetId)) {
        grouped.set(track.targetId, []);
      }
      grouped.get(track.targetId).push(track);
    }
    return grouped;
  }
  static calculateTotalDuration(tracks) {
    let maxDuration = 0;
    for (const track of tracks) {
      for (const element of track.elements) {
        const elementEnd = element.startTime + element.duration - element.trimEnd;
        maxDuration = Math.max(maxDuration, elementEnd);
      }
    }
    return maxDuration;
  }
  static getActiveElements(tracks, time) {
    const active = [];
    for (let i = tracks.length - 1; i >= 0; i--) {
      const track = tracks[i];
      if (!track.isVisible) continue;
      for (const element of track.elements) {
        if (element.hidden) continue;
        const elementStart = element.startTime + element.trimStart;
        const elementEnd = element.startTime + element.duration - element.trimEnd;
        if (time >= elementStart && time <= elementEnd) {
          active.push({ track, element });
        }
      }
    }
    return active;
  }
  static isSvgSource(src) {
    if (!src) return false;
    if (src.startsWith("data:image/svg+xml")) return true;
    const lowerSrc = src.toLowerCase();
    const urlWithoutQuery = lowerSrc.split("?")[0];
    if (urlWithoutQuery.endsWith(".svg")) return true;
    if (lowerSrc.includes("image/svg+xml")) return true;
    try {
      const url = new URL(src);
      if (url.pathname.toLowerCase().endsWith(".svg")) return true;
    } catch {
    }
    return false;
  }
  static getActiveEffectElements(tracks, timeSec) {
    const active = [];
    for (const track of tracks) {
      if (track.type !== "effect") continue;
      for (const element of track.elements) {
        if (element.type !== "effect") continue;
        if (timeSec >= element.startTime && timeSec < element.startTime + element.duration) {
          active.push(element);
        }
      }
    }
    return active;
  }
  // ---------------------------------------------------------------------------
  // Export optimisation helpers (scan-line active-element pre-computation)
  // ---------------------------------------------------------------------------
  /**
   * Scan-line algorithm: pre-compute per-frame active element lists.
   * Reduces complexity from O(N*T*E) to O(T*E + sum(element_frame_spans)).
   */
  static buildActiveElementsByFrame(tracks, totalFrames, fps, duration, transitions) {
    const extendBefore = /* @__PURE__ */ new Map();
    const extendAfter = /* @__PURE__ */ new Map();
    if (transitions) {
      for (const t of transitions) {
        const halfDur = t.duration / 2;
        const prevAfter = extendAfter.get(t.sourceElementId) ?? 0;
        extendAfter.set(t.sourceElementId, Math.max(prevAfter, halfDur));
        const prevBefore = extendBefore.get(t.targetElementId) ?? 0;
        extendBefore.set(t.targetElementId, Math.max(prevBefore, halfDur));
      }
    }
    const elementRanges = [];
    for (let i = tracks.length - 1; i >= 0; i--) {
      const track = tracks[i];
      if (!track.isVisible) continue;
      for (const element of track.elements) {
        if (element.hidden) continue;
        const start = element.startTime + element.trimStart;
        const end = element.startTime + element.duration - element.trimEnd;
        const extBefore = (extendBefore.get(element.id) ?? 0) / 1e3;
        const extAfter = (extendAfter.get(element.id) ?? 0) / 1e3;
        const startFrame = Math.max(0, Math.floor((start - extBefore) * fps));
        const endFrame = Math.min(
          totalFrames - 1,
          end + extAfter >= duration ? totalFrames - 1 : Math.floor((end + extAfter) * fps)
        );
        if (startFrame <= endFrame) {
          elementRanges.push({ track, element, startFrame, endFrame });
        }
      }
    }
    const result = new Array(totalFrames);
    for (let f = 0; f < totalFrames; f++) result[f] = [];
    for (const { track, element, startFrame, endFrame } of elementRanges) {
      for (let f = startFrame; f <= endFrame; f++) {
        result[f].push({ track, element });
      }
    }
    return result;
  }
  /**
   * Pre-compute per-frame "is static" flags.
   * A static frame is visually identical to the previous frame and can be
   * skipped (the canvas content is reused for encoding).
   */
  static buildStaticFrameFlags(activeElementsByFrame2, totalFrames, fps, transitions, captions, captionAnimation) {
    const isStatic = new Array(totalFrames).fill(false);
    const captionTimesMs = captions?.map((cap) => ({
      startMs: srtTimeToMs(cap.startTime),
      endMs: srtTimeToMs(cap.endTime)
    }));
    const transitionPairs = [];
    if (transitions) {
      for (const t of transitions) {
        if (t.duration > 0) {
          transitionPairs.push({
            src: t.sourceElementId,
            tgt: t.targetElementId
          });
        }
      }
    }
    const frameDurationMs = 1e3 / fps;
    for (let f = 1; f < totalFrames; f++) {
      const curr = activeElementsByFrame2[f];
      const prev = activeElementsByFrame2[f - 1];
      const timeSec = f / fps;
      const timeMs = timeSec * 1e3;
      const prevTimeMs = timeMs - frameDurationMs;
      if (curr.length !== prev.length) continue;
      let sameElements = true;
      for (let i = 0; i < curr.length; i++) {
        if (curr[i].element.id !== prev[i].element.id) {
          sameElements = false;
          break;
        }
      }
      if (!sameElements) continue;
      let hasDynamicElement = false;
      for (let i = 0; i < curr.length; i++) {
        const el = curr[i].element;
        if (el.type === "video" || el.type === "gif" || el.type === "effect" || el.type === "svg" && el.isAnimatedSvg === true) {
          hasDynamicElement = true;
          break;
        }
        if (_DataConverter._hasActiveAnimation(el, timeSec)) {
          hasDynamicElement = true;
          break;
        }
        if (_DataConverter._hasActiveKeyframes(el, timeSec)) {
          hasDynamicElement = true;
          break;
        }
      }
      if (!hasDynamicElement && transitionPairs.length > 0) {
        outer: for (let ti = 0; ti < transitionPairs.length; ti++) {
          const { src, tgt } = transitionPairs[ti];
          let hasSrc = false, hasTgt = false;
          for (let i = 0; i < curr.length; i++) {
            const id = curr[i].element.id;
            if (id === src) hasSrc = true;
            else if (id === tgt) hasTgt = true;
            if (hasSrc && hasTgt) {
              hasDynamicElement = true;
              break outer;
            }
          }
        }
      }
      if (hasDynamicElement) continue;
      if (_DataConverter._hasActiveCaptionAnimation(
        captionTimesMs,
        captionAnimation,
        timeSec
      ))
        continue;
      if (captionTimesMs && captionTimesMs.length > 0) {
        let onBoundary = false;
        for (let ci = 0; ci < captionTimesMs.length; ci++) {
          const { startMs, endMs } = captionTimesMs[ci];
          if (prevTimeMs < startMs && timeMs >= startMs) {
            onBoundary = true;
            break;
          }
          if (prevTimeMs <= endMs && timeMs > endMs) {
            onBoundary = true;
            break;
          }
        }
        if (onBoundary) continue;
      }
      isStatic[f] = true;
    }
    return isStatic;
  }
  // -- private helpers for static frame detection --
  static _hasActiveAnimation(element, timeSec) {
    if (!element.animations || element.animations.length === 0) return false;
    const elStart = element.startTime + element.trimStart;
    const elEnd = element.startTime + element.duration - element.trimEnd;
    const localTime = timeSec - elStart;
    const elDuration = elEnd - elStart;
    for (const anim of element.animations) {
      if (anim.duration <= 0) continue;
      if (anim.group === "in" && localTime >= 0 && localTime < anim.duration)
        return true;
      if (anim.group === "out" && localTime >= 0 && localTime > elDuration - anim.duration)
        return true;
      if (anim.group === "emphasis") return true;
    }
    return false;
  }
  static _hasActiveKeyframes(element, timeSec) {
    if (!element.keyframeTracks || element.keyframeTracks.length === 0)
      return false;
    const localTime = timeSec - (element.startTime + element.trimStart);
    for (const track of element.keyframeTracks) {
      if (!track.enabled || track.keyframes.length < 2) continue;
      const first = track.keyframes[0].time;
      const last = track.keyframes[track.keyframes.length - 1].time;
      if (localTime >= first && localTime <= last) return true;
    }
    return false;
  }
  static {
    /**
     * Continuous caption animation presets that animate throughout the entire
     * caption duration (not just in/out windows).
     */
    this.CONTINUOUS_CAPTION_PRESETS = /* @__PURE__ */ new Set([
      "typewriter",
      "typewriter-word",
      "neon",
      "wave",
      "breathe",
      "float",
      "glitch",
      "word-stagger",
      "char-fade-in",
      "char-scale-in",
      "karaoke",
      "karaoke-glow",
      "karaoke-underline",
      "karaoke-gradient",
      "karaoke-bold",
      "karaoke-rainbow",
      "word-pop",
      "char-blur-reveal",
      "color-flow",
      "char-rotate-in",
      "elastic-char-in",
      "shadow-glow-pulse",
      "tracking-expand",
      "blur-shimmer",
      "drop-bounce",
      "word-slide-up",
      "skew-in",
      // TikTok 分页高亮（outDuration=0，需整段持续渲染）
      "tiktok-highlight",
      "tiktok-pop",
      "tiktok-glow",
      "tiktok",
      // inType 值，覆盖 custom preset 手动设置的场景
      // 新增预设（2026-03-12）
      "char-slide-up",
      "char-bounce-in",
      "char-zoom-in",
      "char-flip-in",
      "char-vibrate",
      "rainbow-shimmer"
    ]);
  }
  static _hasActiveCaptionAnimation(captionTimesMs, captionAnimation, timeSec) {
    if (!captionTimesMs || captionTimesMs.length === 0) return false;
    if (!captionAnimation) return false;
    const timeMs = timeSec * 1e3;
    const inDur = captionAnimation.inDuration || 0;
    const outDur = captionAnimation.outDuration || 0;
    const isContinuous = _DataConverter.CONTINUOUS_CAPTION_PRESETS.has(captionAnimation.preset) || captionAnimation.inType != null && _DataConverter.CONTINUOUS_CAPTION_PRESETS.has(captionAnimation.inType);
    const hasAnimation = inDur > 0 || outDur > 0 || isContinuous;
    if (!hasAnimation) return false;
    for (const { startMs, endMs } of captionTimesMs) {
      if (timeMs < startMs || timeMs > endMs) continue;
      if (isContinuous) return true;
      if (inDur > 0 && timeMs < startMs + inDur) return true;
      if (outDur > 0 && timeMs > endMs - outDur) return true;
    }
    return false;
  }
};

// ../../server/src/renderer/ServerImageLoader.ts
import { loadImage } from "skia-canvas";
var ServerImageLoader = class {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  async load(src) {
    if (this.cache.has(src)) return this.cache.get(src);
    const img = await loadImage(src);
    this.cache.set(src, img);
    return img;
  }
  has(src) {
    return this.cache.has(src);
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
};

// ../../server/src/renderer/ServerSvgAnimator.ts
var import_xmldom = __toESM(require_lib());
import * as fs from "fs";
import sharp from "sharp";

// ../../shared/svg/pathSampler.ts
var DEG = 180 / Math.PI;
function dist(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
function angle(dx, dy) {
  return Math.atan2(dy, dx) * DEG;
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function lineSegment(x1, y1, x2, y2) {
  const len = dist(x1, y1, x2, y2);
  const a = angle(x2 - x1, y2 - y1);
  return {
    length: len,
    pointAt(t) {
      return { x: lerp(x1, x2, t), y: lerp(y1, y2, t), angle: a };
    }
  };
}
function cubicAt(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}
function cubicDeriv(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return 3 * u * u * (p1 - p0) + 6 * u * t * (p2 - p1) + 3 * t * t * (p3 - p2);
}
function cubicLength(x0, y0, x1, y1, x2, y2, x3, y3) {
  const T = [0.04691008, 0.23076534, 0.5, 0.76923466, 0.95308992];
  const W = [0.11846345, 0.23931434, 0.28444444, 0.23931434, 0.11846345];
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    const dx = cubicDeriv(x0, x1, x2, x3, T[i]);
    const dy = cubicDeriv(y0, y1, y2, y3, T[i]);
    sum += W[i] * Math.sqrt(dx * dx + dy * dy);
  }
  return sum;
}
function cubicSegment(x0, y0, x1, y1, x2, y2, x3, y3) {
  const len = cubicLength(x0, y0, x1, y1, x2, y2, x3, y3);
  return {
    length: len,
    pointAt(t) {
      const x = cubicAt(x0, x1, x2, x3, t);
      const y = cubicAt(y0, y1, y2, y3, t);
      const dx = cubicDeriv(x0, x1, x2, x3, t);
      const dy = cubicDeriv(y0, y1, y2, y3, t);
      return { x, y, angle: angle(dx, dy) };
    }
  };
}
function quadAt(p0, p1, p2, t) {
  const u = 1 - t;
  return u * u * p0 + 2 * u * t * p1 + t * t * p2;
}
function quadDeriv(p0, p1, p2, t) {
  return 2 * (1 - t) * (p1 - p0) + 2 * t * (p2 - p1);
}
function quadLength(x0, y0, x1, y1, x2, y2) {
  const T = [0.04691008, 0.23076534, 0.5, 0.76923466, 0.95308992];
  const W = [0.11846345, 0.23931434, 0.28444444, 0.23931434, 0.11846345];
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    const dx = quadDeriv(x0, x1, x2, T[i]);
    const dy = quadDeriv(y0, y1, y2, T[i]);
    sum += W[i] * Math.sqrt(dx * dx + dy * dy);
  }
  return sum;
}
function quadSegment(x0, y0, x1, y1, x2, y2) {
  const len = quadLength(x0, y0, x1, y1, x2, y2);
  return {
    length: len,
    pointAt(t) {
      const x = quadAt(x0, x1, x2, t);
      const y = quadAt(y0, y1, y2, t);
      const dx = quadDeriv(x0, x1, x2, t);
      const dy = quadDeriv(y0, y1, y2, t);
      return { x, y, angle: angle(dx, dy) };
    }
  };
}
function arcToCenterParam(x1, y1, rx, ry, phi, fA, fS, x2, y2) {
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const dx2 = (x1 - x2) / 2;
  const dy2 = (y1 - y2) / 2;
  const x1p = cosPhi * dx2 + sinPhi * dy2;
  const y1p = -sinPhi * dx2 + cosPhi * dy2;
  let rxSq = rx * rx;
  let rySq = ry * ry;
  const x1pSq = x1p * x1p;
  const y1pSq = y1p * y1p;
  const lambda = x1pSq / rxSq + y1pSq / rySq;
  if (lambda > 1) {
    const s = Math.sqrt(lambda);
    rx *= s;
    ry *= s;
    rxSq = rx * rx;
    rySq = ry * ry;
  }
  let sq = (rxSq * rySq - rxSq * y1pSq - rySq * x1pSq) / (rxSq * y1pSq + rySq * x1pSq);
  if (sq < 0) sq = 0;
  const sign = fA === fS ? -1 : 1;
  const root = sign * Math.sqrt(sq);
  const cxp = root * (rx * y1p / ry);
  const cyp = root * -(ry * x1p / rx);
  const cx = cosPhi * cxp - sinPhi * cyp + (x1 + x2) / 2;
  const cy = sinPhi * cxp + cosPhi * cyp + (y1 + y2) / 2;
  const vAngle = (ux, uy, vx, vy) => {
    const dot = ux * vx + uy * vy;
    const len = Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
    let a = Math.acos(Math.max(-1, Math.min(1, dot / len)));
    if (ux * vy - uy * vx < 0) a = -a;
    return a;
  };
  const theta1 = vAngle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
  let dTheta = vAngle(
    (x1p - cxp) / rx,
    (y1p - cyp) / ry,
    (-x1p - cxp) / rx,
    (-y1p - cyp) / ry
  );
  if (fS === 0 && dTheta > 0) dTheta -= 2 * Math.PI;
  if (fS === 1 && dTheta < 0) dTheta += 2 * Math.PI;
  return { cx, cy, theta1, dTheta, rx, ry };
}
function arcSegment(x1, y1, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x2, y2) {
  if (rx === 0 || ry === 0) return lineSegment(x1, y1, x2, y2);
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  const phi = xAxisRotation * Math.PI / 180;
  const {
    cx,
    cy,
    theta1,
    dTheta,
    rx: crx,
    ry: cry
  } = arcToCenterParam(x1, y1, rx, ry, phi, largeArcFlag, sweepFlag, x2, y2);
  const N = Math.max(8, Math.ceil(Math.abs(dTheta) / (Math.PI / 16)));
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const pointOnArc = (t) => {
    const theta = theta1 + dTheta * t;
    const cosT = Math.cos(theta);
    const sinT = Math.sin(theta);
    const ex = crx * cosT;
    const ey = cry * sinT;
    return [cosPhi * ex - sinPhi * ey + cx, sinPhi * ex + cosPhi * ey + cy];
  };
  let totalLen = 0;
  const cumLens = [0];
  let [px, py] = pointOnArc(0);
  for (let i = 1; i <= N; i++) {
    const [nx, ny] = pointOnArc(i / N);
    totalLen += dist(px, py, nx, ny);
    cumLens.push(totalLen);
    px = nx;
    py = ny;
  }
  return {
    length: totalLen,
    pointAt(t) {
      const targetLen = t * totalLen;
      let lo = 0;
      let hi = N;
      while (lo < hi) {
        const mid = lo + hi >> 1;
        if (cumLens[mid + 1] < targetLen) lo = mid + 1;
        else hi = mid;
      }
      const segStart = cumLens[lo];
      const segEnd = cumLens[lo + 1] ?? totalLen;
      const segLen = segEnd - segStart;
      const localT = segLen > 0 ? (targetLen - segStart) / segLen : 0;
      const tParam = (lo + localT) / N;
      const [x, y] = pointOnArc(tParam);
      const dt = 1e-5;
      const [x22, y22] = pointOnArc(Math.min(1, tParam + dt));
      return { x, y, angle: angle(x22 - x, y22 - y) };
    }
  };
}
var CMD_REGEX = /([MmLlHhVvCcSsQqTtAaZz])\s*/;
var NUM_REGEX = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
function parseNumbers(str) {
  const result = [];
  let m;
  NUM_REGEX.lastIndex = 0;
  while ((m = NUM_REGEX.exec(str)) !== null) {
    result.push(parseFloat(m[0]));
  }
  return result;
}
function tokenize(d) {
  const tokens = [];
  const parts = d.split(CMD_REGEX).filter(Boolean);
  for (let i = 0; i < parts.length; i++) {
    const cmd = parts[i];
    if (/^[MmLlHhVvCcSsQqTtAaZz]$/.test(cmd)) {
      const nums = i + 1 < parts.length ? parseNumbers(parts[i + 1]) : [];
      tokens.push([cmd, nums]);
      i++;
    }
  }
  return tokens;
}
function parsePath(d) {
  const segments = [];
  const tokens = tokenize(d);
  let cx = 0, cy = 0;
  let sx = 0, sy = 0;
  let prevCx2 = 0, prevCy2 = 0;
  let prevQx = 0, prevQy = 0;
  let lastCmd = "";
  for (const [cmd, nums] of tokens) {
    const isRel = cmd === cmd.toLowerCase();
    switch (cmd) {
      case "M":
      case "m": {
        for (let i = 0; i < nums.length; i += 2) {
          const x = isRel ? cx + nums[i] : nums[i];
          const y = isRel ? cy + nums[i + 1] : nums[i + 1];
          if (i === 0) {
            sx = x;
            sy = y;
          } else {
            segments.push(lineSegment(cx, cy, x, y));
          }
          cx = x;
          cy = y;
        }
        break;
      }
      case "L":
      case "l": {
        for (let i = 0; i < nums.length; i += 2) {
          const x = isRel ? cx + nums[i] : nums[i];
          const y = isRel ? cy + nums[i + 1] : nums[i + 1];
          segments.push(lineSegment(cx, cy, x, y));
          cx = x;
          cy = y;
        }
        break;
      }
      case "H":
      case "h": {
        for (let i = 0; i < nums.length; i++) {
          const x = isRel ? cx + nums[i] : nums[i];
          segments.push(lineSegment(cx, cy, x, cy));
          cx = x;
        }
        break;
      }
      case "V":
      case "v": {
        for (let i = 0; i < nums.length; i++) {
          const y = isRel ? cy + nums[i] : nums[i];
          segments.push(lineSegment(cx, cy, cx, y));
          cy = y;
        }
        break;
      }
      case "C":
      case "c": {
        for (let i = 0; i + 5 < nums.length; i += 6) {
          const x1 = isRel ? cx + nums[i] : nums[i];
          const y1 = isRel ? cy + nums[i + 1] : nums[i + 1];
          const x2 = isRel ? cx + nums[i + 2] : nums[i + 2];
          const y2 = isRel ? cy + nums[i + 3] : nums[i + 3];
          const x = isRel ? cx + nums[i + 4] : nums[i + 4];
          const y = isRel ? cy + nums[i + 5] : nums[i + 5];
          segments.push(cubicSegment(cx, cy, x1, y1, x2, y2, x, y));
          prevCx2 = x2;
          prevCy2 = y2;
          cx = x;
          cy = y;
        }
        break;
      }
      case "S":
      case "s": {
        for (let i = 0; i + 3 < nums.length; i += 4) {
          let x1, y1;
          if (lastCmd === "C" || lastCmd === "c" || lastCmd === "S" || lastCmd === "s") {
            x1 = 2 * cx - prevCx2;
            y1 = 2 * cy - prevCy2;
          } else {
            x1 = cx;
            y1 = cy;
          }
          const x2 = isRel ? cx + nums[i] : nums[i];
          const y2 = isRel ? cy + nums[i + 1] : nums[i + 1];
          const x = isRel ? cx + nums[i + 2] : nums[i + 2];
          const y = isRel ? cy + nums[i + 3] : nums[i + 3];
          segments.push(cubicSegment(cx, cy, x1, y1, x2, y2, x, y));
          prevCx2 = x2;
          prevCy2 = y2;
          cx = x;
          cy = y;
        }
        break;
      }
      case "Q":
      case "q": {
        for (let i = 0; i + 3 < nums.length; i += 4) {
          const x1 = isRel ? cx + nums[i] : nums[i];
          const y1 = isRel ? cy + nums[i + 1] : nums[i + 1];
          const x = isRel ? cx + nums[i + 2] : nums[i + 2];
          const y = isRel ? cy + nums[i + 3] : nums[i + 3];
          segments.push(quadSegment(cx, cy, x1, y1, x, y));
          prevQx = x1;
          prevQy = y1;
          cx = x;
          cy = y;
        }
        break;
      }
      case "T":
      case "t": {
        for (let i = 0; i + 1 < nums.length; i += 2) {
          let x1, y1;
          if (lastCmd === "Q" || lastCmd === "q" || lastCmd === "T" || lastCmd === "t") {
            x1 = 2 * cx - prevQx;
            y1 = 2 * cy - prevQy;
          } else {
            x1 = cx;
            y1 = cy;
          }
          const x = isRel ? cx + nums[i] : nums[i];
          const y = isRel ? cy + nums[i + 1] : nums[i + 1];
          segments.push(quadSegment(cx, cy, x1, y1, x, y));
          prevQx = x1;
          prevQy = y1;
          cx = x;
          cy = y;
        }
        break;
      }
      case "A":
      case "a": {
        for (let i = 0; i + 6 < nums.length; i += 7) {
          const arx = nums[i];
          const ary = nums[i + 1];
          const xRot = nums[i + 2];
          const laf = nums[i + 3];
          const sf = nums[i + 4];
          const x = isRel ? cx + nums[i + 5] : nums[i + 5];
          const y = isRel ? cy + nums[i + 6] : nums[i + 6];
          segments.push(arcSegment(cx, cy, arx, ary, xRot, laf, sf, x, y));
          cx = x;
          cy = y;
        }
        break;
      }
      case "Z":
      case "z": {
        if (cx !== sx || cy !== sy) {
          segments.push(lineSegment(cx, cy, sx, sy));
        }
        cx = sx;
        cy = sy;
        break;
      }
    }
    lastCmd = cmd;
  }
  let totalLength = 0;
  for (const seg of segments) totalLength += seg.length;
  return { segments, totalLength };
}
function samplePathAtProgress(path6, progress) {
  if (path6.segments.length === 0) return { x: 0, y: 0, angle: 0 };
  if (progress <= 0) return path6.segments[0].pointAt(0);
  if (progress >= 1) {
    const last2 = path6.segments[path6.segments.length - 1];
    return last2.pointAt(1);
  }
  const targetLen = progress * path6.totalLength;
  let accumulated = 0;
  for (const seg of path6.segments) {
    if (accumulated + seg.length >= targetLen) {
      const localT = seg.length > 0 ? (targetLen - accumulated) / seg.length : 0;
      return seg.pointAt(localT);
    }
    accumulated += seg.length;
  }
  const last = path6.segments[path6.segments.length - 1];
  return last.pointAt(1);
}

// ../../shared/svg/smilInterpolator.ts
var SMIL_ANIMATION_REGEX = /<animate(?:Transform|Motion|Color)?[\s>]|<set[\s>]/i;
var DURATION_REGEX = /^([\d.]+)(s|ms)?$/;
var NUMBER_REGEX = /-?[\d.]+/g;
var NAMED_COLORS = {
  black: "rgb(0,0,0)",
  white: "rgb(255,255,255)",
  red: "rgb(255,0,0)",
  green: "rgb(0,128,0)",
  blue: "rgb(0,0,255)",
  yellow: "rgb(255,255,0)",
  cyan: "rgb(0,255,255)",
  magenta: "rgb(255,0,255)",
  orange: "rgb(255,165,0)",
  purple: "rgb(128,0,128)",
  pink: "rgb(255,192,203)",
  gray: "rgb(128,128,128)",
  grey: "rgb(128,128,128)",
  lightgray: "rgb(211,211,211)",
  lightgrey: "rgb(211,211,211)",
  darkgray: "rgb(169,169,169)",
  darkgrey: "rgb(169,169,169)",
  transparent: "rgba(0,0,0,0)",
  none: "rgba(0,0,0,0)"
};
function normalizeColorValue(value) {
  const v = value.trim().toLowerCase();
  if (NAMED_COLORS[v]) return NAMED_COLORS[v];
  if (/^#[0-9a-f]{8}$/i.test(value)) {
    const r = parseInt(value.slice(1, 3), 16);
    const g = parseInt(value.slice(3, 5), 16);
    const b = parseInt(value.slice(5, 7), 16);
    const a = parseInt(value.slice(7, 9), 16) / 255;
    return `rgba(${r},${g},${b},${parseFloat(a.toFixed(4))})`;
  }
  if (/^#[0-9a-f]{6}$/i.test(value)) {
    const r = parseInt(value.slice(1, 3), 16);
    const g = parseInt(value.slice(3, 5), 16);
    const b = parseInt(value.slice(5, 7), 16);
    return `rgb(${r},${g},${b})`;
  }
  if (/^#[0-9a-f]{4}$/i.test(value)) {
    const r = parseInt(value[1] + value[1], 16);
    const g = parseInt(value[2] + value[2], 16);
    const b = parseInt(value[3] + value[3], 16);
    const a = parseInt(value[4] + value[4], 16) / 255;
    return `rgba(${r},${g},${b},${parseFloat(a.toFixed(4))})`;
  }
  if (/^#[0-9a-f]{3}$/i.test(value)) {
    const r = parseInt(value[1] + value[1], 16);
    const g = parseInt(value[2] + value[2], 16);
    const b = parseInt(value[3] + value[3], 16);
    return `rgb(${r},${g},${b})`;
  }
  return value;
}
var COLOR_ATTRS = /* @__PURE__ */ new Set([
  "fill",
  "stroke",
  "stop-color",
  "flood-color",
  "lighting-color",
  "color"
]);
function cubicBezierEasing(t, x1, y1, x2, y2) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  const bx = (u2) => 3 * (1 - u2) * (1 - u2) * u2 * x1 + 3 * (1 - u2) * u2 * u2 * x2 + u2 * u2 * u2;
  const bxd = (u2) => 3 * (1 - u2) * (1 - u2) * x1 + 6 * (1 - u2) * u2 * (x2 - x1) + 3 * u2 * u2 * (1 - x2);
  const by = (u2) => 3 * (1 - u2) * (1 - u2) * u2 * y1 + 3 * (1 - u2) * u2 * u2 * y2 + u2 * u2 * u2;
  let u = t;
  for (let i = 0; i < 10; i++) {
    const dx = bx(u) - t;
    if (Math.abs(dx) < 1e-7) break;
    const d = bxd(u);
    if (Math.abs(d) < 1e-10) break;
    u = Math.max(0, Math.min(1, u - dx / d));
  }
  return by(u);
}
function checkSvgHasSmilAnimations(svgContent) {
  return SMIL_ANIMATION_REGEX.test(svgContent);
}
function parseDuration(durStr) {
  if (!durStr || durStr === "indefinite") return 1e3;
  const match = DURATION_REGEX.exec(durStr);
  if (!match) return 1e3;
  const value = parseFloat(match[1]);
  return match[2] === "ms" ? value : value * 1e3;
}
function interpolateValue(from, to, progress) {
  NUMBER_REGEX.lastIndex = 0;
  const fromNums = from.match(NUMBER_REGEX);
  const toNums = to.match(NUMBER_REGEX);
  if (fromNums && toNums && fromNums.length === toNums.length) {
    const len = fromNums.length;
    NUMBER_REGEX.lastIndex = 0;
    const matches = [];
    let m;
    while ((m = NUMBER_REGEX.exec(from)) !== null) matches.push(m);
    let result = from;
    for (let i = len - 1; i >= 0; i--) {
      const f = parseFloat(fromNums[i]);
      const t = parseFloat(toNums[i]);
      const raw = f + (t - f) * progress;
      const interpolated = parseFloat(raw.toPrecision(7)).toString();
      const match = matches[i];
      if (!match) continue;
      result = result.slice(0, match.index) + interpolated + result.slice(match.index + match[0].length);
    }
    return result;
  }
  return progress < 0.5 ? from : to;
}
function computeToFromBy(from, by) {
  NUMBER_REGEX.lastIndex = 0;
  const fromNums = from.match(NUMBER_REGEX);
  NUMBER_REGEX.lastIndex = 0;
  const byNums = by.match(NUMBER_REGEX);
  if (fromNums && byNums && fromNums.length > 0 && fromNums.length === byNums.length) {
    NUMBER_REGEX.lastIndex = 0;
    const matches = [];
    let m;
    while ((m = NUMBER_REGEX.exec(from)) !== null) matches.push(m);
    let result = from;
    for (let i = fromNums.length - 1; i >= 0; i--) {
      const f = parseFloat(fromNums[i]);
      const b = parseFloat(byNums[i]);
      const sum = parseFloat((f + b).toPrecision(7)).toString();
      const match = matches[i];
      if (!match) continue;
      result = result.slice(0, match.index) + sum + result.slice(match.index + match[0].length);
    }
    return result;
  }
  return by;
}
function applyAdditive(existing, animated) {
  if (!existing) return animated;
  NUMBER_REGEX.lastIndex = 0;
  const existNums = existing.match(NUMBER_REGEX);
  NUMBER_REGEX.lastIndex = 0;
  const animNums = animated.match(NUMBER_REGEX);
  if (existNums && animNums && existNums.length > 0 && existNums.length === animNums.length) {
    NUMBER_REGEX.lastIndex = 0;
    const matches = [];
    let m;
    while ((m = NUMBER_REGEX.exec(existing)) !== null) matches.push(m);
    let result = existing;
    for (let i = existNums.length - 1; i >= 0; i--) {
      const e = parseFloat(existNums[i]);
      const a = parseFloat(animNums[i]);
      const sum = parseFloat((e + a).toPrecision(7)).toString();
      const match = matches[i];
      if (!match) continue;
      result = result.slice(0, match.index) + sum + result.slice(match.index + match[0].length);
    }
    return result;
  }
  return animated;
}
function applySmilAnimationsToElement(svgElement, timeInSeconds) {
  const timeMs = timeInSeconds * 1e3;
  const ANIM_TAGS = [
    "animate",
    "animateTransform",
    "animateMotion",
    "animateColor",
    "set"
  ];
  const animateElements = [];
  for (const tag of ANIM_TAGS) {
    const nodes = svgElement.getElementsByTagName(tag);
    for (let i = 0; i < nodes.length; i++) {
      animateElements.push(nodes[i]);
    }
  }
  const animationsToApply = [];
  animateElements.forEach((animEl) => {
    const durAttr = animEl.getAttribute("dur") || "1s";
    const durIsIndefinite = durAttr === "indefinite";
    const dur = durIsIndefinite ? Infinity : parseDuration(durAttr);
    const repeatCount = animEl.getAttribute("repeatCount");
    const repeatCountIsIndefinite = repeatCount === "indefinite";
    const repeatCountNum = repeatCount ? parseFloat(repeatCount) : 1;
    const begin = parseDuration(animEl.getAttribute("begin") || "0s");
    const endAttr = animEl.getAttribute("end");
    const explicitEndMs = endAttr && endAttr !== "indefinite" ? parseDuration(endAttr) : null;
    const fill = animEl.getAttribute("fill") || "freeze";
    const rawEffectiveTime = timeMs - begin;
    if (rawEffectiveTime < 0) return;
    if (explicitEndMs !== null && timeMs > explicitEndMs) {
      if (fill === "remove") return;
    }
    let effectiveTime = rawEffectiveTime;
    if (explicitEndMs !== null) {
      effectiveTime = Math.min(effectiveTime, explicitEndMs - begin);
    }
    let animationHasEnded = false;
    if (dur === Infinity) {
    } else if (repeatCountIsIndefinite || repeatCountNum > 1) {
      effectiveTime = effectiveTime % dur;
    } else {
      if (effectiveTime > dur) {
        animationHasEnded = true;
        effectiveTime = dur;
      }
    }
    if (animationHasEnded && fill === "remove") return;
    let progress = dur === Infinity ? 0 : Math.min(1, Math.max(0, effectiveTime / dur));
    const calcMode = animEl.getAttribute("calcMode") || "linear";
    let splineKeyTimes = null;
    if (calcMode === "spline") {
      const keySplines = animEl.getAttribute("keySplines");
      const keyTimesRaw = animEl.getAttribute("keyTimes");
      if (keySplines) {
        const splines = keySplines.trim().split(/\s*;\s*/);
        const keyTimes = keyTimesRaw ? keyTimesRaw.trim().split(/\s*;\s*/).map(Number) : splines.map((_, i) => i / splines.length).concat([1]);
        splineKeyTimes = keyTimes;
        let segIdx = 0;
        for (let i = 0; i < keyTimes.length - 1; i++) {
          if (progress <= keyTimes[i + 1]) {
            segIdx = i;
            break;
          }
          segIdx = i;
        }
        const t0 = keyTimes[segIdx] ?? 0;
        const t1 = keyTimes[segIdx + 1] ?? 1;
        const segProgress = t1 > t0 ? (progress - t0) / (t1 - t0) : 0;
        const parts = (splines[segIdx] || splines[splines.length - 1]).trim().split(/\s+/).map(Number);
        if (parts.length === 4) {
          progress = cubicBezierEasing(
            segProgress,
            parts[0],
            parts[1],
            parts[2],
            parts[3]
          );
          progress = t0 + progress * (t1 - t0);
          progress = Math.min(1, Math.max(0, progress));
        }
      }
    }
    const rawId = animEl.getAttribute("href") || animEl.getAttribute("xlink:href");
    const targetId = rawId ? rawId.replace("#", "") : "";
    const attributeName = animEl.getAttribute("attributeName");
    const targetElement = targetId ? svgElement.ownerDocument.getElementById(
      targetId
    ) : animEl.parentNode?.nodeType === 1 ? animEl.parentNode : null;
    if (!targetElement) return;
    const isMotion = animEl.tagName.toLowerCase() === "animatemotion";
    if (isMotion) {
      let pathD = null;
      const mpathNodes = animEl.getElementsByTagName("mpath");
      if (mpathNodes.length > 0) {
        const mpathEl = mpathNodes[0];
        const mpathRef = mpathEl.getAttribute("href") || mpathEl.getAttribute("xlink:href");
        if (mpathRef) {
          const refId = mpathRef.replace("#", "");
          const pathEl = svgElement.ownerDocument.getElementById(refId);
          if (pathEl) {
            pathD = pathEl.getAttribute("d");
          }
        }
      }
      if (!pathD) {
        pathD = animEl.getAttribute("path");
      }
      if (!pathD) {
        const motionValues = animEl.getAttribute("values");
        const motionFrom = animEl.getAttribute("from");
        const motionTo = animEl.getAttribute("to");
        if (motionValues) {
          const pts = motionValues.split(";").map((s) => s.trim()).filter(Boolean);
          if (pts.length >= 2) {
            pathD = `M ${pts[0]} ` + pts.slice(1).map((p) => `L ${p}`).join(" ");
          }
        } else if (motionFrom && motionTo) {
          pathD = `M ${motionFrom} L ${motionTo}`;
        }
      }
      if (pathD) {
        const parsed = parsePath(pathD);
        const pt = samplePathAtProgress(parsed, progress);
        const rotateAttr = animEl.getAttribute("rotate") || "";
        let rotAngle = 0;
        if (rotateAttr === "auto") {
          rotAngle = pt.angle;
        } else if (rotateAttr === "auto-reverse") {
          rotAngle = pt.angle + 180;
        } else if (rotateAttr) {
          const fixedAngle = parseFloat(rotateAttr);
          if (!isNaN(fixedAngle)) rotAngle = fixedAngle;
        }
        const additive2 = (animEl.getAttribute("additive") || "replace") === "sum";
        const existing = additive2 ? targetElement.getAttribute("transform") ?? "" : "";
        let motionTransform = `translate(${pt.x},${pt.y})`;
        if (rotAngle !== 0) {
          motionTransform += ` rotate(${rotAngle})`;
        }
        targetElement.setAttribute(
          "transform",
          existing ? `${existing} ${motionTransform}` : motionTransform
        );
      }
      return;
    }
    if (!attributeName) return;
    const additive = (animEl.getAttribute("additive") || "replace") === "sum";
    const isColorAttr = COLOR_ATTRS.has(attributeName);
    const normalize = (v) => isColorAttr ? normalizeColorValue(v) : v;
    let fromRaw = animEl.getAttribute("from") || null;
    let toRaw = animEl.getAttribute("to") || null;
    const byRaw = animEl.getAttribute("by") || null;
    const valuesRaw = animEl.getAttribute("values") || null;
    const animType = animEl.getAttribute("type") || null;
    if (byRaw !== null && toRaw === null) {
      if (fromRaw !== null) {
        toRaw = computeToFromBy(normalize(fromRaw), normalize(byRaw));
      } else {
        toRaw = normalize(byRaw);
      }
    }
    const from = fromRaw !== null ? normalize(fromRaw) : null;
    const to = toRaw !== null ? normalize(toRaw) : null;
    const values = valuesRaw;
    let currentValue = null;
    if (values) {
      const rawList = values.split(";").map((v) => normalize(v.trim()));
      if (rawList.length >= 2) {
        if (calcMode === "discrete") {
          const idx = Math.min(
            Math.floor(progress * rawList.length),
            rawList.length - 1
          );
          currentValue = rawList[idx];
        } else if (calcMode === "spline" && splineKeyTimes && splineKeyTimes.length >= 2) {
          let segIdx = splineKeyTimes.length - 2;
          for (let i = 0; i < splineKeyTimes.length - 1; i++) {
            if (progress <= splineKeyTimes[i + 1]) {
              segIdx = i;
              break;
            }
          }
          const t0 = splineKeyTimes[segIdx] ?? 0;
          const t1 = splineKeyTimes[segIdx + 1] ?? 1;
          const segProg = t1 > t0 ? (progress - t0) / (t1 - t0) : 0;
          const safeSegIdx = Math.min(segIdx, rawList.length - 2);
          currentValue = interpolateValue(
            rawList[safeSegIdx],
            rawList[safeSegIdx + 1] ?? rawList[safeSegIdx],
            Math.min(1, Math.max(0, segProg))
          );
        } else {
          const numSegments = rawList.length - 1;
          const segmentIndex = Math.min(
            Math.floor(progress * numSegments),
            numSegments - 1
          );
          const segmentProgress = progress >= 1 ? 1 : progress * numSegments % 1;
          currentValue = interpolateValue(
            rawList[segmentIndex],
            rawList[segmentIndex + 1] ?? rawList[segmentIndex],
            segmentProgress
          );
        }
      }
    } else if (from !== null && to !== null) {
      if (calcMode === "discrete") {
        currentValue = progress < 1 ? from : to;
      } else {
        currentValue = interpolateValue(from, to, progress);
      }
    } else if (animEl.tagName.toLowerCase() === "set") {
      const setTo = animEl.getAttribute("to") || null;
      if (setTo !== null) currentValue = normalize(setTo);
    }
    if (currentValue !== null) {
      animationsToApply.push({
        animEl,
        targetElement,
        attributeName,
        currentValue,
        animType: animType ?? void 0,
        additive
      });
    }
  });
  for (const {
    animEl,
    targetElement,
    attributeName,
    currentValue,
    animType,
    additive
  } of animationsToApply) {
    const isTransform = animEl.tagName.toLowerCase() === "animatetransform";
    if (isTransform && animType) {
      const existing = additive ? targetElement.getAttribute("transform") ?? "" : "";
      const newTransform = `${animType}(${currentValue})`;
      targetElement.setAttribute(
        "transform",
        existing ? `${existing} ${newTransform}` : newTransform
      );
    } else if (additive) {
      const existing = targetElement.getAttribute(attributeName);
      targetElement.setAttribute(
        attributeName,
        applyAdditive(existing, currentValue)
      );
    } else {
      targetElement.setAttribute(attributeName, currentValue);
    }
  }
  animateElements.forEach((animEl) => {
    animEl.parentNode?.removeChild(animEl);
  });
}

// ../../server/src/renderer/ServerSvgAnimator.ts
var ServerSvgAnimator = class {
  constructor() {
    /** SVG 内容 + 元数据缓存（path → entry） */
    this.svgCache = /* @__PURE__ */ new Map();
    /**
     * 冻结帧缓存：当 SVG 进入最终静态状态后，缓存该状态的光栅化结果。
     * Key 格式：`${localPath}:${drawWidth}x${drawHeight}`
     */
    this.frozenBufferCache = /* @__PURE__ */ new Map();
    // 复用的解析器实例
    this.domParser = new import_xmldom.DOMParser();
    this.xmlSerializer = new import_xmldom.XMLSerializer();
  }
  // ── 公共 API ──────────────────────────────────────────────────────────────
  /**
   * 检测指定本地路径的 SVG 文件是否含 SMIL 动画。
   */
  isAnimatedSvg(localPath) {
    return this.getEntry(localPath).isAnimated;
  }
  /**
   * 将动画 SVG 在指定时间点烘焙为静态状态，光栅化后返回 PNG Buffer。
   *
   * @param localPath         SVG 文件本地路径
   * @param drawWidth         目标像素宽度
   * @param drawHeight        目标像素高度
   * @param localTimeSeconds  从元素开始时间算起的本地时间（秒）
   * @returns PNG Buffer，可直接传入 skia-canvas `loadImage(buffer)`
   */
  async rasterize(localPath, drawWidth, drawHeight, localTimeSeconds) {
    const entry = this.getEntry(localPath);
    const localTimeMs = localTimeSeconds * 1e3;
    const frozenKey = `${localPath}:${drawWidth}x${drawHeight}`;
    if (entry.frozenAfterMs !== null && localTimeMs >= entry.frozenAfterMs) {
      const cached = this.frozenBufferCache.get(frozenKey);
      if (cached) return cached;
    }
    const pngBuffer = await this.renderToPng(
      entry.content,
      drawWidth,
      drawHeight,
      localTimeSeconds
    );
    if (entry.frozenAfterMs !== null && localTimeMs >= entry.frozenAfterMs) {
      this.frozenBufferCache.set(frozenKey, pngBuffer);
    }
    return pngBuffer;
  }
  /** 清空所有缓存（导出完成后由 ServerRenderExporter 调用） */
  clear() {
    this.svgCache.clear();
    this.frozenBufferCache.clear();
  }
  // ── 私有辅助 ──────────────────────────────────────────────────────────────
  getEntry(localPath) {
    const cached = this.svgCache.get(localPath);
    if (cached !== void 0) return cached;
    try {
      const content = fs.readFileSync(localPath, "utf-8");
      const isAnimated = checkSvgHasSmilAnimations(content);
      const frozenAfterMs = isAnimated ? this.computeFrozenAfterMs(content) : 0;
      const entry = { content, isAnimated, frozenAfterMs };
      this.svgCache.set(localPath, entry);
      return entry;
    } catch {
      const entry = { content: "", isAnimated: false, frozenAfterMs: 0 };
      this.svgCache.set(localPath, entry);
      return entry;
    }
  }
  /**
   * 计算 SVG 中所有动画完成后进入静止状态的时刻（毫秒）。
   *
   * 规则：
   * - 含 repeatCount="indefinite" 或任意重复次数 > 1 → null（永不冻结）
   * - 含 fill="remove"（动画结束后属性弹回初始值）→ null（输出不稳定）
   * - 其余：取所有动画 (begin + dur) 的最大值
   */
  computeFrozenAfterMs(svgContent) {
    const doc = this.domParser.parseFromString(svgContent, "image/svg+xml");
    const root = doc.documentElement;
    const ANIM_TAGS = [
      "animate",
      "animateTransform",
      "animateMotion",
      "animateColor",
      "set"
    ];
    let maxEndMs = 0;
    for (const tag of ANIM_TAGS) {
      const nodes = root.getElementsByTagName(tag);
      for (let i = 0; i < nodes.length; i++) {
        const animEl = nodes[i];
        const repeatCount = animEl.getAttribute("repeatCount");
        if (repeatCount === "indefinite" || repeatCount !== null && parseFloat(repeatCount) > 1) {
          return null;
        }
        const fill = animEl.getAttribute("fill");
        if (fill === "remove") return null;
        const durAttr = animEl.getAttribute("dur") || "1s";
        if (durAttr === "indefinite") return null;
        const begin = parseDuration(animEl.getAttribute("begin") || "0s");
        const dur = parseDuration(durAttr);
        maxEndMs = Math.max(maxEndMs, begin + dur);
      }
    }
    return maxEndMs;
  }
  async renderToPng(svgContent, drawWidth, drawHeight, localTimeSeconds) {
    const doc = this.domParser.parseFromString(svgContent, "image/svg+xml");
    const svgElement = doc.documentElement;
    if (!svgElement.hasAttribute("viewBox")) {
      const origWidth = svgElement.getAttribute("width");
      const origHeight = svgElement.getAttribute("height");
      if (origWidth && origHeight) {
        const w = parseFloat(origWidth) || drawWidth;
        const h = parseFloat(origHeight) || drawHeight;
        svgElement.setAttribute("viewBox", `0 0 ${w} ${h}`);
      } else {
        svgElement.setAttribute("viewBox", `0 0 ${drawWidth} ${drawHeight}`);
      }
    }
    svgElement.setAttribute("width", String(drawWidth));
    svgElement.setAttribute("height", String(drawHeight));
    svgElement.setAttribute("preserveAspectRatio", "xMidYMid slice");
    applySmilAnimationsToElement(svgElement, localTimeSeconds);
    const bakedSvg = this.xmlSerializer.serializeToString(
      doc.documentElement
    );
    return sharp(Buffer.from(bakedSvg)).resize(drawWidth, drawHeight, { fit: "fill" }).png().toBuffer();
  }
};

// ../../shared/effects/motionBlurAccumulator.ts
function calculateMotionBlurSamples(frameTime, frameInterval, config) {
  const samples = Math.max(2, Math.min(32, Math.round(config.samples)));
  const shutterAngle = Math.max(0, Math.min(360, config.shutterAngle));
  const weightMode = config.weightMode ?? "exponential";
  const decayFactor = config.decayFactor ?? 0.5;
  const halfExposure = shutterAngle / 360 * frameInterval / 2;
  const rawWeights = new Array(samples);
  let totalWeight = 0;
  for (let i = 0; i < samples; i++) {
    let w;
    if (weightMode === "linear") {
      w = i + 1;
    } else {
      w = Math.pow(decayFactor, samples - 1 - i);
    }
    rawWeights[i] = w;
    totalWeight += w;
  }
  const result = new Array(samples);
  for (let i = 0; i < samples; i++) {
    const t = samples === 1 ? 0 : i / (samples - 1) * 2 - 1;
    result[i] = {
      time: frameTime + t * halfExposure,
      weight: rawWeights[i] / totalWeight
    };
  }
  return result;
}
function accumulateSubFrame(accBuffer, frameData, weight) {
  const len = frameData.length;
  for (let i = 0; i < len; i++) {
    accBuffer[i] += frameData[i] * weight;
  }
}
function finalizeAccumulation(accBuffer, output) {
  const len = output.length;
  for (let i = 0; i < len; i++) {
    output[i] = Math.max(0, Math.min(255, Math.round(accBuffer[i])));
  }
}

// ../../server/src/renderer/ServerVideoFrameExtractor.ts
import { spawn } from "child_process";
import { loadImage as loadImage2 } from "skia-canvas";
import * as fs2 from "fs";
import * as path from "path";
import * as os from "os";
var ServerVideoFrameExtractor = class {
  constructor() {
    this.frameCache = /* @__PURE__ */ new Map();
    this.MAX_CACHE_SIZE = 300;
  }
  setCacheLimit(size) {
    this.MAX_CACHE_SIZE = Math.max(100, size);
  }
  async extractFrame(videoPath, timeSeconds) {
    const cacheKey = `${videoPath}@${timeSeconds.toFixed(3)}`;
    const cached = this.frameCache.get(cacheKey);
    if (cached) {
      this.refreshCacheEntry(cacheKey, cached);
      return cached;
    }
    const jpegBuffer = await this.ffmpegExtractFrame(videoPath, timeSeconds);
    const img = await loadImage2(jpegBuffer);
    this.addToCache(cacheKey, img);
    return img;
  }
  refreshCacheEntry(key, img) {
    this.frameCache.delete(key);
    this.frameCache.set(key, img);
  }
  addToCache(key, img) {
    if (this.frameCache.size >= this.MAX_CACHE_SIZE) {
      const oldest = this.frameCache.keys().next().value;
      this.frameCache.delete(oldest);
    }
    this.frameCache.set(key, img);
  }
  ffmpegExtractFrame(videoPath, timeSeconds) {
    return new Promise((resolve2, reject) => {
      const args = [
        "-ss",
        String(timeSeconds),
        "-i",
        videoPath,
        "-vframes",
        "1",
        "-f",
        "image2pipe",
        "-vcodec",
        "mjpeg",
        "-q:v",
        "2",
        "pipe:1"
      ];
      const proc = spawn("ffmpeg", args, { stdio: ["pipe", "pipe", "pipe"] });
      const chunks = [];
      proc.stdout.on("data", (chunk) => chunks.push(chunk));
      proc.stderr.on("data", () => {
      });
      proc.on("close", (code) => {
        if (code === 0 && chunks.length > 0) {
          resolve2(Buffer.concat(chunks));
        } else {
          reject(new Error(`FFmpeg frame extraction failed (code ${code}) for ${videoPath} at ${timeSeconds}s`));
        }
      });
      proc.on("error", (err) => {
        reject(new Error(`FFmpeg spawn error: ${err.message}`));
      });
    });
  }
  async preextractFrames(videoPath, times, onProgress) {
    for (let i = 0; i < times.length; i++) {
      await this.extractFrame(videoPath, times[i]);
      onProgress?.(i + 1, times.length);
    }
  }
  /**
   * 批量预提取帧 — 单个 FFmpeg 进程顺序解码，预填充到 frameCache。
   * 渲染循环调用 extractFrame() 时直接命中缓存，避免每帧 spawn 新进程。
   */
  async batchPreExtract(videoPath, cacheKeys, mediaTimes, onProgress) {
    if (mediaTimes.length === 0) return;
    const needed = this.filterUncachedFrames(cacheKeys, mediaTimes);
    if (needed.length === 0) return;
    const firstTime = needed[0].mediaTime;
    const lastTime = needed[needed.length - 1].mediaTime;
    const decodeFps = this.calculateDecodeFps(needed);
    console.log(
      `[VideoExtractor] Batch: ${needed.length} frames, ${firstTime.toFixed(2)}s\u2013${lastTime.toFixed(2)}s, decode@${decodeFps}fps`
    );
    const batchDir = fs2.mkdtempSync(path.join(os.tmpdir(), "vbatch-"));
    try {
      await this.extractFramesToDir(videoPath, firstTime, lastTime, decodeFps, batchDir);
      const files = fs2.readdirSync(batchDir).filter((f) => f.endsWith(".jpg")).sort();
      const toLoad = this.matchFramesToFiles(files, needed, firstTime, decodeFps);
      await this.loadFramesInBatches(batchDir, toLoad, onProgress);
      console.log(
        `[VideoExtractor] Batch done: cached ${toLoad.length}/${needed.length} frames`
      );
    } finally {
      this.cleanupBatchDir(batchDir);
    }
  }
  filterUncachedFrames(cacheKeys, mediaTimes) {
    const needed = [];
    for (let i = 0; i < mediaTimes.length; i++) {
      if (!this.frameCache.has(cacheKeys[i])) {
        needed.push({ cacheKey: cacheKeys[i], mediaTime: mediaTimes[i] });
      }
    }
    return needed;
  }
  calculateDecodeFps(needed) {
    if (needed.length < 2) return 30;
    let minStep = Infinity;
    for (let i = 1; i < needed.length; i++) {
      const step = needed[i].mediaTime - needed[i - 1].mediaTime;
      if (step > 1e-3) minStep = Math.min(minStep, step);
    }
    const fps = minStep < Infinity ? Math.ceil(1 / minStep) : 30;
    return Math.max(1, Math.min(120, fps));
  }
  async extractFramesToDir(videoPath, startTime, endTime, fps, outputDir) {
    const seekStart = Math.max(0, startTime);
    const seekEnd = endTime + 1 / fps + 0.05;
    await new Promise((resolve2, reject) => {
      const args = [
        "-ss",
        String(seekStart),
        "-to",
        String(seekEnd),
        "-i",
        videoPath,
        "-vf",
        `fps=${fps}`,
        "-q:v",
        "2",
        "-y",
        path.join(outputDir, "f_%06d.jpg")
      ];
      const proc = spawn("ffmpeg", args, { stdio: ["pipe", "pipe", "pipe"] });
      proc.stderr.on("data", () => {
      });
      proc.on("close", (code) => {
        if (code === 0) resolve2();
        else reject(new Error(`Batch extract FFmpeg exited with code ${code}`));
      });
      proc.on("error", reject);
    });
  }
  matchFramesToFiles(files, needed, seekStart, decodeFps) {
    const tolerance = 0.5 / decodeFps + 5e-3;
    const toLoad = [];
    let neededIdx = 0;
    for (let i = 0; i < files.length && neededIdx < needed.length; i++) {
      const frameMediaTime = seekStart + i / decodeFps;
      while (neededIdx < needed.length && needed[neededIdx].mediaTime < frameMediaTime - tolerance) {
        neededIdx++;
      }
      if (neededIdx >= needed.length) break;
      if (Math.abs(frameMediaTime - needed[neededIdx].mediaTime) <= tolerance) {
        toLoad.push({ file: files[i], cacheKey: needed[neededIdx].cacheKey });
        neededIdx++;
      }
    }
    return toLoad;
  }
  async loadFramesInBatches(batchDir, toLoad, onProgress) {
    const batchSize = 20;
    for (let i = 0; i < toLoad.length; i += batchSize) {
      const batch = toLoad.slice(i, i + batchSize);
      const images = await Promise.all(
        batch.map(({ file }) => loadImage2(path.join(batchDir, file)).catch(() => null))
      );
      for (let j = 0; j < batch.length; j++) {
        if (images[j]) {
          this.addToCache(batch[j].cacheKey, images[j]);
        }
      }
      onProgress?.(Math.min(i + batchSize, toLoad.length), toLoad.length);
    }
  }
  /**
   * 并行路径专用：提取帧到持久磁盘目录，不加载到内存，不清理目录。
   * 返回 Map<cacheKey, absoluteFilePath>，供 Worker Threads 独立读取。
   */
  async batchPreExtractToDisk(videoPath, cacheKeys, mediaTimes, outputDir, onProgress) {
    if (mediaTimes.length === 0) return /* @__PURE__ */ new Map();
    const needed = this.filterUncachedFrames(cacheKeys, mediaTimes);
    if (needed.length === 0) return /* @__PURE__ */ new Map();
    const firstTime = needed[0].mediaTime;
    const lastTime = needed[needed.length - 1].mediaTime;
    const decodeFps = this.calculateDecodeFps(needed);
    console.log(
      `[VideoExtractor] Disk batch: ${needed.length} frames, ${firstTime.toFixed(2)}s\u2013${lastTime.toFixed(2)}s, decode@${decodeFps}fps`
    );
    await this.extractFramesToDir(videoPath, firstTime, lastTime, decodeFps, outputDir);
    const files = fs2.readdirSync(outputDir).filter((f) => f.endsWith(".jpg")).sort();
    const toLoad = this.matchFramesToFiles(files, needed, firstTime, decodeFps);
    const diskPaths = /* @__PURE__ */ new Map();
    for (const { file, cacheKey } of toLoad) {
      diskPaths.set(cacheKey, path.join(outputDir, file));
      onProgress?.(diskPaths.size, toLoad.length);
    }
    console.log(`[VideoExtractor] Disk batch done: ${diskPaths.size}/${needed.length} frames`);
    return diskPaths;
  }
  cleanupBatchDir(dir) {
    try {
      for (const f of fs2.readdirSync(dir)) {
        fs2.unlinkSync(path.join(dir, f));
      }
      fs2.rmdirSync(dir);
    } catch {
    }
  }
  async preloadFrameFromDisk(cacheKey, diskPath) {
    if (this.frameCache.has(cacheKey)) return;
    try {
      const img = await loadImage2(diskPath);
      this.addToCache(cacheKey, img);
    } catch {
    }
  }
  clear() {
    this.frameCache.clear();
  }
  get cacheSize() {
    return this.frameCache.size;
  }
};

// ../../server/src/renderer/ServerAudioExtractor.ts
import { spawn as spawn2 } from "child_process";
var ServerAudioExtractor = class {
  /**
   * 从单个媒体文件提取音频为 PCM（Float32LE, stereo, 48kHz）
   */
  async extractAudio(src, startSec, durationSec, sampleRate = 48e3) {
    return new Promise((resolve2, reject) => {
      const args = [
        "-ss",
        String(startSec),
        "-t",
        String(durationSec),
        "-i",
        src,
        "-f",
        "f32le",
        "-acodec",
        "pcm_f32le",
        "-ar",
        String(sampleRate),
        "-ac",
        "2",
        "pipe:1"
      ];
      const proc = spawn2("ffmpeg", args, { stdio: ["pipe", "pipe", "pipe"] });
      const chunks = [];
      proc.stdout.on("data", (chunk) => chunks.push(chunk));
      proc.stderr.on("data", () => {
      });
      proc.on("close", (code) => {
        if (code === 0) {
          resolve2(Buffer.concat(chunks));
        } else {
          reject(new Error(`FFmpeg audio extraction failed (code ${code})`));
        }
      });
      proc.on("error", reject);
    });
  }
  /**
   * 混合多个音轨到单个 WAV 文件
   * 使用 FFmpeg amix 滤镜
   */
  async mixAudioTracks(tracks, totalDuration2, outputPath, sampleRate = 48e3) {
    if (tracks.length === 0) return null;
    const args = [];
    const filterParts = [];
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      args.push("-i", track.src);
      const filters = [];
      if (track.mediaStartTime > 0) {
        filters.push(`atrim=start=${track.mediaStartTime}`);
        filters.push("asetpts=PTS-STARTPTS");
      }
      if (track.playbackSpeed !== 1) {
        filters.push(`atempo=${track.playbackSpeed}`);
      }
      if (track.volume !== 1) {
        filters.push(`volume=${track.volume}`);
      }
      const delayMs = Math.round(track.startTime * 1e3);
      if (delayMs > 0) {
        filters.push(`adelay=${delayMs}|${delayMs}`);
      }
      if (track.crossfadeZones && track.crossfadeZones.length > 0) {
        for (const zone of track.crossfadeZones) {
          const t = zone.role === "source" ? "out" : "in";
          filters.push(`afade=t=${t}:st=${zone.zoneStartSec}:d=${zone.zoneDurSec}`);
        }
      }
      const duration = track.endTime - track.startTime;
      filters.push(`atrim=duration=${duration}`);
      const filterChain = filters.length > 0 ? `[${i}:a]${filters.join(",")}[a${i}]` : `[${i}:a]anull[a${i}]`;
      filterParts.push(filterChain);
    }
    const inputLabels = tracks.map((_, i) => `[a${i}]`).join("");
    filterParts.push(
      `${inputLabels}amix=inputs=${tracks.length}:duration=longest:dropout_transition=0:normalize=0[mix]`,
      "[mix]loudnorm=I=-16:TP=-1.5:LRA=11[out]"
    );
    const filterGraph = filterParts.join(";");
    args.push(
      "-filter_complex",
      filterGraph,
      "-map",
      "[out]",
      "-t",
      String(totalDuration2),
      "-ar",
      String(sampleRate),
      "-ac",
      "2",
      "-y",
      outputPath
    );
    return new Promise((resolve2, reject) => {
      const proc = spawn2("ffmpeg", args, { stdio: ["pipe", "pipe", "pipe"] });
      proc.stderr.on("data", () => {
      });
      proc.on("close", (code) => {
        if (code === 0) {
          resolve2(outputPath);
        } else {
          resolve2(null);
        }
      });
      proc.on("error", reject);
    });
  }
};

// ../../server/src/renderer/MediaResolver.ts
import * as fs3 from "fs";
import * as path2 from "path";
import * as https from "https";
import * as http from "http";
import * as os2 from "os";
import * as crypto2 from "crypto";
var MediaResolver = class {
  constructor(workDir) {
    this.downloadCache = /* @__PURE__ */ new Map();
    this.downloadDir = workDir || path2.join(os2.tmpdir(), "video-export-media");
    if (!fs3.existsSync(this.downloadDir)) {
      fs3.mkdirSync(this.downloadDir, { recursive: true });
    }
  }
  /**
   * 解析媒体 src 为本地文件路径
   */
  async resolve(src) {
    if (!src) throw new Error("Empty media source");
    if (this.downloadCache.has(src)) {
      return this.downloadCache.get(src);
    }
    if (src.startsWith("https://") || src.startsWith("http://")) {
      const localPath = await this.downloadToLocal(src);
      this.downloadCache.set(src, localPath);
      return localPath;
    }
    if (src.startsWith("data:")) {
      const localPath = this.dataUrlToFile(src);
      this.downloadCache.set(src, localPath);
      return localPath;
    }
    if (fs3.existsSync(src)) {
      return src;
    }
    if (src.startsWith("local://")) {
      throw new Error(`local:// media resolution not yet implemented: ${src}`);
    }
    if (src.startsWith("brandlogo://")) {
      throw new Error(`brandlogo:// media resolution not yet implemented: ${src}`);
    }
    throw new Error(`Cannot resolve media source: ${src.substring(0, 100)}`);
  }
  async downloadToLocal(url) {
    const hash = crypto2.createHash("md5").update(url).digest("hex");
    const ext = this.getExtFromUrl(url);
    const localPath = path2.join(this.downloadDir, `${hash}${ext}`);
    if (fs3.existsSync(localPath)) return localPath;
    return new Promise((resolve2, reject) => {
      const protocol = url.startsWith("https") ? https : http;
      const file = fs3.createWriteStream(localPath);
      protocol.get(url, { agent: false }, (response) => {
        if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          file.close();
          fs3.unlinkSync(localPath);
          this.downloadToLocal(response.headers.location).then(resolve2).catch(reject);
          return;
        }
        if (response.statusCode !== 200) {
          file.close();
          fs3.unlinkSync(localPath);
          reject(new Error(`Download failed: HTTP ${response.statusCode} for ${url.substring(0, 100)}`));
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve2(localPath);
        });
      }).on("error", (err) => {
        file.close();
        if (fs3.existsSync(localPath)) fs3.unlinkSync(localPath);
        reject(err);
      });
    });
  }
  dataUrlToFile(dataUrl) {
    const base64Match = dataUrl.match(/^data:([^;,]+);base64,(.+)$/s);
    if (base64Match) {
      const mime = base64Match[1];
      const data = Buffer.from(base64Match[2], "base64");
      return this.writeDataToTempFile(mime, data);
    }
    const textMatch = dataUrl.match(/^data:([^;,]+)(?:;[^,]*)?,(.+)$/s);
    if (textMatch) {
      const mime = textMatch[1];
      let content;
      try {
        content = decodeURIComponent(textMatch[2]);
      } catch {
        content = textMatch[2];
      }
      const data = Buffer.from(content, "utf-8");
      return this.writeDataToTempFile(mime, data);
    }
    throw new Error("Invalid data URL");
  }
  writeDataToTempFile(mime, data) {
    const ext = mime.includes("svg") ? ".svg" : mime.includes("png") ? ".png" : mime.includes("jpeg") ? ".jpg" : ".bin";
    const hash = crypto2.createHash("md5").update(data).digest("hex");
    const localPath = path2.join(this.downloadDir, `${hash}${ext}`);
    if (!fs3.existsSync(localPath)) {
      fs3.writeFileSync(localPath, data);
    }
    return localPath;
  }
  getExtFromUrl(url) {
    try {
      const pathname = new URL(url).pathname;
      const ext = path2.extname(pathname).split("?")[0];
      return ext || ".bin";
    } catch {
      return ".bin";
    }
  }
  /**
   * 清理下载的临时文件
   */
  cleanup() {
    this.downloadCache.clear();
    if (fs3.existsSync(this.downloadDir)) {
      const files = fs3.readdirSync(this.downloadDir);
      for (const file of files) {
        try {
          fs3.unlinkSync(path2.join(this.downloadDir, file));
        } catch {
        }
      }
    }
  }
};

// ../../shared/animations/interpolationEasings.ts
var BACK_OVERSHOOT = 1.70158;
var BACK_OVERSHOOT_LARGE = 3.5;
var BOUNCE_N1 = 7.5625;
var BOUNCE_D1 = 2.75;
var ELASTIC_PERIOD = 2 * Math.PI / 3;
function springEasing(t, decay, velocity) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return 1 - Math.exp(-decay * t) * Math.cos(velocity * t);
}
var EASING = {
  linear: (t) => t,
  inQuad: (t) => t * t,
  outQuad: (t) => t * (2 - t),
  inOutQuad: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
  inCubic: (t) => t * t * t,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  inBack: (t) => {
    const c3 = BACK_OVERSHOOT + 1;
    return c3 * t * t * t - BACK_OVERSHOOT * t * t;
  },
  outBack: (t) => {
    const c3 = BACK_OVERSHOOT + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + BACK_OVERSHOOT * Math.pow(t - 1, 2);
  },
  inOutBack: (t) => {
    const c2 = BACK_OVERSHOOT * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  outBackLarge: (t) => {
    const c3 = BACK_OVERSHOOT_LARGE + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + BACK_OVERSHOOT_LARGE * Math.pow(t - 1, 2);
  },
  outBounce: (t) => {
    if (t < 1 / BOUNCE_D1) {
      return BOUNCE_N1 * t * t;
    } else if (t < 2 / BOUNCE_D1) {
      return BOUNCE_N1 * (t -= 1.5 / BOUNCE_D1) * t + 0.75;
    } else if (t < 2.5 / BOUNCE_D1) {
      return BOUNCE_N1 * (t -= 2.25 / BOUNCE_D1) * t + 0.9375;
    } else {
      return BOUNCE_N1 * (t -= 2.625 / BOUNCE_D1) * t + 0.984375;
    }
  },
  inBounce: (t) => 1 - EASING.outBounce(1 - t),
  inOutBounce: (t) => t < 0.5 ? (1 - EASING.outBounce(1 - 2 * t)) / 2 : (1 + EASING.outBounce(2 * t - 1)) / 2,
  outElastic: (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ELASTIC_PERIOD) + 1;
  },
  inElastic: (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * ELASTIC_PERIOD);
  },
  inOutElastic: (t) => {
    const c5 = 2 * Math.PI / 4.5;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5) / 2 + 1;
  },
  inExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
  outExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  inOutExpo: (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
  },
  inCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)),
  outCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
  inOutCirc: (t) => t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
  inSine: (t) => 1 - Math.cos(t * Math.PI / 2),
  outSine: (t) => Math.sin(t * Math.PI / 2),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  // Spring easings — damped harmonic oscillation
  spring: (t) => springEasing(t, 8, 6 * Math.PI),
  springGentle: (t) => springEasing(t, 12, 4 * Math.PI),
  springBouncy: (t) => springEasing(t, 6, 8 * Math.PI),
  springStiff: (t) => springEasing(t, 18, 6 * Math.PI)
};
function createElasticOut(amplitude = 1, period = 0.5) {
  const a = Math.max(1, amplitude);
  const s = period / (2 * Math.PI) * Math.asin(1 / a);
  return (t) => {
    if (t === 0 || t === 1) return t;
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / period) + 1;
  };
}
function createElasticIn(amplitude = 1, period = 0.5) {
  const outFn = createElasticOut(amplitude, period);
  return (t) => 1 - outFn(1 - t);
}
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERS = 10;
function calcBezier(t, a1, a2) {
  return (((1 + 3 * (a1 - a2)) * t + 3 * (a2 - 2 * a1)) * t + 3 * a1) * t;
}
function getSlope(t, a1, a2) {
  return (3 * (1 + 3 * (a1 - a2)) * t + 6 * (a2 - 2 * a1)) * t + 3 * a1;
}
function cubicBezier(x1, y1, x2, y2) {
  if (x1 === y1 && x2 === y2) return EASING.linear;
  const sampleValues = new Float32Array(11);
  for (let i = 0; i <= 10; i++) {
    sampleValues[i] = calcBezier(i * 0.1, x1, x2);
  }
  function getTForX(x) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = 10;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= x; ++currentSample) {
      intervalStart += 0.1;
    }
    --currentSample;
    const dist2 = (x - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist2 * 0.1;
    const initialSlope = getSlope(guessForT, x1, x2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      for (let i = 0; i < NEWTON_ITERATIONS; i++) {
        const currentSlope = getSlope(guessForT, x1, x2);
        if (currentSlope === 0) break;
        guessForT -= (calcBezier(guessForT, x1, x2) - x) / currentSlope;
      }
    } else if (initialSlope !== 0) {
      let aA = intervalStart;
      let bB = intervalStart + 0.1;
      for (let i = 0; i < SUBDIVISION_MAX_ITERS; i++) {
        guessForT = aA + (bB - aA) / 2;
        if (calcBezier(guessForT, x1, x2) - x > 0) bB = guessForT;
        else aA = guessForT;
        if (Math.abs(calcBezier(guessForT, x1, x2) - x) < SUBDIVISION_PRECISION)
          break;
      }
    }
    return guessForT;
  }
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    return calcBezier(getTForX(x), y1, y2);
  };
}
var ZETA_EPSILON = 1e-4;
function createSpring(stiffness, damping, mass = 1) {
  const omega = Math.sqrt(stiffness / mass);
  const zeta = damping / (2 * Math.sqrt(stiffness * mass));
  if (zeta < 1 - ZETA_EPSILON) {
    const omegaD = omega * Math.sqrt(1 - zeta * zeta);
    const zetaOmegaOverOmegaD = zeta * omega / omegaD;
    return (t) => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      const decay = Math.exp(-zeta * omega * t);
      return 1 - decay * (Math.cos(omegaD * t) + zetaOmegaOverOmegaD * Math.sin(omegaD * t));
    };
  }
  if (zeta > 1 + ZETA_EPSILON) {
    const s = Math.sqrt(zeta * zeta - 1);
    const r1 = -omega * (zeta - s);
    const r2 = -omega * (zeta + s);
    const invR1MinusR2 = 1 / (r1 - r2);
    return (t) => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      return 1 + (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) * invR1MinusR2;
    };
  }
  return (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return 1 - Math.exp(-omega * t) * (1 + omega * t);
  };
}
var _parametricCache = /* @__PURE__ */ new Map();
function resolveEasing(name) {
  const named = EASING[name];
  if (named) return named;
  const cached = _parametricCache.get(name);
  if (cached) return cached;
  let fn;
  if (name.startsWith("cubicBezier:")) {
    const s = name.slice(12);
    const i1 = s.indexOf(",");
    const i2 = i1 > 0 ? s.indexOf(",", i1 + 1) : -1;
    const i3 = i2 > 0 ? s.indexOf(",", i2 + 1) : -1;
    if (i1 > 0 && i2 > 0 && i3 > 0) {
      const x1 = +s.slice(0, i1), y1 = +s.slice(i1 + 1, i2);
      const x2 = +s.slice(i2 + 1, i3), y2 = +s.slice(i3 + 1);
      if (x1 === x1 && y1 === y1 && x2 === x2 && y2 === y2) {
        fn = cubicBezier(x1, y1, x2, y2);
      }
    }
  } else if (name.startsWith("spring:")) {
    const s = name.slice(7);
    const i1 = s.indexOf(",");
    const i2 = i1 > 0 ? s.indexOf(",", i1 + 1) : -1;
    if (i1 > 0) {
      const stiffness = +s.slice(0, i1);
      const damping = i2 > 0 ? +s.slice(i1 + 1, i2) : +s.slice(i1 + 1);
      const mass = i2 > 0 ? +s.slice(i2 + 1) : 1;
      if (stiffness === stiffness && damping === damping && mass === mass) {
        fn = createSpring(stiffness, damping, mass);
      }
    }
  }
  if (fn) {
    _parametricCache.set(name, fn);
    return fn;
  }
  return EASING.linear;
}

// ../../shared/animations/constants.ts
var ENTRANCE_ANIMATION_TYPES = /* @__PURE__ */ new Set([
  "fadeIn",
  "slideIn",
  "zoomIn",
  "rotateIn",
  "bounceIn",
  "blurIn",
  "flipIn",
  "irisIn",
  "pixelateIn",
  "spiralIn",
  "expandIn",
  "foldIn",
  "curtainIn",
  "morphIn",
  "elasticIn"
]);
var EXIT_ANIMATION_TYPES = /* @__PURE__ */ new Set([
  "fadeOut",
  "slideOut",
  "zoomOut",
  "rotateOut",
  "blurOut",
  "flipOut",
  "irisOut",
  "pixelateOut",
  "spiralOut",
  "collapseOut",
  "foldOut",
  "curtainOut",
  "dissolveOut",
  "bounceOut",
  "morphOut"
]);
var ANIMATION_AFFECTED_PROPERTIES = {
  fadeIn: ["opacity"],
  fadeOut: ["opacity"],
  blurIn: ["opacity"],
  blurOut: ["opacity"],
  irisIn: ["opacity"],
  irisOut: ["opacity"],
  pixelateIn: ["opacity"],
  pixelateOut: ["opacity"],
  curtainIn: ["opacity"],
  curtainOut: ["opacity"],
  flipIn: ["opacity"],
  flipOut: ["opacity"],
  dissolveOut: ["opacity"],
  glitch: ["opacity"],
  foldIn: ["opacity", "scaleX"],
  foldOut: ["opacity", "scaleX"],
  slideOut: ["opacity", "x", "y"],
  slideIn: ["opacity", "x", "y", "scaleX", "scaleY"],
  zoomIn: ["opacity", "scaleX", "scaleY"],
  zoomOut: ["opacity", "scaleX", "scaleY"],
  bounceIn: ["opacity", "scaleX", "scaleY"],
  bounceOut: ["opacity", "scaleX", "scaleY"],
  elasticIn: ["opacity", "scaleX", "scaleY"],
  expandIn: ["opacity", "scaleX", "scaleY"],
  collapseOut: ["opacity", "scaleX", "scaleY"],
  morphIn: ["opacity", "scaleX", "scaleY"],
  morphOut: ["opacity", "scaleX", "scaleY"],
  rotateIn: ["opacity", "scaleX", "scaleY", "rotation"],
  rotateOut: ["opacity", "scaleX", "scaleY", "rotation"],
  spiralIn: ["opacity", "scaleX", "scaleY", "rotation"],
  spiralOut: ["opacity", "scaleX", "scaleY", "rotation"]
};
var DEFAULT_AFFECTED_PROPERTIES = ["opacity", "x", "y", "scaleX", "scaleY", "rotation"];
var _affectedPropertiesCache = /* @__PURE__ */ new Map();
var _defaultAffectedSet = new Set(DEFAULT_AFFECTED_PROPERTIES);
function getAnimationAffectedProperties(animType) {
  const cached = _affectedPropertiesCache.get(animType);
  if (cached) return cached;
  const properties = ANIMATION_AFFECTED_PROPERTIES[animType];
  if (!properties) return _defaultAffectedSet;
  const result = new Set(properties);
  _affectedPropertiesCache.set(animType, result);
  return result;
}
var LOOP_ANIMATION_TYPES = /* @__PURE__ */ new Set([
  "breathe",
  "rotate",
  "bounce",
  "shake",
  "flash",
  "zoom",
  "pulse",
  "swing",
  "wobble",
  "heartbeat",
  "rubberBand",
  "jello",
  "tada",
  "glow",
  "glitch",
  "float",
  "headShake"
]);
var TEXT_ANIMATION_TYPES = /* @__PURE__ */ new Set([
  "typewriter",
  "highlight",
  "popIn",
  "popOut",
  "slideInByCharacter",
  "slideOutByCharacter",
  "fadeInByCharacter",
  "fadeOutByCharacter",
  "blurInByCharacter",
  "blurOutByCharacter",
  "bounceInByCharacter",
  "bounceOutByCharacter",
  "zoomInByCharacter",
  "zoomOutByCharacter",
  "rotateInByCharacter",
  "rotateOutByCharacter",
  "waveIn",
  "dropIn",
  "flipInByCharacter",
  "flipOutByCharacter",
  "scatterIn",
  "scatterOut",
  "elasticInByCharacter",
  "elasticOutByCharacter",
  "shakeInByCharacter",
  "waveOut",
  "dropOut",
  "shakeOutByCharacter"
]);
var PERSPECTIVE = {
  FLIP_FACTOR: 8e-4
};

// ../../shared/animations/animPropKeys.ts
var ANIM_PROPS = {
  // ─── Clip 效果 ───
  WIPE_PROGRESS: "_wipeProgress",
  WIPE_DIR: "_wipeDir",
  IRIS_PROGRESS: "_irisProgress",
  IRIS_TYPE: "_irisType",
  CURTAIN_PROGRESS: "_curtainProgress",
  CURTAIN_TYPE: "_curtainType",
  // ─── Filter 效果 ───
  BLUR_AMOUNT: "_blurAmount",
  // ─── Post-process 效果 ───
  PIXEL_SIZE: "_pixelSize",
  DISSOLVE_PROGRESS: "_dissolveProgress",
  ROTATE_X: "_rotateX",
  ROTATE_Y: "_rotateY",
  GLITCH_OFFSET_X: "_glitchOffsetX",
  GLITCH_OFFSET_Y: "_glitchOffsetY",
  RGB_SPLIT: "_rgbSplit"
};

// ../../shared/animations/animationRegistry.ts
var ANIMATION_REGISTRY = {
  // ─── 入场动画 ───
  fadeIn: {
    easing: "inOutQuad",
    properties: [{ target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }]
  },
  expandIn: {
    easing: "outBack",
    properties: [
      { target: "scaleX", from: 0, to: 1, multiply: "baseScaleX" },
      { target: "scaleY", from: 0, to: 1, multiply: "baseScaleY" },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ]
  },
  foldIn: {
    easing: "outQuad",
    properties: [
      { target: "scaleX", from: 0, to: 1, multiply: "baseScaleX" },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ]
  },
  blurIn: {
    easing: "outQuad",
    properties: [
      { target: ANIM_PROPS.BLUR_AMOUNT, from: 20, to: 0 },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ]
  },
  curtainIn: {
    easing: "outQuad",
    properties: [
      { target: ANIM_PROPS.CURTAIN_PROGRESS, from: 0, to: 1 },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ],
    customRender: { typeKey: ANIM_PROPS.CURTAIN_TYPE, typeValue: "in" }
  },
  irisIn: {
    easing: "outQuad",
    properties: [
      { target: ANIM_PROPS.IRIS_PROGRESS, from: 0, to: 1 },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ],
    customRender: { typeKey: ANIM_PROPS.IRIS_TYPE, typeValue: "in" }
  },
  pixelateIn: {
    easing: "outQuad",
    properties: [
      { target: ANIM_PROPS.PIXEL_SIZE, from: { param: "pixelSize", default: 20 }, to: 0 },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ]
  },
  zoomIn: {
    easing: "outQuad",
    properties: [
      { target: "scaleX", from: 1, to: { param: "scale", default: 1.5 }, multiply: "baseScaleX" },
      { target: "scaleY", from: 1, to: { param: "scale", default: 1.5 }, multiply: "baseScaleY" },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ]
  },
  elasticIn: {
    easing: "outElastic",
    properties: [
      { target: "scaleX", from: 0, to: 1, multiply: "baseScaleX" },
      { target: "scaleY", from: 0, to: 1, multiply: "baseScaleY" },
      {
        target: "opacity",
        segments: [
          { start: 0, end: 0.25, from: 0, to: 1, easing: "linear" },
          { start: 0.25, end: 1, from: 1, to: 1 }
        ],
        multiply: "baseOpacity"
      }
    ]
  },
  // ─── 出场动画 ───
  fadeOut: {
    easing: "inOutQuad",
    properties: [{ target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }]
  },
  collapseOut: {
    easing: "inQuad",
    properties: [
      { target: "scaleX", from: 1, to: 0, multiply: "baseScaleX" },
      { target: "scaleY", from: 1, to: 0, multiply: "baseScaleY" },
      { target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }
    ]
  },
  foldOut: {
    easing: "inQuad",
    properties: [
      { target: "scaleX", from: 1, to: 0, multiply: "baseScaleX" },
      { target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }
    ]
  },
  blurOut: {
    easing: "inQuad",
    properties: [
      { target: ANIM_PROPS.BLUR_AMOUNT, from: 0, to: 20 },
      { target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }
    ]
  },
  curtainOut: {
    easing: "linear",
    properties: [
      { target: ANIM_PROPS.CURTAIN_PROGRESS, from: 1, to: 0 },
      { target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }
    ],
    customRender: { typeKey: ANIM_PROPS.CURTAIN_TYPE, typeValue: "out" }
  },
  irisOut: {
    easing: "inQuad",
    properties: [
      { target: ANIM_PROPS.IRIS_PROGRESS, from: 1, to: 0 }
    ],
    customRender: { typeKey: ANIM_PROPS.IRIS_TYPE, typeValue: "out" }
  },
  pixelateOut: {
    easing: "inQuad",
    properties: [
      { target: ANIM_PROPS.PIXEL_SIZE, from: 0, to: { param: "pixelSize", default: 20 } },
      { target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }
    ]
  },
  zoomOut: {
    easing: "inQuad",
    properties: [
      { target: "scaleX", from: 1, to: { param: "scale", default: 0 }, multiply: "baseScaleX" },
      { target: "scaleY", from: 1, to: { param: "scale", default: 0 }, multiply: "baseScaleY" },
      { target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }
    ]
  },
  // ─── 循环 ───
  breathe: {
    easing: "linear",
    properties: [
      {
        target: "scaleX",
        segments: [
          { start: 0, end: 0.5, from: 1, to: 1.05, easing: "inOutQuad" },
          { start: 0.5, end: 1, from: 1.05, to: 1, easing: "inOutQuad" }
        ],
        multiply: "baseScaleX"
      },
      {
        target: "scaleY",
        segments: [
          { start: 0, end: 0.5, from: 1, to: 1.05, easing: "inOutQuad" },
          { start: 0.5, end: 1, from: 1.05, to: 1, easing: "inOutQuad" }
        ],
        multiply: "baseScaleY"
      }
    ]
  },
  flash: {
    easing: "linear",
    properties: [{
      target: "opacity",
      segments: [
        { start: 0, end: 0.5, from: 1, to: 0 },
        { start: 0.5, end: 1, from: 0, to: 1 }
      ],
      multiply: "baseOpacity"
    }]
  },
  zoom: {
    easing: "linear",
    properties: [
      {
        target: "scaleX",
        segments: [
          { start: 0, end: 0.5, from: 1, to: { param: "scale", default: 1.5 } },
          { start: 0.5, end: 1, from: { param: "scale", default: 1.5 }, to: 1 }
        ],
        multiply: "baseScaleX"
      },
      {
        target: "scaleY",
        segments: [
          { start: 0, end: 0.5, from: 1, to: { param: "scale", default: 1.5 } },
          { start: 0.5, end: 1, from: { param: "scale", default: 1.5 }, to: 1 }
        ],
        multiply: "baseScaleY"
      }
    ]
  },
  rotate: {
    easing: "linear",
    properties: [
      { target: "rotation", from: 0, to: { param: "rotationDegrees", default: 360 }, mode: "add" }
    ]
  },
  // ─── 飘浮 ───
  float: {
    easing: "linear",
    properties: [
      {
        target: "y",
        segments: [
          { start: 0, end: 0.5, from: 0, to: -8, easing: "inOutSine" },
          { start: 0.5, end: 1, from: -8, to: 0, easing: "inOutSine" }
        ],
        mode: "add"
      },
      {
        target: "x",
        segments: [
          { start: 0, end: 0.25, from: 0, to: 3, easing: "inOutSine" },
          { start: 0.25, end: 0.75, from: 3, to: -3, easing: "inOutSine" },
          { start: 0.75, end: 1, from: -3, to: 0, easing: "inOutSine" }
        ],
        mode: "add"
      }
    ]
  },
  // ─── 螺旋 ───
  spiralIn: {
    easing: "outQuad",
    properties: [
      { target: "scaleX", from: 0, to: 1, multiply: "baseScaleX" },
      { target: "scaleY", from: 0, to: 1, multiply: "baseScaleY" },
      { target: "rotation", from: 360, to: 0, mode: "add" },
      { target: "opacity", from: 0, to: 1, multiply: "baseOpacity" }
    ]
  },
  spiralOut: {
    easing: "inQuad",
    properties: [
      { target: "scaleX", from: 1, to: 0, multiply: "baseScaleX" },
      { target: "scaleY", from: 1, to: 0, multiply: "baseScaleY" },
      { target: "rotation", from: 0, to: 720, mode: "add" },
      { target: "opacity", from: 1, to: 0, multiply: "baseOpacity" }
    ]
  }
};

// ../../shared/keyframes/interpolate.ts
function lerp2(a, b, t) {
  return a + (b - a) * t;
}
function interpolate(value, inputRange, outputRange, options) {
  const len = inputRange.length;
  if (len < 2 || outputRange.length < 2) {
    throw new Error("interpolate: inputRange and outputRange must have at least 2 elements");
  }
  if (len !== outputRange.length) {
    throw new Error("interpolate: inputRange and outputRange must have the same length");
  }
  const extraLeft = options?.extrapolateLeft ?? "clamp";
  const extraRight = options?.extrapolateRight ?? "clamp";
  const easing = options?.easing;
  const inMin = inputRange[0];
  const inMax = inputRange[len - 1];
  if (value < inMin) {
    return extrapolateValue(value, inputRange, outputRange, easing, extraLeft, "left");
  }
  if (value > inMax) {
    return extrapolateValue(value, inputRange, outputRange, easing, extraRight, "right");
  }
  const segIdx = findSegment(value, inputRange);
  return interpolateSegment(value, inputRange, outputRange, segIdx, easing);
}
function findSegment(value, inputRange) {
  let lo = 0;
  let hi = inputRange.length - 2;
  while (lo < hi) {
    const mid = lo + hi >>> 1;
    if (inputRange[mid + 1] < value) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}
function interpolateSegment(value, inputRange, outputRange, segIdx, easing) {
  const inStart = inputRange[segIdx];
  const inEnd = inputRange[segIdx + 1];
  const outStart = outputRange[segIdx];
  const outEnd = outputRange[segIdx + 1];
  const segLen = inEnd - inStart;
  if (segLen === 0) return outStart;
  let t = (value - inStart) / segLen;
  if (easing) t = easing(t);
  return outStart + (outEnd - outStart) * t;
}
function extrapolateValue(value, inputRange, outputRange, easing, mode, side) {
  switch (mode) {
    case "clamp":
      return side === "left" ? outputRange[0] : outputRange[outputRange.length - 1];
    case "identity":
      return value;
    case "extend": {
      const segIdx = side === "left" ? 0 : inputRange.length - 2;
      const inStart = inputRange[segIdx];
      const inEnd = inputRange[segIdx + 1];
      const outStart = outputRange[segIdx];
      const outEnd = outputRange[segIdx + 1];
      const segLen = inEnd - inStart;
      if (segLen === 0) return outStart;
      const slope = (outEnd - outStart) / segLen;
      const anchor = side === "left" ? inStart : inEnd;
      const anchorOut = side === "left" ? outStart : outEnd;
      return anchorOut + slope * (value - anchor);
    }
    case "wrap": {
      const inMin = inputRange[0];
      const inMax = inputRange[inputRange.length - 1];
      const range = inMax - inMin;
      if (range === 0) return outputRange[0];
      const wrapped = inMin + ((value - inMin) % range + range) % range;
      return interpolate(wrapped, inputRange, outputRange, {
        easing,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
      });
    }
    default:
      return side === "left" ? outputRange[0] : outputRange[outputRange.length - 1];
  }
}

// ../../shared/animations/animationEngine.ts
function getOrCacheEasing(obj) {
  if (obj._cachedEasingFn) return obj._cachedEasingFn;
  const fn = resolveEasing(obj.easing);
  obj._cachedEasingFn = fn;
  return fn;
}
function resolveValue(val, animationProperties) {
  if (typeof val === "number") return val;
  return animationProperties?.[val.param] ?? val.default;
}
function interpolateSegments(segments, rawProgress, animationProperties, globalEasing) {
  for (const seg of segments) {
    if (rawProgress >= seg.start && rawProgress <= seg.end) {
      const segEasing = seg.easing ? getOrCacheEasing(seg) : globalEasing;
      return interpolate(
        rawProgress,
        [seg.start, seg.end],
        [resolveValue(seg.from, animationProperties), resolveValue(seg.to, animationProperties)],
        { easing: segEasing }
      );
    }
  }
  if (segments.length > 0) {
    if (rawProgress < segments[0].start) {
      return resolveValue(segments[0].from, animationProperties);
    }
    const last = segments[segments.length - 1];
    return resolveValue(last.to, animationProperties);
  }
  return 0;
}
function applyAnimationSpec(props, spec, clamped, animationProperties, ctx2) {
  const defaultEasing = getOrCacheEasing(spec);
  for (const prop of spec.properties) {
    let value;
    if (prop.segments) {
      value = interpolateSegments(prop.segments, clamped, animationProperties, defaultEasing);
    } else {
      const eased = ctx2.ease(clamped, defaultEasing);
      const from = prop.from !== void 0 ? resolveValue(prop.from, animationProperties) : 0;
      const to = prop.to !== void 0 ? resolveValue(prop.to, animationProperties) : 0;
      value = lerp2(from, to, eased);
    }
    if (prop.multiply) {
      value *= ctx2[prop.multiply];
    }
    if (prop.mode === "add") {
      props[prop.target] = (props[prop.target] ?? 0) + value;
    } else {
      props[prop.target] = value;
    }
  }
  if (spec.customRender) {
    props[spec.customRender.typeKey] = spec.customRender.typeValue;
  }
}

// ../../shared/animations/canvas2dEffects.ts
function applyIrisClip(ctx2, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const maxRadius = Math.sqrt(width * width + height * height) / 2;
  const currentRadius = maxRadius * p;
  ctx2.beginPath();
  ctx2.arc(0, 0, currentRadius, 0, Math.PI * 2);
  ctx2.clip();
}
function applyCurtainClip(ctx2, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const clipWidth = width * p / 2;
  ctx2.beginPath();
  ctx2.rect(-width / 2, -height / 2, clipWidth, height);
  ctx2.rect(width / 2 - clipWidth, -height / 2, clipWidth, height);
  ctx2.clip();
}
function applyWipeClip(ctx2, width, height, progress, direction) {
  const dir = direction === "top" ? "up" : direction === "bottom" ? "down" : direction;
  const p = Math.max(0, Math.min(1, progress));
  const w = width;
  const h = height;
  ctx2.beginPath();
  switch (dir) {
    case "left":
      ctx2.rect(-w / 2, -h / 2, w * p, h);
      break;
    case "right":
      ctx2.rect(w / 2 - w * p, -h / 2, w * p, h);
      break;
    case "up":
      ctx2.rect(-w / 2, -h / 2, w, h * p);
      break;
    case "down":
      ctx2.rect(-w / 2, h / 2 - h * p, w, h * p);
      break;
    case "top-left":
      ctx2.moveTo(-w / 2, -h / 2);
      ctx2.lineTo(-w / 2 + w * p, -h / 2);
      ctx2.lineTo(-w / 2, -h / 2 + h * p);
      ctx2.closePath();
      break;
    case "top-right":
      ctx2.moveTo(w / 2, -h / 2);
      ctx2.lineTo(w / 2 - w * p, -h / 2);
      ctx2.lineTo(w / 2, -h / 2 + h * p);
      ctx2.closePath();
      break;
    case "bottom-left":
      ctx2.moveTo(-w / 2, h / 2);
      ctx2.lineTo(-w / 2 + w * p, h / 2);
      ctx2.lineTo(-w / 2, h / 2 - h * p);
      ctx2.closePath();
      break;
    case "bottom-right":
      ctx2.moveTo(w / 2, h / 2);
      ctx2.lineTo(w / 2 - w * p, h / 2);
      ctx2.lineTo(w / 2, h / 2 - h * p);
      ctx2.closePath();
      break;
    default:
      ctx2.rect(-w / 2, -h / 2, w, h);
      break;
  }
  ctx2.clip();
}
function apply3DRotation(ctx2, rotateX, rotateY, width, height) {
  const angleX = rotateX * Math.PI / 180;
  const angleY = rotateY * Math.PI / 180;
  const cosX = Math.cos(angleX);
  const sinX = Math.sin(angleX);
  const cosY = Math.cos(angleY);
  const sinY = Math.sin(angleY);
  const perspectiveFactor = PERSPECTIVE.FLIP_FACTOR;
  if (rotateY !== 0) {
    const skewY = -sinY * perspectiveFactor * height;
    ctx2.transform(cosY, 0, skewY, 1, 0, 0);
  }
  if (rotateX !== 0) {
    const skewX = -sinX * perspectiveFactor * width;
    ctx2.transform(1, skewX, 0, cosX, 0, 0);
  }
}
function calculatePixelateDownsample(width, height, pixelSize) {
  const factor = Math.max(1, pixelSize);
  const pixelWidth = Math.max(1, Math.floor(width / factor));
  const pixelHeight = Math.max(1, Math.floor(height / factor));
  return { factor, pixelWidth, pixelHeight };
}
function calculateDissolvePixelSize(progress) {
  return Math.floor(progress * 20) + 1;
}
function renderPixelated(ctx2, sourceCanvas, width, height) {
  const prevSmoothing = ctx2.imageSmoothingEnabled;
  ctx2.imageSmoothingEnabled = false;
  ctx2.drawImage(sourceCanvas, -width / 2, -height / 2, width, height);
  ctx2.imageSmoothingEnabled = prevSmoothing;
}
function renderGlitchRGBSplit(ctx2, sourceCanvas, width, height, rgbSplit) {
  const alpha = ctx2.globalAlpha;
  ctx2.save();
  ctx2.globalAlpha = alpha * 0.4;
  ctx2.drawImage(sourceCanvas, -width / 2 - rgbSplit, -height / 2, width, height);
  ctx2.restore();
  ctx2.save();
  ctx2.globalAlpha = alpha * 0.4;
  ctx2.drawImage(sourceCanvas, -width / 2 + rgbSplit, -height / 2, width, height);
  ctx2.restore();
  ctx2.globalAlpha = alpha;
  ctx2.drawImage(sourceCanvas, -width / 2, -height / 2, width, height);
}

// ../../shared/animations/easingFunctions.ts
var easingFunctions = {
  linear: EASING.linear,
  easeInQuad: EASING.inQuad,
  easeOutQuad: EASING.outQuad,
  easeInOutQuad: EASING.inOutQuad,
  easeInBack: EASING.inBack,
  easeOutBack: EASING.outBack,
  easeInOutBack: EASING.inOutBack,
  easeOutElastic: EASING.outElastic,
  easeInElastic: EASING.inElastic,
  easeInOutElastic: EASING.inOutElastic,
  easeOutBounce: EASING.outBounce,
  easeInBounce: EASING.inBounce,
  easeInOutBounce: EASING.inOutBounce,
  spring: EASING.spring,
  springGentle: EASING.springGentle,
  springBouncy: EASING.springBouncy,
  springStiff: EASING.springStiff
};
function getEasingFunction(name) {
  return easingFunctions[name] || resolveEasing(name);
}

// ../../shared/animations/animationConfig.ts
var EMPHASIS_ANIMATIONS = {
  pulse: {
    name: "Pulse",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, scale: 1 },
      { progress: 0.5, scale: 1.1 },
      { progress: 1, scale: 1 }
    ],
    parameters: {
      scale: 1.1
    }
  },
  swing: {
    name: "Swing",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, angle: 0 },
      { progress: 0.25, angle: 15 },
      { progress: 0.75, angle: -15 },
      { progress: 1, angle: 0 }
    ],
    parameters: {
      angle: 15
    }
  },
  wobble: {
    name: "Wobble",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, angle: 0, offsetX: 0 },
      { progress: 0.2, angle: -5, offsetX: -10 },
      { progress: 0.4, angle: 5, offsetX: 10 },
      { progress: 0.6, angle: -5, offsetX: -10 },
      { progress: 0.8, angle: 0, offsetX: 0 },
      { progress: 1, angle: 0, offsetX: 0 }
    ],
    parameters: {
      angle: 5,
      offsetX: 10
    }
  },
  heartbeat: {
    name: "Heartbeat",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, scale: 1 },
      { progress: 0.2, scale: 1.15 },
      { progress: 0.3, scale: 1 },
      { progress: 0.5, scale: 1.15 },
      { progress: 0.6, scale: 1 },
      { progress: 1, scale: 1 }
    ],
    parameters: {
      beatScale: 1.15
    }
  },
  bounce: {
    name: "Bounce",
    defaultDuration: 2e3,
    easing: "easeOutBounce",
    keyframes: [
      { progress: 0, offsetY: -80 },
      { progress: 1, offsetY: 0 }
    ],
    parameters: {
      bounceHeight: 80
    }
  },
  typewriter: {
    name: "Typewriter",
    defaultDuration: 3e3,
    easing: "linear",
    keyframes: [
      { progress: 0, charProgress: 0 },
      { progress: 1, charProgress: 1 }
    ],
    parameters: {
      charDelay: 50
      // 每个字符之间的延迟（毫秒）
    }
  },
  rubberBand: {
    name: "Rubber Band",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, scaleX: 1, scaleY: 1 },
      { progress: 0.3, scaleX: 1.25, scaleY: 0.75 },
      { progress: 0.4, scaleX: 0.75, scaleY: 1.25 },
      { progress: 0.5, scaleX: 1.15, scaleY: 0.85 },
      { progress: 0.65, scaleX: 0.95, scaleY: 1.05 },
      { progress: 0.75, scaleX: 1.05, scaleY: 0.95 },
      { progress: 1, scaleX: 1, scaleY: 1 }
    ],
    parameters: {
      maxStretchX: 1.25,
      maxStretchY: 1.25
    }
  },
  jello: {
    name: "Jello",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, skewX: 0, skewY: 0 },
      { progress: 0.111, skewX: -12.5, skewY: -12.5 },
      { progress: 0.222, skewX: 6.25, skewY: 6.25 },
      { progress: 0.333, skewX: -3.125, skewY: -3.125 },
      { progress: 0.444, skewX: 1.5625, skewY: 1.5625 },
      { progress: 0.555, skewX: -0.78125, skewY: -0.78125 },
      { progress: 0.666, skewX: 0.390625, skewY: 0.390625 },
      { progress: 0.777, skewX: -0.1953125, skewY: -0.1953125 },
      { progress: 1, skewX: 0, skewY: 0 }
    ],
    parameters: {
      maxSkew: 12.5
    }
  },
  tada: {
    name: "Tada",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, scale: 1, angle: 0 },
      { progress: 0.1, scale: 0.9, angle: -3 },
      { progress: 0.2, scale: 0.9, angle: -3 },
      { progress: 0.3, scale: 1.1, angle: 3 },
      { progress: 0.4, scale: 1.1, angle: -3 },
      { progress: 0.5, scale: 1.1, angle: 3 },
      { progress: 0.6, scale: 1.1, angle: -3 },
      { progress: 0.7, scale: 1.1, angle: 3 },
      { progress: 0.8, scale: 1.1, angle: -3 },
      { progress: 0.9, scale: 1.1, angle: 3 },
      { progress: 1, scale: 1, angle: 0 }
    ],
    parameters: {
      celebrationScale: 1.1,
      celebrationAngle: 3
    }
  },
  glow: {
    name: "Glow",
    defaultDuration: 2e3,
    easing: "easeInOutQuad",
    keyframes: [
      { progress: 0, opacity: 1, scale: 1 },
      { progress: 0.5, opacity: 0.7, scale: 1.05 },
      { progress: 1, opacity: 1, scale: 1 }
    ],
    parameters: {
      glowIntensity: 0.3,
      glowScale: 1.05
    }
  }
};
function getAnimationConfig(type) {
  return EMPHASIS_ANIMATIONS[type];
}

// ../../shared/animations/animationCalculators.ts
var _resolvedCache = /* @__PURE__ */ new Map();
function getResolvedConfig(type) {
  let resolved = _resolvedCache.get(type);
  if (resolved !== void 0) return resolved;
  const config = getAnimationConfig(type);
  if (!config) {
    _resolvedCache.set(type, null);
    return null;
  }
  resolved = { config, easing: getEasingFunction(config.easing) };
  _resolvedCache.set(type, resolved);
  return resolved;
}
function interpolateKeyframes(keyframes, progress, property, easing) {
  const len = keyframes.length;
  if (len === 0) return 0;
  if (progress <= keyframes[0].progress) return keyframes[0][property] ?? 0;
  if (progress >= keyframes[len - 1].progress) return keyframes[len - 1][property] ?? 0;
  let lo = 0;
  let hi = len - 1;
  while (lo < hi) {
    const mid = lo + hi + 1 >>> 1;
    if (keyframes[mid].progress <= progress) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  const current = keyframes[lo];
  const next = keyframes[lo + 1];
  if (!next) return current[property] ?? 0;
  const localProgress = (progress - current.progress) / (next.progress - current.progress);
  const eased = easing(localProgress);
  const currentValue = current[property] ?? 0;
  const nextValue = next[property] ?? 0;
  return currentValue + (nextValue - currentValue) * eased;
}
function calculatePulseScale(progress, scale = 1.1) {
  const resolved = getResolvedConfig("pulse");
  if (!resolved) return 1;
  const interpolated = interpolateKeyframes(resolved.config.keyframes, progress % 1, "scale", resolved.easing);
  const defaultScale = resolved.config.parameters.scale;
  if (scale === defaultScale || defaultScale === 1) return interpolated;
  return 1 + (interpolated - 1) * (scale - 1) / (defaultScale - 1);
}
function calculateSwingAngle(progress, baseAngle = 0, swingAngle = 15) {
  const resolved = getResolvedConfig("swing");
  if (!resolved) return baseAngle;
  const interpolated = interpolateKeyframes(resolved.config.keyframes, progress % 1, "angle", resolved.easing);
  const defaultAngle = resolved.config.parameters.angle;
  if (swingAngle === defaultAngle || defaultAngle === 0) return baseAngle + interpolated;
  return baseAngle + interpolated * (swingAngle / defaultAngle);
}
function calculateWobbleState(progress, baseAngle = 0, baseX = 0) {
  const resolved = getResolvedConfig("wobble");
  if (!resolved) return { angle: baseAngle, x: baseX };
  const clamped = progress % 1;
  return {
    angle: baseAngle + interpolateKeyframes(resolved.config.keyframes, clamped, "angle", resolved.easing),
    x: baseX + interpolateKeyframes(resolved.config.keyframes, clamped, "offsetX", resolved.easing)
  };
}
function calculateHeartbeatScale(progress, beatScale = 1.15) {
  const resolved = getResolvedConfig("heartbeat");
  if (!resolved) return 1;
  const interpolated = interpolateKeyframes(resolved.config.keyframes, progress % 1, "scale", resolved.easing);
  const defaultBeatScale = resolved.config.parameters.beatScale;
  if (beatScale === defaultBeatScale || defaultBeatScale === 1) return interpolated;
  return 1 + (interpolated - 1) * (beatScale - 1) / (defaultBeatScale - 1);
}
function calculateBounceOffset(progress, bounceHeight = 80) {
  const resolved = getResolvedConfig("bounce");
  if (!resolved) return 0;
  const easedProgress = resolved.easing(progress % 1);
  return -bounceHeight * (1 - easedProgress);
}
function calculateTypewriterProgress(progress, totalChars) {
  const resolved = getResolvedConfig("typewriter");
  if (!resolved) return totalChars;
  return Math.floor(Math.max(0, Math.min(1, progress)) * totalChars);
}
function calculateRubberBandScale(progress) {
  const resolved = getResolvedConfig("rubberBand");
  if (!resolved) return { scaleX: 1, scaleY: 1 };
  const clamped = progress % 1;
  return {
    scaleX: interpolateKeyframes(resolved.config.keyframes, clamped, "scaleX", resolved.easing),
    scaleY: interpolateKeyframes(resolved.config.keyframes, clamped, "scaleY", resolved.easing)
  };
}
function calculateJelloSkew(progress) {
  const resolved = getResolvedConfig("jello");
  if (!resolved) return { skewX: 0, skewY: 0 };
  const clamped = progress % 1;
  return {
    skewX: interpolateKeyframes(resolved.config.keyframes, clamped, "skewX", resolved.easing),
    skewY: interpolateKeyframes(resolved.config.keyframes, clamped, "skewY", resolved.easing)
  };
}
function calculateTadaState(progress) {
  const resolved = getResolvedConfig("tada");
  if (!resolved) return { scale: 1, angle: 0 };
  const clamped = progress % 1;
  return {
    scale: interpolateKeyframes(resolved.config.keyframes, clamped, "scale", resolved.easing),
    angle: interpolateKeyframes(resolved.config.keyframes, clamped, "angle", resolved.easing)
  };
}
function calculateGlowState(progress) {
  const resolved = getResolvedConfig("glow");
  if (!resolved) return { opacity: 1, scale: 1 };
  const clamped = progress % 1;
  return {
    opacity: interpolateKeyframes(resolved.config.keyframes, clamped, "opacity", resolved.easing),
    scale: interpolateKeyframes(resolved.config.keyframes, clamped, "scale", resolved.easing)
  };
}

// ../../shared/animations/animationHandlers.ts
var easeOutQuad = easingFunctions.easeOutQuad;
var easeInQuad = easingFunctions.easeInQuad;
var easeInOutQuad = easingFunctions.easeInOutQuad;
var easeOutBack = easingFunctions.easeOutBack;
var easeInBack = easingFunctions.easeInBack;
var easeOutElastic = easingFunctions.easeOutElastic;
var linear = EASING.linear;
var handleSlideIn = (props, animation, clamped, _raw, ctx2) => {
  const useClip = !!animation.properties?.useClipPath;
  const dir = animation.properties?.direction || "left";
  const targetX = props.x;
  const targetY = props.y;
  const startX = dir === "left" ? -props.width : dir === "right" ? ctx2.canvasWidth : targetX;
  const startY = dir === "top" ? -props.height : dir === "bottom" ? ctx2.canvasHeight : targetY;
  const eased = ctx2.ease(clamped, easeOutQuad);
  if (!useClip) {
    props.x = startX + (targetX - startX) * eased;
    props.y = startY + (targetY - startY) * eased;
  } else {
    props[ANIM_PROPS.WIPE_DIR] = dir;
    props[ANIM_PROPS.WIPE_PROGRESS] = eased;
    props._wipeGroup = "in";
  }
  props.opacity = ctx2.baseOpacity * eased;
  const scaleProgress = 0.95 + 0.05 * eased;
  props.scaleX = ctx2.baseScaleX * scaleProgress;
  props.scaleY = ctx2.baseScaleY * scaleProgress;
};
var handleSlideOut = (props, animation, clamped, _raw, ctx2) => {
  const useClip = !!animation.properties?.useClipPath;
  const dir = animation.properties?.direction || "left";
  const eased = ctx2.ease(clamped, easeInOutQuad);
  if (useClip) {
    props[ANIM_PROPS.WIPE_DIR] = dir;
    props[ANIM_PROPS.WIPE_PROGRESS] = 1 - eased;
    props._wipeGroup = "out";
    props.opacity = ctx2.baseOpacity * (1 - eased);
  } else {
    const slideDistance = Math.max(ctx2.canvasWidth, ctx2.canvasHeight) + Math.max(props.width, props.height);
    const targetX = props.x;
    const targetY = props.y;
    let endOffsetX = 0, endOffsetY = 0;
    switch (dir) {
      case "left":
        endOffsetX = -slideDistance;
        break;
      case "right":
        endOffsetX = slideDistance;
        break;
      case "top":
        endOffsetY = -slideDistance;
        break;
      case "bottom":
        endOffsetY = slideDistance;
        break;
    }
    props.x = targetX + endOffsetX * eased;
    props.y = targetY + endOffsetY * eased;
    props.opacity = ctx2.baseOpacity * (1 - eased);
  }
};
var handleRotateIn = (props, animation, clamped, _raw, ctx2) => {
  const rotationDegrees = animation.properties?.rotationDegrees ?? 180;
  const direction = animation.properties?.direction ?? "clockwise";
  const baseRotation = props.rotation ?? 0;
  const startAngle = direction === "clockwise" ? baseRotation + rotationDegrees : baseRotation - rotationDegrees;
  const eased = ctx2.ease(clamped, easeOutBack);
  props.rotation = startAngle + (baseRotation - startAngle) * eased;
  props.opacity = ctx2.baseOpacity * eased;
  const scaleProgress = 0.3 + 0.7 * eased;
  props.scaleX = ctx2.baseScaleX * scaleProgress;
  props.scaleY = ctx2.baseScaleY * scaleProgress;
};
var handleRotateOut = (props, animation, clamped, _raw, ctx2) => {
  const rotationDegrees = animation.properties?.rotationDegrees ?? 180;
  const direction = animation.properties?.direction ?? "clockwise";
  const baseRotation = props.rotation ?? 0;
  const endAngle = direction === "clockwise" ? baseRotation + rotationDegrees : baseRotation - rotationDegrees;
  const eased = ctx2.ease(clamped, easeInBack);
  props.rotation = baseRotation + (endAngle - baseRotation) * eased;
  props.opacity = ctx2.baseOpacity * (1 - eased);
  const scaleProgress = 1 - 0.7 * eased;
  props.scaleX = ctx2.baseScaleX * scaleProgress;
  props.scaleY = ctx2.baseScaleY * scaleProgress;
};
var handleFlipIn = (props, animation, clamped, _raw, ctx2) => {
  const direction = animation.properties?.direction || "horizontal";
  const easedFlip = ctx2.ease(clamped, easeOutBack);
  if (direction === "horizontal") {
    props[ANIM_PROPS.ROTATE_Y] = 90 * (1 - easedFlip);
  } else {
    props[ANIM_PROPS.ROTATE_X] = 90 * (1 - easedFlip);
  }
  props.opacity = ctx2.baseOpacity * easedFlip;
};
var handleFlipOut = (props, animation, clamped, _raw, ctx2) => {
  const direction = animation.properties?.direction || "horizontal";
  const easedFlip = ctx2.ease(clamped, easeInBack);
  if (direction === "horizontal") {
    props[ANIM_PROPS.ROTATE_Y] = 90 * easedFlip;
  } else {
    props[ANIM_PROPS.ROTATE_X] = 90 * easedFlip;
  }
  props.opacity = ctx2.baseOpacity * (1 - easedFlip);
};
var handleBounceIn = (props, _anim, clamped, _raw, ctx2) => {
  const eased = ctx2.ease(clamped, easeOutElastic);
  const scaleMultiplier = interpolate(clamped, [0, 0.25, 0.5, 0.75, 1], [0, 1.2, 0.9, 1.1, 1]);
  props.scaleX = ctx2.baseScaleX * scaleMultiplier;
  props.scaleY = ctx2.baseScaleY * scaleMultiplier;
  props.opacity = ctx2.baseOpacity * eased;
};
var handleBounceOut = (props, _anim, clamped, _raw, ctx2) => {
  const eased = ctx2.ease(clamped, easeInQuad);
  const scaleMultiplier = Math.max(0, interpolate(clamped, [0, 0.25, 0.5, 0.75, 1], [1, 1.1, 0.9, 0.3, 0]));
  props.scaleX = ctx2.baseScaleX * scaleMultiplier;
  props.scaleY = ctx2.baseScaleY * scaleMultiplier;
  props.opacity = ctx2.baseOpacity * (1 - eased);
};
var handleMorphIn = (props, _anim, clamped, _raw, ctx2) => {
  const easedMorph = ctx2.ease(clamped, easeInOutQuad);
  let scaleX, scaleY;
  if (clamped < 0.5) {
    const p = clamped * 2;
    scaleX = ctx2.baseScaleX * p;
    scaleY = ctx2.baseScaleY * p;
  } else {
    const p = (clamped - 0.5) * 2;
    scaleX = ctx2.baseScaleX * (0.8 + 0.2 * p);
    scaleY = ctx2.baseScaleY * (1.2 - 0.2 * p);
  }
  props.scaleX = scaleX;
  props.scaleY = scaleY;
  props.opacity = ctx2.baseOpacity * easedMorph;
};
var handleGlitch = (props, animation, clamped, _raw, ctx2) => {
  const easedGlitch = ctx2.ease(clamped, easeInOutQuad);
  const glitchIntensity = animation.properties?.intensity ?? 10;
  const glitchPhase = Math.floor(clamped * 8) % 2;
  if (glitchPhase === 0) {
    const pseudoRandX = Math.abs(Math.sin(clamped * 12.9898 + 78.233) * 43758.5453 % 1) - 0.5;
    const pseudoRandY = Math.abs(Math.sin(clamped * 45.164 + 94.673) * 43758.5453 % 1) - 0.5;
    props[ANIM_PROPS.GLITCH_OFFSET_X] = pseudoRandX * glitchIntensity * (1 - easedGlitch);
    props[ANIM_PROPS.GLITCH_OFFSET_Y] = pseudoRandY * glitchIntensity * (1 - easedGlitch);
    props[ANIM_PROPS.RGB_SPLIT] = glitchIntensity * 0.5 * (1 - easedGlitch);
  } else {
    props[ANIM_PROPS.GLITCH_OFFSET_X] = 0;
    props[ANIM_PROPS.GLITCH_OFFSET_Y] = 0;
    props[ANIM_PROPS.RGB_SPLIT] = 0;
  }
  if (animation.group === "in") {
    props.opacity = ctx2.baseOpacity * easedGlitch;
  } else if (animation.group === "out") {
    props.opacity = ctx2.baseOpacity * (1 - easedGlitch);
  }
};
var handleMorphOut = (props, _anim, clamped, _raw, ctx2) => {
  const easedMorph = ctx2.ease(clamped, easeInOutQuad);
  let scaleX, scaleY;
  if (clamped < 0.5) {
    const p = clamped * 2;
    scaleX = ctx2.baseScaleX * (1 - 0.2 * p);
    scaleY = ctx2.baseScaleY * (1 + 0.2 * p);
  } else {
    const p = (clamped - 0.5) * 2;
    scaleX = ctx2.baseScaleX * (0.8 - 0.8 * p);
    scaleY = ctx2.baseScaleY * (1.2 - 1.2 * p);
  }
  props.scaleX = scaleX;
  props.scaleY = scaleY;
  props.opacity = ctx2.baseOpacity * (1 - easedMorph);
};
var handleDissolveOut = (props, _anim, clamped, _raw, ctx2) => {
  const eased = ctx2.ease(clamped, linear);
  props[ANIM_PROPS.DISSOLVE_PROGRESS] = eased;
  const pixelSize = calculateDissolvePixelSize(eased);
  if (pixelSize > 1) {
    props[ANIM_PROPS.PIXEL_SIZE] = pixelSize;
  }
  props.opacity = ctx2.baseOpacity * (1 - eased);
};
var handlePulse = (props, animation, _clamped, progressRaw, { baseScaleX, baseScaleY }) => {
  const pulseScale = animation.properties?.scale ?? 1.1;
  const scale = calculatePulseScale(progressRaw, pulseScale);
  props.scaleX = baseScaleX * scale;
  props.scaleY = baseScaleY * scale;
};
var handleSwing = (props, animation, _clamped, progressRaw) => {
  const swingAngle = animation.properties?.angle ?? 15;
  const baseRotation = props.rotation ?? 0;
  props.rotation = calculateSwingAngle(progressRaw, baseRotation, swingAngle);
};
var handleWobble = (props, _anim, _clamped, progressRaw) => {
  const baseRotation = props.rotation ?? 0;
  const baseX = props.x;
  const state = calculateWobbleState(progressRaw, baseRotation, baseX);
  props.rotation = state.angle;
  props.x = state.x;
};
var handleHeartbeat = (props, animation, _clamped, progressRaw, { baseScaleX, baseScaleY }) => {
  const beatScale = animation.properties?.beatScale ?? 1.15;
  const scale = calculateHeartbeatScale(progressRaw, beatScale);
  props.scaleX = baseScaleX * scale;
  props.scaleY = baseScaleY * scale;
};
var handleBounce = (props, animation, _clamped, progressRaw) => {
  const bounceHeight = animation.properties?.bounceHeight ?? 80;
  const baseY = props.y;
  const offsetY = calculateBounceOffset(progressRaw, bounceHeight);
  props.y = baseY + offsetY;
};
var handleRubberBand = (props, _anim, _clamped, progressRaw, { baseScaleX, baseScaleY }) => {
  const { scaleX, scaleY } = calculateRubberBandScale(progressRaw);
  props.scaleX = baseScaleX * scaleX;
  props.scaleY = baseScaleY * scaleY;
};
var handleJello = (props, _anim, _clamped, progressRaw) => {
  const { skewX, skewY } = calculateJelloSkew(progressRaw);
  props.skewX = skewX;
  props.skewY = skewY;
};
var handleTada = (props, _anim, _clamped, progressRaw, { baseScaleX, baseScaleY }) => {
  const { scale, angle: angle2 } = calculateTadaState(progressRaw);
  const baseRotation = props.rotation ?? 0;
  props.scaleX = baseScaleX * scale;
  props.scaleY = baseScaleY * scale;
  props.rotation = baseRotation + angle2;
};
var handleGlow = (props, _anim, _clamped, progressRaw, { baseOpacity, baseScaleX, baseScaleY }) => {
  const { opacity, scale } = calculateGlowState(progressRaw);
  props.scaleX = baseScaleX * scale;
  props.scaleY = baseScaleY * scale;
  props.opacity = baseOpacity * opacity;
};
var handleTypewriter = (props, _anim, clamped) => {
  const fullText = props.text || "";
  const totalChars = fullText.length;
  if (totalChars > 0) {
    if (clamped >= 1) {
      props.text = fullText;
    } else {
      const visibleChars = calculateTypewriterProgress(clamped, totalChars);
      props.text = fullText.substring(0, visibleChars);
    }
  }
};
var handleShake = (props, animation, clamped) => {
  const shakeIntensity = animation.properties?.intensity ?? 30;
  const baseX = props.x;
  const factor = interpolate(clamped, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0.8, -0.6, 0.4, -0.2, 0]);
  props.x = baseX + shakeIntensity * factor;
};
var handleHeadShake = (props, animation, clamped) => {
  const intensity = animation.properties?.intensity ?? 10;
  const baseX = props.x;
  const baseRotation = props.rotation ?? 0;
  const xFactor = interpolate(
    clamped,
    [0, 0.065, 0.185, 0.315, 0.435, 0.5, 1],
    [0, -1, 1, -0.5, 0.5, 0, 0]
  );
  const rotFactor = interpolate(
    clamped,
    [0, 0.065, 0.185, 0.315, 0.435, 0.5, 1],
    [0, -0.5, 0.5, -0.25, 0.25, 0, 0]
  );
  props.x = baseX + xFactor * intensity;
  props.rotation = baseRotation + rotFactor * 8;
};
var ANIMATION_HANDLERS = {
  // 入场/出场 复杂动画
  slideIn: handleSlideIn,
  slideOut: handleSlideOut,
  rotateIn: handleRotateIn,
  rotateOut: handleRotateOut,
  flipIn: handleFlipIn,
  flipOut: handleFlipOut,
  bounceIn: handleBounceIn,
  bounceOut: handleBounceOut,
  morphIn: handleMorphIn,
  glitch: handleGlitch,
  dissolveOut: handleDissolveOut,
  morphOut: handleMorphOut,
  // Emphasis 计算器动画
  pulse: handlePulse,
  swing: handleSwing,
  wobble: handleWobble,
  heartbeat: handleHeartbeat,
  bounce: handleBounce,
  rubberBand: handleRubberBand,
  jello: handleJello,
  tada: handleTada,
  glow: handleGlow,
  typewriter: handleTypewriter,
  // Loop 动画
  shake: handleShake,
  headShake: handleHeadShake
};

// ../../shared/keyframes/KeyframeInterpolator.ts
function findBracketingKeyframes(keyframes, time) {
  if (keyframes.length === 0) {
    return { from: null, to: null, localProgress: 0 };
  }
  if (keyframes.length === 1) {
    return { from: keyframes[0], to: null, localProgress: 0 };
  }
  if (time <= keyframes[0].time) {
    return { from: keyframes[0], to: null, localProgress: 0 };
  }
  if (time >= keyframes[keyframes.length - 1].time) {
    return { from: keyframes[keyframes.length - 1], to: null, localProgress: 0 };
  }
  let lo = 0;
  let hi = keyframes.length - 1;
  while (lo < hi) {
    const mid = lo + hi + 1 >>> 1;
    if (keyframes[mid].time <= time) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  const from = keyframes[lo];
  const to = keyframes[lo + 1];
  const duration = to.time - from.time;
  const localProgress = duration > 0 ? (time - from.time) / duration : 0;
  return { from, to, localProgress };
}
function interpolateValue2(from, to, progress, easingName) {
  return interpolate(progress, [0, 1], [from, to], {
    easing: resolveEasing(easingName)
  });
}
function interpolatePropertiesObject(fromProps, toProps, progress, easingName) {
  const result = {};
  for (const k in fromProps) {
    const key = k;
    const fromValue = fromProps[key];
    if (fromValue === void 0) continue;
    const toValue = toProps[key];
    if (toValue !== void 0) {
      result[key] = interpolateValue2(fromValue, toValue, progress, easingName);
    } else {
      result[key] = fromValue;
    }
  }
  for (const k in toProps) {
    const key = k;
    if (fromProps[key] !== void 0) continue;
    const toValue = toProps[key];
    if (toValue !== void 0) {
      result[key] = toValue;
    }
  }
  return result;
}
function interpolateKeyframeProperties(keyframes, time) {
  const bracket = findBracketingKeyframes(keyframes, time);
  if (!bracket.from) {
    return {};
  }
  if (!bracket.to) {
    return bracket.from.properties;
  }
  return interpolatePropertiesObject(
    bracket.from.properties,
    bracket.to.properties,
    bracket.localProgress,
    bracket.from.easing
  );
}

// ../../shared/animations/applyAnimation.ts
var SPECIAL_TEXT_CHAR_MAP = {
  highlight: { progressKey: "_popProgress", textKey: "_popText" },
  popIn: { progressKey: "_popProgress", textKey: "_popText" },
  popOut: { progressKey: "_popOutByCharacterProgress", textKey: "_popOutByCharacterText" }
};
function buildTextCharAnimationMap() {
  const map = {
    ...SPECIAL_TEXT_CHAR_MAP
  };
  for (const type of TEXT_ANIMATION_TYPES) {
    if (type === "typewriter" || map[type]) continue;
    map[type] = {
      progressKey: `_${type}Progress`,
      textKey: `_${type}Text`
    };
  }
  return map;
}
var _TEXT_CHAR_ANIMATION_MAP = buildTextCharAnimationMap();
var DEFAULT_EASE = (t, defaultFn) => defaultFn(t);
function convertSpeedToLoopDuration(storedDuration, baseDuration = 2e3) {
  const speedMultiplier = storedDuration / 1e3;
  return baseDuration / speedMultiplier;
}
function calculateAnimationProgress(localTime, start, animation, animDur, isEmphasisLoopAnimation) {
  if (isEmphasisLoopAnimation) {
    const singleCycleDuration = convertSpeedToLoopDuration(animation.duration);
    return singleCycleDuration > 0 ? (localTime - start) * 1e3 / singleCycleDuration : 0;
  }
  return animDur > 0 ? (localTime - start) / animDur : 0;
}
function applyAnimation(props, animation, localTime, canvasWidth, canvasHeight) {
  const totalDur = Math.max(0, props.duration ?? 0);
  const group = animation.group;
  const isEmphasisLoopAnimation = group === "emphasis";
  const animDur = isEmphasisLoopAnimation ? totalDur : Math.max(0, animation.duration ?? 0);
  const start = group === "out" ? Math.max(0, totalDur - animDur) : 0;
  if (localTime < start || animDur <= 0) {
    return props;
  }
  let progressRaw = calculateAnimationProgress(
    localTime,
    start,
    animation,
    animDur,
    isEmphasisLoopAnimation
  );
  if (group === "emphasis" && LOOP_ANIMATION_TYPES.has(animation.type)) {
    progressRaw = progressRaw % 1;
  }
  const clamped = Math.max(0, Math.min(1, progressRaw));
  const TEXT_CHAR_ANIM = _TEXT_CHAR_ANIMATION_MAP[animation.type];
  if (TEXT_CHAR_ANIM) {
    if (progressRaw >= 0 && progressRaw <= 1) {
      props[TEXT_CHAR_ANIM.progressKey] = clamped;
      props[TEXT_CHAR_ANIM.textKey] = props.text || "";
    }
    return props;
  }
  const customEasingFn = animation.easing ? resolveEasing(animation.easing) : void 0;
  const ctx2 = {
    canvasWidth,
    canvasHeight,
    baseOpacity: props.opacity ?? 1,
    baseScaleX: props.scaleX ?? 1,
    baseScaleY: props.scaleY ?? 1,
    ease: customEasingFn ? (t, _defaultFn) => customEasingFn(t) : DEFAULT_EASE
  };
  const spec = ANIMATION_REGISTRY[animation.type];
  if (spec) {
    applyAnimationSpec(props, spec, clamped, animation.properties, ctx2);
    return props;
  }
  const handler = ANIMATION_HANDLERS[animation.type];
  if (handler) {
    handler(props, animation, clamped, progressRaw, ctx2);
  }
  return props;
}
function applyKeyframeInterpolation(props, keyframeTracks, localTime, blockedProperties) {
  if (!keyframeTracks || keyframeTracks.length === 0) {
    return props;
  }
  const localTimeMs = localTime * 1e3;
  for (const track of keyframeTracks) {
    if (!track.enabled || track.keyframes.length === 0) {
      continue;
    }
    const interpolated = interpolateKeyframeProperties(track.keyframes, localTimeMs);
    applyInterpolatedProperties(props, interpolated, blockedProperties);
  }
  return props;
}
function applyInterpolatedProperties(props, interpolated, blockedProperties) {
  if (interpolated.scaleX !== void 0 && !blockedProperties?.has("scaleX")) {
    props.scaleX = interpolated.scaleX;
  }
  if (interpolated.scaleY !== void 0 && !blockedProperties?.has("scaleY")) {
    props.scaleY = interpolated.scaleY;
  }
  if (interpolated.x !== void 0 && !blockedProperties?.has("x")) {
    props.centerX = interpolated.x;
    if (props.width !== void 0) {
      const sx = props.scaleX ?? 1;
      props.x = interpolated.x - props.width * sx / 2;
    }
  }
  if (interpolated.y !== void 0 && !blockedProperties?.has("y")) {
    props.centerY = interpolated.y;
    if (props.height !== void 0) {
      const sy = props.scaleY ?? 1;
      props.y = interpolated.y - props.height * sy / 2;
    }
  }
  if (interpolated.rotation !== void 0 && !blockedProperties?.has("rotation")) {
    props.rotation = interpolated.rotation;
  }
  if (interpolated.opacity !== void 0 && !blockedProperties?.has("opacity")) {
    props.opacity = interpolated.opacity;
  }
  const filterKeys = ["brightness", "contrast", "saturation", "hue", "blur"];
  for (const key of filterKeys) {
    if (interpolated[key] !== void 0) {
      props[key] = interpolated[key];
    }
  }
  const maskKeys = ["maskX", "maskY", "maskScaleX", "maskScaleY", "maskRotation"];
  for (const key of maskKeys) {
    if (interpolated[key] !== void 0) {
      props[key] = interpolated[key];
    }
  }
}

// ../../server/src/renderer/animationUtils.ts
function applyAnimation2(props, animation, localTime, canvasWidth, canvasHeight) {
  return applyAnimation(props, animation, localTime, canvasWidth, canvasHeight);
}
function applyKeyframeInterpolation2(props, keyframeTracks, localTime, blockedProperties) {
  return applyKeyframeInterpolation(props, keyframeTracks, localTime, blockedProperties);
}

// ../../shared/transitions/transitionRegistry.ts
var TRANSITION_REGISTRY = {
  // ─── 基础 ───
  crossfade: {
    blendFn: blendCrossfade,
    defaultEasing: "inOutCubic",
    category: "basic",
    i18nKey: "transition_crossfade"
  },
  dissolve: {
    blendFn: blendDissolve,
    defaultEasing: "inOutCubic",
    category: "basic",
    i18nKey: "transition_dissolve"
  },
  blur: {
    blendFn: blendBlur,
    defaultEasing: "inOutCubic",
    category: "basic",
    i18nKey: "transition_blur"
  },
  fadeToBlack: {
    blendFn: blendFadeToColor,
    blendOptions: { color: "#000000" },
    defaultEasing: "inOutCubic",
    category: "basic",
    i18nKey: "transition_fade_to_black"
  },
  fadeToWhite: {
    blendFn: blendFadeToColor,
    blendOptions: { color: "#FFFFFF" },
    defaultEasing: "inOutCubic",
    category: "basic",
    i18nKey: "transition_fade_to_white"
  },
  pixelate: {
    blendFn: blendPixelate,
    defaultEasing: "inOutQuad",
    category: "basic",
    i18nKey: "transition_pixelate"
  },
  // ─── 擦除 ───
  wipeLeft: {
    blendFn: blendWipe,
    blendOptions: { direction: "left" },
    defaultEasing: "outCubic",
    category: "wipe",
    i18nKey: "transition_wipe_left"
  },
  wipeRight: {
    blendFn: blendWipe,
    blendOptions: { direction: "right" },
    defaultEasing: "outCubic",
    category: "wipe",
    i18nKey: "transition_wipe_right"
  },
  wipeUp: {
    blendFn: blendWipe,
    blendOptions: { direction: "up" },
    defaultEasing: "outCubic",
    category: "wipe",
    i18nKey: "transition_wipe_up"
  },
  wipeDown: {
    blendFn: blendWipe,
    blendOptions: { direction: "down" },
    defaultEasing: "outCubic",
    category: "wipe",
    i18nKey: "transition_wipe_down"
  },
  radialWipe: {
    blendFn: blendRadialWipe,
    defaultEasing: "outCubic",
    category: "wipe",
    i18nKey: "transition_radial_wipe"
  },
  // ─── 滑动 ───
  slideLeft: {
    blendFn: blendSlide,
    blendOptions: { direction: "left" },
    defaultEasing: "outCubic",
    category: "slide",
    i18nKey: "transition_slide_left"
  },
  slideRight: {
    blendFn: blendSlide,
    blendOptions: { direction: "right" },
    defaultEasing: "outCubic",
    category: "slide",
    i18nKey: "transition_slide_right"
  },
  slideUp: {
    blendFn: blendSlide,
    blendOptions: { direction: "up" },
    defaultEasing: "outCubic",
    category: "slide",
    i18nKey: "transition_slide_up"
  },
  slideDown: {
    blendFn: blendSlide,
    blendOptions: { direction: "down" },
    defaultEasing: "outCubic",
    category: "slide",
    i18nKey: "transition_slide_down"
  },
  // ─── 创意 ───
  irisOpen: {
    blendFn: blendIris,
    blendOptions: { mode: "open" },
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_iris_open"
  },
  irisClose: {
    blendFn: blendIris,
    blendOptions: { mode: "close" },
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_iris_close"
  },
  curtainOpen: {
    blendFn: blendCurtain,
    blendOptions: { mode: "open" },
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_curtain_open"
  },
  curtainClose: {
    blendFn: blendCurtain,
    blendOptions: { mode: "close" },
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_curtain_close"
  },
  zoomIn: {
    blendFn: blendZoom,
    blendOptions: { mode: "in" },
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_zoom_in"
  },
  zoomOut: {
    blendFn: blendZoom,
    blendOptions: { mode: "out" },
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_zoom_out"
  },
  glitch: {
    blendFn: blendGlitch,
    defaultEasing: "linear",
    category: "creative",
    i18nKey: "transition_glitch"
  },
  // ─── 新增 ───
  spin: {
    blendFn: blendSpin,
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_spin"
  },
  flash: {
    blendFn: blendFlash,
    defaultEasing: "inOutQuad",
    category: "basic",
    i18nKey: "transition_flash"
  },
  crossZoom: {
    blendFn: blendCrossZoom,
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_cross_zoom"
  },
  whipPan: {
    blendFn: blendWhipPan,
    defaultEasing: "inOutQuad",
    category: "slide",
    i18nKey: "transition_whip_pan"
  },
  heartWipe: {
    blendFn: blendHeartWipe,
    defaultEasing: "outCubic",
    category: "creative",
    i18nKey: "transition_heart_wipe"
  },
  split: {
    blendFn: blendSplit,
    defaultEasing: "outCubic",
    category: "creative",
    i18nKey: "transition_split"
  },
  blinds: {
    blendFn: blendBlinds,
    defaultEasing: "inOutQuad",
    category: "wipe",
    i18nKey: "transition_blinds"
  },
  bounce: {
    blendFn: blendBounce,
    defaultEasing: "linear",
    category: "slide",
    i18nKey: "transition_bounce"
  },
  diagonalWipe: {
    blendFn: blendDiagonalWipe,
    defaultEasing: "outCubic",
    category: "wipe",
    i18nKey: "transition_diagonal_wipe"
  },
  diamondWipe: {
    blendFn: blendDiamondWipe,
    defaultEasing: "outCubic",
    category: "wipe",
    i18nKey: "transition_diamond_wipe"
  },
  starWipe: {
    blendFn: blendStarWipe,
    defaultEasing: "outCubic",
    category: "creative",
    i18nKey: "transition_star_wipe"
  },
  swap: {
    blendFn: blendSwap,
    defaultEasing: "inOutCubic",
    category: "creative",
    i18nKey: "transition_swap"
  }
};
var DERIVED_TRANSITION_TYPES = new Set(
  Object.keys(TRANSITION_REGISTRY)
);
var DERIVED_TRANSITION_CATEGORIES = (() => {
  const categories = {};
  for (const [type, desc] of Object.entries(TRANSITION_REGISTRY)) {
    (categories[desc.category] ??= []).push(type);
  }
  return categories;
})();
var DERIVED_TRANSITION_I18N_KEYS = (() => {
  const keys = {};
  for (const [type, desc] of Object.entries(TRANSITION_REGISTRY)) {
    keys[type] = desc.i18nKey;
  }
  return keys;
})();
var DERIVED_TRANSITION_DEFAULT_EASING = (() => {
  const easings = {};
  for (const [type, desc] of Object.entries(TRANSITION_REGISTRY)) {
    easings[type] = desc.defaultEasing;
  }
  return easings;
})();

// ../../shared/transitions/transitionEffects.ts
function blendCrossfade(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  ctx2.save();
  ctx2.globalAlpha = 1 - p;
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  ctx2.restore();
  ctx2.save();
  ctx2.globalAlpha = p;
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendWipe(ctx2, sourceCanvas, targetCanvas, width, height, progress, options) {
  const p = Math.max(0, Math.min(1, progress));
  const direction = options?.direction || "left";
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  ctx2.save();
  ctx2.transform(1, 0, 0, 1, width / 2, height / 2);
  applyWipeClip(ctx2, width, height, p, direction);
  ctx2.transform(1, 0, 0, 1, -width / 2, -height / 2);
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
var SLIDE_OFFSETS = {
  left: (w) => [-w, 0],
  right: (w) => [w, 0],
  up: (_w, h) => [0, -h],
  down: (_w, h) => [0, h]
};
function blendSlide(ctx2, sourceCanvas, targetCanvas, width, height, progress, options) {
  const p = Math.max(0, Math.min(1, progress));
  const direction = options?.direction || "left";
  const getOffset = SLIDE_OFFSETS[direction] || SLIDE_OFFSETS.left;
  const [fullDx, fullDy] = getOffset(width, height);
  ctx2.save();
  ctx2.beginPath();
  ctx2.rect(0, 0, width, height);
  ctx2.clip();
  const srcDx = fullDx * p;
  const srcDy = fullDy * p;
  ctx2.drawImage(sourceCanvas, srcDx, srcDy, width, height);
  const tgtDx = -fullDx * (1 - p);
  const tgtDy = -fullDy * (1 - p);
  ctx2.drawImage(targetCanvas, tgtDx, tgtDy, width, height);
  ctx2.restore();
}
function blendIris(ctx2, sourceCanvas, targetCanvas, width, height, progress, options) {
  const p = Math.max(0, Math.min(1, progress));
  const mode = options?.mode || "open";
  ctx2.drawImage(mode === "open" ? sourceCanvas : targetCanvas, 0, 0, width, height);
  ctx2.save();
  ctx2.transform(1, 0, 0, 1, width / 2, height / 2);
  applyIrisClip(ctx2, width, height, mode === "open" ? p : 1 - p);
  ctx2.transform(1, 0, 0, 1, -width / 2, -height / 2);
  ctx2.drawImage(mode === "open" ? targetCanvas : sourceCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendCurtain(ctx2, sourceCanvas, targetCanvas, width, height, progress, options) {
  const p = Math.max(0, Math.min(1, progress));
  const mode = options?.mode || "open";
  ctx2.drawImage(mode === "open" ? sourceCanvas : targetCanvas, 0, 0, width, height);
  ctx2.save();
  ctx2.transform(1, 0, 0, 1, width / 2, height / 2);
  applyCurtainClip(ctx2, width, height, mode === "open" ? p : 1 - p);
  ctx2.transform(1, 0, 0, 1, -width / 2, -height / 2);
  ctx2.drawImage(mode === "open" ? targetCanvas : sourceCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendDissolve(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const pixelSize = calculateDissolvePixelSize(p);
  ctx2.save();
  ctx2.globalAlpha = 1 - p;
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  ctx2.restore();
  ctx2.save();
  ctx2.globalAlpha = p;
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendPixelate(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  blendCrossfade(ctx2, sourceCanvas, targetCanvas, width, height, progress);
}
function blendBlur(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  blendCrossfade(ctx2, sourceCanvas, targetCanvas, width, height, progress);
}
function blendFadeToColor(ctx2, sourceCanvas, targetCanvas, width, height, progress, options) {
  const p = Math.max(0, Math.min(1, progress));
  const color = options?.color || "#000000";
  if (ctx2.fillRect && ctx2.fillStyle !== void 0) {
    ctx2.fillStyle = color;
    ctx2.fillRect(0, 0, width, height);
  }
  if (p < 0.5) {
    const subP = p * 2;
    ctx2.save();
    ctx2.globalAlpha = 1 - subP;
    ctx2.drawImage(sourceCanvas, 0, 0, width, height);
    ctx2.restore();
  } else {
    const subP = (p - 0.5) * 2;
    ctx2.save();
    ctx2.globalAlpha = subP;
    ctx2.drawImage(targetCanvas, 0, 0, width, height);
    ctx2.restore();
  }
}
function blendRadialWipe(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  ctx2.save();
  ctx2.transform(1, 0, 0, 1, width / 2, height / 2);
  const maxRadius = Math.sqrt(width * width + height * height) / 2;
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + Math.PI * 2 * p;
  ctx2.beginPath();
  ctx2.moveTo(0, 0);
  ctx2.arc(0, 0, maxRadius, startAngle, endAngle);
  ctx2.closePath();
  ctx2.clip();
  ctx2.transform(1, 0, 0, 1, -width / 2, -height / 2);
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendGlitch(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const intensity = 1 - Math.abs(p * 2 - 1);
  const rgbOffset = Math.round(intensity * 12);
  const mainCanvas = p < 0.5 ? sourceCanvas : targetCanvas;
  const altCanvas = p < 0.5 ? targetCanvas : sourceCanvas;
  ctx2.drawImage(mainCanvas, 0, 0, width, height);
  const sliceCount = Math.max(3, Math.round(intensity * 10));
  const sliceHeight = Math.max(1, Math.floor(height / sliceCount));
  for (let i = 0; i < sliceCount; i++) {
    const y = i * sliceHeight;
    const h = Math.min(sliceHeight, height - y);
    const displacement = Math.round(
      Math.sin(i * 7.3 + p * 23.7) * intensity * width * 0.06
    );
    if (Math.abs(displacement) < 1) continue;
    ctx2.save();
    ctx2.beginPath();
    ctx2.rect(0, y, width, h);
    ctx2.clip();
    ctx2.globalAlpha = intensity * 0.6;
    ctx2.drawImage(altCanvas, displacement, 0, width, height);
    ctx2.restore();
  }
  if (rgbOffset > 1) {
    ctx2.save();
    ctx2.globalAlpha = intensity * 0.25;
    ctx2.drawImage(altCanvas, -rgbOffset, 0, width, height);
    ctx2.restore();
    ctx2.save();
    ctx2.globalAlpha = intensity * 0.25;
    ctx2.drawImage(altCanvas, rgbOffset, 0, width, height);
    ctx2.restore();
  }
}
function blendZoom(ctx2, sourceCanvas, targetCanvas, width, height, progress, options) {
  const p = Math.max(0, Math.min(1, progress));
  const mode = options?.mode || "in";
  if (mode === "in") {
    const sourceScale = 1 + p * 0.3;
    ctx2.save();
    ctx2.globalAlpha = 1 - p;
    const sx = width * (1 - sourceScale) / 2;
    const sy = height * (1 - sourceScale) / 2;
    ctx2.drawImage(sourceCanvas, sx, sy, width * sourceScale, height * sourceScale);
    ctx2.restore();
    const targetScale = 0.7 + p * 0.3;
    ctx2.save();
    ctx2.globalAlpha = p;
    const tx = width * (1 - targetScale) / 2;
    const ty = height * (1 - targetScale) / 2;
    ctx2.drawImage(targetCanvas, tx, ty, width * targetScale, height * targetScale);
    ctx2.restore();
  } else {
    const sourceScale = 1 - p * 0.3;
    ctx2.save();
    ctx2.globalAlpha = 1 - p;
    const sx = width * (1 - sourceScale) / 2;
    const sy = height * (1 - sourceScale) / 2;
    ctx2.drawImage(sourceCanvas, sx, sy, width * sourceScale, height * sourceScale);
    ctx2.restore();
    const targetScale = 1.3 - p * 0.3;
    ctx2.save();
    ctx2.globalAlpha = p;
    const tx = width * (1 - targetScale) / 2;
    const ty = height * (1 - targetScale) / 2;
    ctx2.drawImage(targetCanvas, tx, ty, width * targetScale, height * targetScale);
    ctx2.restore();
  }
}
function blendSpin(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const cx = width / 2;
  const cy = height / 2;
  const srcAngle = p * Math.PI;
  const srcScale = 1 - p * 0.5;
  const srcCos = Math.cos(srcAngle) * srcScale;
  const srcSin = Math.sin(srcAngle) * srcScale;
  ctx2.save();
  ctx2.globalAlpha = 1 - p;
  ctx2.transform(1, 0, 0, 1, cx, cy);
  ctx2.transform(srcCos, srcSin, -srcSin, srcCos, 0, 0);
  ctx2.transform(1, 0, 0, 1, -cx, -cy);
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  ctx2.restore();
  const tgtAngle = -Math.PI * (1 - p);
  const tgtScale = 0.5 + p * 0.5;
  const tgtCos = Math.cos(tgtAngle) * tgtScale;
  const tgtSin = Math.sin(tgtAngle) * tgtScale;
  ctx2.save();
  ctx2.globalAlpha = p;
  ctx2.transform(1, 0, 0, 1, cx, cy);
  ctx2.transform(tgtCos, tgtSin, -tgtSin, tgtCos, 0, 0);
  ctx2.transform(1, 0, 0, 1, -cx, -cy);
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendFlash(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const intensity = 1 - Math.abs(p * 2 - 1);
  ctx2.save();
  ctx2.globalAlpha = 1 - p;
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  ctx2.restore();
  ctx2.save();
  ctx2.globalAlpha = p;
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
  if (ctx2.globalCompositeOperation !== void 0 && ctx2.fillRect && ctx2.fillStyle !== void 0) {
    ctx2.save();
    ctx2.globalCompositeOperation = "lighter";
    ctx2.globalAlpha = intensity * 0.85;
    ctx2.fillStyle = "#FFFFFF";
    ctx2.fillRect(0, 0, width, height);
    ctx2.restore();
  }
}
function blendCrossZoom(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  blendCrossfade(ctx2, sourceCanvas, targetCanvas, width, height, progress);
}
function blendWhipPan(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  ctx2.save();
  ctx2.beginPath();
  ctx2.rect(0, 0, width, height);
  ctx2.clip();
  ctx2.drawImage(sourceCanvas, -width * p, 0, width, height);
  ctx2.drawImage(targetCanvas, width * (1 - p), 0, width, height);
  ctx2.restore();
}
function drawHeartPath(ctx2, s) {
  if (ctx2.bezierCurveTo) {
    ctx2.moveTo(0, s * 0.6);
    ctx2.bezierCurveTo(-s * 0.1, s * 0.3, -s * 0.85, s * 0.1, -s * 0.85, -s * 0.2);
    ctx2.bezierCurveTo(-s * 0.85, -s * 0.6, -s * 0.35, -s * 0.8, 0, -s * 0.45);
    ctx2.bezierCurveTo(s * 0.35, -s * 0.8, s * 0.85, -s * 0.6, s * 0.85, -s * 0.2);
    ctx2.bezierCurveTo(s * 0.85, s * 0.1, s * 0.1, s * 0.3, 0, s * 0.6);
  } else {
    const N = 40;
    for (let i = 0; i <= N; i++) {
      const t = i / N * Math.PI * 2;
      const px = s * 0.053 * 16 * Math.pow(Math.sin(t), 3);
      const py = -s * 0.053 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      if (i === 0) ctx2.moveTo(px, py);
      else ctx2.lineTo(px, py);
    }
  }
}
function blendHeartWipe(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  if (p <= 0) return;
  const diagonal = Math.sqrt(width * width + height * height);
  const maxS = diagonal / 0.9;
  const s = maxS * p;
  if (s < 0.5) return;
  ctx2.save();
  ctx2.transform(1, 0, 0, 1, width / 2, height / 2);
  ctx2.beginPath();
  drawHeartPath(ctx2, s);
  ctx2.closePath();
  ctx2.clip();
  ctx2.transform(1, 0, 0, 1, -width / 2, -height / 2);
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendSplit(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const halfH = height / 2;
  const offset = halfH * p;
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.save();
  ctx2.beginPath();
  ctx2.rect(0, 0, width, halfH);
  ctx2.clip();
  ctx2.drawImage(sourceCanvas, 0, -offset, width, height);
  ctx2.restore();
  ctx2.save();
  ctx2.beginPath();
  ctx2.rect(0, halfH, width, halfH);
  ctx2.clip();
  ctx2.drawImage(sourceCanvas, 0, offset, width, height);
  ctx2.restore();
}
function blendBlinds(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const sliceCount = 8;
  const sliceH = height / sliceCount;
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  for (let i = 0; i < sliceCount; i++) {
    const y = i * sliceH;
    const revealH = sliceH * p;
    if (revealH < 0.5) continue;
    ctx2.save();
    ctx2.beginPath();
    ctx2.rect(0, y, width, revealH);
    ctx2.clip();
    ctx2.drawImage(targetCanvas, 0, 0, width, height);
    ctx2.restore();
  }
}
function blendBounce(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  let t = p;
  if (t < 1 / 2.75) {
    t = 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
  const offsetX = width * (1 - t);
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  ctx2.save();
  ctx2.beginPath();
  ctx2.rect(0, 0, width, height);
  ctx2.clip();
  ctx2.drawImage(targetCanvas, offsetX, 0, width, height);
  ctx2.restore();
}
function blendDiagonalWipe(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  if (p <= 0) return;
  const diagonal = width + height;
  const linePos = -height + diagonal * p;
  ctx2.save();
  ctx2.beginPath();
  ctx2.moveTo(linePos, 0);
  ctx2.lineTo(linePos + height, height);
  ctx2.lineTo(width, height);
  ctx2.lineTo(width, 0);
  ctx2.closePath();
  ctx2.clip();
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendDiamondWipe(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  if (p <= 0) return;
  const cx = width / 2;
  const cy = height / 2;
  const maxR = Math.sqrt(cx * cx + cy * cy);
  const r = maxR * p;
  ctx2.save();
  ctx2.transform(1, 0, 0, 1, cx, cy);
  ctx2.beginPath();
  ctx2.moveTo(0, -r);
  ctx2.lineTo(r, 0);
  ctx2.lineTo(0, r);
  ctx2.lineTo(-r, 0);
  ctx2.closePath();
  ctx2.clip();
  ctx2.transform(1, 0, 0, 1, -cx, -cy);
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function drawStarPath(ctx2, outerR) {
  const innerR = outerR * 0.382;
  const points = 5;
  for (let i = 0; i < points * 2; i++) {
    const angle2 = i * Math.PI / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = Math.cos(angle2) * r;
    const y = Math.sin(angle2) * r;
    if (i === 0) ctx2.moveTo(x, y);
    else ctx2.lineTo(x, y);
  }
}
function blendStarWipe(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  ctx2.drawImage(sourceCanvas, 0, 0, width, height);
  if (p <= 0) return;
  const diagonal = Math.sqrt(width * width + height * height);
  const maxR = diagonal / 2 / 0.382;
  const r = maxR * p;
  ctx2.save();
  ctx2.transform(1, 0, 0, 1, width / 2, height / 2);
  ctx2.beginPath();
  drawStarPath(ctx2, r);
  ctx2.closePath();
  ctx2.clip();
  ctx2.transform(1, 0, 0, 1, -width / 2, -height / 2);
  ctx2.drawImage(targetCanvas, 0, 0, width, height);
  ctx2.restore();
}
function blendSwap(ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const p = Math.max(0, Math.min(1, progress));
  const tgtScale = 0.3 + p * 0.7;
  const tgtX = width * (1 - tgtScale) * (1 - p);
  const tgtY = height * (1 - tgtScale) * (1 - p);
  ctx2.save();
  ctx2.globalAlpha = Math.min(1, p * 2);
  ctx2.drawImage(targetCanvas, tgtX, tgtY, width * tgtScale, height * tgtScale);
  ctx2.restore();
  const srcScale = 1 - p * 0.7;
  ctx2.save();
  ctx2.globalAlpha = Math.max(0, 1 - p * 2);
  ctx2.drawImage(sourceCanvas, 0, 0, width * srcScale, height * srcScale);
  ctx2.restore();
}
function applyTransitionBlend(type, ctx2, sourceCanvas, targetCanvas, width, height, progress) {
  const desc = TRANSITION_REGISTRY[type];
  if (desc) {
    desc.blendFn(ctx2, sourceCanvas, targetCanvas, width, height, progress, desc.blendOptions);
  } else {
    blendCrossfade(ctx2, sourceCanvas, targetCanvas, width, height, progress);
  }
}

// ../../shared/transitions/transitionEasings.ts
function applyTransitionEasing(progress, type, easing) {
  const p = Math.max(0, Math.min(1, progress));
  if (easing) {
    return resolveEasing(easing)(p);
  }
  const defaultEasing = DERIVED_TRANSITION_DEFAULT_EASING[type];
  if (defaultEasing) {
    return EASING[defaultEasing](p);
  }
  return p;
}

// ../../shared/animations/effectApplicator.ts
function applyClipEffects(ctx2, props, width, height) {
  const wipeDir = props[ANIM_PROPS.WIPE_DIR];
  const wipeProgress = props[ANIM_PROPS.WIPE_PROGRESS];
  if (wipeDir && wipeProgress !== void 0) {
    applyWipeClip(ctx2, width, height, wipeProgress, wipeDir);
  }
  const irisProgress = props[ANIM_PROPS.IRIS_PROGRESS];
  if (irisProgress !== void 0 && props[ANIM_PROPS.IRIS_TYPE]) {
    applyIrisClip(ctx2, width, height, irisProgress);
  }
  const curtainProgress = props[ANIM_PROPS.CURTAIN_PROGRESS];
  if (curtainProgress !== void 0 && props[ANIM_PROPS.CURTAIN_TYPE]) {
    applyCurtainClip(ctx2, width, height, curtainProgress);
  }
}
function applyBlurFilter(ctx2, blurAmount, scale = 1) {
  if (blurAmount > 0) {
    try {
      ctx2.filter = `blur(${blurAmount * scale}px)`;
    } catch {
    }
  }
}
function detectActivePostEffects(props) {
  const dissolveProgress = props[ANIM_PROPS.DISSOLVE_PROGRESS] ?? 0;
  const pixelSize = props[ANIM_PROPS.PIXEL_SIZE] ?? 0;
  const rotateX = props[ANIM_PROPS.ROTATE_X] ?? 0;
  const rotateY = props[ANIM_PROPS.ROTATE_Y] ?? 0;
  const rgbSplit = props[ANIM_PROPS.RGB_SPLIT] ?? 0;
  const dissolve = dissolveProgress > 0;
  const pixelate = pixelSize > 0 && !dissolve;
  const flip3D = rotateX !== 0 || rotateY !== 0;
  const glitch = rgbSplit > 1;
  return {
    pixelate,
    pixelSize,
    dissolve,
    dissolveProgress,
    flip3D,
    rotateX,
    rotateY,
    glitch,
    rgbSplit,
    hasAny: pixelate || dissolve || flip3D || glitch
  };
}

// ../../shared/caption-animation/textSpacingUtils.ts
function charSpacingToPx(charSpacing, fontSize) {
  return charSpacing / 1e3 * fontSize;
}
function measureTextWithSpacing(ctx2, text, spacingPx) {
  const graphemes = toGraphemes(text);
  if (graphemes.length <= 1) return ctx2.measureText(text).width;
  let width = 0;
  for (const g of graphemes) {
    width += ctx2.measureText(g).width;
  }
  width += (graphemes.length - 1) * spacingPx;
  return width;
}
function drawTextWithSpacing(ctx2, text, x, y, textAlign, spacingPx, draw) {
  const graphemes = toGraphemes(text);
  if (graphemes.length === 0) return;
  const charWidths = new Array(graphemes.length);
  let totalWidth = 0;
  for (let i = 0; i < graphemes.length; i++) {
    charWidths[i] = ctx2.measureText(graphemes[i]).width;
    totalWidth += charWidths[i];
  }
  totalWidth += (graphemes.length - 1) * spacingPx;
  let startX;
  if (textAlign === "center") {
    startX = x - totalWidth / 2;
  } else if (textAlign === "right") {
    startX = x - totalWidth;
  } else {
    startX = x;
  }
  const savedAlign = ctx2.textAlign;
  ctx2.textAlign = "left";
  let curX = startX;
  for (let i = 0; i < graphemes.length; i++) {
    draw(graphemes[i], curX, y);
    curX += charWidths[i] + spacingPx;
  }
  ctx2.textAlign = savedAlign;
}
function fillTextWithSpacing(ctx2, text, x, y, textAlign, spacingPx) {
  drawTextWithSpacing(
    ctx2,
    text,
    x,
    y,
    textAlign,
    spacingPx,
    (g, gx, gy) => ctx2.fillText(g, gx, gy)
  );
}
function strokeTextWithSpacing(ctx2, text, x, y, textAlign, spacingPx) {
  drawTextWithSpacing(
    ctx2,
    text,
    x,
    y,
    textAlign,
    spacingPx,
    (g, gx, gy) => ctx2.strokeText(g, gx, gy)
  );
}
function createTextGradient(ctx2, colors, width) {
  const gradient = ctx2.createLinearGradient(-width / 2, 0, width / 2, 0);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  return gradient;
}

// ../../shared/canvas/textDrawUtils.ts
function captureShadow(ctx2) {
  return {
    shadowColor: ctx2.shadowColor,
    shadowBlur: ctx2.shadowBlur,
    shadowOffsetX: ctx2.shadowOffsetX,
    shadowOffsetY: ctx2.shadowOffsetY
  };
}
function restoreShadow(ctx2, state) {
  ctx2.shadowColor = state.shadowColor;
  ctx2.shadowBlur = state.shadowBlur;
  ctx2.shadowOffsetX = state.shadowOffsetX;
  ctx2.shadowOffsetY = state.shadowOffsetY;
}
function disableShadow(ctx2) {
  ctx2.shadowColor = "rgba(0,0,0,0)";
  ctx2.shadowBlur = 0;
  ctx2.shadowOffsetX = 0;
  ctx2.shadowOffsetY = 0;
}
function setupStrokeLineProperties(ctx2, strokeWidth, strokeColor) {
  ctx2.lineWidth = strokeWidth;
  ctx2.lineJoin = "miter";
  ctx2.lineCap = "butt";
  ctx2.miterLimit = 4;
  ctx2.strokeStyle = strokeColor;
}
function drawStrokeTextLines(ctx2, lines, lineXs, lineYs, strokeColor, strokeWidth, textAlign, spacingPx = 0) {
  if (!(strokeWidth > 0 && strokeColor)) return;
  setupStrokeLineProperties(ctx2, strokeWidth, strokeColor);
  if (spacingPx > 0) {
    for (let i = 0; i < lines.length; i++) {
      strokeTextWithSpacing(ctx2, lines[i], lineXs[i], lineYs[i], textAlign || ctx2.textAlign, spacingPx);
    }
  } else {
    for (let i = 0; i < lines.length; i++) {
      ctx2.strokeText(lines[i], lineXs[i], lineYs[i]);
    }
  }
}
function drawTextDecorations(ctx2, {
  underline,
  linethrough,
  textColor,
  textAlign,
  lineXs,
  lineYs,
  lineWs,
  fontSize
}) {
  if (!underline && !linethrough) return;
  const decorationLineWidth = Math.max(1, Math.round(fontSize / 15));
  setupStrokeLineProperties(ctx2, decorationLineWidth, textColor);
  const crispY = (y, lw) => lw % 2 === 1 ? Math.round(y) + 0.5 : Math.round(y);
  for (let i = 0; i < lineWs.length; i++) {
    const lineW = lineWs[i];
    let startX = lineXs[i];
    if (textAlign === "center") startX = lineXs[i] - lineW / 2;
    else if (textAlign === "right") startX = lineXs[i] - lineW;
    if (underline) {
      const underlineY = crispY(
        lineYs[i] + fontSize * 0.1,
        decorationLineWidth
      );
      ctx2.beginPath();
      ctx2.moveTo(startX, underlineY);
      ctx2.lineTo(startX + lineW, underlineY);
      ctx2.stroke();
    }
    if (linethrough) {
      const throughY = crispY(lineYs[i] - fontSize * 0.315, decorationLineWidth);
      ctx2.beginPath();
      ctx2.moveTo(startX, throughY);
      ctx2.lineTo(startX + lineW, throughY);
      ctx2.stroke();
    }
  }
}

// ../../shared/canvas/textWrapUtils.ts
function wrapTextByGrapheme(text, maxWidth, ctx2, spacingPx = 0) {
  if (!text || maxWidth <= 0) {
    return [text || ""];
  }
  const paragraphs = text.split("\n");
  const wrappedLines = [];
  for (const paragraph of paragraphs) {
    if (paragraph === "") {
      wrappedLines.push("");
      continue;
    }
    const paragraphWidth = spacingPx === 0 ? ctx2.measureText(paragraph).width : measureTextWithSpacing(ctx2, paragraph, spacingPx);
    if (paragraphWidth <= maxWidth) {
      wrappedLines.push(paragraph);
      continue;
    }
    const graphemes = toGraphemes(paragraph);
    let currentLine = "";
    for (let i = 0; i < graphemes.length; i++) {
      const char = graphemes[i];
      const testLine = currentLine + char;
      const testWidth = spacingPx === 0 ? ctx2.measureText(testLine).width : measureTextWithSpacing(ctx2, testLine, spacingPx);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) {
          wrappedLines.push(currentLine);
          currentLine = char;
        } else {
          wrappedLines.push(char);
          currentLine = "";
        }
      }
    }
    if (currentLine) {
      wrappedLines.push(currentLine);
    }
  }
  return wrappedLines;
}

// ../../shared/mask/maskPaths.ts
var TWO_PI = Math.PI * 2;
var DEG_TO_RAD = Math.PI / 180;
function pathRect(ctx2) {
  ctx2.rect(-1, -1, 2, 2);
}
function pathCircle(ctx2) {
  ctx2.arc(0, 0, 1, 0, TWO_PI);
}
function pathEllipse(ctx2) {
  if (ctx2.ellipse) {
    ctx2.ellipse(0, 0, 1, 1, 0, 0, TWO_PI);
  } else {
    ctx2.arc(0, 0, 1, 0, TWO_PI);
  }
}
function pathStar(ctx2, points, innerRadius) {
  const n = Math.max(3, Math.round(points));
  const step = Math.PI / n;
  const startAngle = -Math.PI / 2;
  for (let i = 0; i < 2 * n; i++) {
    const angle2 = startAngle + i * step;
    const r = i % 2 === 0 ? 1 : innerRadius;
    const px = Math.cos(angle2) * r;
    const py = Math.sin(angle2) * r;
    if (i === 0) ctx2.moveTo(px, py);
    else ctx2.lineTo(px, py);
  }
  ctx2.closePath();
}
function pathHeart(ctx2) {
  const s = 1.18;
  if (ctx2.bezierCurveTo) {
    ctx2.moveTo(0, s * 0.6);
    ctx2.bezierCurveTo(-s * 0.1, s * 0.3, -s * 0.85, s * 0.1, -s * 0.85, -s * 0.2);
    ctx2.bezierCurveTo(-s * 0.85, -s * 0.6, -s * 0.35, -s * 0.8, 0, -s * 0.45);
    ctx2.bezierCurveTo(s * 0.35, -s * 0.8, s * 0.85, -s * 0.6, s * 0.85, -s * 0.2);
    ctx2.bezierCurveTo(s * 0.85, s * 0.1, s * 0.1, s * 0.3, 0, s * 0.6);
  } else {
    const N = 40;
    for (let i = 0; i <= N; i++) {
      const t = i / N * TWO_PI;
      const px = 0.053 * 16 * Math.pow(Math.sin(t), 3);
      const py = -0.053 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      if (i === 0) ctx2.moveTo(px, py);
      else ctx2.lineTo(px, py);
    }
  }
  ctx2.closePath();
}
function pathPolygon(ctx2, sides) {
  const n = Math.max(3, Math.round(sides));
  const startAngle = -Math.PI / 2;
  for (let i = 0; i < n; i++) {
    const angle2 = startAngle + i / n * TWO_PI;
    const px = Math.cos(angle2);
    const py = Math.sin(angle2);
    if (i === 0) ctx2.moveTo(px, py);
    else ctx2.lineTo(px, py);
  }
  ctx2.closePath();
}
function pathDiamond(ctx2) {
  ctx2.moveTo(0, -1);
  ctx2.lineTo(1, 0);
  ctx2.lineTo(0, 1);
  ctx2.lineTo(-1, 0);
  ctx2.closePath();
}
function pathCustom(ctx2, pathData) {
  const commands = pathData.match(/[MLCQAZ][^MLCQAZ]*/gi);
  if (!commands) {
    ctx2.rect(-1, -1, 2, 2);
    return;
  }
  for (const cmd of commands) {
    const type = cmd[0].toUpperCase();
    const nums = cmd.slice(1).trim().split(/[\s,]+/).map(Number).filter((n) => !isNaN(n));
    switch (type) {
      case "M":
        if (nums.length >= 2) ctx2.moveTo(nums[0], nums[1]);
        break;
      case "L":
        if (nums.length >= 2) ctx2.lineTo(nums[0], nums[1]);
        break;
      case "C":
        if (nums.length >= 6 && ctx2.bezierCurveTo) {
          ctx2.bezierCurveTo(nums[0], nums[1], nums[2], nums[3], nums[4], nums[5]);
        }
        break;
      case "Q":
        if (nums.length >= 4) ctx2.lineTo(nums[2], nums[3]);
        break;
      case "A":
        break;
      case "Z":
        ctx2.closePath();
        break;
    }
  }
  ctx2.closePath();
}
function drawShapePath(ctx2, shape, mask) {
  switch (shape) {
    case "rect":
      pathRect(ctx2);
      break;
    case "circle":
      pathCircle(ctx2);
      break;
    case "ellipse":
      pathEllipse(ctx2);
      break;
    case "star":
      pathStar(ctx2, mask.sides ?? 5, mask.innerRadius ?? 0.4);
      break;
    case "heart":
      pathHeart(ctx2);
      break;
    case "polygon":
      pathPolygon(ctx2, mask.sides ?? 6);
      break;
    case "diamond":
      pathDiamond(ctx2);
      break;
    case "custom":
      if (mask.pathData) pathCustom(ctx2, mask.pathData);
      else ctx2.rect(-1, -1, 2, 2);
      break;
    default:
      ctx2.rect(-1, -1, 2, 2);
      break;
  }
}
function applyMaskClip(ctx2, elementWidth, elementHeight, mask) {
  if (!mask.enabled) return;
  const halfW = elementWidth / 2;
  const halfH = elementHeight / 2;
  ctx2.save();
  ctx2.translate(mask.x, mask.y);
  if (mask.rotation !== 0) {
    ctx2.rotate(mask.rotation * DEG_TO_RAD);
  }
  ctx2.scale(halfW * mask.scaleX, halfH * mask.scaleY);
  ctx2.beginPath();
  if (mask.inverted) {
    ctx2.restore();
    ctx2.beginPath();
    ctx2.rect(-halfW * 2, -halfH * 2, halfW * 4, halfH * 4);
    ctx2.save();
    ctx2.translate(mask.x, mask.y);
    if (mask.rotation !== 0) ctx2.rotate(mask.rotation * DEG_TO_RAD);
    ctx2.scale(halfW * mask.scaleX, halfH * mask.scaleY);
    drawShapePath(ctx2, mask.shapeType, mask);
    ctx2.restore();
    ctx2.clip("evenodd");
  } else {
    drawShapePath(ctx2, mask.shapeType, mask);
    ctx2.restore();
    ctx2.clip();
  }
}

// ../../shared/canvas/canvasDrawUtils.ts
var EFFECT_FILTER_MAP = {
  // Basic
  blackAndWhite: [{ fn: "grayscale", value: 100, neutral: 0 }],
  grayscale: [{ fn: "grayscale", value: 100, neutral: 0 }],
  sepia: [{ fn: "sepia", value: 100, neutral: 0 }],
  invert: [{ fn: "invert", value: 100, neutral: 0 }],
  saturate: [{ fn: "saturate", value: 200, neutral: 100 }],
  // Color styles
  vintage: [
    { fn: "sepia", value: 50, neutral: 0 },
    { fn: "contrast", value: 110, neutral: 100 }
  ],
  cinematic: [
    { fn: "contrast", value: 120, neutral: 100 },
    { fn: "saturate", value: 80, neutral: 100 },
    { fn: "brightness", value: 90, neutral: 100 }
  ],
  cyberpunk: [
    { fn: "saturate", value: 200, neutral: 100 },
    { fn: "contrast", value: 150, neutral: 100 },
    { fn: "hue-rotate", value: 270, neutral: 0, unit: "deg" }
  ],
  vibrant: [
    { fn: "saturate", value: 150, neutral: 100 },
    { fn: "contrast", value: 110, neutral: 100 }
  ],
  warm: [
    { fn: "sepia", value: 30, neutral: 0 },
    { fn: "saturate", value: 120, neutral: 100 }
  ],
  cool: [
    { fn: "hue-rotate", value: 180, neutral: 0, unit: "deg" },
    { fn: "saturate", value: 90, neutral: 100 }
  ],
  pastel: [
    { fn: "saturate", value: 70, neutral: 100 },
    { fn: "brightness", value: 110, neutral: 100 }
  ],
  muted: [
    { fn: "saturate", value: 50, neutral: 100 },
    { fn: "contrast", value: 90, neutral: 100 }
  ],
  autumn: [
    { fn: "sepia", value: 40, neutral: 0 },
    { fn: "saturate", value: 130, neutral: 100 },
    { fn: "hue-rotate", value: 10, neutral: 0, unit: "deg" }
  ],
  winter: [
    { fn: "hue-rotate", value: 180, neutral: 0, unit: "deg" },
    { fn: "saturate", value: 70, neutral: 100 },
    { fn: "brightness", value: 110, neutral: 100 }
  ],
  // Artistic
  sketch: [
    { fn: "grayscale", value: 100, neutral: 0 },
    { fn: "contrast", value: 200, neutral: 100 },
    { fn: "brightness", value: 120, neutral: 100 }
  ],
  cartoon: [
    { fn: "saturate", value: 150, neutral: 100 },
    { fn: "contrast", value: 130, neutral: 100 }
  ],
  oilPainting: [
    { fn: "saturate", value: 120, neutral: 100 },
    { fn: "contrast", value: 110, neutral: 100 },
    { fn: "blur", value: 0.5, neutral: 0, unit: "px" }
  ],
  watercolor: [
    { fn: "saturate", value: 110, neutral: 100 },
    { fn: "contrast", value: 90, neutral: 100 },
    { fn: "brightness", value: 105, neutral: 100 },
    { fn: "blur", value: 0.3, neutral: 0, unit: "px" }
  ],
  posterize: [
    { fn: "contrast", value: 200, neutral: 100 },
    { fn: "brightness", value: 110, neutral: 100 }
  ],
  pixelate: [{ fn: "contrast", value: 150, neutral: 100 }],
  mosaic: [
    { fn: "contrast", value: 120, neutral: 100 },
    { fn: "blur", value: 2, neutral: 0, unit: "px" }
  ],
  halftone: [
    { fn: "contrast", value: 150, neutral: 100 },
    { fn: "grayscale", value: 50, neutral: 0 }
  ],
  // Retro/Film
  vhs: [
    { fn: "sepia", value: 40, neutral: 0 },
    { fn: "saturate", value: 120, neutral: 100 },
    { fn: "contrast", value: 90, neutral: 100 }
  ],
  film8mm: [
    { fn: "sepia", value: 60, neutral: 0 },
    { fn: "contrast", value: 110, neutral: 100 },
    { fn: "brightness", value: 95, neutral: 100 },
    { fn: "blur", value: 0.5, neutral: 0, unit: "px" }
  ],
  film16mm: [
    { fn: "sepia", value: 40, neutral: 0 },
    { fn: "contrast", value: 115, neutral: 100 },
    { fn: "brightness", value: 98, neutral: 100 }
  ],
  polaroid: [
    { fn: "sepia", value: 20, neutral: 0 },
    { fn: "saturate", value: 110, neutral: 100 },
    { fn: "contrast", value: 105, neutral: 100 }
  ],
  lomography: [
    { fn: "saturate", value: 150, neutral: 100 },
    { fn: "contrast", value: 120, neutral: 100 }
  ],
  kodachrome: [
    { fn: "saturate", value: 140, neutral: 100 },
    { fn: "contrast", value: 115, neutral: 100 },
    { fn: "brightness", value: 105, neutral: 100 }
  ],
  technicolor: [
    { fn: "saturate", value: 180, neutral: 100 },
    { fn: "contrast", value: 125, neutral: 100 },
    { fn: "brightness", value: 105, neutral: 100 }
  ],
  // Color processing
  duotone: [
    { fn: "grayscale", value: 100, neutral: 0 },
    { fn: "sepia", value: 100, neutral: 0 }
  ],
  tritone: [
    { fn: "grayscale", value: 100, neutral: 0 },
    { fn: "sepia", value: 80, neutral: 0 },
    { fn: "hue-rotate", value: 30, neutral: 0, unit: "deg" }
  ],
  colorize: [
    { fn: "sepia", value: 100, neutral: 0 },
    { fn: "hue-rotate", value: 180, neutral: 0, unit: "deg" },
    { fn: "saturate", value: 150, neutral: 100 }
  ],
  tint: [
    { fn: "sepia", value: 50, neutral: 0 },
    { fn: "hue-rotate", value: 45, neutral: 0, unit: "deg" }
  ],
  solarize: [
    { fn: "invert", value: 50, neutral: 0 },
    { fn: "brightness", value: 150, neutral: 100 },
    { fn: "contrast", value: 150, neutral: 100 }
  ],
  // Special
  nightVision: [
    { fn: "hue-rotate", value: 90, neutral: 0, unit: "deg" },
    { fn: "saturate", value: 200, neutral: 100 },
    { fn: "brightness", value: 120, neutral: 100 }
  ],
  thermal: [
    { fn: "hue-rotate", value: 180, neutral: 0, unit: "deg" },
    { fn: "saturate", value: 200, neutral: 100 },
    { fn: "contrast", value: 150, neutral: 100 }
  ],
  xray: [
    { fn: "invert", value: 100, neutral: 0 },
    { fn: "grayscale", value: 100, neutral: 0 },
    { fn: "contrast", value: 150, neutral: 100 }
  ],
  negative: [{ fn: "invert", value: 100, neutral: 0 }],
  glitch: [
    { fn: "hue-rotate", value: 90, neutral: 0, unit: "deg" },
    { fn: "saturate", value: 150, neutral: 100 }
  ],
  chromatic: [
    { fn: "hue-rotate", value: 30, neutral: 0, unit: "deg" },
    { fn: "saturate", value: 120, neutral: 100 }
  ],
  vignette: [
    { fn: "brightness", value: 90, neutral: 100 },
    { fn: "contrast", value: 110, neutral: 100 }
  ],
  bloom: [
    { fn: "brightness", value: 120, neutral: 100 },
    { fn: "saturate", value: 120, neutral: 100 },
    { fn: "blur", value: 1, neutral: 0, unit: "px" }
  ]
};
var _effectFilterCache = /* @__PURE__ */ new Map();
function getFilterFromEffectType(effectType, intensity = 1) {
  if (!effectType || effectType === "none") return "none";
  const defs = EFFECT_FILTER_MAP[effectType];
  if (!defs) return "none";
  if (intensity === 1) {
    let cached = _effectFilterCache.get(effectType);
    if (cached === void 0) {
      cached = buildEffectFilter(defs, 1);
      _effectFilterCache.set(effectType, cached);
    }
    return cached;
  }
  return buildEffectFilter(defs, Math.max(0, Math.min(1, intensity)));
}
function buildEffectFilter(defs, t) {
  const parts = [];
  for (const { fn, value, neutral, unit } of defs) {
    const v = neutral + (value - neutral) * t;
    if (fn === "hue-rotate") parts.push(`hue-rotate(${v}deg)`);
    else if (fn === "blur") parts.push(`blur(${v}px)`);
    else parts.push(`${fn}(${v}${unit || "%"})`);
  }
  return parts.join(" ");
}
function toNum(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}
function clampPct(v, min = 0, max = 500) {
  return Math.min(max, Math.max(min, v));
}
function getCompositeFilter(props) {
  const effect = getFilterFromEffectType(props.effectType, props.filterIntensity ?? 1);
  const b = clampPct(100 + toNum(props.brightness));
  const c = clampPct(100 + toNum(props.contrast));
  const s = clampPct(100 + toNum(props.saturation));
  const h = toNum(props.hue);
  const blurAmount = toNum(props._blurAmount ?? props.blur ?? 0);
  const bl = Math.max(0, blurAmount);
  const parts = [];
  if (effect && effect !== "none") parts.push(effect);
  if (b !== 100) parts.push(`brightness(${b}%)`);
  if (c !== 100) parts.push(`contrast(${c}%)`);
  if (s !== 100) parts.push(`saturate(${s}%)`);
  if (h) parts.push(`hue-rotate(${h}deg)`);
  if (bl) parts.push(`blur(${bl}px)`);
  return parts.length ? parts.join(" ") : "none";
}
function buildRoundedRectPath(ctx2, w, h, r) {
  const x = -w / 2;
  const y = -h / 2;
  const rr = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  ctx2.beginPath();
  if (rr > 0) {
    ctx2.moveTo(x + rr, y);
    ctx2.lineTo(x + w - rr, y);
    ctx2.quadraticCurveTo(x + w, y, x + w, y + rr);
    ctx2.lineTo(x + w, y + h - rr);
    ctx2.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
    ctx2.lineTo(x + rr, y + h);
    ctx2.quadraticCurveTo(x, y + h, x, y + h - rr);
    ctx2.lineTo(x, y + rr);
    ctx2.quadraticCurveTo(x, y, x + rr, y);
    ctx2.closePath();
  } else {
    ctx2.rect(x, y, w, h);
  }
}
function drawRoundedRect(ctx2, x, y, width, height, rx, ry, fillColor) {
  ctx2.save();
  ctx2.fillStyle = fillColor;
  rx = Math.min(rx, width / 2);
  ry = Math.min(ry, height / 2);
  ctx2.beginPath();
  ctx2.moveTo(x + rx, y);
  ctx2.lineTo(x + width - rx, y);
  ctx2.quadraticCurveTo(x + width, y, x + width, y + ry);
  ctx2.lineTo(x + width, y + height - ry);
  ctx2.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
  ctx2.lineTo(x + rx, y + height);
  ctx2.quadraticCurveTo(x, y + height, x, y + height - ry);
  ctx2.lineTo(x, y + ry);
  ctx2.quadraticCurveTo(x, y, x + rx, y);
  ctx2.closePath();
  ctx2.fill();
  ctx2.restore();
}
function drawMediaBorder(ctx2, props) {
  const bw = props.borderWidth ?? 0;
  const bc = props.borderColor;
  if (!bw || !bc) return;
  const w = props.width;
  const h = props.height;
  const r = Math.max(0, Math.min(props.borderRadius ?? 0, Math.min(w, h) / 2));
  const style = props.borderStyle || "solid";
  ctx2.save();
  const prevDash = ctx2.getLineDash ? ctx2.getLineDash() : [];
  const prevCap = ctx2.lineCap;
  ctx2.lineWidth = bw;
  ctx2.strokeStyle = bc;
  if (style === "dashed") {
    const dash = Math.max(4, bw * 4);
    const gap = Math.max(4, bw * 2);
    try {
      ctx2.setLineDash([dash, gap]);
    } catch {
    }
    ctx2.lineCap = "butt";
  } else if (style === "dotted") {
    const dot = Math.max(1, Math.round(bw));
    const gap = Math.max(2, bw * 1.5);
    try {
      ctx2.setLineDash([dot, gap]);
    } catch {
    }
    ctx2.lineCap = "round";
  } else {
    try {
      ctx2.setLineDash([]);
    } catch {
    }
    ctx2.lineCap = "butt";
  }
  const x = -w / 2;
  const y = -h / 2;
  const t = ctx2.getTransform ? ctx2.getTransform() : null;
  const axisAligned = t && Math.abs(t.b) < 1e-3 && Math.abs(t.c) < 1e-3 && Math.abs(t.a - 1) < 1e-3 && Math.abs(t.d - 1) < 1e-3;
  const odd = (ctx2.lineWidth & 1) === 1;
  const offset = axisAligned && odd ? 0.5 : 0;
  ctx2.beginPath();
  if (r > 0) {
    ctx2.moveTo(x + r + offset, y + offset);
    ctx2.lineTo(x + w - r - offset, y + offset);
    ctx2.quadraticCurveTo(x + w - offset, y + offset, x + w - offset, y + r + offset);
    ctx2.lineTo(x + w - offset, y + h - r - offset);
    ctx2.quadraticCurveTo(x + w - offset, y + h - offset, x + w - r - offset, y + h - offset);
    ctx2.lineTo(x + r + offset, y + h - offset);
    ctx2.quadraticCurveTo(x + offset, y + h - offset, x + offset, y + h - r - offset);
    ctx2.lineTo(x + offset, y + r + offset);
    ctx2.quadraticCurveTo(x + offset, y + offset, x + r + offset, y + offset);
  } else {
    ctx2.rect(x + offset, y + offset, w - offset * 2, h - offset * 2);
  }
  ctx2.closePath();
  ctx2.stroke();
  try {
    ctx2.setLineDash(prevDash);
  } catch {
  }
  ctx2.lineCap = prevCap;
  ctx2.restore();
}
function computeCoverSourceRect(sourceW, sourceH, targetW, targetH) {
  if (sourceW <= 0 || sourceH <= 0 || targetW <= 0 || targetH <= 0) {
    return {
      sx: 0,
      sy: 0,
      sw: Math.max(1, sourceW),
      sh: Math.max(1, sourceH)
    };
  }
  const scale = Math.max(targetW / sourceW, targetH / sourceH);
  const cropW = Math.max(1, Math.min(sourceW, targetW / scale));
  const cropH = Math.max(1, Math.min(sourceH, targetH / scale));
  const sx = Math.max(0, Math.floor((sourceW - cropW) / 2));
  const sy = Math.max(0, Math.floor((sourceH - cropH) / 2));
  return { sx, sy, sw: Math.floor(cropW), sh: Math.floor(cropH) };
}
function drawMediaCore(ctx2, img, imgW, imgH, params) {
  const { width, height, filter, borderRadius = 0 } = params;
  const hasRadius = borderRadius > 0;
  const hasFilter = !!filter && filter !== "none";
  const hasMask = !!params.maskEnabled && !!params.maskShapeType;
  const maskMode = hasMask ? params.maskMode ?? "clip" : "clip";
  const isEffectMask = hasMask && maskMode === "effect";
  const maskFeather = hasMask && !isEffectMask ? params.maskFeather ?? 0 : 0;
  const useHardClipMask = hasMask && !isEffectMask && maskFeather <= 0;
  if (hasFilter) {
    try {
      ctx2.filter = filter;
    } catch {
    }
  }
  if (useHardClipMask) {
    ctx2.save();
    applyMaskClip(ctx2, width, height, {
      enabled: true,
      shapeType: params.maskShapeType,
      x: params.maskX ?? 0,
      y: params.maskY ?? 0,
      scaleX: params.maskScaleX ?? 1,
      scaleY: params.maskScaleY ?? 1,
      rotation: params.maskRotation ?? 0,
      inverted: params.maskInverted ?? false,
      sides: params.maskSides,
      innerRadius: params.maskInnerRadius,
      pathData: params.maskPathData
    });
  }
  if (hasRadius) {
    ctx2.save();
    buildRoundedRectPath(ctx2, width, height, borderRadius);
    ctx2.clip();
  }
  const hasCrop = (params.cropWidth ?? 0) > 0 && (params.cropHeight ?? 0) > 0;
  let sx, sy, sw, sh;
  if (hasCrop) {
    sx = Math.max(0, params.cropX || 0);
    sy = Math.max(0, params.cropY || 0);
    sw = Math.max(1, params.cropWidth || 1);
    sh = Math.max(1, params.cropHeight || 1);
  } else {
    const coverW = params.coverWidth ?? width;
    const coverH = params.coverHeight ?? height;
    const cover = computeCoverSourceRect(imgW, imgH, coverW, coverH);
    sx = cover.sx;
    sy = cover.sy;
    sw = cover.sw;
    sh = cover.sh;
  }
  ctx2.drawImage(img, sx, sy, sw, sh, -width / 2, -height / 2, width, height);
  if (hasFilter) {
    try {
      ctx2.filter = "none";
    } catch {
    }
  }
  if (isEffectMask) {
    const effectType = params.maskEffectType ?? "blur";
    const intensity = params.maskEffectIntensity ?? 50;
    ctx2.save();
    applyMaskClip(ctx2, width, height, {
      enabled: true,
      shapeType: params.maskShapeType,
      x: params.maskX ?? 0,
      y: params.maskY ?? 0,
      scaleX: params.maskScaleX ?? 1,
      scaleY: params.maskScaleY ?? 1,
      rotation: params.maskRotation ?? 0,
      inverted: params.maskInverted ?? false,
      sides: params.maskSides,
      innerRadius: params.maskInnerRadius,
      pathData: params.maskPathData
    });
    switch (effectType) {
      case "blur": {
        const blurPx = Math.max(1, Math.round(intensity * 0.4));
        try {
          ctx2.filter = `blur(${blurPx}px)`;
        } catch {
        }
        ctx2.drawImage(img, sx, sy, sw, sh, -width / 2, -height / 2, width, height);
        break;
      }
      case "pixelate":
      case "mosaic": {
        const blockSize = Math.max(2, Math.round(intensity * 0.3));
        const smallW = Math.max(1, Math.floor(width / blockSize));
        const smallH = Math.max(1, Math.floor(height / blockSize));
        if (typeof OffscreenCanvas !== "undefined") {
          const off = new OffscreenCanvas(smallW, smallH);
          const offCtx = off.getContext("2d");
          if (offCtx) {
            offCtx.drawImage(img, sx, sy, sw, sh, 0, 0, smallW, smallH);
            const prevSmoothing = ctx2.imageSmoothingEnabled;
            ctx2.imageSmoothingEnabled = false;
            ctx2.drawImage(off, 0, 0, smallW, smallH, -width / 2, -height / 2, width, height);
            ctx2.imageSmoothingEnabled = prevSmoothing;
          }
        } else {
          const prevSmoothing = ctx2.imageSmoothingEnabled;
          ctx2.imageSmoothingEnabled = false;
          ctx2.drawImage(img, sx, sy, sw, sh, -width / 2, -height / 2, width, height);
          ctx2.imageSmoothingEnabled = prevSmoothing;
        }
        break;
      }
      case "darken": {
        const alpha = Math.min(0.9, intensity / 100);
        ctx2.fillStyle = `rgba(0,0,0,${alpha})`;
        ctx2.fillRect(-width / 2, -height / 2, width, height);
        break;
      }
      case "brighten": {
        const alpha = Math.min(0.9, intensity / 100);
        ctx2.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx2.fillRect(-width / 2, -height / 2, width, height);
        break;
      }
    }
    try {
      ctx2.filter = "none";
    } catch {
    }
    ctx2.restore();
  }
  if (hasRadius) {
    ctx2.restore();
  }
  if (hasMask && maskFeather > 0) {
    const prevComposite = ctx2.globalCompositeOperation;
    ctx2.globalCompositeOperation = "destination-in";
    try {
      ctx2.filter = `blur(${maskFeather}px)`;
    } catch {
    }
    ctx2.save();
    ctx2.translate(params.maskX ?? 0, params.maskY ?? 0);
    if ((params.maskRotation ?? 0) !== 0) {
      ctx2.rotate((params.maskRotation ?? 0) * Math.PI / 180);
    }
    ctx2.scale(
      width / 2 * (params.maskScaleX ?? 1),
      height / 2 * (params.maskScaleY ?? 1)
    );
    ctx2.beginPath();
    const shapeType = params.maskShapeType;
    switch (shapeType) {
      case "circle":
        ctx2.arc(0, 0, 1, 0, Math.PI * 2);
        break;
      case "rect":
        ctx2.rect(-1, -1, 2, 2);
        break;
      case "ellipse":
        ctx2.arc(0, 0, 1, 0, Math.PI * 2);
        break;
      default:
        ctx2.arc(0, 0, 1, 0, Math.PI * 2);
        break;
    }
    ctx2.restore();
    ctx2.fillStyle = "#FFFFFF";
    ctx2.fill();
    try {
      ctx2.filter = "none";
    } catch {
    }
    ctx2.globalCompositeOperation = prevComposite;
  }
  if (useHardClipMask) {
    ctx2.restore();
  }
}

// ../../shared/caption-animation/captionPageUtils.ts
var _pageCache = new LRUCache(32);
function pageCacheKey(wordTimings, wordsPerPage, combineWithinMs) {
  const len = wordTimings.length;
  if (len === 0) return "0";
  const first = wordTimings[0].startMs;
  const last = wordTimings[len - 1].endMs;
  return `${len}_${wordsPerPage}_${combineWithinMs}_${first}_${last}`;
}
function groupWordsIntoPages(wordTimings, wordsPerPage = 4, combineWithinMs = 1200) {
  if (wordTimings.length === 0) return [];
  if (wordsPerPage < 1) wordsPerPage = 1;
  if (combineWithinMs < 0) combineWithinMs = 0;
  const key = pageCacheKey(wordTimings, wordsPerPage, combineWithinMs);
  const cached = _pageCache.get(key);
  if (cached) return cached;
  const pages = [];
  let currentWords = [];
  for (let i = 0; i < wordTimings.length; i++) {
    const word = wordTimings[i];
    if (currentWords.length > 0) {
      const prevEnd = currentWords[currentWords.length - 1].endMs;
      const gap = word.startMs - prevEnd;
      if (currentWords.length >= wordsPerPage || gap > combineWithinMs) {
        pages.push(finalizePage(currentWords));
        currentWords = [];
      }
    }
    currentWords.push(word);
  }
  if (currentWords.length > 0) {
    pages.push(finalizePage(currentWords));
  }
  _pageCache.set(key, pages);
  return pages;
}
function finalizePage(words) {
  const text = words.map((w) => w.word).join("");
  return {
    words,
    startMs: words[0].startMs,
    endMs: words[words.length - 1].endMs,
    text
  };
}
function findActivePageAtTime(pages, timeMs) {
  if (pages.length === 0) return null;
  let lo = 0;
  let hi = pages.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    if (pages[mid].startMs <= timeMs) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  if (result < 0) return null;
  const page = pages[result];
  return timeMs <= page.endMs ? page : null;
}
function getHighlightedWordIndex(page, timeMs) {
  for (let i = 0; i < page.words.length; i++) {
    const w = page.words[i];
    if (timeMs >= w.startMs && timeMs < w.endMs) return i;
  }
  if (page.words.length > 0 && timeMs >= page.words[page.words.length - 1].endMs) {
    return page.words.length - 1;
  }
  return -1;
}

// ../../shared/caption-animation/easingFunctions.ts
var linear2 = EASING.linear;
var easeInQuad2 = EASING.inQuad;
var easeOutQuad2 = EASING.outQuad;
var easeInOutQuad2 = EASING.inOutQuad;
var easeInCubic = EASING.inCubic;
var easeOutCubic = EASING.outCubic;
var easeInOutCubic = EASING.inOutCubic;
var easeInBack2 = EASING.inBack;
var easeOutBack2 = EASING.outBack;
var easeOutBounce = EASING.outBounce;
var easeInBounce = EASING.inBounce;
function easeOutElastic2(t, amplitude = 1, period = 0.5) {
  return createElasticOut(amplitude, period)(t);
}
function easeInElastic(t, amplitude = 1, period = 0.5) {
  return createElasticIn(amplitude, period)(t);
}
var charElasticOut = EASING.outElastic;
var charElasticIn = EASING.inElastic;
var entranceEasing = easeOutCubic;
var exitEasing = easeInCubic;
var bounceEntranceEasing = (t) => easeOutElastic2(t, 1, 0.5);
var zoomEntranceEasing = easeOutBack2;
var popEasing = easeOutCubic;

// ../../shared/caption-animation/captionAnimationSpecs.ts
var PRESET_SPECS = {
  "breathe": {
    type: "loop",
    oscillations: [
      { property: "scaleX", amplitude: ANIMATION_SIZES.BREATHE_AMPLITUDE, frequency: ANIMATION_SPEEDS.BREATHE_FREQUENCY }
    ],
    syncScale: true,
    entrance: true
  },
  "float": {
    type: "loop",
    oscillations: [
      { property: "translateY", amplitude: ANIMATION_SIZES.FLOAT_AMPLITUDE, frequency: ANIMATION_SPEEDS.FLOAT_FREQUENCY, additive: true }
    ],
    entrance: true
  },
  "wave": {
    type: "charLoop",
    charProperty: "offsetY",
    amplitude: ANIMATION_SIZES.WAVE_AMPLITUDE,
    frequency: ANIMATION_SPEEDS.WAVE_FREQUENCY,
    charPhase: ANIMATION_SPEEDS.WAVE_CHAR_PHASE,
    setFill: true,
    entrance: true
  },
  "charFadeIn": {
    type: "charStagger",
    overlap: ANIMATION_SPEEDS.CHAR_STAGGER_OVERLAP,
    opacity: { from: 0, to: 1 }
  },
  "charScaleIn": {
    type: "charStagger",
    overlap: ANIMATION_SPEEDS.CHAR_STAGGER_OVERLAP,
    opacity: { from: 0, to: 1 },
    scaleX: { from: 0, to: 1 },
    scaleY: { from: 0, to: 1 },
    scaleEasing: "outBack"
  },
  "char-blur-reveal": {
    type: "charStagger",
    overlap: ANIMATION_SPEEDS.CHAR_BLUR_REVEAL_OVERLAP,
    opacity: { from: 0, to: 1 },
    blur: { from: ANIMATION_SIZES.CHAR_BLUR_MAX, to: 0 }
  },
  "char-rotate-in": {
    type: "charStagger",
    overlap: ANIMATION_SPEEDS.CHAR_STAGGER_OVERLAP,
    opacity: { from: 0, to: 1 },
    scaleX: { from: 0, to: 1 },
    scaleY: { from: 0, to: 1 },
    rotation: { from: 90, to: 0, alternate: true },
    scaleEasing: "outBack"
  },
  "color-flow": {
    type: "charColorCycle",
    speed: ANIMATION_SPEEDS.COLOR_FLOW_SPEED,
    saturation: 90,
    lightness: 60,
    entrance: true
  },
  "word-stagger": {
    type: "wordStagger",
    overlap: ANIMATION_THRESHOLDS.WORD_STAGGER_OVERLAP,
    opacity: { from: 0, to: 1 }
  },
  "word-pop": {
    type: "wordStagger",
    overlap: ANIMATION_SPEEDS.WORD_POP_OVERLAP,
    opacity: { from: 0, to: 1 },
    scaleX: { from: 0.3, to: 1, overshoot: ANIMATION_SIZES.WORD_POP_OVERSHOOT },
    scaleY: { from: 0.3, to: 1, overshoot: ANIMATION_SIZES.WORD_POP_OVERSHOOT },
    offsetY: { from: 12, to: 0 },
    scaleEasing: "springBouncy"
  },
  "glitch": {
    type: "glitch",
    triggerFrequency: ANIMATION_SPEEDS.GLITCH_FREQUENCY,
    triggerThreshold: 0.7,
    displacement: [
      { property: "translateX", amplitude: ANIMATION_SIZES.GLITCH_AMPLITUDE, frequency: 0.05, fn: "sin" },
      { property: "translateY", amplitude: ANIMATION_SIZES.GLITCH_AMPLITUDE, frequency: 0.07, fn: "cos", scale: 0.3 }
    ],
    colorShift: {
      charInterval: 3,
      frequency: 0.01,
      amplitude: 40
    },
    entrance: true
  },
  "elastic-char-in": {
    type: "charStagger",
    overlap: 0.45,
    opacity: { from: 0, to: 1 },
    scaleX: { from: 0, to: 1 },
    scaleY: { from: 0, to: 1 },
    scaleEasing: "springBouncy"
  },
  "shadow-glow-pulse": {
    type: "charShadowLoop",
    speed: 3e-3,
    charPhase: 0.4,
    minBlur: 0,
    maxBlur: 12,
    colorSpeed: 1e-3,
    saturation: 90,
    lightness: 60,
    entrance: true
  },
  "tracking-expand": {
    type: "charStagger",
    overlap: 0.8,
    opacity: { from: 0, to: 1 },
    tracking: { from: -8, to: 0 }
  },
  "drop-bounce": {
    type: "charStagger",
    overlap: 0.35,
    opacity: { from: 0, to: 1 },
    offsetY: { from: -40, to: 0 },
    scaleEasing: "outBounce"
  },
  "word-slide-up": {
    type: "wordStagger",
    overlap: 0.3,
    opacity: { from: 0, to: 1 },
    offsetY: { from: 20, to: 0 }
  },
  "char-slide-up": {
    type: "charStagger",
    overlap: 0.35,
    opacity: { from: 0, to: 1 },
    offsetY: { from: 20, to: 0 }
  },
  // 从下方弹跳入场（比 drop-bounce 的重力落下更有弹力感）
  "char-bounce-in": {
    type: "charStagger",
    overlap: 0.4,
    opacity: { from: 0, to: 1 },
    offsetY: { from: 25, to: 0 },
    scaleX: { from: 0.3, to: 1 },
    scaleY: { from: 0.3, to: 1 },
    scaleEasing: "outBounce"
  },
  // 逐字缩放入场（从大到正常，区别于 charScaleIn 的从小到大）
  "char-zoom-in": {
    type: "charStagger",
    overlap: 0.45,
    opacity: { from: 0, to: 1 },
    scaleX: { from: 0, to: 1 },
    scaleY: { from: 0, to: 1 },
    scaleEasing: "outElastic"
  },
  // 逐字 X 轴压缩翻转入场（仅 scaleX，模拟水平翻转）
  "char-flip-in": {
    type: "charStagger",
    overlap: 0.4,
    opacity: { from: 0, to: 1 },
    scaleX: { from: 0, to: 1 },
    scaleEasing: "outBack"
  },
  // 逐字独立高频微振（循环）
  "char-vibrate": {
    type: "charVibrate",
    amplitude: 2,
    frequency: 12,
    entrance: true
  },
  // 彩虹光波扫过文字（循环）
  "rainbow-shimmer": {
    type: "charShimmer",
    speed: 4,
    waveWidth: 3,
    saturation: 90,
    baseLightness: 60,
    peakLightness: 95,
    colorSpeed: 2e-4,
    entrance: true
  },
  "skew-in": {
    type: "charStagger",
    overlap: 0.4,
    opacity: { from: 0, to: 1 },
    skewX: { from: 30, to: 0 }
  }
};
PRESET_SPECS["char-fade-in"] = PRESET_SPECS["charFadeIn"];
PRESET_SPECS["char-scale-in"] = PRESET_SPECS["charScaleIn"];
for (const spec of Object.values(PRESET_SPECS)) {
  if ((spec.type === "charStagger" || spec.type === "wordStagger") && spec.scaleEasing) {
    spec._scaleEasingFn = resolveEasing(spec.scaleEasing);
  }
}

// ../../shared/random/noise.ts
var PERM = new Uint8Array([
  151,
  160,
  137,
  91,
  90,
  15,
  131,
  13,
  201,
  95,
  96,
  53,
  194,
  233,
  7,
  225,
  140,
  36,
  103,
  30,
  69,
  142,
  8,
  99,
  37,
  240,
  21,
  10,
  23,
  190,
  6,
  148,
  247,
  120,
  234,
  75,
  0,
  26,
  197,
  62,
  94,
  252,
  219,
  203,
  117,
  35,
  11,
  32,
  57,
  177,
  33,
  88,
  237,
  149,
  56,
  87,
  174,
  20,
  125,
  136,
  171,
  168,
  68,
  175,
  74,
  165,
  71,
  134,
  139,
  48,
  27,
  166,
  77,
  146,
  158,
  231,
  83,
  111,
  229,
  122,
  60,
  211,
  133,
  230,
  220,
  105,
  92,
  41,
  55,
  46,
  245,
  40,
  244,
  102,
  143,
  54,
  65,
  25,
  63,
  161,
  1,
  216,
  80,
  73,
  209,
  76,
  132,
  187,
  208,
  89,
  18,
  169,
  200,
  196,
  135,
  130,
  116,
  188,
  159,
  86,
  164,
  100,
  109,
  198,
  173,
  186,
  3,
  64,
  52,
  217,
  226,
  250,
  124,
  123,
  5,
  202,
  38,
  147,
  118,
  126,
  255,
  82,
  85,
  212,
  207,
  206,
  59,
  227,
  47,
  16,
  58,
  17,
  182,
  189,
  28,
  42,
  223,
  183,
  170,
  213,
  119,
  248,
  152,
  2,
  44,
  154,
  163,
  70,
  221,
  153,
  101,
  155,
  167,
  43,
  172,
  9,
  129,
  22,
  39,
  253,
  19,
  98,
  108,
  110,
  79,
  113,
  224,
  232,
  178,
  185,
  112,
  104,
  218,
  246,
  97,
  228,
  251,
  34,
  242,
  193,
  238,
  210,
  144,
  12,
  191,
  179,
  162,
  241,
  81,
  51,
  145,
  235,
  249,
  14,
  239,
  107,
  49,
  192,
  214,
  31,
  181,
  199,
  106,
  157,
  184,
  84,
  204,
  176,
  115,
  121,
  50,
  45,
  127,
  4,
  150,
  254,
  138,
  236,
  205,
  93,
  222,
  114,
  67,
  29,
  24,
  72,
  243,
  141,
  128,
  195,
  78,
  66,
  215,
  61,
  156,
  180
]);
var P = new Uint8Array(512);
for (let i = 0; i < 512; i++) P[i] = PERM[i & 255];
var GRAD2 = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];
var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
function noise2D(x, y) {
  const s = (x + y) * F2;
  const i = Math.floor(x + s);
  const j = Math.floor(y + s);
  const t = (i + j) * G2;
  const x0 = x - (i - t);
  const y0 = y - (j - t);
  const i1 = x0 > y0 ? 1 : 0;
  const j1 = x0 > y0 ? 0 : 1;
  const x1 = x0 - i1 + G2;
  const y1 = y0 - j1 + G2;
  const x2 = x0 - 1 + 2 * G2;
  const y2 = y0 - 1 + 2 * G2;
  const ii = i & 255;
  const jj = j & 255;
  let n0 = 0, n1 = 0, n2 = 0;
  let t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 > 0) {
    t0 *= t0;
    const gi = P[ii + P[jj]] % 12;
    n0 = t0 * t0 * (GRAD2[gi][0] * x0 + GRAD2[gi][1] * y0);
  }
  let t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 > 0) {
    t1 *= t1;
    const gi = P[ii + i1 + P[jj + j1]] % 12;
    n1 = t1 * t1 * (GRAD2[gi][0] * x1 + GRAD2[gi][1] * y1);
  }
  let t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 > 0) {
    t2 *= t2;
    const gi = P[ii + 1 + P[jj + 1]] % 12;
    n2 = t2 * t2 * (GRAD2[gi][0] * x2 + GRAD2[gi][1] * y2);
  }
  return 70 * (n0 + n1 + n2);
}
var F3 = 1 / 3;
var G3 = 1 / 6;
function fbm2D(x, y, options) {
  const octaves = options?.octaves ?? 4;
  const lacunarity = options?.lacunarity ?? 2;
  const gain = options?.gain ?? 0.5;
  let sum = 0;
  let amplitude = 1;
  let frequency = 1;
  let maxAmplitude = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amplitude * noise2D(x * frequency, y * frequency);
    maxAmplitude += amplitude;
    amplitude *= gain;
    frequency *= lacunarity;
  }
  return sum / maxAmplitude;
}

// ../../shared/random/random.ts
function hashString(str) {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
function createRandom(seed) {
  let state = typeof seed === "string" ? hashString(seed) : seed >>> 0;
  return () => {
    state |= 0;
    state = state + 1831565813 | 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// ../../shared/utils/colorParse.ts
var HEX3 = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i;
var HEX6 = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})(?:[0-9a-f]{2})?$/i;
var RGB_FN = /^rgb\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)\s*\)$/i;
var HSL_FN = /^hsl\(\s*([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%\s*\)$/i;
function hslToRgb(hDeg, s, l) {
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const h = (hDeg % 360 + 360) % 360 / 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue2rgb2 = (t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return [
    Math.round(hue2rgb2(h + 1 / 3) * 255),
    Math.round(hue2rgb2(h) * 255),
    Math.round(hue2rgb2(h - 1 / 3) * 255)
  ];
}
function parseColorRaw(str) {
  let m;
  m = str.match(HEX3);
  if (m)
    return [
      parseInt(m[1] + m[1], 16),
      parseInt(m[2] + m[2], 16),
      parseInt(m[3] + m[3], 16)
    ];
  m = str.match(HEX6);
  if (m) return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  m = str.match(RGB_FN);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  m = str.match(HSL_FN);
  if (m) {
    return hslToRgb(Number(m[1]), Number(m[2]) / 100, Number(m[3]) / 100);
  }
  throw new Error(`parseColor: unsupported color format "${str}"`);
}
var _cache = new LRUCache(512);
function parseColorCached(str) {
  let rgb = _cache.get(str);
  if (rgb) return rgb;
  rgb = parseColorRaw(str);
  _cache.set(str, rgb);
  return rgb;
}

// ../../shared/caption-animation/captionAnimationUtils.ts
var _hexRgbCache = new LRUCache(
  256
);
function parseHexToRgb(hex) {
  let v = _hexRgbCache.get(hex);
  if (v) return v;
  try {
    const rgb = parseColorCached(hex.startsWith("#") ? hex : `#${hex}`);
    v = { r: rgb[0], g: rgb[1], b: rgb[2] };
  } catch {
    v = { r: 255, g: 255, b: 255 };
  }
  _hexRgbCache.set(hex, v);
  return v;
}
var _rgbaCache = new LRUCache(2048);
function cachedRgba(r, g, b, a) {
  const ai = Math.round(a * 100);
  const key = ((r * 256 + g) * 256 + b) * 101 + ai;
  let v = _rgbaCache.get(key);
  if (v !== void 0) return v;
  v = `rgba(${r},${g},${b},${ai / 100})`;
  _rgbaCache.set(key, v);
  return v;
}
var _stylePool = [];
function resetCharStyle(s) {
  s.fill = void 0;
  s.stroke = void 0;
  s.strokeWidth = void 0;
  s.fontWeight = void 0;
  s.underline = void 0;
  s.offsetX = void 0;
  s.offsetY = void 0;
  s.charScaleX = void 0;
  s.charScaleY = void 0;
  s.charOpacity = void 0;
  s.charRotation = void 0;
  s.charBlur = void 0;
  s.charShadowBlur = void 0;
  s.charShadowColor = void 0;
  s.charTrackingOffset = void 0;
  s.charSkewX = void 0;
  s.sweepGradientProgress = void 0;
}
function acquireCharStyles(count) {
  for (let i = _stylePool.length; i < count; i++) {
    _stylePool.push({});
  }
  for (let i = 0; i < count; i++) {
    resetCharStyle(_stylePool[i]);
  }
  return _stylePool;
}
function computeWordTimingHighlight(currentTimeMs, wordTimings, textLength) {
  if (wordTimings.length === 0) return 0;
  if (currentTimeMs < wordTimings[0].startMs) return 0;
  if (currentTimeMs >= wordTimings[wordTimings.length - 1].endMs)
    return textLength;
  let lo = 0;
  let hi = wordTimings.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    if (wordTimings[mid].startMs <= currentTimeMs) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result < 0 ? 0 : wordTimings[result].charEndIndex;
}
var STAGGER_DISTRIBUTIONS = {
  "ease-in": (t) => t * t,
  "ease-out": (t) => 1 - (1 - t) * (1 - t),
  "ease-in-out": (t) => t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t),
  "center-out": (t) => Math.abs(t - 0.5) * 2
};
var _randomOrderCache = new LRUCache(64);
function getRandomStaggerOrder(count) {
  let cached = _randomOrderCache.get(count);
  if (cached) return cached;
  const rng = createRandom(count * 1e3 + 42);
  const arr = Array.from({ length: count }, (_, i) => ({ i, r: rng() }));
  arr.sort((a, b) => a.r - b.r);
  cached = new Array(count);
  for (let rank = 0; rank < arr.length; rank++) {
    cached[arr[rank].i] = rank;
  }
  _randomOrderCache.set(count, cached);
  return cached;
}
function computeStaggerStart(index, count, overlap, windowSize, distribution, randomOrder) {
  if (count <= 1) return 0;
  if (randomOrder) {
    const rank = randomOrder[index];
    return rank * (1 - overlap) * windowSize;
  }
  const normalizedIndex = index / (count - 1);
  const mapFn = distribution ? STAGGER_DISTRIBUTIONS[distribution] : void 0;
  const mappedIndex = mapFn ? mapFn(normalizedIndex) : normalizedIndex;
  return mappedIndex * (count - 1) * (1 - overlap) * windowSize;
}
function handleTypewriter2(state, ctx2) {
  state.isTypewriter = true;
  const typewriterProgress = Math.min(
    1,
    Math.max(0, ctx2.elapsed / ctx2.effectDuration)
  );
  if (typewriterProgress >= ANIMATION_THRESHOLDS.TYPEWRITER_COMPLETE) {
    state.visibleCharCount = ctx2.textLength;
    state.typewriterFractionalChar = void 0;
  } else {
    const rawCount = ctx2.textLength * typewriterProgress;
    state.visibleCharCount = Math.floor(rawCount);
    state.typewriterFractionalChar = rawCount - state.visibleCharCount;
  }
  if (ctx2.isEntering) {
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
  }
}
function handleTypewriterWord(state, ctx2) {
  state.isTypewriter = true;
  state.isTypewriterWord = true;
  const typewriterProgress = Math.min(
    1,
    Math.max(0, ctx2.elapsed / ctx2.effectDuration)
  );
  const boundaries = getWordBoundaries(ctx2.captionText);
  if (typewriterProgress >= ANIMATION_THRESHOLDS.TYPEWRITER_COMPLETE || boundaries.length === 0) {
    state.visibleCharCount = ctx2.textLength;
  } else {
    const wordIndex = Math.floor(boundaries.length * typewriterProgress);
    state.visibleCharCount = wordIndex > 0 ? boundaries[wordIndex - 1] : 0;
  }
  if (ctx2.isEntering) {
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
  }
}
var KARAOKE_STYLE_APPLIERS = {
  classic(s, isHighlighted, _i, _hc2, _tl, hc, defaultColor) {
    s.fill = isHighlighted ? hc : defaultColor;
  },
  glow(s, isHighlighted, _i, _hc2, _tl, hc, defaultColor) {
    s.fill = isHighlighted ? hc : defaultColor;
    if (isHighlighted) {
      s.stroke = hc;
      s.strokeWidth = ANIMATION_SIZES.KARAOKE_GLOW_STROKE_WIDTH;
    }
  },
  underline(s, isHighlighted, _i, _hc2, _tl, hc, defaultColor) {
    s.fill = isHighlighted ? hc : defaultColor;
    s.underline = isHighlighted;
  },
  gradient(s, isHighlighted, i, highlightedChars, _tl, hc, defaultColor) {
    const distance = Math.abs(i - highlightedChars);
    const gradientRange = ANIMATION_SIZES.KARAOKE_GRADIENT_RANGE;
    if (distance <= gradientRange) {
      if (isHighlighted) {
        s.fill = hc;
      } else {
        const t = 1 - distance / (gradientRange + 1);
        s.fill = lerpHexColor(defaultColor, hc, t * 0.5);
      }
    } else {
      s.fill = defaultColor;
    }
  },
  bold(s, isHighlighted, _i, _hc2, _tl, hc, defaultColor) {
    s.fill = isHighlighted ? hc : defaultColor;
    s.fontWeight = isHighlighted ? "bold" : "normal";
  },
  rainbow(s, isHighlighted, i, _hc2, textLength, _hc, defaultColor) {
    s.fill = isHighlighted ? getRainbowColor(i, textLength) : defaultColor;
  }
};
function handleKaraoke(state, ctx2) {
  const {
    animation,
    textLength,
    effectProgress,
    defaultColor,
    elapsed,
    inDuration,
    isEntering
  } = ctx2;
  state.isKaraoke = true;
  state.karaokeProgress = effectProgress;
  state.karaokeHighlightColor = animation.karaokeHighlightColor || "#FFFF00";
  const preset = animation.preset;
  const mappedStyle = preset in KARAOKE_PRESET_STYLE_MAP ? KARAOKE_PRESET_STYLE_MAP[preset] : null;
  state.karaokeStyle = mappedStyle || animation.karaokeStyle || "classic";
  const highlightedChars = ctx2.wordTimings && ctx2.wordTimings.length > 0 ? computeWordTimingHighlight(
    ctx2.currentTimeMs,
    ctx2.wordTimings,
    textLength
  ) : Math.floor(textLength * effectProgress);
  const charStyles = acquireCharStyles(textLength);
  const hc = state.karaokeHighlightColor;
  let fractionalHighlightIdx = highlightedChars;
  if (ctx2.wordTimings && ctx2.wordTimings.length > 0) {
    for (let wi = 0; wi < ctx2.wordTimings.length; wi++) {
      const w = ctx2.wordTimings[wi];
      if (ctx2.currentTimeMs >= w.startMs && ctx2.currentTimeMs < w.endMs) {
        const wordDuration = w.endMs - w.startMs;
        const wordProgress = Math.max(
          0,
          Math.min(
            1,
            (ctx2.currentTimeMs - w.startMs) / Math.max(1, wordDuration)
          )
        );
        const wordCharCount = w.charEndIndex - (wi > 0 ? ctx2.wordTimings[wi - 1].charEndIndex : 0);
        const wordStartIdx = wi > 0 ? ctx2.wordTimings[wi - 1].charEndIndex : 0;
        fractionalHighlightIdx = wordStartIdx + wordProgress * wordCharCount;
        break;
      }
    }
  }
  const applyStyle = KARAOKE_STYLE_APPLIERS[state.karaokeStyle];
  const boundaryCharIdx = Math.floor(fractionalHighlightIdx);
  const sweepProgress = fractionalHighlightIdx - boundaryCharIdx;
  for (let i = 0; i < textLength; i++) {
    applyStyle(
      charStyles[i],
      i < highlightedChars,
      i,
      highlightedChars,
      textLength,
      hc,
      defaultColor
    );
    if (i === boundaryCharIdx && sweepProgress > 0.01 && sweepProgress < 0.99) {
      charStyles[i].sweepGradientProgress = sweepProgress;
      charStyles[i].fill = hc;
    }
  }
  state.charStyles = charStyles;
  if (isEntering) {
    state.opacity = entranceEasing(elapsed / inDuration);
  }
}
function handleNeon(state, ctx2) {
  const { textLength, currentTimeMs, isEntering, elapsed, inDuration } = ctx2;
  state.isNeon = true;
  const colorIndex = Math.floor(
    currentTimeMs * ANIMATION_SPEEDS.NEON_COLOR_CYCLE % NEON_COLORS.length
  );
  state.neonColor = NEON_COLORS[colorIndex];
  const flicker = Math.sin(currentTimeMs * ANIMATION_SPEEDS.NEON_FLICKER);
  state.neonStrokeWidth = ANIMATION_SIZES.NEON_BASE_STROKE_WIDTH + flicker;
  const charStyles = acquireCharStyles(textLength);
  for (let i = 0; i < textLength; i++) {
    const charPhase = i * ANIMATION_SPEEDS.NEON_CHAR_PHASE;
    const charFlicker = Math.sin(
      currentTimeMs * ANIMATION_SPEEDS.NEON_FLICKER + charPhase
    );
    const charStrokeWidth = ANIMATION_SIZES.NEON_BASE_STROKE_WIDTH + charFlicker;
    charStyles[i].stroke = state.neonColor;
    charStyles[i].strokeWidth = Math.max(
      ANIMATION_SIZES.NEON_MIN_STROKE_WIDTH,
      charStrokeWidth
    );
  }
  state.charStyles = charStyles;
  if (isEntering) {
    state.opacity = entranceEasing(elapsed / inDuration);
  }
}
function applyLoopSpec(spec, state, ctx2) {
  for (const osc of spec.oscillations) {
    const base = osc.base ?? (osc.property.startsWith("scale") ? 1 : 0);
    const value = osc.amplitude * Math.sin(ctx2.currentTimeMs * osc.frequency);
    if (osc.additive) {
      state[osc.property] += value;
    } else {
      state[osc.property] = base + value;
    }
  }
  if (spec.syncScale) state.scaleY = state.scaleX;
  if (spec.entrance && ctx2.isEntering)
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
}
function applyCharLoopSpec(spec, state, ctx2) {
  const { textLength, currentTimeMs, defaultColor } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  for (let i = 0; i < textLength; i++) {
    charStyles[i][spec.charProperty] = spec.amplitude * Math.sin(currentTimeMs * spec.frequency + i * spec.charPhase);
    if (spec.setFill) charStyles[i].fill = defaultColor;
  }
  state.charStyles = charStyles;
  if (spec.entrance && ctx2.isEntering)
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
}
function applyCharStaggerSpec(spec, state, ctx2) {
  const {
    textLength,
    effectProgress,
    defaultColor,
    defaultColorRgb: { r, g, b }
  } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  const windowSize = 1 / (textLength * (1 - spec.overlap) + spec.overlap);
  const alphaEasingFn = ctx2.customEasing || entranceEasing;
  const scaleEasingFn = spec._scaleEasingFn || ctx2.customScaleEasing || easeOutBack2;
  const randomOrder = ctx2.staggerDistribution === "random" ? getRandomStaggerOrder(textLength) : void 0;
  for (let i = 0; i < textLength; i++) {
    const charStart = computeStaggerStart(
      i,
      textLength,
      spec.overlap,
      windowSize,
      ctx2.staggerDistribution,
      randomOrder
    );
    const raw = (effectProgress - charStart) / windowSize;
    const charProgress = Math.max(0, Math.min(1, raw));
    const alphaEased = alphaEasingFn(charProgress);
    const scaleEased = scaleEasingFn(charProgress);
    const s = charStyles[i];
    if (spec.opacity) {
      const alpha = spec.opacity.from + (spec.opacity.to - spec.opacity.from) * alphaEased;
      s.charOpacity = alpha;
      s.fill = alphaEased >= 0.99 ? defaultColor : cachedRgba(r, g, b, alpha);
    }
    if (spec.scaleX)
      s.charScaleX = spec.scaleX.from + (spec.scaleX.to - spec.scaleX.from) * scaleEased;
    if (spec.scaleY)
      s.charScaleY = spec.scaleY.from + (spec.scaleY.to - spec.scaleY.from) * scaleEased;
    if (spec.blur)
      s.charBlur = spec.blur.from + (spec.blur.to - spec.blur.from) * alphaEased;
    if (spec.rotation) {
      const direction = spec.rotation.alternate ? i % 2 === 0 ? 1 : -1 : 1;
      s.charRotation = (spec.rotation.from + (spec.rotation.to - spec.rotation.from) * scaleEased) * direction;
    }
    if (spec.shadowBlur)
      s.charShadowBlur = spec.shadowBlur.from + (spec.shadowBlur.to - spec.shadowBlur.from) * alphaEased;
    if (spec.tracking)
      s.charTrackingOffset = spec.tracking.from + (spec.tracking.to - spec.tracking.from) * alphaEased;
    if (spec.skewX)
      s.charSkewX = spec.skewX.from + (spec.skewX.to - spec.skewX.from) * scaleEased;
    if (spec.offsetY)
      s.offsetY = spec.offsetY.from + (spec.offsetY.to - spec.offsetY.from) * scaleEased;
  }
  state.charStyles = charStyles;
}
var _hslCache = new LRUCache(512);
function cachedHsl(hue, saturation, lightness) {
  const h = Math.round(hue) % 360;
  const s = Math.min(100, Math.max(0, saturation));
  const l = Math.min(100, Math.max(0, lightness));
  const key = h * 10201 + s * 101 + l;
  let v = _hslCache.get(key);
  if (v !== void 0) return v;
  v = `hsl(${h}, ${s}%, ${l}%)`;
  _hslCache.set(key, v);
  return v;
}
var HIGHLIGHT_TRANSITION_MS = 60;
var WORD_BOUNCE_DURATION_MS = 250;
var WORD_BOUNCE_AMPLITUDE = 0.25;
var PAGE_CROSSFADE_MS = 80;
function lerpHexColor(colorA, colorB, t) {
  if (t <= 0) return colorA;
  if (t >= 1) return colorB;
  const a = parseHexToRgb(colorA);
  const b = parseHexToRgb(colorB);
  return cachedRgba(
    Math.round(a.r + (b.r - a.r) * t),
    Math.round(a.g + (b.g - a.g) * t),
    Math.round(a.b + (b.b - a.b) * t),
    1
  );
}
function applyCharColorCycleSpec(spec, state, ctx2) {
  const { textLength, currentTimeMs } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  const phase = currentTimeMs * spec.speed;
  for (let i = 0; i < textLength; i++) {
    const hue = (phase + i / Math.max(textLength, 1)) * 360 % 360;
    charStyles[i].fill = cachedHsl(hue, spec.saturation, spec.lightness);
  }
  state.charStyles = charStyles;
  if (spec.entrance && ctx2.isEntering)
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
}
function applyWordStaggerSpec(spec, state, ctx2) {
  const {
    textLength,
    effectProgress,
    defaultColor,
    defaultColorRgb: { r, g, b }
  } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  const boundaries = getWordBoundaries(ctx2.captionText);
  const wordCount = boundaries.length;
  if (wordCount === 0) {
    for (let i = 0; i < textLength; i++) charStyles[i].fill = defaultColor;
    state.charStyles = charStyles;
    return;
  }
  const windowSize = 1 / (wordCount * (1 - spec.overlap) + spec.overlap);
  const alphaEasingFn = ctx2.customEasing || entranceEasing;
  const scaleEasingFn = spec._scaleEasingFn || ctx2.customScaleEasing || easeOutBack2;
  const randomOrder = ctx2.staggerDistribution === "random" ? getRandomStaggerOrder(wordCount) : void 0;
  let wordIdx = 0;
  for (let i = 0; i < textLength; i++) {
    while (wordIdx < boundaries.length - 1 && i >= boundaries[wordIdx])
      wordIdx++;
    const wordStart = computeStaggerStart(
      wordIdx,
      wordCount,
      spec.overlap,
      windowSize,
      ctx2.staggerDistribution,
      randomOrder
    );
    const rawProgress = (effectProgress - wordStart) / windowSize;
    const wordProgress = Math.max(0, Math.min(1, rawProgress));
    const scaleEased = scaleEasingFn(wordProgress);
    const alphaEased = alphaEasingFn(wordProgress);
    const s = charStyles[i];
    if (spec.opacity) {
      s.charOpacity = spec.opacity.from + (spec.opacity.to - spec.opacity.from) * alphaEased;
      s.fill = alphaEased >= 0.99 ? defaultColor : cachedRgba(r, g, b, s.charOpacity);
    }
    if (spec.scaleX) {
      const raw = spec.scaleX.from + (spec.scaleX.to - spec.scaleX.from) * scaleEased;
      const overshoot = spec.scaleX.overshoot ?? 1;
      const scaled = raw * overshoot;
      s.charScaleX = wordProgress >= 0.99 ? 1 : Math.min(scaled, overshoot);
    }
    if (spec.scaleY) {
      const raw = spec.scaleY.from + (spec.scaleY.to - spec.scaleY.from) * scaleEased;
      const overshoot = spec.scaleY.overshoot ?? 1;
      const scaled = raw * overshoot;
      s.charScaleY = wordProgress >= 0.99 ? 1 : Math.min(scaled, overshoot);
    }
    if (spec.offsetY)
      s.offsetY = spec.offsetY.from + (spec.offsetY.to - spec.offsetY.from) * scaleEased;
  }
  state.charStyles = charStyles;
}
function applyGlitchSpec(spec, state, ctx2) {
  const {
    textLength,
    currentTimeMs,
    defaultColor,
    defaultColorRgb: { r, g, b }
  } = ctx2;
  const noiseTrigger = noise2D(currentTimeMs * spec.triggerFrequency, 0.5);
  const absTrigger = Math.abs(noiseTrigger);
  const isActive = absTrigger > spec.triggerThreshold;
  if (isActive) {
    const intensity = (absTrigger - spec.triggerThreshold) / (1 - spec.triggerThreshold);
    for (let di = 0; di < spec.displacement.length; di++) {
      const d = spec.displacement[di];
      const value = d.amplitude * (d.scale ?? 1) * noise2D(currentTimeMs * d.frequency, di * 3.7) * intensity;
      state[d.property] += value;
    }
  }
  const charStyles = acquireCharStyles(textLength);
  const cs = spec.colorShift;
  for (let i = 0; i < textLength; i++) {
    if (isActive && i % cs.charInterval === 0) {
      const shift = Math.floor(
        noise2D(currentTimeMs * cs.frequency, i * 0.3) * cs.amplitude
      );
      charStyles[i].fill = cachedRgba(
        Math.max(0, Math.min(255, r + shift)),
        g,
        Math.max(0, Math.min(255, b - shift)),
        1
      );
    } else {
      charStyles[i].fill = defaultColor;
    }
  }
  state.charStyles = charStyles;
  if (spec.entrance && ctx2.isEntering)
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
}
function applyCharShadowLoopSpec(spec, state, ctx2) {
  const { textLength, currentTimeMs } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  const phase = currentTimeMs * spec.speed;
  for (let i = 0; i < textLength; i++) {
    const charPhase = phase + i * spec.charPhase;
    const t = (Math.sin(charPhase) + 1) * 0.5;
    charStyles[i].charShadowBlur = spec.minBlur + (spec.maxBlur - spec.minBlur) * t;
    const hue = (currentTimeMs * spec.colorSpeed + i / Math.max(textLength, 1)) * 360 % 360;
    charStyles[i].charShadowColor = cachedHsl(
      hue,
      spec.saturation,
      spec.lightness
    );
    charStyles[i].fill = ctx2.defaultColor;
  }
  state.charStyles = charStyles;
  if (spec.entrance && ctx2.isEntering)
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
}
function applyCharVibrateSpec(spec, state, ctx2) {
  const { textLength, currentTimeMs } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  const t = currentTimeMs * 1e-3 * spec.frequency * Math.PI * 2;
  for (let i = 0; i < textLength; i++) {
    charStyles[i].offsetX = Math.sin(t + i * 1.618) * spec.amplitude;
    charStyles[i].offsetY = Math.cos(t * 0.7 + i * 2.718) * spec.amplitude;
  }
  state.charStyles = charStyles;
  if (spec.entrance && ctx2.isEntering)
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
}
function applyCharShimmerSpec(spec, state, ctx2) {
  const { textLength, currentTimeMs } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  const period = (textLength + spec.waveWidth * 2) / Math.max(spec.speed, 0.01) * 1e3;
  const shimmerPos = currentTimeMs % period / period * (textLength + spec.waveWidth * 2) - spec.waveWidth;
  const hueBase = currentTimeMs * spec.colorSpeed * 360 % 360;
  const halfWave = spec.waveWidth / 2;
  for (let i = 0; i < textLength; i++) {
    const hue = (hueBase + i / Math.max(textLength, 1) * 120) % 360;
    const dist2 = Math.abs(i - shimmerPos);
    const wave = halfWave > 0 ? Math.max(0, 1 - dist2 / halfWave) : 0;
    const lightness = spec.baseLightness + (spec.peakLightness - spec.baseLightness) * wave;
    charStyles[i].fill = cachedHsl(hue, spec.saturation, lightness);
  }
  state.charStyles = charStyles;
  if (spec.entrance && ctx2.isEntering)
    state.opacity = entranceEasing(ctx2.elapsed / ctx2.inDuration);
}
function applyPresetSpec(spec, state, ctx2) {
  switch (spec.type) {
    case "loop":
      applyLoopSpec(spec, state, ctx2);
      break;
    case "charLoop":
      applyCharLoopSpec(spec, state, ctx2);
      break;
    case "charStagger":
      applyCharStaggerSpec(spec, state, ctx2);
      break;
    case "wordStagger":
      applyWordStaggerSpec(spec, state, ctx2);
      break;
    case "glitch":
      applyGlitchSpec(spec, state, ctx2);
      break;
    case "charColorCycle":
      applyCharColorCycleSpec(spec, state, ctx2);
      break;
    case "charShadowLoop":
      applyCharShadowLoopSpec(spec, state, ctx2);
      break;
    case "charVibrate":
      applyCharVibrateSpec(spec, state, ctx2);
      break;
    case "charShimmer":
      applyCharShimmerSpec(spec, state, ctx2);
      break;
  }
}
var DEFAULT_STATE = {
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  rotation: 0,
  blurAmount: 0,
  visibleCharCount: -1,
  isTypewriter: false,
  isTypewriterWord: false,
  isKaraoke: false,
  karaokeProgress: 0,
  karaokeStyle: "classic",
  karaokeHighlightColor: "#FFFF00",
  isNeon: false,
  neonColor: NEON_COLORS[0],
  neonStrokeWidth: 2
};
var ENTRANCE_HANDLERS = {
  fadeIn(state, t) {
    state.opacity = entranceEasing(t);
  },
  slideIn(state, t, _elapsed, _inDuration, canvasHeight, animation) {
    const inProgress = entranceEasing(t);
    const direction = animation.inDirection || "bottom";
    const dist2 = canvasHeight * ANIMATION_SIZES.SLIDE_DISTANCE_RATIO;
    if (direction === "bottom") state.translateY = dist2 * (1 - inProgress);
    else if (direction === "top") state.translateY = -dist2 * (1 - inProgress);
    else if (direction === "left") state.translateX = -dist2 * (1 - inProgress);
    else if (direction === "right") state.translateX = dist2 * (1 - inProgress);
    state.opacity = inProgress;
  },
  zoomIn(state, t) {
    const zoomProgress = zoomEntranceEasing(t);
    state.scaleX = 0.3 + 0.7 * zoomProgress;
    state.scaleY = 0.3 + 0.7 * zoomProgress;
    state.opacity = entranceEasing(t);
  },
  bounceIn(state, _t, elapsed, inDuration) {
    const bounceProgress = bounceEntranceEasing(elapsed / inDuration);
    state.scaleX = bounceProgress;
    state.scaleY = bounceProgress;
    state.opacity = Math.min(
      1,
      elapsed / (inDuration * ANIMATION_THRESHOLDS.BOUNCE_OPACITY_RATIO)
    );
  },
  popIn(state, t) {
    const popProgress = popEasing(t);
    state.scaleX = 1.2 - 0.2 * popProgress;
    state.scaleY = 1.2 - 0.2 * popProgress;
    state.opacity = popProgress;
  }
};
var EXIT_HANDLERS = {
  fadeOut(state, p) {
    state.opacity = 1 - p;
  },
  slideOut(state, p, canvasHeight, animation) {
    const direction = animation.outDirection || "bottom";
    const dist2 = canvasHeight * ANIMATION_SIZES.SLIDE_DISTANCE_RATIO;
    if (direction === "bottom") state.translateY = dist2 * p;
    else if (direction === "top") state.translateY = -dist2 * p;
    else if (direction === "left") state.translateX = -dist2 * p;
    else if (direction === "right") state.translateX = dist2 * p;
    state.opacity = 1 - p;
  },
  zoomOut(state, p) {
    state.scaleX = 1 - 0.5 * p;
    state.scaleY = 1 - 0.5 * p;
    state.opacity = 1 - p;
  },
  popOut(state, p) {
    state.scaleX = 1 + 0.2 * p;
    state.scaleY = 1 + 0.2 * p;
    state.opacity = 1 - p;
  },
  bounceOut(state, p) {
    const bounceOut = easeInElastic(p, 1, 0.5);
    state.scaleX = 1 - bounceOut;
    state.scaleY = 1 - bounceOut;
    state.opacity = Math.max(0, 1 - p * 3);
  },
  blurOut(state, p) {
    state.blurAmount = ANIMATION_SIZES.BLUR_MAX * p;
    state.opacity = 1 - p;
    state.scaleX = 1 + 0.05 * p;
    state.scaleY = 1 + 0.05 * p;
  },
  rotateOut(state, p) {
    state.rotation = ANIMATION_SIZES.ROTATE_END_ANGLE * p;
    state.opacity = 1 - p;
  },
  "char-fade-out"(state, p, _canvasH, _anim, textLength) {
    if (textLength === 0) {
      state.opacity = 1 - p;
      return;
    }
    const charStyles = acquireCharStyles(textLength);
    const overlap = 0.5;
    const windowSize = 1 / (textLength * (1 - overlap) + overlap);
    for (let i = 0; i < textLength; i++) {
      const ri = textLength - 1 - i;
      const charStart = ri * (1 - overlap) * windowSize;
      const charProgress = Math.max(
        0,
        Math.min(1, (p - charStart) / windowSize)
      );
      charStyles[i].charOpacity = 1 - charProgress;
    }
    state.charStyles = charStyles;
  },
  "char-slide-down"(state, p, _canvasH, _anim, textLength) {
    if (textLength === 0) {
      state.opacity = 1 - p;
      return;
    }
    const charStyles = acquireCharStyles(textLength);
    const overlap = 0.5;
    const windowSize = 1 / (textLength * (1 - overlap) + overlap);
    for (let i = 0; i < textLength; i++) {
      const ri = textLength - 1 - i;
      const charStart = ri * (1 - overlap) * windowSize;
      const charProgress = Math.max(
        0,
        Math.min(1, (p - charStart) / windowSize)
      );
      charStyles[i].charOpacity = 1 - charProgress;
      charStyles[i].offsetY = charProgress * 20;
    }
    state.charStyles = charStyles;
  },
  "char-scale-out"(state, p, _canvasH, _anim, textLength) {
    if (textLength === 0) {
      state.opacity = 1 - p;
      return;
    }
    const charStyles = acquireCharStyles(textLength);
    const overlap = 0.5;
    const windowSize = 1 / (textLength * (1 - overlap) + overlap);
    for (let i = 0; i < textLength; i++) {
      const ri = textLength - 1 - i;
      const charStart = ri * (1 - overlap) * windowSize;
      const charProgress = Math.max(
        0,
        Math.min(1, (p - charStart) / windowSize)
      );
      const v = 1 - charProgress;
      charStyles[i].charOpacity = v;
      charStyles[i].charScaleX = v;
      charStyles[i].charScaleY = v;
    }
    state.charStyles = charStyles;
  },
  "char-blur-out"(state, p, _canvasH, _anim, textLength) {
    if (textLength === 0) {
      state.opacity = 1 - p;
      return;
    }
    const charStyles = acquireCharStyles(textLength);
    const overlap = 0.5;
    const windowSize = 1 / (textLength * (1 - overlap) + overlap);
    for (let i = 0; i < textLength; i++) {
      const ri = textLength - 1 - i;
      const charStart = ri * (1 - overlap) * windowSize;
      const charProgress = Math.max(
        0,
        Math.min(1, (p - charStart) / windowSize)
      );
      charStyles[i].charOpacity = 1 - charProgress;
      charStyles[i].charBlur = charProgress * ANIMATION_SIZES.CHAR_BLUR_MAX;
    }
    state.charStyles = charStyles;
  },
  "word-fade-out"(state, p, _canvasH, _anim, textLength, captionText) {
    if (textLength === 0) {
      state.opacity = 1 - p;
      return;
    }
    const boundaries = getWordBoundaries(captionText);
    const wordCount = boundaries.length;
    if (wordCount === 0) {
      state.opacity = 1 - p;
      return;
    }
    const charStyles = acquireCharStyles(textLength);
    const overlap = 0.4;
    const windowSize = 1 / (wordCount * (1 - overlap) + overlap);
    let wordIdx = 0;
    for (let i = 0; i < textLength; i++) {
      while (wordIdx < boundaries.length - 1 && i >= boundaries[wordIdx])
        wordIdx++;
      const wi = wordCount - 1 - wordIdx;
      const wordStart = wi * (1 - overlap) * windowSize;
      const wordProgress = Math.max(
        0,
        Math.min(1, (p - wordStart) / windowSize)
      );
      charStyles[i].charOpacity = 1 - wordProgress;
    }
    state.charStyles = charStyles;
  }
};
function handleBlurShimmer(state, ctx2) {
  const {
    textLength,
    effectProgress,
    defaultColor,
    defaultColorRgb: { r, g, b }
  } = ctx2;
  const charStyles = acquireCharStyles(textLength);
  const overlap = ANIMATION_THRESHOLDS.BLUR_SHIMMER_OVERLAP;
  const windowSize = 1 / (textLength * (1 - overlap) + overlap);
  const alphaEasingFn = ctx2.customEasing || entranceEasing;
  const warmR = ANIMATION_SIZES.BLUR_SHIMMER_WARM_R;
  const warmG = ANIMATION_SIZES.BLUR_SHIMMER_WARM_G;
  const warmB = ANIMATION_SIZES.BLUR_SHIMMER_WARM_B;
  const randomOrder = ctx2.staggerDistribution === "random" ? getRandomStaggerOrder(textLength) : void 0;
  for (let i = 0; i < textLength; i++) {
    const charStart = computeStaggerStart(
      i,
      textLength,
      overlap,
      windowSize,
      ctx2.staggerDistribution,
      randomOrder
    );
    const raw = (effectProgress - charStart) / windowSize;
    const charProgress = Math.max(0, Math.min(1, raw));
    const eased = alphaEasingFn(charProgress);
    const s = charStyles[i];
    s.charBlur = (1 - eased) * ANIMATION_SIZES.CHAR_BLUR_MAX;
    s.charOpacity = eased;
    const blendR = Math.round(warmR + (r - warmR) * eased);
    const blendG = Math.round(warmG + (g - warmG) * eased);
    const blendB = Math.round(warmB + (b - warmB) * eased);
    s.fill = eased >= 0.99 ? defaultColor : cachedRgba(blendR, blendG, blendB, eased);
  }
  state.charStyles = charStyles;
}
function handleTikTokPage(state, ctx2) {
  const pageConfig = ctx2.animation.pageConfig ?? {};
  let wordTimings = ctx2.wordTimings;
  if (!wordTimings?.length) {
    const words = ctx2.captionText.split(/\s+/).filter((w) => w.length > 0);
    if (words.length === 0) {
      handleKaraoke(state, ctx2);
      return;
    }
    const captionStartMs = ctx2.currentTimeMs - ctx2.elapsed;
    const captionDuration = ctx2.effectDuration + (ctx2.animation.outDuration || 300);
    const wordDuration = captionDuration / words.length;
    let charIdx2 = 0;
    wordTimings = words.map((word, i) => {
      const startCharIdx = charIdx2;
      charIdx2 += word.length + (i < words.length - 1 ? 1 : 0);
      return {
        word,
        startMs: captionStartMs + i * wordDuration,
        endMs: captionStartMs + (i + 1) * wordDuration,
        charStartIndex: startCharIdx,
        charEndIndex: startCharIdx + word.length
      };
    });
  }
  const pages = groupWordsIntoPages(
    wordTimings,
    pageConfig.wordsPerPage ?? 4,
    pageConfig.combineWithinMs ?? 1200
  );
  const activePage = findActivePageAtTime(pages, ctx2.currentTimeMs);
  if (!activePage) {
    let prevPage = null;
    for (let i = 0; i < pages.length; i++) {
      if (ctx2.currentTimeMs > pages[i].endMs && (i + 1 >= pages.length || ctx2.currentTimeMs < pages[i + 1].startMs)) {
        prevPage = pages[i];
        break;
      }
    }
    if (prevPage) {
      const elapsed = ctx2.currentTimeMs - prevPage.endMs;
      if (elapsed < PAGE_CROSSFADE_MS) {
        state.pageText = prevPage.text;
        state.opacity *= 1 - elapsed / PAGE_CROSSFADE_MS;
        const pg = toGraphemes(prevPage.text);
        const cs = acquireCharStyles(pg.length);
        for (let i = 0; i < pg.length; i++) cs[i].fill = ctx2.defaultColor;
        state.charStyles = cs;
        return;
      }
    }
    state.opacity = 0;
    return;
  }
  state.pageText = activePage.text;
  const pageElapsed = ctx2.currentTimeMs - activePage.startMs;
  const entranceDuration = pageConfig.pageEntranceDuration ?? 200;
  const entrance = pageConfig.pageEntrance ?? "spring";
  if (pageElapsed >= 0 && pageElapsed < entranceDuration && entrance !== "none") {
    const t = Math.min(1, pageElapsed / entranceDuration);
    let p;
    if (entrance === "pop") {
      p = popEasing(t);
      state.scaleX *= 0.5 + 0.5 * p;
      state.scaleY *= 0.5 + 0.5 * p;
      state.translateY += (1 - p) * 15;
      state.opacity *= Math.min(1, t * 3);
    } else if (entrance === "slideUp") {
      p = entranceEasing(t);
      state.translateY += (1 - p) * 20;
      state.opacity *= p;
    } else {
      const springFn = resolveEasing("spring:200,20,1") ?? entranceEasing;
      p = springFn(t);
      state.scaleX *= 0.85 + 0.15 * p;
      state.scaleY *= 0.85 + 0.15 * p;
      state.translateY += (1 - p) * 12;
    }
  }
  const pageRemaining = activePage.endMs - ctx2.currentTimeMs;
  if (pageRemaining >= 0 && pageRemaining < PAGE_CROSSFADE_MS) {
    state.opacity *= pageRemaining / PAGE_CROSSFADE_MS;
  }
  const highlightColor = pageConfig.highlightColor ?? "#FFFF00";
  const pageGraphemes = toGraphemes(activePage.text);
  const charStyles = acquireCharStyles(pageGraphemes.length);
  const highlightedWordIdx = getHighlightedWordIndex(
    activePage,
    ctx2.currentTimeMs
  );
  let charIdx = 0;
  let activeWordStartCharIdx = -1;
  let activeWordEndCharIdx = -1;
  for (let wi = 0; wi < activePage.words.length; wi++) {
    const word = activePage.words[wi];
    const isActive = wi === highlightedWordIdx;
    const wordGraphemes = toGraphemes(word.word);
    const wordStartCharIdx = charIdx;
    let fillColor;
    if (isActive) {
      const elapsed = ctx2.currentTimeMs - word.startMs;
      fillColor = elapsed < HIGHLIGHT_TRANSITION_MS ? lerpHexColor(
        ctx2.defaultColor,
        highlightColor,
        elapsed / HIGHLIGHT_TRANSITION_MS
      ) : highlightColor;
    } else if (wi === highlightedWordIdx - 1) {
      const elapsed = ctx2.currentTimeMs - word.endMs;
      fillColor = elapsed >= 0 && elapsed < HIGHLIGHT_TRANSITION_MS ? lerpHexColor(
        highlightColor,
        ctx2.defaultColor,
        elapsed / HIGHLIGHT_TRANSITION_MS
      ) : ctx2.defaultColor;
    } else {
      fillColor = ctx2.defaultColor;
    }
    for (let j = 0; j < wordGraphemes.length && charIdx < pageGraphemes.length; j++, charIdx++) {
      const isSpace = wordGraphemes[j].trim() === "";
      charStyles[charIdx].fill = isSpace ? ctx2.defaultColor : fillColor;
    }
    if (isActive) {
      activeWordStartCharIdx = wordStartCharIdx;
      activeWordEndCharIdx = charIdx;
    }
  }
  while (charIdx < pageGraphemes.length) {
    charStyles[charIdx].fill = ctx2.defaultColor;
    charIdx++;
  }
  if (highlightedWordIdx >= 0 && highlightedWordIdx < activePage.words.length) {
    const activeWord = activePage.words[highlightedWordIdx];
    const wordElapsed = ctx2.currentTimeMs - activeWord.startMs;
    if (wordElapsed >= 0 && wordElapsed < WORD_BOUNCE_DURATION_MS) {
      const t = wordElapsed / WORD_BOUNCE_DURATION_MS;
      const elastic = easeOutElastic2(t, 1, 0.4);
      const scale = 1 + WORD_BOUNCE_AMPLITUDE * (1 - elastic);
      const offsetY = -8 * (1 - elastic);
      for (let i = activeWordStartCharIdx; i < activeWordEndCharIdx && i < pageGraphemes.length; i++) {
        if (pageGraphemes[i].trim() !== "") {
          charStyles[i].charScaleX = scale;
          charStyles[i].charScaleY = scale;
          charStyles[i].offsetY = offsetY;
        }
      }
    }
  }
  state.charStyles = charStyles;
}
var PRE_OUT_HANDLERS = {
  typewriter: handleTypewriter2,
  "typewriter-word": handleTypewriterWord,
  neon: handleNeon,
  "blur-shimmer": handleBlurShimmer,
  tiktok: handleTikTokPage
};
function calculateCaptionAnimationState(currentTimeMs, captionStartMs, captionEndMs, captionText, animation, defaultColor = "#FFFFFF", canvasHeight = 1080, wordTimings) {
  if (!animation || animation.preset === "none") {
    return { ...DEFAULT_STATE };
  }
  const cleanText = captionText.replace(/\n/g, "");
  const textLength = toGraphemes(cleanText).length;
  const captionDuration = captionEndMs - captionStartMs;
  const inDuration = animation.inDuration || 500;
  const outDuration = animation.outDuration || 500;
  const inType = animation.inType || "none";
  const outType = animation.outType || "none";
  const preset = animation.preset;
  const elapsed = currentTimeMs - captionStartMs;
  const remaining = captionEndMs - currentTimeMs;
  const isEntering = elapsed < inDuration && elapsed >= 0;
  const isExiting = remaining < outDuration && remaining >= 0;
  const effectDuration = Math.max(1, captionDuration - outDuration);
  const effectProgress = Math.min(1, Math.max(0, elapsed / effectDuration));
  const state = { ...DEFAULT_STATE };
  if (isEntering && inType !== "none") {
    const handler = ENTRANCE_HANDLERS[inType];
    if (handler)
      handler(
        state,
        elapsed / inDuration,
        elapsed,
        inDuration,
        canvasHeight,
        animation
      );
  }
  const customEasing = animation.easing ? resolveEasing(animation.easing) : void 0;
  const ctx2 = {
    textLength,
    effectProgress,
    elapsed,
    effectDuration,
    currentTimeMs,
    captionStartMs,
    captionEndMs,
    captionText: cleanText,
    defaultColor,
    animation,
    inDuration,
    isEntering,
    defaultColorRgb: parseHexToRgb(defaultColor),
    wordTimings,
    customEasing,
    customScaleEasing: customEasing,
    staggerDistribution: animation.staggerDistribution
  };
  {
    let ph;
    let ih;
    if (preset && preset !== "none") {
      ph = preset.startsWith("karaoke") ? handleKaraoke : preset.startsWith("tiktok") ? handleTikTokPage : PRE_OUT_HANDLERS[preset];
    }
    if (inType !== "none") {
      const h = PRE_OUT_HANDLERS[inType];
      if (h && h !== ph) ih = h;
    }
    if (ph) ph(state, ctx2);
    if (ih) ih(state, ctx2);
  }
  if (isExiting && outType !== "none") {
    const handler = EXIT_HANDLERS[outType];
    if (handler)
      handler(
        state,
        exitEasing(1 - remaining / outDuration),
        canvasHeight,
        animation,
        textLength,
        cleanText
      );
  }
  {
    const keys = [preset, inType !== "none" ? inType : void 0];
    let prevKey;
    for (const key of keys) {
      if (!key || key === "none" || key === prevKey) continue;
      prevKey = key;
      const spec = PRESET_SPECS[key];
      if (spec) applyPresetSpec(spec, state, ctx2);
    }
  }
  return state;
}

// ../../shared/caption-animation/charBatchRenderer.ts
function styleHasTransform(s) {
  return !!(s.offsetX || s.offsetY || s.charScaleX !== void 0 && s.charScaleX !== 1 || s.charScaleY !== void 0 && s.charScaleY !== 1 || s.charOpacity !== void 0 && s.charOpacity !== 1 || s.charRotation !== void 0 && s.charRotation !== 0 || s.charBlur !== void 0 && s.charBlur !== 0 || s.charShadowBlur !== void 0 && s.charShadowBlur !== 0 || s.charSkewX !== void 0 && s.charSkewX !== 0 || s.sweepGradientProgress !== void 0 && s.sweepGradientProgress > 0);
}
function canMerge(a, aHidden, b, bHidden) {
  if (aHidden !== bHidden) return false;
  if (aHidden) return true;
  if (!a && !b) return true;
  if (!a || !b) return false;
  return (a.fill || "") === (b.fill || "") && (a.stroke || "") === (b.stroke || "") && (a.strokeWidth || 0) === (b.strokeWidth || 0) && (a.fontWeight || "") === (b.fontWeight || "") && (a.underline || false) === (b.underline || false) && (a.offsetX || 0) === (b.offsetX || 0) && (a.offsetY || 0) === (b.offsetY || 0) && (a.charScaleX ?? 1) === (b.charScaleX ?? 1) && (a.charScaleY ?? 1) === (b.charScaleY ?? 1) && (a.charOpacity ?? 1) === (b.charOpacity ?? 1) && (a.charRotation ?? 0) === (b.charRotation ?? 0) && (a.charBlur ?? 0) === (b.charBlur ?? 0) && (a.charShadowBlur ?? 0) === (b.charShadowBlur ?? 0) && (a.charShadowColor || "") === (b.charShadowColor || "") && (a.charTrackingOffset ?? 0) === (b.charTrackingOffset ?? 0) && (a.charSkewX ?? 0) === (b.charSkewX ?? 0) && (a.sweepGradientProgress ?? 0) === (b.sweepGradientProgress ?? 0);
}
function batchCharactersByStyle(line, lineStartX, charStyles, globalCharIndexStart, visibleCharCount, isTypewriter, getCharWidth, charSpacingPx = 0, typewriterFractionalChar) {
  const chars = toGraphemes(line);
  if (chars.length === 0) return [];
  const batches = [];
  let currentBatch = null;
  let prevStyle;
  let prevHidden = false;
  let x = lineStartX;
  for (let j = 0; j < chars.length; j++) {
    const char = chars[j];
    const globalIndex = globalCharIndexStart + j;
    const charWidth = getCharWidth(char);
    const trackingOffset = charStyles?.[globalIndex]?.charTrackingOffset ?? 0;
    const isHidden = isTypewriter && globalIndex > visibleCharCount;
    const isFractional = isTypewriter && globalIndex === visibleCharCount && typewriterFractionalChar !== void 0 && typewriterFractionalChar > 0;
    let charStyle = charStyles?.[globalIndex] || {};
    if (isFractional) {
      charStyle = { ...charStyle, charOpacity: typewriterFractionalChar };
    }
    if (currentBatch && !isFractional && canMerge(prevStyle, prevHidden, charStyle, isHidden)) {
      currentBatch.text += char;
      currentBatch.width += charWidth + charSpacingPx + trackingOffset;
    } else {
      if (currentBatch) {
        batches.push(currentBatch);
      }
      currentBatch = {
        text: char,
        startX: x,
        width: charWidth,
        style: charStyle,
        hidden: isHidden,
        hasTransform: !isHidden && (styleHasTransform(charStyle) || isFractional)
      };
    }
    prevStyle = charStyle;
    prevHidden = isHidden;
    x += charWidth + charSpacingPx + trackingOffset;
  }
  if (currentBatch) {
    batches.push(currentBatch);
  }
  return batches;
}
function renderCharBatches(ctx2, batches, y, defaultColor, baseFontSpec, fontSize, fontStyleStr, fontFamily, charSpacingPx = 0, fallbackStrokeColor, fallbackStrokeWidth, fallbackShadowColor, fallbackShadowBlur, fallbackShadowOffsetX, fallbackShadowOffsetY) {
  let lastFillStyle = "";
  let lastStrokeStyle = "";
  let lastLineWidth = -1;
  let lastFont = baseFontSpec;
  ctx2.textAlign = "left";
  ctx2.lineJoin = "miter";
  ctx2.lineCap = "butt";
  ctx2.miterLimit = 4;
  const hasFallbackShadow = !!(fallbackShadowBlur && fallbackShadowBlur > 0 && fallbackShadowColor);
  function applyStroke(stroke, strokeWidth, text, x, ty) {
    if (stroke !== lastStrokeStyle) {
      ctx2.strokeStyle = stroke;
      lastStrokeStyle = stroke;
    }
    if (strokeWidth !== lastLineWidth) {
      ctx2.lineWidth = strokeWidth;
      lastLineWidth = strokeWidth;
    }
    ctx2.strokeText(text, x, ty);
  }
  function applyFallbackShadow() {
    ctx2.shadowBlur = fallbackShadowBlur;
    ctx2.shadowColor = fallbackShadowColor;
    ctx2.shadowOffsetX = fallbackShadowOffsetX ?? 0;
    ctx2.shadowOffsetY = fallbackShadowOffsetY ?? 0;
  }
  function clearShadow() {
    ctx2.shadowBlur = 0;
    ctx2.shadowColor = "rgba(0,0,0,0)";
    ctx2.shadowOffsetX = 0;
    ctx2.shadowOffsetY = 0;
  }
  for (const batch of batches) {
    if (batch.hidden) continue;
    const { text, startX, style } = batch;
    const fillColor = style.fill || defaultColor;
    if (fillColor !== lastFillStyle) {
      ctx2.fillStyle = fillColor;
      lastFillStyle = fillColor;
    }
    const needBoldFont = style.fontWeight && style.fontWeight !== "normal";
    if (needBoldFont) {
      const boldFont = `${fontStyleStr} ${style.fontWeight} ${fontSize}px "${fontFamily}"`;
      if (boldFont !== lastFont) {
        ctx2.font = boldFont;
        lastFont = boldFont;
      }
    } else if (lastFont !== baseFontSpec) {
      ctx2.font = baseFontSpec;
      lastFont = baseFontSpec;
    }
    if (batch.hasTransform) {
      ctx2.save();
      const cx = startX + batch.width / 2;
      ctx2.translate(cx + (style.offsetX || 0), y + (style.offsetY || 0));
      if (style.charOpacity !== void 0 && style.charOpacity !== 1) ctx2.globalAlpha *= style.charOpacity;
      if (style.charRotation !== void 0 && style.charRotation !== 0) ctx2.rotate(style.charRotation * Math.PI / 180);
      if (style.charSkewX !== void 0 && style.charSkewX !== 0) ctx2.transform(1, 0, Math.tan(style.charSkewX * Math.PI / 180), 1, 0, 0);
      if (style.charBlur !== void 0 && style.charBlur > 0) ctx2.filter = `blur(${style.charBlur}px)`;
      if (style.charShadowBlur !== void 0 && style.charShadowBlur > 0) {
        ctx2.shadowBlur = style.charShadowBlur;
        ctx2.shadowColor = style.charShadowColor || fillColor;
      } else if (hasFallbackShadow) {
        applyFallbackShadow();
      }
      if (style.charScaleX !== void 0 || style.charScaleY !== void 0) ctx2.scale(style.charScaleX ?? 1, style.charScaleY ?? 1);
      if (style.sweepGradientProgress != null && style.sweepGradientProgress > 0 && style.sweepGradientProgress < 1) {
        const hw = batch.width / 2;
        const grad = ctx2.createLinearGradient(-hw, 0, hw, 0);
        const p = style.sweepGradientProgress;
        grad.addColorStop(0, fillColor);
        grad.addColorStop(Math.min(1, p), fillColor);
        grad.addColorStop(Math.min(1, p + 0.02), defaultColor);
        grad.addColorStop(1, defaultColor);
        ctx2.fillStyle = grad;
      }
      const strokeC = style.stroke ?? fallbackStrokeColor;
      const strokeW = style.strokeWidth ?? fallbackStrokeWidth;
      if (strokeC && strokeW) applyStroke(strokeC, strokeW, text, -batch.width / 2, 0);
      ctx2.fillText(text, -batch.width / 2, 0);
      ctx2.restore();
      continue;
    }
    if (charSpacingPx > 0 && text.length > 1) {
      let cx = startX;
      for (const ch of toGraphemes(text)) {
        const strokeC = style.stroke ?? fallbackStrokeColor;
        const strokeW = style.strokeWidth ?? fallbackStrokeWidth;
        if (hasFallbackShadow) applyFallbackShadow();
        if (strokeC && strokeW) applyStroke(strokeC, strokeW, ch, cx, y);
        ctx2.fillText(ch, cx, y);
        if (hasFallbackShadow) clearShadow();
        cx += ctx2.measureText(ch).width + charSpacingPx;
      }
    } else {
      const strokeC = style.stroke ?? fallbackStrokeColor;
      const strokeW = style.strokeWidth ?? fallbackStrokeWidth;
      if (hasFallbackShadow) applyFallbackShadow();
      if (strokeC && strokeW) applyStroke(strokeC, strokeW, text, startX, y);
      ctx2.fillText(text, startX, y);
      if (hasFallbackShadow) clearShadow();
    }
    if (style.underline) {
      const underlineY = Math.round(y + Math.max(1, fontSize * 0.1));
      const underlineColor = style.fill || defaultColor;
      const underlineWidth = Math.max(1, Math.round(fontSize / 16));
      if (underlineColor !== lastStrokeStyle) {
        ctx2.strokeStyle = underlineColor;
        lastStrokeStyle = underlineColor;
      }
      if (underlineWidth !== lastLineWidth) {
        ctx2.lineWidth = underlineWidth;
        lastLineWidth = underlineWidth;
      }
      ctx2.beginPath();
      ctx2.moveTo(startX, underlineY);
      ctx2.lineTo(startX + batch.width, underlineY);
      ctx2.stroke();
    }
  }
  if (lastFont !== baseFontSpec) {
    ctx2.font = baseFontSpec;
  }
}

// ../../shared/caption-animation/captionRenderer.ts
function renderCaptionText(ctx2, text, canvasWidth, canvasHeight, style, animState, deps, scaleX = 1, scaleY = 1) {
  if (animState.opacity <= 0) return;
  const renderText = animState.pageText ?? text;
  const fontSizeBase = style?.fontSize ?? 35;
  const styleScaleY = style?.scaleY ?? 1;
  const styleScaleX = style?.scaleX ?? 1;
  const animScaleX = animState.scaleX;
  const animScaleY = animState.scaleY;
  const fontFamily = style?.fontFamily ?? "Arial";
  const lineHeightMul = style?.lineHeight ?? 1.2;
  const textAlign = style?.textAlign ?? "center";
  const defaultColor = style?.fontColor ?? "#FFFFFF";
  const stylesArr = style?.styles || [];
  const isBold = stylesArr.includes("bold");
  const isItalic = stylesArr.includes("italic");
  const underline = stylesArr.includes("underline");
  const linethrough = stylesArr.includes("linethrough") || stylesArr.includes("strike") || stylesArr.includes("strikethrough");
  const fontWeightStr = isBold ? "bold" : (style?.fontWeight ?? 700).toString();
  const fontStyleStr = isItalic ? "italic" : "normal";
  ctx2.save();
  ctx2.globalAlpha = animState.opacity;
  ctx2.globalCompositeOperation = "source-over";
  try {
    ctx2.fontKerning = "normal";
    ctx2.textRendering = "optimizeLegibility";
  } catch {
  }
  const padding = (style?.padding ?? 5) * scaleX;
  let targetWidth;
  if (typeof style?.width === "number") {
    targetWidth = Math.max(
      1,
      Math.min(canvasWidth, Math.round(style.width * styleScaleX * animScaleX * scaleX))
    );
  } else {
    targetWidth = Math.max(200 * scaleX, Math.min(canvasWidth * 0.8, canvasWidth));
  }
  const availableTextWidth = Math.max(10, targetWidth - padding * 2);
  let fontSize = fontSizeBase * styleScaleY * animScaleY * scaleY;
  if (animState.pageText !== void 0) {
    const maxFontSize = fontSize;
    const minFontSize = maxFontSize * 0.5;
    let lo = minFontSize;
    let hi = maxFontSize;
    while (hi - lo > 1) {
      const mid = (lo + hi) / 2;
      ctx2.font = `${fontStyleStr} ${fontWeightStr} ${mid}px "${fontFamily}"`;
      const w = deps.measureLineWidth(renderText);
      if (w <= availableTextWidth) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    fontSize = Math.floor(lo);
  }
  const baseFontSpec = `${fontStyleStr} ${fontWeightStr} ${fontSize}px "${fontFamily}"`;
  ctx2.font = baseFontSpec;
  const captionCharSpacingPx = charSpacingToPx(style?.charSpacing ?? 0, fontSize);
  const lines = deps.wrapText(renderText, availableTextWidth);
  const lineWidths = lines.map(deps.measureLineWidth);
  const lineHeightPx = fontSize * lineHeightMul;
  const bgHeight = Math.max(lineHeightPx * lines.length + padding * 2, fontSize + padding * 2);
  let left;
  const originX = style?.originX ?? "center";
  const posX = style?.positionX != null ? style.positionX * scaleX : null;
  if (originX === "left") {
    left = posX != null ? posX : 0;
  } else if (originX === "right") {
    left = (posX != null ? posX : canvasWidth) - targetWidth;
  } else {
    left = (posX != null ? posX : canvasWidth / 2) - targetWidth / 2;
  }
  let top;
  const originY = style?.originY ?? "bottom";
  const posY = style?.positionY != null ? style.positionY * scaleY : null;
  if (originY === "top") {
    top = posY != null ? posY : 0;
  } else if (originY === "center") {
    top = (posY != null ? posY : canvasHeight / 2) - bgHeight / 2;
  } else {
    if (posY != null) {
      if (posY < 0) {
        top = canvasHeight - Math.abs(posY) - bgHeight;
      } else {
        top = Math.max(0, posY - bgHeight);
      }
    } else {
      const bottomMargin = Math.round(canvasHeight * 0.02);
      top = canvasHeight - bottomMargin - bgHeight;
    }
  }
  left += animState.translateX;
  top += animState.translateY;
  if (animState.blurAmount > 0) {
    ctx2.filter = `blur(${animState.blurAmount}px)`;
  }
  if (animState.rotation !== 0) {
    const cx = left + targetWidth / 2;
    const cy = top + bgHeight / 2;
    ctx2.translate(cx, cy);
    ctx2.rotate(animState.rotation * Math.PI / 180);
    ctx2.translate(-cx, -cy);
  }
  if (style?.backgroundColor && style.backgroundColor !== "transparent") {
    ctx2.save();
    ctx2.fillStyle = style.backgroundColor;
    const radius = Math.max(0, (style?.borderRadius ?? 10) * scaleX);
    deps.drawRoundedRect(ctx2, left, top, targetWidth, bgHeight, radius, radius, style.backgroundColor);
    ctx2.restore();
  }
  const hasLegacyShadow = !style?.shadowLayers?.length && (!!style?.shadowColor || style?.shadowBlur !== void 0 || style?.shadowOffsetX !== void 0 || style?.shadowOffsetY !== void 0);
  if (hasLegacyShadow) {
    ctx2.shadowColor = style.shadowColor || "#000000";
    ctx2.shadowBlur = (style.shadowBlur ?? 0) * scaleX;
    ctx2.shadowOffsetX = (style.shadowOffsetX ?? 0) * scaleX;
    ctx2.shadowOffsetY = (style.shadowOffsetY ?? 0) * scaleY;
  } else {
    ctx2.shadowColor = "rgba(0,0,0,0)";
    ctx2.shadowBlur = 0;
    ctx2.shadowOffsetX = 0;
    ctx2.shadowOffsetY = 0;
  }
  ctx2.textBaseline = "alphabetic";
  if (style?.useGradient && style.gradientColors && style.gradientColors.length >= 2) {
    const maxLineW = Math.max(...lineWidths, 1);
    ctx2.fillStyle = createTextGradient(ctx2, style.gradientColors, maxLineW);
  } else {
    ctx2.fillStyle = defaultColor;
  }
  ctx2.textAlign = textAlign;
  const textX = textAlign === "left" ? left + padding : textAlign === "right" ? left + targetWidth - padding : left + targetWidth / 2;
  const baseStrokeWidth = (style?.strokeWidth ?? 0) * scaleX;
  const baseStrokeColor = style?.strokeColor;
  const doStroke = baseStrokeWidth > 0 && baseStrokeColor;
  if (doStroke) {
    ctx2.lineWidth = baseStrokeWidth;
    ctx2.strokeStyle = baseStrokeColor;
    ctx2.lineJoin = "miter";
    ctx2.lineCap = "butt";
    ctx2.miterLimit = 4;
  }
  const metrics = deps.measureTextMetrics();
  const textHeight = metrics.ascent + metrics.descent;
  const verticalOffsetInLine = Math.max(0, (lineHeightPx - textHeight) / 2);
  const baseY = top + padding + verticalOffsetInLine + metrics.ascent;
  if (animState.wordHighlightBoxes && animState.wordHighlightBoxes.length > 0) {
    ctx2.save();
    disableShadow(ctx2);
    for (const box of animState.wordHighlightBoxes) {
      if (box.opacity <= 0) continue;
      let currentCharIdx = 0;
      for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        const lineGraphemes = toGraphemes(lines[lineIdx]);
        const lineEndIdx = currentCharIdx + lineGraphemes.length;
        if (box.startCharIdx < lineEndIdx && box.endCharIdx > currentCharIdx) {
          const lw = lineWidths[lineIdx];
          let lineStartX;
          if (textAlign === "left") lineStartX = left + padding;
          else if (textAlign === "right") lineStartX = left + targetWidth - padding - lw;
          else lineStartX = left + targetWidth / 2 - lw / 2;
          const boxStartInLine = Math.max(0, box.startCharIdx - currentCharIdx);
          const boxEndInLine = Math.min(lineGraphemes.length, box.endCharIdx - currentCharIdx);
          let bx = lineStartX;
          for (let ci = 0; ci < boxStartInLine; ci++) bx += deps.getCharWidth(lineGraphemes[ci]) + captionCharSpacingPx;
          let bw = 0;
          for (let ci = boxStartInLine; ci < boxEndInLine; ci++) bw += deps.getCharWidth(lineGraphemes[ci]) + captionCharSpacingPx;
          const boxPadX = padding * 0.4;
          const boxPadY = fontSize * 0.1;
          const boxY = baseY + lineIdx * lineHeightPx - metrics.ascent - boxPadY;
          const boxH = fontSize + boxPadY * 2;
          const radius = Math.min(fontSize * 0.2, 8 * scaleX);
          ctx2.globalAlpha = animState.opacity * box.opacity;
          deps.drawRoundedRect(ctx2, bx - boxPadX, boxY, bw + boxPadX * 2, boxH, radius, radius, box.color);
        }
        currentCharIdx = lineEndIdx;
      }
    }
    ctx2.restore();
    ctx2.globalAlpha = animState.opacity;
  }
  const needCharByChar = animState.isTypewriter || animState.charStyles !== void 0;
  const shadowLayers = style?.shadowLayers;
  const hasMultiLayerShadow = shadowLayers && shadowLayers.length > 0;
  const drawAllLinesStrokeFill = () => {
    let ys = baseY;
    for (let i = 0; i < lines.length; i++) {
      const fx = textAlign === "center" ? textX : Math.round(textX);
      ctx2.textAlign = textAlign;
      if (doStroke) {
        if (captionCharSpacingPx > 0) strokeTextWithSpacing(ctx2, lines[i], fx, Math.round(ys), textAlign, captionCharSpacingPx);
        else ctx2.strokeText(lines[i], fx, Math.round(ys));
      }
      if (captionCharSpacingPx > 0) fillTextWithSpacing(ctx2, lines[i], fx, ys, textAlign, captionCharSpacingPx);
      else ctx2.fillText(lines[i], fx, ys);
      ys += lineHeightPx;
    }
  };
  if (hasMultiLayerShadow) {
    for (const layer of shadowLayers) {
      ctx2.shadowColor = layer.color;
      ctx2.shadowBlur = layer.blur * scaleX;
      ctx2.shadowOffsetX = layer.offsetX * scaleX;
      ctx2.shadowOffsetY = layer.offsetY * scaleY;
      drawAllLinesStrokeFill();
    }
    disableShadow(ctx2);
  }
  if (needCharByChar) {
    const charRenderShadowState = captureShadow(ctx2);
    disableShadow(ctx2);
    let y = baseY;
    let globalCharIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineWidth = lineWidths[i];
      let lineStartX;
      if (textAlign === "left") lineStartX = left + padding;
      else if (textAlign === "right") lineStartX = left + targetWidth - padding - lineWidth;
      else lineStartX = left + targetWidth / 2 - lineWidth / 2;
      const lineGraphemeCount = toGraphemes(line).length;
      const batches = batchCharactersByStyle(
        line,
        lineStartX,
        animState.charStyles,
        globalCharIndex,
        animState.visibleCharCount,
        animState.isTypewriter,
        deps.getCharWidth,
        captionCharSpacingPx,
        animState.typewriterFractionalChar
      );
      renderCharBatches(
        ctx2,
        batches,
        y,
        defaultColor,
        baseFontSpec,
        fontSize,
        fontStyleStr,
        fontFamily,
        captionCharSpacingPx,
        // Global stroke fallback: char-level animations route through this path,
        // bypassing the doStroke block. Without this, CaptionStyle.strokeWidth has
        // no effect when charStyles is set (e.g. char-slide-up, wave, vibrate…).
        doStroke ? baseStrokeColor : void 0,
        doStroke ? baseStrokeWidth : void 0,
        // Global shadow fallback: the char-by-char path disables ctx shadow before
        // renderCharBatches, so legacy shadow must be injected here.
        // Only pass for legacy shadow (not multi-layer — those are rendered separately).
        hasLegacyShadow ? style.shadowColor || "#000000" : void 0,
        hasLegacyShadow ? (style.shadowBlur ?? 0) * scaleX : void 0,
        hasLegacyShadow ? (style.shadowOffsetX ?? 0) * scaleX : void 0,
        hasLegacyShadow ? (style.shadowOffsetY ?? 0) * scaleY : void 0
      );
      globalCharIndex += lineGraphemeCount;
      y += lineHeightPx;
    }
    restoreShadow(ctx2, charRenderShadowState);
  } else if (!hasMultiLayerShadow) {
    if (doStroke && !animState.isNeon && !animState.isKaraoke) {
      ctx2.textAlign = textAlign;
      let yStroke = baseY;
      for (let i = 0; i < lines.length; i++) {
        const fy = Math.round(yStroke);
        const fx = textAlign === "center" ? textX : Math.round(textX);
        if (captionCharSpacingPx > 0) strokeTextWithSpacing(ctx2, lines[i], fx, fy, textAlign, captionCharSpacingPx);
        else ctx2.strokeText(lines[i], fx, fy);
        yStroke += lineHeightPx;
      }
    }
    if (hasLegacyShadow) {
      disableShadow(ctx2);
    }
    let y = baseY;
    for (let i = 0; i < lines.length; i++) {
      const fx = textAlign === "center" ? textX : Math.round(textX);
      ctx2.textAlign = textAlign;
      if (captionCharSpacingPx > 0) fillTextWithSpacing(ctx2, lines[i], fx, y, textAlign, captionCharSpacingPx);
      else ctx2.fillText(lines[i], fx, y);
      y += lineHeightPx;
    }
  } else {
    drawAllLinesStrokeFill();
  }
  const hadShadow = hasLegacyShadow || (style?.shadowLayers?.length ?? 0) > 0;
  let savedShadowState;
  if (hadShadow) {
    savedShadowState = captureShadow(ctx2);
    disableShadow(ctx2);
  }
  let yDecor = baseY;
  for (let i = 0; i < lines.length; i++) {
    const w = lineWidths[i];
    let startX;
    if (textAlign === "left") {
      startX = left + padding;
    } else if (textAlign === "right") {
      startX = left + targetWidth - padding - w;
    } else {
      startX = left + targetWidth / 2 - w / 2;
    }
    const lineW = Math.max(1, Math.round(fontSize / 16));
    ctx2.lineWidth = lineW;
    ctx2.strokeStyle = defaultColor;
    if (underline && !animState.isKaraoke) {
      const underlineY = Math.round(yDecor + Math.max(1, fontSize * 0.1));
      ctx2.beginPath();
      ctx2.moveTo(startX, underlineY);
      ctx2.lineTo(startX + w, underlineY);
      ctx2.stroke();
    }
    if (linethrough) {
      const throughY = Math.round(yDecor - Math.max(1, fontSize * 0.3));
      ctx2.beginPath();
      ctx2.moveTo(startX, throughY);
      ctx2.lineTo(startX + w, throughY);
      ctx2.stroke();
    }
    yDecor += lineHeightPx;
  }
  if (hadShadow && savedShadowState) {
    restoreShadow(ctx2, savedShadowState);
  }
  ctx2.restore();
}

// ../../server/src/renderer/captionTextRenderer.ts
function renderCaptionTextServer(ctx2, text, canvasWidth, canvasHeight, style, animState, fns, scaleX = 1, scaleY = 1) {
  const fontSizeBase = style?.fontSize ?? 35;
  const styleScaleY = style?.scaleY ?? 1;
  const fontSize = fontSizeBase * styleScaleY * animState.scaleY * scaleY;
  const captionCharSpacingPx = charSpacingToPx(style?.charSpacing ?? 0, fontSize);
  const stylesArr = style?.styles || [];
  const isBold = stylesArr.includes("bold");
  const isItalic = stylesArr.includes("italic");
  const fontWeightStr = isBold ? "bold" : (style?.fontWeight ?? 700).toString();
  const fontStyleStr = isItalic ? "italic" : "normal";
  const baseFontSpec = `${fontStyleStr} ${fontWeightStr} ${fontSize}px "${style?.fontFamily ?? "Arial"}"`;
  const deps = {
    wrapText: (t, maxWidth) => fns.wrapText(ctx2, t, maxWidth, captionCharSpacingPx),
    measureLineWidth: (line) => fns.measureLineWidth(ctx2, line, captionCharSpacingPx),
    getCharWidth: (char) => fns.getCharWidth(ctx2, baseFontSpec, char),
    measureTextMetrics: () => fns.measureTextMetrics(ctx2, fontSize),
    drawRoundedRect
  };
  renderCaptionText(
    ctx2,
    text,
    canvasWidth,
    canvasHeight,
    style,
    animState,
    deps,
    scaleX,
    scaleY
  );
}

// ../../shared/animations/charTransforms.ts
function createSimpleCharTransform(cfg) {
  const pe = EASING[cfg.primary];
  const ae = EASING[cfg.alpha];
  const easingOf = (r) => r?.[2] ? EASING[r[2]] : pe;
  const eOffX = easingOf(cfg.offsetX);
  const eOffY = easingOf(cfg.offsetY);
  const eScale = easingOf(cfg.scale);
  const eRot = easingOf(cfg.rotation);
  const eBlur = easingOf(cfg.blur);
  return (p) => {
    const ap = cfg.alphaRamp ? Math.min(1, p * cfg.alphaRamp) : p;
    const alphaEased = ae(ap);
    const alpha = cfg.isOut ? 1 - alphaEased : cfg.alphaMultiplier ? Math.min(1, alphaEased * cfg.alphaMultiplier) : alphaEased;
    const interp = (range, def, e) => range ? range[0] + (range[1] - range[0]) * e(p) : def;
    let s = interp(cfg.scale, 1, eScale);
    if (cfg.scaleMin !== void 0) s = Math.max(cfg.scaleMin, s);
    const blurVal = interp(cfg.blur, 0, eBlur);
    return {
      offsetX: interp(cfg.offsetX, 0, eOffX),
      offsetY: interp(cfg.offsetY, 0, eOffY),
      scaleX: s,
      scaleY: s,
      rotation: interp(cfg.rotation, 0, eRot),
      alpha,
      blur: blurVal > 0.1 ? blurVal : void 0
    };
  };
}
var highlightTransform = createSimpleCharTransform({
  primary: "outElastic",
  alpha: "outCubic",
  isOut: false,
  scale: [0, 1],
  rotation: [0.15, 0, "outQuad"]
});
var slideInByCharacterTransform = createSimpleCharTransform({
  primary: "outBack",
  alpha: "outQuad",
  isOut: false,
  offsetX: [-50, 0],
  offsetY: [15, 0],
  scale: [0.7, 1]
});
var fadeInByCharacterTransform = createSimpleCharTransform({
  primary: "outQuad",
  alpha: "outCubic",
  isOut: false,
  offsetY: [20, 0],
  scale: [0.95, 1, "outCubic"]
});
var blurInByCharacterTransform = createSimpleCharTransform({
  primary: "outCubic",
  alpha: "outQuad",
  isOut: false,
  offsetX: [-10, 0],
  scale: [1.3, 1],
  blur: [12, 0]
});
var bounceInByCharacterTransform = (p) => {
  const bounceEased = EASING.outBounce(p);
  const alphaEased = EASING.outQuad(p);
  const offsetY = (1 - bounceEased) * 80;
  const offsetX = Math.sin(p * Math.PI * 3) * (1 - p) * 8;
  const scale = 0.1 + bounceEased * 0.95;
  const rotation = Math.sin(p * Math.PI * 2) * (1 - p) * 0.2;
  return { offsetX, offsetY, scaleX: scale, scaleY: scale, rotation, alpha: Math.min(1, alphaEased * 1.5) };
};
var zoomInByCharacterTransform = (p) => {
  const scaleEased = EASING.outElastic(p);
  const alphaEased = EASING.outCubic(p);
  const scale = Math.max(0, scaleEased);
  const rotateY = (1 - EASING.outQuad(p)) * 0.3;
  const zOffset = (1 - alphaEased) * -20;
  return {
    offsetX: zOffset,
    offsetY: 0,
    scaleX: scale * (1 - rotateY * 0.3),
    scaleY: scale,
    rotation: 0,
    alpha: Math.min(1, alphaEased)
  };
};
var rotateInByCharacterTransform = createSimpleCharTransform({
  primary: "outCubic",
  alpha: "outCubic",
  isOut: false,
  offsetX: [-30, 0],
  offsetY: [15, 0],
  scale: [0, 1, "outElastic"],
  scaleMin: 0.1,
  rotation: [Math.PI * 1.5, 0, "outBack"],
  alphaMultiplier: 1.2
});
var waveInTransform = (p) => {
  const alpha = EASING.outCubic(p);
  const waveAmplitude = 30 * (1 - p);
  const waveOffset = Math.sin(p * Math.PI * 3) * waveAmplitude;
  const scalePulse = 1 + Math.sin(p * Math.PI * 2) * 0.1 * (1 - p);
  const rotation = Math.sin(p * Math.PI * 2) * 0.1 * (1 - p);
  return { offsetX: 0, offsetY: waveOffset, scaleX: scalePulse, scaleY: scalePulse, rotation, alpha };
};
var dropInTransform = (p) => {
  const dropEased = EASING.outBounce(p);
  const alpha = EASING.outQuad(p);
  const dropDistance = (1 - dropEased) * -120;
  const horizontalShake = Math.sin(p * Math.PI * 4) * (1 - p) * 5;
  const squashProgress = Math.max(0, p - 0.7) / 0.3;
  const squashY = squashProgress > 0 ? 1 - Math.sin(squashProgress * Math.PI) * 0.2 : 1;
  const squashX = squashProgress > 0 ? 1 + Math.sin(squashProgress * Math.PI) * 0.15 : 1;
  return { offsetX: horizontalShake, offsetY: dropDistance, scaleX: squashX, scaleY: squashY, rotation: 0, alpha };
};
var flipInByCharacterTransform = (p) => {
  const flipEased = EASING.outBack(p);
  const alpha = EASING.outQuad(p);
  const flipAngle = (1 - flipEased) * Math.PI;
  const scaleX = Math.abs(Math.cos(flipAngle));
  const offsetY = Math.sin(flipAngle) * -10;
  return { offsetX: 0, offsetY, scaleX, scaleY: 1, rotation: 0, alpha };
};
var scatterInTransform = (p, charIndex, lineIndex) => {
  const eased = EASING.outCubic(p);
  const alpha = EASING.outQuad(p);
  const seed = (lineIndex * 100 + charIndex) * 1.618;
  const angle2 = seed % 1 * Math.PI * 2;
  const distance = 150 * (1 - eased);
  const offsetX = Math.cos(angle2) * distance;
  const offsetY = Math.sin(angle2) * distance;
  const rotation = (1 - eased) * (seed * 10 % 1 - 0.5) * Math.PI;
  const scale = 0.3 + eased * 0.7;
  return { offsetX, offsetY, scaleX: scale, scaleY: scale, rotation, alpha };
};
var elasticInByCharacterTransform = createSimpleCharTransform({
  primary: "outElastic",
  alpha: "outQuad",
  isOut: false,
  offsetY: [-20, 0],
  scale: [0, 1],
  alphaRamp: 2
});
var shakeInByCharacterTransform = (p) => {
  const eased = EASING.outCubic(p);
  const alpha = EASING.outQuad(p);
  const shakeIntensity = (1 - eased) * 15;
  const shakeX = Math.sin(p * Math.PI * 8) * shakeIntensity;
  const shakeY = Math.cos(p * Math.PI * 6) * shakeIntensity * 0.5;
  const scale = 1.3 - eased * 0.3;
  return { offsetX: shakeX, offsetY: shakeY, scaleX: scale, scaleY: scale, rotation: 0, alpha };
};
var popOutTransform = (p) => {
  const scaleEased = EASING.inBack(p);
  const alphaEased = EASING.inQuad(p);
  const scale = Math.max(0, 1 - scaleEased * 1.2);
  const floatY = -scaleEased * 25;
  const rotation = scaleEased * 0.3;
  const driftX = Math.sin(p * Math.PI) * 10;
  return { offsetX: driftX, offsetY: floatY, scaleX: scale, scaleY: scale, rotation, alpha: 1 - alphaEased };
};
var slideOutByCharacterTransform = createSimpleCharTransform({
  primary: "inBack",
  alpha: "inQuad",
  isOut: true,
  offsetX: [0, 60],
  offsetY: [0, 20],
  scale: [1, 0.6],
  rotation: [0, 0.15]
});
var fadeOutByCharacterTransform = createSimpleCharTransform({
  primary: "inCubic",
  alpha: "inCubic",
  isOut: true,
  offsetY: [0, 25, "inQuad"],
  scale: [1, 0.85],
  rotation: [0, 0.1]
});
var blurOutByCharacterTransform = createSimpleCharTransform({
  primary: "inCubic",
  alpha: "inQuad",
  isOut: true,
  offsetX: [0, 15],
  scale: [1, 1.4],
  blur: [0, 15]
});
var bounceOutByCharacterTransform = (p) => {
  const bounceEased = EASING.inBounce(p);
  const alphaEased = EASING.inQuad(p);
  const offsetY = bounceEased * -100;
  const offsetX = Math.sin(p * Math.PI * 2.5) * p * 15;
  const scale = Math.max(0.1, 1 - bounceEased * 0.9);
  const rotation = Math.sin(p * Math.PI * 2) * bounceEased * 0.4;
  return { offsetX, offsetY, scaleX: scale, scaleY: scale, rotation, alpha: 1 - alphaEased * 0.8 };
};
var zoomOutByCharacterTransform = createSimpleCharTransform({
  primary: "inBack",
  alpha: "inQuad",
  isOut: true,
  offsetX: [0, 20],
  scale: [1, 2.5],
  rotation: [0, 0.2]
});
var rotateOutByCharacterTransform = createSimpleCharTransform({
  primary: "inBack",
  alpha: "inCubic",
  isOut: true,
  offsetX: [0, 40],
  offsetY: [0, -12],
  scale: [1, 0.2, "inQuad"],
  scaleMin: 0.1,
  rotation: [0, Math.PI * 1.5]
});
var flipOutByCharacterTransform = (p) => {
  const flipEased = EASING.inBack(p);
  const alphaEased = EASING.inQuad(p);
  const flipAngle = flipEased * Math.PI;
  const scaleX = Math.abs(Math.cos(flipAngle));
  const offsetY = Math.sin(flipAngle) * -10;
  return { offsetX: 0, offsetY, scaleX, scaleY: 1, rotation: 0, alpha: 1 - alphaEased };
};
var scatterOutTransform = (p, charIndex, lineIndex) => {
  const eased = EASING.inCubic(p);
  const alphaEased = EASING.inQuad(p);
  const seed = (lineIndex * 100 + charIndex) * 1.618;
  const angle2 = seed % 1 * Math.PI * 2;
  const distance = 150 * eased;
  const offsetX = Math.cos(angle2) * distance;
  const offsetY = Math.sin(angle2) * distance;
  const rotation = eased * (seed * 10 % 1 - 0.5) * Math.PI;
  const scale = 1 - eased * 0.7;
  return { offsetX, offsetY, scaleX: scale, scaleY: scale, rotation, alpha: 1 - alphaEased };
};
var elasticOutByCharacterTransform = createSimpleCharTransform({
  primary: "inElastic",
  alpha: "inQuad",
  isOut: true,
  offsetY: [0, -20],
  scale: [1, 0],
  scaleMin: 0
});
var waveOutTransform = (p) => {
  const eased = EASING.inCubic(p);
  const alphaEased = EASING.inQuad(p);
  const waveAmplitude = 25 * eased;
  const waveOffset = Math.sin(p * Math.PI * 3) * waveAmplitude;
  const swayOffset = Math.cos(p * Math.PI * 2) * 8 * eased;
  return { offsetX: swayOffset, offsetY: waveOffset, scaleX: 1, scaleY: 1, rotation: 0, alpha: 1 - alphaEased };
};
var dropOutTransform = (p) => {
  const dropEased = EASING.inQuad(p);
  const alphaEased = EASING.inCubic(p);
  const dropDistance = dropEased * 120;
  const horizontalShake = Math.sin(p * Math.PI * 4) * p * 5;
  const stretchY = 1 + dropEased * 0.3;
  const stretchX = 1 - dropEased * 0.15;
  return { offsetX: horizontalShake, offsetY: dropDistance, scaleX: stretchX, scaleY: stretchY, rotation: 0, alpha: 1 - alphaEased };
};
var shakeOutByCharacterTransform = (p) => {
  const eased = EASING.inCubic(p);
  const alphaEased = EASING.inQuad(p);
  const shakeIntensity = eased * 20;
  const shakeX = Math.sin(p * Math.PI * 10) * shakeIntensity;
  const shakeY = Math.cos(p * Math.PI * 8) * shakeIntensity * 0.5;
  const scale = 1 + eased * 0.4;
  return { offsetX: shakeX, offsetY: shakeY, scaleX: scale, scaleY: scale, rotation: 0, alpha: 1 - alphaEased };
};
var CHAR_TRANSFORMS = {
  // Entrance
  highlight: { isOut: false, transform: highlightTransform },
  slideInByCharacter: { isOut: false, transform: slideInByCharacterTransform },
  fadeInByCharacter: { isOut: false, transform: fadeInByCharacterTransform },
  blurInByCharacter: { isOut: false, transform: blurInByCharacterTransform },
  bounceInByCharacter: { isOut: false, transform: bounceInByCharacterTransform },
  zoomInByCharacter: { isOut: false, transform: zoomInByCharacterTransform },
  rotateInByCharacter: { isOut: false, transform: rotateInByCharacterTransform },
  waveIn: { isOut: false, transform: waveInTransform },
  dropIn: { isOut: false, transform: dropInTransform },
  flipInByCharacter: { isOut: false, transform: flipInByCharacterTransform },
  scatterIn: { isOut: false, transform: scatterInTransform },
  elasticInByCharacter: { isOut: false, transform: elasticInByCharacterTransform },
  shakeInByCharacter: { isOut: false, transform: shakeInByCharacterTransform },
  // Exit
  popOut: { isOut: true, transform: popOutTransform },
  slideOutByCharacter: { isOut: true, transform: slideOutByCharacterTransform },
  fadeOutByCharacter: { isOut: true, transform: fadeOutByCharacterTransform },
  blurOutByCharacter: { isOut: true, transform: blurOutByCharacterTransform },
  bounceOutByCharacter: { isOut: true, transform: bounceOutByCharacterTransform },
  zoomOutByCharacter: { isOut: true, transform: zoomOutByCharacterTransform },
  rotateOutByCharacter: { isOut: true, transform: rotateOutByCharacterTransform },
  flipOutByCharacter: { isOut: true, transform: flipOutByCharacterTransform },
  scatterOut: { isOut: true, transform: scatterOutTransform },
  elasticOutByCharacter: { isOut: true, transform: elasticOutByCharacterTransform },
  waveOut: { isOut: true, transform: waveOutTransform },
  dropOut: { isOut: true, transform: dropOutTransform },
  shakeOutByCharacter: { isOut: true, transform: shakeOutByCharacterTransform }
};

// ../../shared/render/textRenderer.ts
function isIdentityTransform(t) {
  return Math.abs(t.offsetX) < 1e-6 && Math.abs(t.offsetY) < 1e-6 && Math.abs(t.rotation) < 1e-6 && Math.abs(t.scaleX - 1) < 1e-6 && Math.abs(t.scaleY - 1) < 1e-6 && Math.abs(t.alpha - 1) < 1e-6 && (!t.blur || t.blur < 0.1);
}
function strokeTextNoShadow(ctx2, text, x, y, strokeColor, strokeWidth) {
  if (!(strokeWidth > 0 && strokeColor)) return;
  ctx2.lineWidth = strokeWidth;
  ctx2.lineJoin = "miter";
  ctx2.lineCap = "butt";
  ctx2.miterLimit = 4;
  ctx2.strokeStyle = strokeColor;
  ctx2.strokeText(text, x, y);
}
function renderCharAnimation(ctx2, wrappedLines, lineXs, lineYs, lineWs, textAlign, animationProgress, isOut, getTransform, fontSpec, textColor, strokeColor, strokeWidth, spacingPx, charWidthCache, hasShadow = false) {
  const lineGraphemes = wrappedLines.map((l) => toGraphemes(l));
  const totalChars = lineGraphemes.reduce((sum, g) => sum + g.length, 0);
  if (totalChars === 0) return;
  ctx2.save();
  ctx2.font = fontSpec;
  const savedAlpha = ctx2.globalAlpha;
  let charCount = 0;
  for (let i = 0; i < wrappedLines.length; i++) {
    const graphemes = lineGraphemes[i];
    const lineY = lineYs[i];
    const charWidths = new Array(graphemes.length);
    const prefixX = new Array(graphemes.length);
    let accX = 0;
    for (let j2 = 0; j2 < graphemes.length; j2++) {
      prefixX[j2] = accX;
      const cwKey = charWidthCache ? `${fontSpec}|${graphemes[j2]}` : "";
      const cwCached = charWidthCache?.get(cwKey);
      if (cwCached !== void 0) {
        charWidths[j2] = cwCached;
      } else {
        charWidths[j2] = ctx2.measureText(graphemes[j2]).width;
        charWidthCache?.set(cwKey, charWidths[j2]);
      }
      accX += charWidths[j2] + spacingPx;
    }
    let lineBaseX;
    if (textAlign === "center") {
      lineBaseX = lineXs[i] - lineWs[i] / 2;
    } else if (textAlign === "left") {
      lineBaseX = lineXs[i];
    } else {
      lineBaseX = lineXs[i] - lineWs[i];
    }
    let j = 0;
    while (j < graphemes.length) {
      const charStartProgress = (charCount + j) / totalChars;
      const charEndProgress = (charCount + j + 1) / totalChars;
      let charProgress = 0;
      if (animationProgress >= charEndProgress) {
        charProgress = 1;
      } else if (animationProgress > charStartProgress) {
        charProgress = (animationProgress - charStartProgress) / (charEndProgress - charStartProgress);
      }
      const shouldRender = isOut ? charProgress < 1 : charProgress > 0;
      if (shouldRender) {
        const transform = getTransform(charProgress, j, i);
        if (isIdentityTransform(transform)) {
          let batchEnd = j + 1;
          while (batchEnd < graphemes.length) {
            const bStartP = (charCount + batchEnd) / totalChars;
            const bEndP = (charCount + batchEnd + 1) / totalChars;
            let bProgress = 0;
            if (animationProgress >= bEndP) {
              bProgress = 1;
            } else if (animationProgress > bStartP) {
              bProgress = (animationProgress - bStartP) / (bEndP - bStartP);
            }
            const bShouldRender = isOut ? bProgress < 1 : bProgress > 0;
            if (!bShouldRender) break;
            const bTransform = getTransform(bProgress, batchEnd, i);
            if (!isIdentityTransform(bTransform)) break;
            batchEnd++;
          }
          renderBatchChars(
            ctx2,
            graphemes,
            j,
            batchEnd,
            lineBaseX,
            lineY,
            prefixX,
            charWidths,
            savedAlpha,
            fontSpec,
            textColor,
            strokeColor,
            strokeWidth,
            spacingPx,
            hasShadow
          );
          j = batchEnd;
          continue;
        }
        renderSingleChar(
          ctx2,
          graphemes[j],
          lineBaseX + prefixX[j],
          charWidths[j],
          lineY,
          transform,
          savedAlpha,
          fontSpec,
          textColor,
          strokeColor,
          strokeWidth,
          hasShadow
        );
      }
      j++;
    }
    charCount += graphemes.length;
  }
  ctx2.globalAlpha = savedAlpha;
  ctx2.restore();
}
function renderTextCharAnimations(ctx2, wrappedLines, lineXs, lineYs, lineWs, textAlign, fontSpec, textColor, strokeColor, strokeWidth, charSpacingPx, animations, hasShadow, charWidthCache) {
  for (const anim of animations) {
    renderCharAnimation(
      ctx2,
      wrappedLines,
      lineXs,
      lineYs,
      lineWs,
      textAlign,
      anim.progress,
      anim.isOut,
      anim.transform,
      fontSpec,
      textColor,
      strokeColor,
      strokeWidth,
      charSpacingPx,
      charWidthCache,
      hasShadow
    );
  }
}
function renderBatchChars(ctx2, graphemes, start, end, lineBaseX, lineY, prefixX, charWidths, savedAlpha, fontSpec, textColor, strokeColor, strokeWidth, spacingPx, hasShadow) {
  const batchLen = end - start;
  ctx2.save();
  ctx2.globalAlpha = savedAlpha;
  ctx2.font = fontSpec;
  ctx2.textBaseline = "alphabetic";
  const hasStroke = strokeWidth > 0 && !!strokeColor;
  if (spacingPx > 0 || batchLen === 1) {
    ctx2.textAlign = "center";
    if (hasShadow && hasStroke) {
      for (let k = start; k < end; k++) {
        const cx = lineBaseX + prefixX[k] + charWidths[k] / 2;
        strokeTextNoShadow(ctx2, graphemes[k], cx, lineY, strokeColor, strokeWidth);
      }
      disableShadow(ctx2);
      ctx2.fillStyle = textColor;
      for (let k = start; k < end; k++) {
        const cx = lineBaseX + prefixX[k] + charWidths[k] / 2;
        ctx2.fillText(graphemes[k], cx, lineY);
      }
      for (let k = start; k < end; k++) {
        const cx = lineBaseX + prefixX[k] + charWidths[k] / 2;
        strokeTextNoShadow(ctx2, graphemes[k], cx, lineY, strokeColor, strokeWidth);
      }
    } else {
      ctx2.fillStyle = textColor;
      for (let k = start; k < end; k++) {
        const cx = lineBaseX + prefixX[k] + charWidths[k] / 2;
        ctx2.fillText(graphemes[k], cx, lineY);
      }
      disableShadow(ctx2);
      if (hasStroke) {
        for (let k = start; k < end; k++) {
          const cx = lineBaseX + prefixX[k] + charWidths[k] / 2;
          strokeTextNoShadow(ctx2, graphemes[k], cx, lineY, strokeColor, strokeWidth);
        }
      }
    }
  } else {
    const batchText = graphemes.slice(start, end).join("");
    const batchX = lineBaseX + prefixX[start];
    ctx2.textAlign = "left";
    if (hasShadow && hasStroke) {
      strokeTextNoShadow(ctx2, batchText, batchX, lineY, strokeColor, strokeWidth);
      disableShadow(ctx2);
      ctx2.fillStyle = textColor;
      ctx2.fillText(batchText, batchX, lineY);
      strokeTextNoShadow(ctx2, batchText, batchX, lineY, strokeColor, strokeWidth);
    } else {
      ctx2.fillStyle = textColor;
      ctx2.fillText(batchText, batchX, lineY);
      disableShadow(ctx2);
      if (hasStroke) {
        strokeTextNoShadow(ctx2, batchText, batchX, lineY, strokeColor, strokeWidth);
      }
    }
  }
  ctx2.restore();
}
function renderSingleChar(ctx2, char, charX, charWidth, lineY, transform, savedAlpha, fontSpec, textColor, strokeColor, strokeWidth, hasShadow) {
  const charCenterX = charX + charWidth / 2;
  ctx2.save();
  if (transform.blur && transform.blur > 0.1) {
    try {
      ctx2.filter = `blur(${transform.blur}px)`;
    } catch {
    }
  }
  ctx2.translate(charCenterX + transform.offsetX, lineY + transform.offsetY);
  if (transform.rotation !== 0) ctx2.rotate(transform.rotation);
  if (transform.scaleX !== 1 || transform.scaleY !== 1) {
    ctx2.scale(transform.scaleX, transform.scaleY);
  }
  ctx2.globalAlpha = savedAlpha * Math.max(0, Math.min(1, transform.alpha));
  ctx2.font = fontSpec;
  ctx2.textAlign = "center";
  ctx2.textBaseline = "alphabetic";
  const hasStroke = strokeWidth > 0 && !!strokeColor;
  if (hasShadow && hasStroke) {
    strokeTextNoShadow(ctx2, char, 0, 0, strokeColor, strokeWidth);
    disableShadow(ctx2);
    ctx2.fillStyle = textColor;
    ctx2.fillText(char, 0, 0);
    strokeTextNoShadow(ctx2, char, 0, 0, strokeColor, strokeWidth);
  } else {
    ctx2.fillStyle = textColor;
    ctx2.fillText(char, 0, 0);
    disableShadow(ctx2);
    if (hasStroke) {
      strokeTextNoShadow(ctx2, char, 0, 0, strokeColor, strokeWidth);
    }
  }
  ctx2.restore();
}

// ../../server/src/renderer/textCharAnimations.ts
var CHAR_ANIMATION_REGISTRY = [
  // Entry animations
  { progressKey: "_popProgress", textKey: "_popText", isOut: false, getTransform: CHAR_TRANSFORMS.highlight.transform },
  { progressKey: "_slideInByCharacterProgress", textKey: "_slideInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.slideInByCharacter.transform },
  { progressKey: "_fadeInByCharacterProgress", textKey: "_fadeInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.fadeInByCharacter.transform },
  { progressKey: "_blurInByCharacterProgress", textKey: "_blurInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.blurInByCharacter.transform },
  { progressKey: "_bounceInByCharacterProgress", textKey: "_bounceInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.bounceInByCharacter.transform },
  { progressKey: "_zoomInByCharacterProgress", textKey: "_zoomInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.zoomInByCharacter.transform },
  { progressKey: "_waveInProgress", textKey: "_waveInText", isOut: false, getTransform: CHAR_TRANSFORMS.waveIn.transform },
  { progressKey: "_dropInProgress", textKey: "_dropInText", isOut: false, getTransform: CHAR_TRANSFORMS.dropIn.transform },
  { progressKey: "_rotateInByCharacterProgress", textKey: "_rotateInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.rotateInByCharacter.transform },
  { progressKey: "_flipInByCharacterProgress", textKey: "_flipInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.flipInByCharacter.transform },
  { progressKey: "_scatterInProgress", textKey: "_scatterInText", isOut: false, getTransform: CHAR_TRANSFORMS.scatterIn.transform },
  { progressKey: "_elasticInByCharacterProgress", textKey: "_elasticInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.elasticInByCharacter.transform },
  { progressKey: "_shakeInByCharacterProgress", textKey: "_shakeInByCharacterText", isOut: false, getTransform: CHAR_TRANSFORMS.shakeInByCharacter.transform },
  // Exit animations
  { progressKey: "_popOutByCharacterProgress", textKey: "_popOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.popOut.transform },
  { progressKey: "_slideOutByCharacterProgress", textKey: "_slideOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.slideOutByCharacter.transform },
  { progressKey: "_fadeOutByCharacterProgress", textKey: "_fadeOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.fadeOutByCharacter.transform },
  { progressKey: "_blurOutByCharacterProgress", textKey: "_blurOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.blurOutByCharacter.transform },
  { progressKey: "_bounceOutByCharacterProgress", textKey: "_bounceOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.bounceOutByCharacter.transform },
  { progressKey: "_zoomOutByCharacterProgress", textKey: "_zoomOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.zoomOutByCharacter.transform },
  { progressKey: "_rotateOutByCharacterProgress", textKey: "_rotateOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.rotateOutByCharacter.transform },
  { progressKey: "_flipOutByCharacterProgress", textKey: "_flipOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.flipOutByCharacter.transform },
  { progressKey: "_scatterOutProgress", textKey: "_scatterOutText", isOut: true, getTransform: CHAR_TRANSFORMS.scatterOut.transform },
  { progressKey: "_elasticOutByCharacterProgress", textKey: "_elasticOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.elasticOutByCharacter.transform },
  { progressKey: "_shakeOutByCharacterProgress", textKey: "_shakeOutByCharacterText", isOut: true, getTransform: CHAR_TRANSFORMS.shakeOutByCharacter.transform },
  { progressKey: "_waveOutProgress", textKey: "_waveOutText", isOut: true, getTransform: CHAR_TRANSFORMS.waveOut.transform },
  { progressKey: "_dropOutProgress", textKey: "_dropOutText", isOut: true, getTransform: CHAR_TRANSFORMS.dropOut.transform }
];
function renderTextCharAnimations2(ctx2, props, wrappedLines, lineXs, lineYs, lineWs, textAlign, textColor, fontSpec, strokeColor, strokeWidth, scaleX, scaleY, charSpacingPx = 0, charWidthCache, skipShadow = false) {
  const animations = [];
  for (const def of CHAR_ANIMATION_REGISTRY) {
    const progress = props[def.progressKey];
    const hasText = !!props[def.textKey];
    if (progress !== void 0 && progress >= 0 && hasText) {
      animations.push({ progress, isOut: def.isOut, transform: def.getTransform });
    }
  }
  if (animations.length === 0) return false;
  const hasShadow = !skipShadow && !!(props.shadowColor || props.shadowBlur || props.shadowOffsetX || props.shadowOffsetY);
  if (hasShadow) {
    const elemSx = props.scaleX ?? 1;
    const elemSy = props.scaleY ?? 1;
    ctx2.shadowColor = props.shadowColor || "#000000";
    ctx2.shadowBlur = (props.shadowBlur ?? 0) * (scaleX + scaleY) * (elemSx + elemSy) / 4;
    ctx2.shadowOffsetX = (props.shadowOffsetX ?? 0) * scaleX * elemSx;
    ctx2.shadowOffsetY = (props.shadowOffsetY ?? 0) * scaleY * elemSy;
  }
  renderTextCharAnimations(
    ctx2,
    wrappedLines,
    lineXs,
    lineYs,
    lineWs,
    textAlign,
    fontSpec,
    textColor,
    strokeColor,
    strokeWidth,
    charSpacingPx,
    animations,
    hasShadow,
    charWidthCache
  );
  disableShadow(ctx2);
  return true;
}

// ../../server/src/renderer/FontRegistry.ts
import { FontLibrary } from "skia-canvas";
import * as path3 from "path";
import * as fs4 from "fs";
import * as os3 from "os";
import * as crypto3 from "crypto";
import https2 from "https";
import http2 from "http";
var FONTS_DIR = (() => {
  const primary = path3.resolve(import.meta.dirname, "../../data/fonts");
  if (fs4.existsSync(primary)) return primary;
  const cliFallback = path3.resolve(import.meta.dirname, "../data/fonts");
  if (fs4.existsSync(cliFallback)) return cliFallback;
  return primary;
})();
var SYSTEM_FONTS = /* @__PURE__ */ new Set([
  "Arial",
  "Arial Black",
  "Verdana",
  "Tahoma",
  "Impact",
  "Times New Roman",
  "Georgia",
  "Courier New"
]);
var FONT_FALLBACK_MAP = {
  Helvetica: "Roboto",
  "Helvetica Neue": "Roboto",
  "Segoe UI": "Roboto",
  "San Francisco": "Roboto",
  Garamond: "EB Garamond",
  Cambria: "Caladea",
  Consolas: "Roboto Mono",
  Futura: "Jost",
  "Microsoft YaHei": "Noto Sans SC",
  "PingFang SC": "Noto Sans SC",
  SimHei: "Noto Sans SC",
  SimSun: "Noto Sans SC"
};
var BUNDLED_GOOGLE_FONTS = {
  Roboto: ["Roboto-Variable.ttf", "Roboto-Italic-Variable.ttf"],
  "Open Sans": ["OpenSans-Variable.ttf"],
  Lato: ["Lato-Regular.ttf", "Lato-Bold.ttf"],
  Montserrat: ["Montserrat-Variable.ttf"],
  Poppins: ["Poppins-Regular.ttf", "Poppins-Bold.ttf"],
  Nunito: ["Nunito-Variable.ttf"],
  "Noto Sans": ["NotoSans-Variable.ttf"],
  "Fira Code": ["FiraCode-Variable.ttf"],
  "Dancing Script": ["DancingScript-Variable.ttf"],
  Pacifico: ["Pacifico-Regular.ttf"],
  Oswald: ["Oswald-Variable.ttf"],
  "Bebas Neue": ["BebasNeue-Regular.ttf"],
  "Playfair Display": [
    "PlayfairDisplay-Variable.ttf",
    "PlayfairDisplay-Italic-Variable.ttf"
  ],
  "EB Garamond": ["EBGaramond-Variable.ttf", "EBGaramond-Italic-Variable.ttf"],
  Caladea: [
    "Caladea-Regular.ttf",
    "Caladea-Bold.ttf",
    "Caladea-Italic.ttf",
    "Caladea-BoldItalic.ttf"
  ],
  "Roboto Mono": ["RobotoMono-Variable.ttf"],
  Jost: ["Jost-Variable.ttf", "Jost-Italic-Variable.ttf"],
  "Noto Sans SC": ["NotoSansSC-Variable.ttf"]
};
var registeredFamilies = /* @__PURE__ */ new Set();
var googleFontsRegistered = false;
var canonicalFontNames = /* @__PURE__ */ new Map();
function initCanonicalNames() {
  for (const name of Object.keys(BUNDLED_GOOGLE_FONTS)) {
    canonicalFontNames.set(name.toLowerCase(), name);
  }
  for (const name of SYSTEM_FONTS) {
    canonicalFontNames.set(name.toLowerCase(), name);
  }
  for (const name of Object.keys(FONT_FALLBACK_MAP)) {
    canonicalFontNames.set(name.toLowerCase(), name);
  }
}
initCanonicalNames();
function resolveFontPaths(files) {
  return files.map((f) => path3.join(FONTS_DIR, f)).filter((p) => fs4.existsSync(p));
}
var FontRegistry = class _FontRegistry {
  /**
   * Register all bundled Google Fonts (idempotent — only executes once).
   * Call at server startup for best performance.
   */
  static registerGoogleFonts() {
    if (googleFontsRegistered) return;
    googleFontsRegistered = true;
    if (!fs4.existsSync(FONTS_DIR)) {
      console.warn(
        `[FontRegistry] Fonts directory not found: ${FONTS_DIR}. Run scripts/download-google-fonts.sh first.`
      );
      return;
    }
    let registered = 0;
    let skipped = 0;
    for (const [family, files] of Object.entries(BUNDLED_GOOGLE_FONTS)) {
      const fontPaths = resolveFontPaths(files);
      if (fontPaths.length === 0) {
        console.warn(`[FontRegistry] No font files found for "${family}"`);
        skipped += files.length;
        continue;
      }
      try {
        FontLibrary.use(family, fontPaths);
        registered += fontPaths.length;
        registeredFamilies.add(family);
      } catch (err) {
        console.warn(`[FontRegistry] Failed to register "${family}":`, err);
        skipped += files.length;
      }
    }
    let fallbackRegistered = 0;
    for (const [originalFont, substituteFont] of Object.entries(
      FONT_FALLBACK_MAP
    )) {
      const files = BUNDLED_GOOGLE_FONTS[substituteFont];
      if (!files) continue;
      const fontPaths = resolveFontPaths(files);
      if (fontPaths.length === 0) continue;
      try {
        FontLibrary.use(originalFont, fontPaths);
        fallbackRegistered++;
        registeredFamilies.add(originalFont);
      } catch {
      }
    }
    console.log(
      `[FontRegistry] Google Fonts registered: ${registered} files (${skipped} skipped), fallback aliases: ${fallbackRegistered}`
    );
  }
  /**
   * Download and register brand/custom fonts from URLs.
   * Returns temporary file paths for cleanup after export.
   *
   * skia-canvas supports TTF, OTF, WOFF, and WOFF2 formats.
   */
  static async registerBrandFonts(fonts) {
    const tempDir = path3.join(os3.tmpdir(), "video-export-fonts");
    fs4.mkdirSync(tempDir, { recursive: true });
    const tempFiles = [];
    for (const font of fonts) {
      if (registeredFamilies.has(font.fontFamily)) {
        continue;
      }
      const ext = font.fileType.toLowerCase();
      try {
        const hash = crypto3.createHash("md5").update(font.url).digest("hex");
        const tempPath = path3.join(tempDir, `${hash}.${ext}`);
        tempFiles.push(tempPath);
        if (!fs4.existsSync(tempPath)) {
          await _FontRegistry.downloadFile(font.url, tempPath);
        }
        if (!registeredFamilies.has(font.fontFamily)) {
          FontLibrary.use(font.fontFamily, [tempPath]);
          registeredFamilies.add(font.fontFamily);
          console.log(
            `[FontRegistry] Brand font registered: ${font.fontFamily}`
          );
        }
      } catch (err) {
        console.warn(
          `[FontRegistry] Failed to download/register brand font "${font.fontFamily}":`,
          err
        );
      }
    }
    return tempFiles;
  }
  /**
   * Extract required fonts from canvasState.
   * Scans all text elements and captions for font families.
   */
  static extractRequiredFonts(canvasState) {
    const usedFamilies = /* @__PURE__ */ new Set();
    const elements = canvasState.elements || [];
    for (const el of elements) {
      if (el.properties?.fontFamily) {
        usedFamilies.add(el.properties.fontFamily);
      }
      if (el.fabricObject?.fontFamily) {
        usedFamilies.add(el.fabricObject.fontFamily);
      }
    }
    const captions = canvasState.captions || [];
    for (const caption of captions) {
      if (caption.fontFamily) {
        usedFamilies.add(caption.fontFamily);
      }
    }
    const captionStyle = canvasState.globalCaptionStyle || canvasState.captionStyle;
    if (captionStyle?.fontFamily) {
      usedFamilies.add(captionStyle.fontFamily);
    }
    const googleFonts = [];
    const brandFonts = [];
    const fontAssets = canvasState.fontAssets || {};
    const fontAssetsLower = /* @__PURE__ */ new Map();
    for (const key of Object.keys(fontAssets)) {
      fontAssetsLower.set(key.toLowerCase(), key);
    }
    for (const family of usedFamilies) {
      const canonical = canonicalFontNames.get(family.toLowerCase());
      if (canonical) {
        if (SYSTEM_FONTS.has(canonical)) continue;
        if (FONT_FALLBACK_MAP[canonical]) {
          if (family !== canonical) {
            _FontRegistry.ensureAlias(family, canonical);
          }
          continue;
        }
        if (BUNDLED_GOOGLE_FONTS[canonical]) {
          googleFonts.push(canonical);
          if (family !== canonical) {
            _FontRegistry.ensureAlias(family, canonical);
          }
          continue;
        }
      }
      const assetKey = fontAssetsLower.get(family.toLowerCase());
      if (assetKey) {
        brandFonts.push({
          fontFamily: family,
          url: fontAssets[assetKey].url,
          fileType: fontAssets[assetKey].fileType
        });
      }
    }
    return { googleFonts, brandFonts };
  }
  /**
   * Register an alias name pointing to the same font files as the canonical name.
   * Used when the user-provided font name differs only in casing (e.g. "roboto" → "Roboto").
   */
  static ensureAlias(alias, canonical) {
    if (registeredFamilies.has(alias)) return;
    let files = BUNDLED_GOOGLE_FONTS[canonical];
    if (!files) {
      const substitute = FONT_FALLBACK_MAP[canonical];
      if (substitute) files = BUNDLED_GOOGLE_FONTS[substitute];
    }
    if (!files) return;
    const fontPaths = resolveFontPaths(files);
    if (fontPaths.length === 0) return;
    try {
      FontLibrary.use(alias, fontPaths);
      registeredFamilies.add(alias);
    } catch {
    }
  }
  /**
   * Clean up temporary font files downloaded for brand fonts.
   */
  static cleanupTempFonts(tempFiles) {
    for (const filePath of tempFiles) {
      try {
        if (fs4.existsSync(filePath)) {
          fs4.unlinkSync(filePath);
        }
      } catch {
      }
    }
  }
  /**
   * Download a file from URL to local path, following redirects.
   */
  static downloadFile(url, destPath) {
    return new Promise((resolve2, reject) => {
      const protocol = url.startsWith("https") ? https2 : http2;
      const request = protocol.get(url, { timeout: 3e4 }, (response) => {
        if (response.statusCode && response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          _FontRegistry.downloadFile(response.headers.location, destPath).then(
            resolve2,
            reject
          );
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode} for ${url}`));
          return;
        }
        const fileStream = fs4.createWriteStream(destPath);
        response.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close();
          resolve2();
        });
        fileStream.on("error", (err) => {
          fs4.unlink(destPath, () => {
          });
          reject(err);
        });
      });
      request.on("error", (err) => {
        fs4.unlink(destPath, () => {
        });
        reject(err);
      });
      request.on("timeout", () => {
        request.destroy();
        fs4.unlink(destPath, () => {
        });
        reject(new Error(`Download timeout for ${url}`));
      });
    });
  }
};

// ../../shared/effects/constants.ts
var RENDER_ORDER = {
  FILTER: 100,
  TEMPORAL: 150,
  BLUR: 200,
  DISTORTION: 300,
  LIGHT: 400,
  GLITCH: 500,
  POSTPROCESS: 600,
  OVERLAY: 700
};

// ../../shared/effects/registry/_helpers.ts
function num(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

// ../../shared/effects/registry/blur.ts
var BLUR_EFFECTS = {
  gaussianBlur: {
    type: "gaussianBlur",
    category: "blur",
    label: "effect_gaussian_blur",
    thumbnail: "gaussianBlur",
    params: [
      {
        key: "radius",
        type: "number",
        label: "effect_param_radius",
        default: 4,
        min: 0,
        max: 20,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "GAUSSIAN_BLUR_FRAG",
    canvas2dFallback: "applyGaussianBlur",
    renderOrder: RENDER_ORDER.BLUR,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.radius, 4);
      return { radius: base * (0.6 + 0.4 * noise2D(t / 1e3 * speed, 0)) };
    }
  },
  radialBlur: {
    type: "radialBlur",
    category: "blur",
    label: "effect_radial_blur",
    thumbnail: "radialBlur",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.3,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "centerX",
        type: "number",
        label: "effect_param_center_x",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "centerY",
        type: "number",
        label: "effect_param_center_y",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "RADIAL_BLUR_FRAG",
    canvas2dFallback: "applyRadialBlur",
    renderOrder: RENDER_ORDER.BLUR,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const ts = t / 1e3 * speed;
      return {
        centerX: 0.5 + 0.15 * noise2D(ts, 260),
        centerY: 0.5 + 0.15 * noise2D(ts, 270)
      };
    }
  },
  motionBlur: {
    type: "motionBlur",
    category: "blur",
    label: "effect_motion_blur",
    thumbnail: "motionBlur",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "samples",
        type: "number",
        label: "effect_param_samples",
        default: 8,
        min: 2,
        max: 16,
        step: 1,
        keyframeable: false
      }
    ],
    fragmentShader: "MOTION_BLUR_FRAG",
    canvas2dFallback: "applyMotionBlur",
    requiresPreviousFrame: true,
    renderOrder: RENDER_ORDER.TEMPORAL
  },
  tiltShift: {
    type: "tiltShift",
    category: "blur",
    label: "effect_tilt_shift",
    thumbnail: "tiltShift",
    params: [
      {
        key: "blurAmount",
        type: "number",
        label: "effect_param_blur_amount",
        default: 8,
        min: 0,
        max: 20,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "focusPosition",
        type: "number",
        label: "effect_param_focus_position",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "focusWidth",
        type: "number",
        label: "effect_param_focus_width",
        default: 0.15,
        min: 0,
        max: 0.5,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "TILT_SHIFT_FRAG",
    canvas2dFallback: "applyTiltShift",
    renderOrder: RENDER_ORDER.BLUR,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      return { focusPosition: 0.5 + 0.25 * noise2D(t / 1e3 * speed, 130) };
    }
  },
  bokeh: {
    type: "bokeh",
    category: "blur",
    label: "effect_bokeh",
    thumbnail: "bokeh",
    params: [
      {
        key: "radius",
        type: "number",
        label: "effect_param_radius",
        default: 6,
        min: 1,
        max: 20,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "threshold",
        type: "number",
        label: "effect_param_threshold",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 1,
        min: 0,
        max: 2,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "BOKEH_FRAG",
    canvas2dFallback: "applyBokeh",
    renderOrder: RENDER_ORDER.BLUR,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.radius, 6);
      return { radius: base * (0.7 + 0.3 * noise2D(t / 1e3 * speed, 140)) };
    }
  },
  kawaseBlur: {
    type: "kawaseBlur",
    category: "blur",
    label: "effect_kawase_blur",
    thumbnail: "kawaseBlur",
    params: [
      {
        key: "radius",
        type: "number",
        label: "effect_param_radius",
        default: 4,
        min: 1,
        max: 20,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "quality",
        type: "number",
        label: "effect_param_quality",
        default: 3,
        min: 1,
        max: 10,
        step: 1,
        keyframeable: false
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "KAWASE_BLUR_FRAG",
    canvas2dFallback: "applyKawaseBlur",
    renderOrder: RENDER_ORDER.BLUR,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.radius, 4);
      return { radius: base + base * 0.3 * noise2D(t / 1e3 * speed, 180) };
    }
  },
  cameraMotionBlur: {
    type: "cameraMotionBlur",
    category: "blur",
    label: "effect_camera_motion_blur",
    thumbnail: "cameraMotionBlur",
    params: [
      {
        key: "samples",
        type: "number",
        label: "effect_param_samples",
        default: 8,
        min: 2,
        max: 32,
        step: 1,
        keyframeable: false
      },
      {
        key: "shutterAngle",
        type: "number",
        label: "effect_param_shutter_angle",
        default: 180,
        min: 0,
        max: 360,
        step: 1,
        keyframeable: true
      },
      {
        key: "decayFactor",
        type: "number",
        label: "effect_param_decay_factor",
        default: 0.5,
        min: 0.1,
        max: 1,
        step: 0.05,
        keyframeable: true
      }
    ],
    fragmentShader: null,
    canvas2dFallback: "applyCameraMotionBlur",
    renderOrder: RENDER_ORDER.TEMPORAL
  }
};

// ../../shared/effects/registry/distortion.ts
var DISTORTION_EFFECTS = {
  wave: {
    type: "wave",
    category: "distortion",
    label: "effect_wave",
    thumbnail: "wave",
    params: [
      {
        key: "amplitude",
        type: "number",
        label: "effect_param_amplitude",
        default: 10,
        min: 0,
        max: 50,
        step: 1,
        keyframeable: true
      },
      {
        key: "frequency",
        type: "number",
        label: "effect_param_frequency",
        default: 4,
        min: 0.5,
        max: 20,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "phase",
        type: "number",
        label: "effect_param_phase",
        default: 0,
        min: 0,
        max: 6.28,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "WAVE_FRAG",
    canvas2dFallback: "applyWave",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 1);
      const phase = num(params.phase, 0);
      return { phase: phase + t / 1e3 * speed * Math.PI * 2 };
    }
  },
  ripple: {
    type: "ripple",
    category: "distortion",
    label: "effect_ripple",
    thumbnail: "ripple",
    params: [
      {
        key: "amplitude",
        type: "number",
        label: "effect_param_amplitude",
        default: 8,
        min: 0,
        max: 30,
        step: 1,
        keyframeable: true
      },
      {
        key: "frequency",
        type: "number",
        label: "effect_param_frequency",
        default: 6,
        min: 1,
        max: 20,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "centerX",
        type: "number",
        label: "effect_param_center_x",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "centerY",
        type: "number",
        label: "effect_param_center_y",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "phase",
        type: "number",
        label: "effect_param_phase",
        default: 0,
        min: 0,
        max: 6.28,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "RIPPLE_FRAG",
    canvas2dFallback: "applyRipple",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 1);
      const phase = num(params.phase, 0);
      return { phase: phase + t / 1e3 * speed * Math.PI * 2 };
    }
  },
  shake: {
    type: "shake",
    category: "distortion",
    label: "effect_shake",
    thumbnail: "shake",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 8,
        min: 0,
        max: 30,
        step: 1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 3,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "SHAKE_FRAG",
    canvas2dFallback: "applyShake",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const intensity = num(params.intensity, 8);
      const speed = num(params.speed, 3);
      const ts = t / 1e3;
      return {
        _offsetX: intensity * noise2D(ts * speed * 5, 250),
        _offsetY: intensity * noise2D(ts * speed * 5, 350)
      };
    }
  },
  fisheye: {
    type: "fisheye",
    category: "distortion",
    label: "effect_fisheye",
    thumbnail: "fisheye",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.8,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "FISHEYE_FRAG",
    canvas2dFallback: "applyFisheye",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 0.8);
      const base = num(params.amount, 0.5);
      return { amount: base * (0.6 + 0.4 * noise2D(t / 1e3 * speed, 40)) };
    }
  },
  swirl: {
    type: "swirl",
    category: "distortion",
    label: "effect_swirl",
    thumbnail: "swirl",
    params: [
      {
        key: "angle",
        type: "number",
        label: "effect_param_angle",
        default: 90,
        min: -360,
        max: 360,
        step: 5,
        keyframeable: true
      },
      {
        key: "radius",
        type: "number",
        label: "effect_param_radius",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "centerX",
        type: "number",
        label: "effect_param_center_x",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "centerY",
        type: "number",
        label: "effect_param_center_y",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.8,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "SWIRL_FRAG",
    canvas2dFallback: "applySwirl",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 0.8);
      const base = num(params.angle, 90);
      return { angle: base + 180 * noise2D(t / 1e3 * speed, 50) };
    }
  },
  kaleidoscope: {
    type: "kaleidoscope",
    category: "distortion",
    label: "effect_kaleidoscope",
    thumbnail: "kaleidoscope",
    params: [
      {
        key: "segments",
        type: "number",
        label: "effect_param_segments",
        default: 6,
        min: 2,
        max: 12,
        step: 1,
        keyframeable: true
      },
      {
        key: "rotation",
        type: "number",
        label: "effect_param_rotation",
        default: 0,
        min: 0,
        max: 360,
        step: 5,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "KALEIDOSCOPE_FRAG",
    canvas2dFallback: "applyKaleidoscope",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      return { rotation: t / 1e3 * speed * 30 % 360 };
    }
  },
  spherize: {
    type: "spherize",
    category: "distortion",
    label: "effect_spherize",
    thumbnail: "spherize",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 0.5,
        min: -1,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "centerX",
        type: "number",
        label: "effect_param_center_x",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "centerY",
        type: "number",
        label: "effect_param_center_y",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.8,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "SPHERIZE_FRAG",
    canvas2dFallback: "applySpherize",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 0.8);
      const base = num(params.amount, 0.5);
      return { amount: base * (0.5 + 0.5 * noise2D(t / 1e3 * speed, 60)) };
    }
  },
  zoomPulse: {
    type: "zoomPulse",
    category: "distortion",
    label: "effect_zoom_pulse",
    thumbnail: "zoomPulse",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 0.15,
        min: 0,
        max: 0.5,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 2,
        min: 0.1,
        max: 10,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "ZOOM_PULSE_FRAG",
    canvas2dFallback: "applyZoomPulse",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 2);
      const amount = num(params.amount, 0.15);
      const zoom = 1 + amount * 0.5 * (1 + noise2D(t / 1e3 * speed, 150));
      return { _zoom: zoom };
    }
  },
  mirror: {
    type: "mirror",
    category: "distortion",
    label: "effect_mirror",
    thumbnail: "mirror",
    params: [
      {
        key: "mode",
        type: "number",
        label: "effect_param_mode",
        default: 0,
        min: 0,
        max: 3,
        step: 1,
        keyframeable: false
      },
      {
        key: "offset",
        type: "number",
        label: "effect_param_offset",
        default: 0,
        min: -0.5,
        max: 0.5,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.8,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "MIRROR_FRAG",
    canvas2dFallback: "applyMirror",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 0.8);
      return { offset: 0.2 * noise2D(t / 1e3 * speed, 160) };
    }
  },
  split: {
    type: "split",
    category: "distortion",
    label: "effect_split",
    thumbnail: "split",
    params: [
      {
        key: "layout",
        type: "number",
        label: "effect_param_layout",
        default: 0,
        min: 0,
        max: 3,
        step: 1,
        keyframeable: false
      },
      {
        key: "zoom",
        type: "number",
        label: "effect_param_zoom",
        default: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.8,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "SPLIT_FRAG",
    canvas2dFallback: "applySplit",
    renderOrder: RENDER_ORDER.DISTORTION,
    animate: (params, t) => {
      const speed = num(params.speed, 0.8);
      return { zoom: 1 + 0.15 * noise2D(t / 1e3 * speed, 170) };
    }
  }
};

// ../../shared/effects/registry/glitch.ts
var GLITCH_EFFECTS = {
  rgbSplit: {
    type: "rgbSplit",
    category: "glitch",
    label: "effect_rgb_split",
    thumbnail: "rgbSplit",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 5,
        min: 0,
        max: 30,
        step: 1,
        keyframeable: true
      },
      {
        key: "angle",
        type: "number",
        label: "effect_param_angle",
        default: 0,
        min: 0,
        max: 360,
        step: 1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "RGB_SPLIT_FRAG",
    canvas2dFallback: "applyRgbSplit",
    renderOrder: RENDER_ORDER.GLITCH,
    animate: (params, t) => {
      const speed = num(params.speed, 1);
      const angle2 = num(params.angle, 0);
      return { angle: (angle2 + t / 1e3 * speed * 90) % 360 };
    }
  },
  glitchBlock: {
    type: "glitchBlock",
    category: "glitch",
    label: "effect_glitch_block",
    thumbnail: "glitchBlock",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "blockSize",
        type: "number",
        label: "effect_param_block_size",
        default: 16,
        min: 4,
        max: 64,
        step: 4,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 2,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "GLITCH_BLOCK_FRAG",
    canvas2dFallback: "applyGlitchBlock",
    renderOrder: RENDER_ORDER.GLITCH,
    animate: (params, t) => {
      const speed = num(params.speed, 2);
      return { _seed: Math.floor(t / 1e3 * speed * 8) };
    }
  }
};

// ../../shared/effects/registry/light.ts
var LIGHT_EFFECTS = {
  vignette: {
    type: "vignette",
    category: "light",
    label: "effect_vignette",
    thumbnail: "vignette",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "radius",
        type: "number",
        label: "effect_param_radius",
        default: 0.8,
        min: 0.1,
        max: 1.5,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "softness",
        type: "number",
        label: "effect_param_softness",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "VIGNETTE_FRAG",
    canvas2dFallback: "applyVignette",
    renderOrder: RENDER_ORDER.LIGHT,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.intensity, 0.5);
      return {
        intensity: base * (0.6 + 0.4 * noise2D(t / 1e3 * speed, 10))
      };
    }
  },
  glow: {
    type: "glow",
    category: "light",
    label: "effect_glow",
    thumbnail: "glow",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "radius",
        type: "number",
        label: "effect_param_radius",
        default: 5,
        min: 1,
        max: 20,
        step: 1,
        keyframeable: true
      },
      {
        key: "threshold",
        type: "number",
        label: "effect_param_threshold",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "GLOW_FRAG",
    canvas2dFallback: "applyGlow",
    renderOrder: RENDER_ORDER.LIGHT,
    animate: (params, t) => {
      const speed = num(params.speed, 1.5);
      const intensity = num(params.intensity, 0.5);
      return {
        intensity: intensity * (0.7 + 0.3 * noise2D(t / 1e3 * speed, 20))
      };
    }
  },
  lensFlare: {
    type: "lensFlare",
    category: "light",
    label: "effect_lens_flare",
    thumbnail: "lensFlare",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.6,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "posX",
        type: "number",
        label: "effect_param_pos_x",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "posY",
        type: "number",
        label: "effect_param_pos_y",
        default: 0.3,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "rays",
        type: "number",
        label: "effect_param_rays",
        default: 6,
        min: 4,
        max: 12,
        step: 1,
        keyframeable: false
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "LENS_FLARE_FRAG",
    canvas2dFallback: "applyLensFlare",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      return { _seed: t / 1e3 * speed };
    }
  },
  lightLeak: {
    type: "lightLeak",
    category: "light",
    label: "effect_light_leak",
    thumbnail: "lightLeak",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "colorR",
        type: "number",
        label: "effect_param_color_r",
        default: 1,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "color",
        colorComponent: "R"
      },
      {
        key: "colorG",
        type: "number",
        label: "effect_param_color_g",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "color",
        colorComponent: "G"
      },
      {
        key: "colorB",
        type: "number",
        label: "effect_param_color_b",
        default: 0.2,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "color",
        colorComponent: "B"
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.3,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "LIGHT_LEAK_FRAG",
    canvas2dFallback: "applyLightLeak",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (params, t) => {
      const speed = num(params.speed, 0.3);
      return { _seed: t / 1e3 * speed };
    }
  },
  sparkle: {
    type: "sparkle",
    category: "light",
    label: "effect_sparkle",
    thumbnail: "sparkle",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "density",
        type: "number",
        label: "effect_param_density",
        default: 0.3,
        min: 0.1,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "size",
        type: "number",
        label: "effect_param_size",
        default: 3,
        min: 1,
        max: 10,
        step: 0.5,
        keyframeable: true
      }
    ],
    fragmentShader: "SPARKLE_FRAG",
    canvas2dFallback: "applySparkle",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (params, t) => {
      const speed = num(params.speed, 1);
      return { _seed: t / 1e3 * speed };
    }
  },
  flash: {
    type: "flash",
    category: "light",
    label: "effect_flash",
    thumbnail: "flash",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.8,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 2,
        min: 0.1,
        max: 10,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "decay",
        type: "number",
        label: "effect_param_decay",
        default: 0.5,
        min: 0.1,
        max: 1,
        step: 0.05,
        keyframeable: true
      }
    ],
    fragmentShader: "FLASH_FRAG",
    canvas2dFallback: "applyFlash",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (params, t) => {
      const speed = num(params.speed, 2);
      const decay = num(params.decay, 0.5);
      const phase = t / 1e3 * speed * Math.PI * 2;
      const raw = Math.max(0, Math.sin(phase));
      return { _flash: Math.pow(raw, 1 / decay) };
    }
  },
  godray: {
    type: "godray",
    category: "light",
    label: "effect_godray",
    thumbnail: "godray",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "angle",
        type: "number",
        label: "effect_param_angle",
        default: 30,
        min: -180,
        max: 180,
        step: 1,
        keyframeable: true
      },
      {
        key: "lacunarity",
        type: "number",
        label: "effect_param_lacunarity",
        default: 2.5,
        min: 1,
        max: 5,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "gain",
        type: "number",
        label: "effect_param_gain",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "GODRAY_FRAG",
    canvas2dFallback: "applyGodray",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (_params, t) => {
      const speed = Number(_params.speed) || 0.5;
      return { _seed: t / 1e3 * speed };
    }
  },
  spotlight: {
    type: "spotlight",
    category: "light",
    label: "effect_spotlight",
    thumbnail: "spotlight",
    params: [
      {
        key: "posX",
        type: "number",
        label: "effect_param_pos_x",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "posY",
        type: "number",
        label: "effect_param_pos_y",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "radius",
        type: "number",
        label: "effect_param_radius",
        default: 0.5,
        min: 0.05,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "softness",
        type: "number",
        label: "effect_param_softness",
        default: 0.5,
        min: 0,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 1.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "spotColorR",
        type: "number",
        label: "effect_param_spot_color_r",
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true,
        colorGroup: "spotColor",
        colorComponent: "R"
      },
      {
        key: "spotColorG",
        type: "number",
        label: "effect_param_spot_color_g",
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true,
        colorGroup: "spotColor",
        colorComponent: "G"
      },
      {
        key: "spotColorB",
        type: "number",
        label: "effect_param_spot_color_b",
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        keyframeable: true,
        colorGroup: "spotColor",
        colorComponent: "B"
      },
      {
        key: "ambient",
        type: "number",
        label: "effect_param_ambient",
        default: 0.3,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.3,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "SPOTLIGHT_FRAG",
    canvas2dFallback: "applySpotlight",
    renderOrder: RENDER_ORDER.LIGHT,
    animate: (params, t) => {
      const speed = num(params.speed, 0.3);
      const ts = t / 1e3 * speed;
      return {
        posX: 0.5 + 0.2 * noise2D(ts, 310),
        posY: 0.5 + 0.15 * noise2D(ts, 320)
      };
    }
  }
};

// ../../shared/effects/registry/basic.ts
var BASIC_EFFECTS = {
  sharpen: {
    type: "sharpen",
    category: "basic",
    label: "effect_sharpen",
    thumbnail: "sharpen",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 0.5,
        min: 0,
        max: 2,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "SHARPEN_FRAG",
    canvas2dFallback: "applySharpen",
    renderOrder: RENDER_ORDER.FILTER,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.amount, 0.5);
      return { amount: base * (0.5 + 0.5 * noise2D(t / 1e3 * speed, 30)) };
    }
  },
  colorGrading: {
    type: "colorGrading",
    category: "basic",
    label: "effect_color_grading",
    thumbnail: "colorGrading",
    params: [
      {
        key: "liftR",
        type: "number",
        label: "effect_param_lift_r",
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "liftG",
        type: "number",
        label: "effect_param_lift_g",
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "liftB",
        type: "number",
        label: "effect_param_lift_b",
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "gamma",
        type: "number",
        label: "effect_param_gamma",
        default: 1,
        min: 0.2,
        max: 3,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "gain",
        type: "number",
        label: "effect_param_gain",
        default: 1,
        min: 0,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "saturation",
        type: "number",
        label: "effect_param_saturation",
        default: 1,
        min: 0,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "temperature",
        type: "number",
        label: "effect_param_temperature",
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "tint",
        type: "number",
        label: "effect_param_tint",
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "hue",
        type: "number",
        label: "effect_param_hue",
        default: 0,
        min: -180,
        max: 180,
        step: 1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.3,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "COLOR_GRADING_FRAG",
    canvas2dFallback: "applyColorGrading",
    renderOrder: RENDER_ORDER.FILTER,
    animate: (params, t) => {
      const speed = num(params.speed, 0.3);
      const ts = t / 1e3 * speed;
      const baseSat = num(params.saturation, 1);
      const baseGain = num(params.gain, 1);
      return {
        saturation: baseSat * (0.7 + 0.3 * noise2D(ts, 280)),
        gain: baseGain * (0.85 + 0.15 * noise2D(ts, 290))
      };
    }
  },
  invert: {
    type: "invert",
    category: "basic",
    label: "effect_invert",
    thumbnail: "invert",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 1,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "INVERT_FRAG",
    canvas2dFallback: "applyInvert",
    renderOrder: RENDER_ORDER.FILTER
  },
  duotone: {
    type: "duotone",
    category: "basic",
    label: "effect_duotone",
    thumbnail: "duotone",
    params: [
      {
        key: "shadowR",
        type: "number",
        label: "effect_param_shadow_r",
        default: 0,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "shadow",
        colorComponent: "R"
      },
      {
        key: "shadowG",
        type: "number",
        label: "effect_param_shadow_g",
        default: 0,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "shadow",
        colorComponent: "G"
      },
      {
        key: "shadowB",
        type: "number",
        label: "effect_param_shadow_b",
        default: 0.3,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "shadow",
        colorComponent: "B"
      },
      {
        key: "highlightR",
        type: "number",
        label: "effect_param_highlight_r",
        default: 1,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "highlight",
        colorComponent: "R"
      },
      {
        key: "highlightG",
        type: "number",
        label: "effect_param_highlight_g",
        default: 0.9,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "highlight",
        colorComponent: "G"
      },
      {
        key: "highlightB",
        type: "number",
        label: "effect_param_highlight_b",
        default: 0.6,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true,
        colorGroup: "highlight",
        colorComponent: "B"
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "DUOTONE_FRAG",
    canvas2dFallback: "applyDuotone",
    renderOrder: RENDER_ORDER.FILTER,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const ts = t / 1e3 * speed;
      const shift = 0.15 * noise2D(ts, 300);
      return {
        shadowR: Math.max(0, Math.min(1, num(params.shadowR, 0) + shift)),
        highlightR: Math.max(
          0,
          Math.min(1, num(params.highlightR, 1) - shift * 0.5)
        )
      };
    }
  }
};

// ../../shared/effects/registry/stylize.ts
var STYLIZE_EFFECTS = {
  vhs: {
    type: "vhs",
    category: "stylize",
    label: "effect_vhs",
    thumbnail: "vhs",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.6,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "scanlineOpacity",
        type: "number",
        label: "effect_param_scanline_opacity",
        default: 0.3,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "colorBleed",
        type: "number",
        label: "effect_param_color_bleed",
        default: 3,
        min: 0,
        max: 10,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "noiseAmount",
        type: "number",
        label: "effect_param_noise_amount",
        default: 0.15,
        min: 0,
        max: 0.5,
        step: 0.01,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "VHS_FRAG",
    canvas2dFallback: "applyVhs",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 1);
      return { _seed: Math.floor(t / 1e3 * speed * 12) };
    }
  },
  filmGrain: {
    type: "filmGrain",
    category: "stylize",
    label: "effect_film_grain",
    thumbnail: "filmGrain",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 0.3,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "size",
        type: "number",
        label: "effect_param_size",
        default: 1,
        min: 1,
        max: 4,
        step: 1,
        keyframeable: false
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 3,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "FILM_GRAIN_FRAG",
    canvas2dFallback: "applyFilmGrain",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 3);
      return { _seed: Math.floor(t / 1e3 * speed * 24) };
    }
  },
  pixelate: {
    type: "pixelate",
    category: "stylize",
    label: "effect_pixelate",
    thumbnail: "pixelate",
    params: [
      {
        key: "blockSize",
        type: "number",
        label: "effect_param_block_size",
        default: 8,
        min: 2,
        max: 64,
        step: 1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "PIXELATE_EFFECT_FRAG",
    canvas2dFallback: "applyPixelate",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.blockSize, 8);
      return {
        blockSize: Math.round(
          base * (0.5 + 0.5 * noise2D(t / 1e3 * speed, 80))
        )
      };
    }
  },
  posterize: {
    type: "posterize",
    category: "stylize",
    label: "effect_posterize",
    thumbnail: "posterize",
    params: [
      {
        key: "levels",
        type: "number",
        label: "effect_param_levels",
        default: 4,
        min: 2,
        max: 16,
        step: 1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "POSTERIZE_FRAG",
    canvas2dFallback: "applyPosterize",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.levels, 4);
      return {
        levels: Math.max(
          2,
          Math.round(base + 3 * noise2D(t / 1e3 * speed, 90))
        )
      };
    }
  },
  halftone: {
    type: "halftone",
    category: "stylize",
    label: "effect_halftone",
    thumbnail: "halftone",
    params: [
      {
        key: "dotSize",
        type: "number",
        label: "effect_param_dot_size",
        default: 6,
        min: 2,
        max: 20,
        step: 1,
        keyframeable: true
      },
      {
        key: "angle",
        type: "number",
        label: "effect_param_angle",
        default: 45,
        min: 0,
        max: 180,
        step: 5,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "HALFTONE_FRAG",
    canvas2dFallback: "applyHalftone",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      return { angle: (45 + t / 1e3 * speed * 20) % 180 };
    }
  },
  emboss: {
    type: "emboss",
    category: "stylize",
    label: "effect_emboss",
    thumbnail: "emboss",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 1,
        min: 0,
        max: 2,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "EMBOSS_FRAG",
    canvas2dFallback: "applyEmboss",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.amount, 1);
      return { amount: base * (0.5 + 0.5 * noise2D(t / 1e3 * speed, 110)) };
    }
  },
  thermal: {
    type: "thermal",
    category: "stylize",
    label: "effect_thermal",
    thumbnail: "thermal",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.8,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "THERMAL_FRAG",
    canvas2dFallback: "applyThermal",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const ts = t / 1e3 * speed;
      return { _thermalShift: 0.5 * (1 + noise2D(ts, 120)) };
    }
  },
  echo: {
    type: "echo",
    category: "stylize",
    label: "effect_echo",
    thumbnail: "echo",
    params: [
      {
        key: "decay",
        type: "number",
        label: "effect_param_decay",
        default: 0.6,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "count",
        type: "number",
        label: "effect_param_count",
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        keyframeable: false
      }
    ],
    fragmentShader: "ECHO_FRAG",
    canvas2dFallback: "applyEcho",
    requiresPreviousFrame: true,
    renderOrder: RENDER_ORDER.TEMPORAL
  },
  rain: {
    type: "rain",
    category: "stylize",
    label: "effect_rain",
    thumbnail: "rain",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "angle",
        type: "number",
        label: "effect_param_angle",
        default: 10,
        min: -45,
        max: 45,
        step: 1,
        keyframeable: true
      },
      {
        key: "dropLength",
        type: "number",
        label: "effect_param_drop_length",
        default: 15,
        min: 5,
        max: 30,
        step: 1,
        keyframeable: true
      }
    ],
    fragmentShader: "RAIN_FRAG",
    canvas2dFallback: "applyRain",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (params, t) => {
      const speed = num(params.speed, 1);
      return { _seed: t / 1e3 * speed };
    }
  },
  snow: {
    type: "snow",
    category: "stylize",
    label: "effect_snow",
    thumbnail: "snow",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "flakeSize",
        type: "number",
        label: "effect_param_flake_size",
        default: 2,
        min: 1,
        max: 5,
        step: 0.5,
        keyframeable: true
      }
    ],
    fragmentShader: "SNOW_FRAG",
    canvas2dFallback: "applySnow",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      return { _seed: t / 1e3 * speed };
    }
  },
  colorShift: {
    type: "colorShift",
    category: "stylize",
    label: "effect_color_shift",
    thumbnail: "colorShift",
    params: [
      {
        key: "amount",
        type: "number",
        label: "effect_param_amount",
        default: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "COLOR_SHIFT_FRAG",
    canvas2dFallback: "applyColorShift",
    renderOrder: RENDER_ORDER.FILTER,
    animate: (params, t) => {
      const speed = num(params.speed, 1);
      return { _hueOffset: t / 1e3 * speed * 60 % 360 };
    }
  },
  neonEdge: {
    type: "neonEdge",
    category: "stylize",
    label: "effect_neon_edge",
    thumbnail: "neonEdge",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.7,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "colorSpeed",
        type: "number",
        label: "effect_param_color_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      },
      {
        key: "edgeWidth",
        type: "number",
        label: "effect_param_edge_width",
        default: 1,
        min: 0.5,
        max: 3,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "bgDarken",
        type: "number",
        label: "effect_param_bg_darken",
        default: 0.7,
        min: 0,
        max: 1,
        step: 0.05,
        keyframeable: true
      }
    ],
    fragmentShader: "NEON_EDGE_FRAG",
    canvas2dFallback: "applyNeonEdge",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.colorSpeed, 1);
      return { _hueOffset: t / 1e3 * speed * 60 % 360 };
    }
  },
  ascii: {
    type: "ascii",
    category: "stylize",
    label: "effect_ascii",
    thumbnail: "ascii",
    params: [
      {
        key: "charSize",
        type: "number",
        label: "effect_param_char_size",
        default: 8,
        min: 4,
        max: 32,
        step: 1,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "ASCII_FRAG",
    canvas2dFallback: "applyAscii",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 0.5);
      const base = num(params.charSize, 8);
      return { charSize: base + base * 0.3 * noise2D(t / 1e3 * speed, 190) };
    }
  },
  crossHatch: {
    type: "crossHatch",
    category: "stylize",
    label: "effect_crosshatch",
    thumbnail: "crossHatch",
    params: [
      {
        key: "spacing",
        type: "number",
        label: "effect_param_spacing",
        default: 10,
        min: 3,
        max: 30,
        step: 1,
        keyframeable: true
      },
      {
        key: "lineWidth",
        type: "number",
        label: "effect_param_line_width",
        default: 1,
        min: 0.5,
        max: 5,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 0.4,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "CROSSHATCH_FRAG",
    canvas2dFallback: "applyCrossHatch",
    renderOrder: RENDER_ORDER.POSTPROCESS,
    animate: (params, t) => {
      const speed = num(params.speed, 0.4);
      const base = num(params.spacing, 10);
      return { spacing: base + base * 0.25 * noise2D(t / 1e3 * speed, 200) };
    }
  },
  fire: {
    type: "fire",
    category: "stylize",
    label: "effect_fire",
    thumbnail: "fire",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.7,
        min: 0,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "scale",
        type: "number",
        label: "effect_param_scale",
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "FIRE_FRAG",
    canvas2dFallback: "applyFire",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (_params, t) => {
      const speed = Number(_params.speed) || 1;
      return { _seed: t / 1e3 * speed };
    }
  },
  fireworks: {
    type: "fireworks",
    category: "stylize",
    label: "effect_fireworks",
    thumbnail: "fireworks",
    params: [
      {
        key: "intensity",
        type: "number",
        label: "effect_param_intensity",
        default: 0.8,
        min: 0,
        max: 2,
        step: 0.05,
        keyframeable: true
      },
      {
        key: "density",
        type: "number",
        label: "effect_param_density",
        default: 4,
        min: 1,
        max: 8,
        step: 1,
        keyframeable: true
      },
      {
        key: "trailLength",
        type: "number",
        label: "effect_param_trail_length",
        default: 3,
        min: 0.5,
        max: 10,
        step: 0.5,
        keyframeable: true
      },
      {
        key: "speed",
        type: "number",
        label: "effect_param_speed",
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        keyframeable: true
      }
    ],
    fragmentShader: "FIREWORKS_FRAG",
    canvas2dFallback: "applyFireworks",
    renderOrder: RENDER_ORDER.OVERLAY,
    animate: (_params, t) => {
      const speed = Number(_params.speed) || 1;
      return { _seed: t / 1e3 * speed };
    }
  }
};

// ../../shared/effects/registry/index.ts
var EFFECT_REGISTRY = {
  ...BLUR_EFFECTS,
  ...DISTORTION_EFFECTS,
  ...GLITCH_EFFECTS,
  ...LIGHT_EFFECTS,
  ...BASIC_EFFECTS,
  ...STYLIZE_EFFECTS
};
function getEffectDescriptor(effectType) {
  return EFFECT_REGISTRY[effectType];
}

// ../../shared/keyframes/interpolateColors.ts
var parseColor = parseColorCached;
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h * 360, s, l];
}
function hslToRgb2(hDeg, s, l) {
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const h = (hDeg % 360 + 360) % 360 / 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue2rgb2 = (t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return [
    Math.round(hue2rgb2(h + 1 / 3) * 255),
    Math.round(hue2rgb2(h) * 255),
    Math.round(hue2rgb2(h - 1 / 3) * 255)
  ];
}
function linearize(c) {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
function delinearize(c) {
  const s = c <= 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return Math.round(clamp255(s * 255));
}
function rgbToOklab(r, g, b) {
  const lr = linearize(r), lg = linearize(g), lb = linearize(b);
  const l_ = Math.cbrt(
    0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb
  );
  const m_ = Math.cbrt(
    0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb
  );
  const s_ = Math.cbrt(
    0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb
  );
  return [
    0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_
  ];
}
function oklabToRgb(L, a, b) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ * l_ * l_, m = m_ * m_ * m_, s = s_ * s_ * s_;
  return [
    delinearize(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    delinearize(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    delinearize(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s)
  ];
}
function rgbToOklch(r, g, b) {
  const [L, a, b_] = rgbToOklab(r, g, b);
  const C = Math.sqrt(a * a + b_ * b_);
  const H = C < 1e-8 ? 0 : (Math.atan2(b_, a) * 180 / Math.PI + 360) % 360;
  return [L, C, H];
}
function oklchToRgb(L, C, H) {
  const hRad = H * Math.PI / 180;
  return oklabToRgb(L, C * Math.cos(hRad), C * Math.sin(hRad));
}
function clamp255(v) {
  return v < 0 ? 0 : v > 255 ? 255 : v;
}
function shortestHueArc(h1, h2) {
  let diff = h2 - h1;
  if (diff > 180) diff -= 360;
  else if (diff < -180) diff += 360;
  return [h1, h1 + diff];
}
function toHex(n) {
  const h = Math.round(clamp255(n)).toString(16);
  return h.length === 1 ? "0" + h : h;
}
function rgbToHexString(r, g, b) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function rgbToSpace(r, g, b, space) {
  switch (space) {
    case "rgb":
      return [r, g, b];
    case "hsl":
      return rgbToHsl(r, g, b);
    case "oklch":
      return rgbToOklch(r, g, b);
  }
}
function spaceToRgb(c, space) {
  switch (space) {
    case "rgb":
      return [
        Math.round(clamp255(c[0])),
        Math.round(clamp255(c[1])),
        Math.round(clamp255(c[2]))
      ];
    case "hsl":
      return hslToRgb2(c[0], c[1], c[2]);
    case "oklch":
      return oklchToRgb(c[0], c[1], c[2]);
  }
}
function hasHue(space) {
  return space === "hsl" || space === "oklch";
}
function hueIndex(space) {
  return space === "hsl" ? 0 : 2;
}
function interpolateColors(value, inputRange, outputRange, options) {
  const len = inputRange.length;
  if (len < 2 || outputRange.length < 2) {
    throw new Error(
      "interpolateColors: inputRange and outputRange must have at least 2 elements"
    );
  }
  if (len !== outputRange.length) {
    throw new Error(
      "interpolateColors: inputRange and outputRange must have the same length"
    );
  }
  const space = options?.colorSpace ?? "oklch";
  const interpOpts = {
    easing: options?.easing,
    extrapolateLeft: options?.extrapolateLeft,
    extrapolateRight: options?.extrapolateRight
  };
  const parsed = outputRange.map((c) => {
    const rgb = parseColor(c);
    return rgbToSpace(rgb[0], rgb[1], rgb[2], space);
  });
  if (hasHue(space)) {
    const hi = hueIndex(space);
    for (let i = 0; i < parsed.length - 1; i++) {
      const [adj1, adj2] = shortestHueArc(parsed[i][hi], parsed[i + 1][hi]);
      parsed[i][hi] = adj1;
      parsed[i + 1][hi] = adj2;
    }
  }
  const result = [0, 0, 0];
  for (let ci = 0; ci < 3; ci++) {
    const outRange = parsed.map((p) => p[ci]);
    result[ci] = interpolate(value, inputRange, outRange, interpOpts);
  }
  const [r, g, b] = spaceToRgb(result, space);
  return rgbToHexString(r, g, b);
}

// ../../shared/effects/colorGroupInterpolation.ts
function extractColorGroups(params) {
  const map = /* @__PURE__ */ new Map();
  for (const p of params) {
    if (!p.colorGroup || !p.colorComponent) continue;
    let entry = map.get(p.colorGroup);
    if (!entry) {
      entry = { group: p.colorGroup };
      map.set(p.colorGroup, entry);
    }
    if (p.colorComponent === "R") entry.keyR = p.key;
    else if (p.colorComponent === "G") entry.keyG = p.key;
    else if (p.colorComponent === "B") entry.keyB = p.key;
  }
  const result = [];
  for (const entry of map.values()) {
    if (entry.group && entry.keyR && entry.keyG && entry.keyB) {
      result.push(entry);
    }
  }
  return result;
}
function rgbNormToHex(r, g, b) {
  const clamp = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));
  const toHex2 = (n) => {
    const h = n.toString(16);
    return h.length === 1 ? "0" + h : h;
  };
  return `#${toHex2(clamp(r))}${toHex2(clamp(g))}${toHex2(clamp(b))}`;
}
function hexToRgbNorm(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
}
function reinterpolateColorGroups(fromParams, toParams, progress, colorGroups, result) {
  for (const cg of colorGroups) {
    const fromR = fromParams[cg.keyR] ?? 0;
    const fromG = fromParams[cg.keyG] ?? 0;
    const fromB = fromParams[cg.keyB] ?? 0;
    const toR = toParams[cg.keyR] ?? 0;
    const toG = toParams[cg.keyG] ?? 0;
    const toB = toParams[cg.keyB] ?? 0;
    const fromHex = rgbNormToHex(fromR, fromG, fromB);
    const toHex2 = rgbNormToHex(toR, toG, toB);
    const interpolated = interpolateColors(progress, [0, 1], [fromHex, toHex2], {
      colorSpace: "oklch"
    });
    const [r, g, b] = hexToRgbNorm(interpolated);
    result[cg.keyR] = r;
    result[cg.keyG] = g;
    result[cg.keyB] = b;
  }
}

// ../../shared/keyframes/types.ts
var BUILTIN_KEYFRAME_KEYS = /* @__PURE__ */ new Set([
  "x",
  "y",
  "rotation",
  "scaleX",
  "scaleY",
  "opacity",
  "speed",
  "brightness",
  "contrast",
  "saturation",
  "hue",
  "blur",
  "maskX",
  "maskY",
  "maskScaleX",
  "maskScaleY",
  "maskRotation"
]);

// ../../shared/effects/resolveEffects.ts
function resolveEffectLayers(layers, localTimeMs) {
  const resolved = [];
  for (const layer of layers) {
    if (layer.enabled === false) continue;
    const descriptor = getEffectDescriptor(layer.effectType);
    if (!descriptor) continue;
    let params;
    if (descriptor.animate) {
      const animated = descriptor.animate(layer.effectParams, localTimeMs);
      params = mergeParams(layer.effectParams, animated);
    } else {
      params = shallowCopy(layer.effectParams);
    }
    resolved.push({ effectType: layer.effectType, descriptor, params });
  }
  return resolved;
}
function mergeParams(base, override) {
  const result = {};
  for (const k in base) result[k] = base[k];
  for (const k in override) result[k] = override[k];
  return result;
}
function shallowCopy(src) {
  const result = {};
  for (const k in src) result[k] = src[k];
  return result;
}
function sortResolvedEffects(effects) {
  let sorted = true;
  for (let i = 1; i < effects.length; i++) {
    if (effects[i - 1].descriptor.renderOrder > effects[i].descriptor.renderOrder) {
      sorted = false;
      break;
    }
  }
  if (!sorted) {
    effects.sort((a, b) => a.descriptor.renderOrder - b.descriptor.renderOrder);
  }
  return effects;
}
function buildEffectParamIndex(keyframeTracks) {
  const index = /* @__PURE__ */ new Map();
  for (const t of keyframeTracks) {
    if (t.propertyType === "effectParam" && t.layerIndex !== void 0 && t.enabled && t.keyframes.length > 0) {
      index.set(t.layerIndex, t);
    }
  }
  return index;
}
function interpolateEffectKeyframes(track, effectLayer, localTimeMs) {
  const interpolated = interpolateKeyframeProperties(
    track.keyframes,
    localTimeMs
  );
  const result = {};
  let hasValues = false;
  for (const [key, value] of Object.entries(interpolated)) {
    if (!BUILTIN_KEYFRAME_KEYS.has(key) && typeof value === "number") {
      result[key] = value;
      hasValues = true;
    }
  }
  if (!hasValues) return null;
  const descriptor = getEffectDescriptor(effectLayer.effectType);
  if (descriptor) {
    const colorGroups = extractColorGroups(descriptor.params);
    if (colorGroups.length > 0) {
      const bracket = findBracketingKeyframes(track.keyframes, localTimeMs);
      if (bracket.from && bracket.to) {
        const easingFn = resolveEasing(bracket.from.easing);
        const easedProgress = easingFn(bracket.localProgress);
        reinterpolateColorGroups(
          bracket.from.properties,
          bracket.to.properties,
          easedProgress,
          colorGroups,
          result
        );
      }
    }
  }
  return result;
}

// ../../shared/effects/canvas2dFallbacks.ts
function num2(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}
var clamp2552 = (v) => v < 0 ? 0 : v > 255 ? 255 : v;
function copyPixel32(dst, dstPx, src, srcPx) {
  dst[dstPx] = src[srcPx];
}
function deterministicHash(seed, x, y) {
  let h = seed * 374761393 + x * 668265263 + y * 2654435761 >>> 0;
  h ^= h >> 13;
  h = h * 2246822507 >>> 0;
  h ^= h >> 16;
  return (h & 32767) / 32767;
}
var applyGaussianBlur = (ctx2, width, height, params) => {
  const radius = Math.max(0, num2(params.radius, 4));
  if (radius === 0) return;
  const sigma = radius / 2;
  if (typeof ctx2.filter === "string") {
    try {
      ctx2.save();
      ctx2.filter = `blur(${sigma}px)`;
      ctx2.drawImage(ctx2.canvas, 0, 0);
      ctx2.restore();
      ctx2.filter = "none";
      return;
    } catch {
      ctx2.restore();
      ctx2.filter = "none";
    }
  }
  applyGaussianWeightedBlur(ctx2, width, height, radius);
};
function applyGaussianWeightedBlur(ctx2, width, height, radius) {
  const sigma2 = radius * radius * 0.25 + 1e-3;
  const maxTap = Math.min(16, Math.ceil(radius));
  const wLen = maxTap * 2 + 1;
  const weights = new Float32Array(wLen);
  for (let ti = 0; ti < wLen; ti++) {
    const i = ti - maxTap;
    weights[ti] = Math.exp(-0.5 * i * i / sigma2);
  }
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const w = width, h = height;
  const temp = new Float32Array(data.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, a = 0, total = 0;
      for (let ti = 0; ti < wLen; ti++) {
        const ix = Math.max(0, Math.min(w - 1, x + ti - maxTap));
        const wt = weights[ti];
        const idx2 = (y * w + ix) * 4;
        r += data[idx2] * wt;
        g += data[idx2 + 1] * wt;
        b += data[idx2 + 2] * wt;
        a += data[idx2 + 3] * wt;
        total += wt;
      }
      const idx = (y * w + x) * 4;
      temp[idx] = r / total;
      temp[idx + 1] = g / total;
      temp[idx + 2] = b / total;
      temp[idx + 3] = a / total;
    }
  }
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      let r = 0, g = 0, b = 0, a = 0, total = 0;
      for (let ti = 0; ti < wLen; ti++) {
        const iy = Math.max(0, Math.min(h - 1, y + ti - maxTap));
        const wt = weights[ti];
        const idx2 = (iy * w + x) * 4;
        r += temp[idx2] * wt;
        g += temp[idx2 + 1] * wt;
        b += temp[idx2 + 2] * wt;
        a += temp[idx2 + 3] * wt;
        total += wt;
      }
      const idx = (y * w + x) * 4;
      data[idx] = r / total;
      data[idx + 1] = g / total;
      data[idx + 2] = b / total;
      data[idx + 3] = a / total;
    }
  }
  ctx2.putImageData(imageData, 0, 0);
}
function applyBoxBlur(ctx2, width, height, radius) {
  if (radius <= 0) return;
  if (typeof ctx2.filter === "string") {
    try {
      ctx2.save();
      ctx2.filter = `blur(${Math.round(radius * 0.56)}px)`;
      ctx2.drawImage(ctx2.canvas, 0, 0);
      ctx2.restore();
      ctx2.filter = "none";
      return;
    } catch {
      ctx2.restore();
      ctx2.filter = "none";
    }
  }
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const w = width, h = height;
  const temp = new Uint8ClampedArray(data.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, a = 0, count = 0;
      const x0 = Math.max(0, x - radius), x1 = Math.min(w - 1, x + radius);
      for (let ix = x0; ix <= x1; ix++) {
        const idx2 = (y * w + ix) * 4;
        r += data[idx2];
        g += data[idx2 + 1];
        b += data[idx2 + 2];
        a += data[idx2 + 3];
        count++;
      }
      const idx = (y * w + x) * 4;
      temp[idx] = r / count;
      temp[idx + 1] = g / count;
      temp[idx + 2] = b / count;
      temp[idx + 3] = a / count;
    }
  }
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      let r = 0, g = 0, b = 0, a = 0, count = 0;
      const y0 = Math.max(0, y - radius), y1 = Math.min(h - 1, y + radius);
      for (let iy = y0; iy <= y1; iy++) {
        const idx2 = (iy * w + x) * 4;
        r += temp[idx2];
        g += temp[idx2 + 1];
        b += temp[idx2 + 2];
        a += temp[idx2 + 3];
        count++;
      }
      const idx = (y * w + x) * 4;
      data[idx] = r / count;
      data[idx + 1] = g / count;
      data[idx + 2] = b / count;
      data[idx + 3] = a / count;
    }
  }
  ctx2.putImageData(imageData, 0, 0);
}
var applyRadialBlur = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.3)));
  const cx = num2(params.centerX, 0.5);
  const cy = num2(params.centerY, 0.5);
  if (intensity === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  const SAMPLES = 12;
  for (let y = 0; y < height; y++) {
    const ny = y / height;
    for (let x = 0; x < width; x++) {
      const nx = x / width;
      const dirX = nx - cx;
      const dirY = ny - cy;
      let r = 0, g = 0, b = 0, a = 0;
      for (let i = 0; i < SAMPLES; i++) {
        const t = i / SAMPLES * intensity * 0.1;
        const sx = Math.max(
          0,
          Math.min(width - 1, Math.round((nx - dirX * t) * width))
        );
        const sy = Math.max(
          0,
          Math.min(height - 1, Math.round((ny - dirY * t) * height))
        );
        const idx = (sy * width + sx) * 4;
        r += src[idx];
        g += src[idx + 1];
        b += src[idx + 2];
        a += src[idx + 3];
      }
      const dstIdx = (y * width + x) * 4;
      dst[dstIdx] = r / SAMPLES;
      dst[dstIdx + 1] = g / SAMPLES;
      dst[dstIdx + 2] = b / SAMPLES;
      dst[dstIdx + 3] = a / SAMPLES;
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyWave = (ctx2, width, height, params) => {
  const amplitude = num2(params.amplitude, 10);
  const frequency = num2(params.frequency, 4);
  const phase = num2(params.phase, 0);
  if (amplitude === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(
    new Uint8ClampedArray(imageData.data).buffer.slice(0)
  );
  const dst32 = new Uint32Array(imageData.data.buffer);
  dst32.fill(0);
  for (let y = 0; y < height; y++) {
    const offset = Math.round(
      amplitude * Math.sin(y / height * frequency * Math.PI * 2 + phase)
    );
    const rowBase = y * width;
    for (let x = 0; x < width; x++) {
      const srcX = x + offset;
      if (srcX >= 0 && srcX < width) {
        copyPixel32(dst32, rowBase + x, src32, rowBase + srcX);
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyRipple = (ctx2, width, height, params) => {
  const amplitude = num2(params.amplitude, 8);
  const frequency = num2(params.frequency, 6);
  const phase = num2(params.phase, 0);
  const cx = num2(params.centerX, 0.5) * width;
  const cy = num2(params.centerY, 0.5) * height;
  if (amplitude === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(
    new Uint8ClampedArray(imageData.data).buffer.slice(0)
  );
  const dst32 = new Uint32Array(imageData.data.buffer);
  dst32.fill(0);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist2 = Math.sqrt(dx * dx + dy * dy);
      const offset = amplitude * Math.sin(dist2 / width * frequency * Math.PI * 2 + phase);
      const angle2 = Math.atan2(dy, dx);
      const srcX = Math.round(x + Math.cos(angle2) * offset);
      const srcY = Math.round(y + Math.sin(angle2) * offset);
      if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
        copyPixel32(dst32, y * width + x, src32, srcY * width + srcX);
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyRgbSplit = (ctx2, width, height, params) => {
  const amount = num2(params.amount, 5);
  const angleDeg = num2(params.angle, 0);
  if (amount === 0) return;
  const angleRad = angleDeg * Math.PI / 180;
  const offsetX = Math.round(amount * Math.cos(angleRad));
  const offsetY = Math.round(amount * Math.sin(angleRad));
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dstIdx = (y * width + x) * 4;
      const rx = Math.max(0, Math.min(width - 1, x - offsetX));
      const ry = Math.max(0, Math.min(height - 1, y - offsetY));
      dst[dstIdx] = src[(ry * width + rx) * 4];
      dst[dstIdx + 1] = src[dstIdx + 1];
      const bx = Math.max(0, Math.min(width - 1, x + offsetX));
      const by = Math.max(0, Math.min(height - 1, y + offsetY));
      dst[dstIdx + 2] = src[(by * width + bx) * 4 + 2];
      dst[dstIdx + 3] = src[dstIdx + 3];
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyVignette = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  const radius = num2(params.radius, 0.8);
  const softness = Math.max(0.01, num2(params.softness, 0.5));
  if (intensity === 0) return;
  const cx = width / 2;
  const cy = height / 2;
  const maxNormDist = Math.sqrt(2);
  const diagPx = Math.sqrt(cx * cx + cy * cy);
  const innerR = radius / maxNormDist * diagPx;
  const outerR = (radius + softness) / maxNormDist * diagPx;
  ctx2.save();
  ctx2.globalCompositeOperation = "multiply";
  const grad = ctx2.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  const midDarken = Math.round(255 * (1 - intensity * 0.5));
  grad.addColorStop(0.5, `rgba(${midDarken},${midDarken},${midDarken},1)`);
  const edgeDarken = Math.round(255 * (1 - intensity));
  grad.addColorStop(1, `rgba(${edgeDarken},${edgeDarken},${edgeDarken},1)`);
  ctx2.fillStyle = grad;
  ctx2.fillRect(0, 0, width, height);
  ctx2.restore();
};
var applyGlow = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  const radius = Math.max(1, num2(params.radius, 5));
  const threshold = Math.max(0, Math.min(1, num2(params.threshold, 0.5)));
  if (intensity === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  const invRange = 1 / Math.max(1e-3, 1 - threshold);
  const sigma2 = radius * radius * 0.1 + 0.01;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let br = 0, bg = 0, bb = 0, total = 0;
      for (let ky = -6; ky <= 6; ky++) {
        const sy = Math.max(
          0,
          Math.min(height - 1, y + Math.round(ky * radius))
        );
        for (let kx = -6; kx <= 6; kx++) {
          const weight = Math.exp(-0.5 * (kx * kx + ky * ky) / sigma2);
          const sx = Math.max(
            0,
            Math.min(width - 1, x + Math.round(kx * radius))
          );
          const si = (sy * width + sx) * 4;
          const lum = (src[si] * 0.2126 + src[si + 1] * 0.7152 + src[si + 2] * 0.0722) / 255;
          const brightFactor = Math.max(0, (lum - threshold) * invRange);
          const w = weight * brightFactor;
          br += src[si] * w;
          bg += src[si + 1] * w;
          bb += src[si + 2] * w;
          total += w;
        }
      }
      const di = (y * width + x) * 4;
      const origR = src[di] / 255;
      const origG = src[di + 1] / 255;
      const origB = src[di + 2] / 255;
      if (total > 1e-3) {
        const bloomR = br / total / 255 * intensity;
        const bloomG = bg / total / 255 * intensity;
        const bloomB = bb / total / 255 * intensity;
        dst[di] = clamp2552((1 - (1 - origR) * (1 - bloomR)) * 255);
        dst[di + 1] = clamp2552((1 - (1 - origG) * (1 - bloomG)) * 255);
        dst[di + 2] = clamp2552((1 - (1 - origB) * (1 - bloomB)) * 255);
      }
      dst[di + 3] = src[di + 3];
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applySharpen = (ctx2, width, height, params) => {
  const amount = Math.max(0, num2(params.amount, 0.5));
  if (amount === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  const k = amount;
  const center = 1 + 4 * k;
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4;
      for (let c = 0; c < 3; c++) {
        const val = src[idx + c] * center - src[((y - 1) * width + x) * 4 + c] * k - src[((y + 1) * width + x) * 4 + c] * k - src[(y * width + (x - 1)) * 4 + c] * k - src[(y * width + (x + 1)) * 4 + c] * k;
        dst[idx + c] = clamp2552(val);
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
var applyColorGrading = (ctx2, width, height, params) => {
  const liftR = num2(params.liftR, 0);
  const liftG = num2(params.liftG, 0);
  const liftB = num2(params.liftB, 0);
  const gamma = Math.max(0.2, num2(params.gamma, 1));
  const gain = Math.max(0, num2(params.gain, 1));
  const saturation = num2(params.saturation, 1);
  const temperature = num2(params.temperature, 0);
  const tint = num2(params.tint, 0);
  const hue = num2(params.hue, 0);
  if (liftR === 0 && liftG === 0 && liftB === 0 && gamma === 1 && gain === 1 && saturation === 1 && temperature === 0 && tint === 0 && hue === 0)
    return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const invGamma = 1 / gamma;
  const hueNorm = hue / 360;
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i] / 255;
    let g = data[i + 1] / 255;
    let b = data[i + 2] / 255;
    if (temperature !== 0) {
      r = r + temperature * 0.1;
      g = g + temperature * 0.02;
      b = b - temperature * 0.1;
    }
    if (tint !== 0) {
      r = r + tint * 0.07;
      g = g - tint * 0.14;
      b = b + tint * 0.07;
    }
    r = r + liftR * (1 - r);
    g = g + liftG * (1 - g);
    b = b + liftB * (1 - b);
    r = Math.pow(Math.max(0, r), invGamma);
    g = Math.pow(Math.max(0, g), invGamma);
    b = Math.pow(Math.max(0, b), invGamma);
    r = r * gain;
    g = g * gain;
    b = b * gain;
    if (saturation !== 1) {
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      r = lum + (r - lum) * saturation;
      g = lum + (g - lum) * saturation;
      b = lum + (b - lum) * saturation;
    }
    if (hue !== 0) {
      const mx = Math.max(r, g, b);
      const mn = Math.min(r, g, b);
      const d = mx - mn;
      if (d > 1e-4) {
        const l = (mx + mn) / 2;
        const s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
        let h;
        if (mx === r) h = (g - b) / d + (g < b ? 6 : 0);
        else if (mx === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h = (h / 6 + hueNorm) % 1;
        if (h < 0) h += 1;
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
    }
    data[i] = clamp2552(r * 255);
    data[i + 1] = clamp2552(g * 255);
    data[i + 2] = clamp2552(b * 255);
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyVhs = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.6)));
  const scanlineOpacity = Math.max(
    0,
    Math.min(1, num2(params.scanlineOpacity, 0.3))
  );
  const colorBleed = Math.max(0, num2(params.colorBleed, 3));
  const noiseAmount = Math.max(0, Math.min(0.5, num2(params.noiseAmount, 0.15)));
  const seed = Math.floor(num2(params._seed, 0));
  if (intensity === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  const bleedPx = Math.round(colorBleed * intensity);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const rx = Math.min(width - 1, x + bleedPx);
      const bx = Math.max(0, x - bleedPx);
      dst[idx] = src[(y * width + rx) * 4];
      dst[idx + 1] = src[idx + 1];
      dst[idx + 2] = src[(y * width + bx) * 4 + 2];
      dst[idx + 3] = src[idx + 3];
      if (y % 2 !== 0) {
        const dim = 1 - scanlineOpacity * intensity;
        dst[idx] = dst[idx] * dim;
        dst[idx + 1] = dst[idx + 1] * dim;
        dst[idx + 2] = dst[idx + 2] * dim;
      }
      const n = deterministicHash(seed, x, y);
      const noiseDelta = (n - 0.5) * 2 * noiseAmount * intensity * 255;
      dst[idx] = clamp2552(dst[idx] + noiseDelta);
      dst[idx + 1] = clamp2552(dst[idx + 1] + noiseDelta);
      dst[idx + 2] = clamp2552(dst[idx + 2] + noiseDelta);
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyGlitchBlock = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  const blockSize = Math.max(
    4,
    Math.min(64, Math.round(num2(params.blockSize, 16)))
  );
  const seed = Math.floor(num2(params._seed, 0));
  if (intensity === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  const maxShift = Math.round(width * 0.15 * intensity);
  for (let by = 0; by < height; by += blockSize) {
    const blockIdx = Math.floor(by / blockSize);
    const h = deterministicHash(seed, 0, blockIdx);
    if (h >= intensity) continue;
    const shift = Math.round(
      (deterministicHash(seed, 1, blockIdx) - 0.5) * 2 * maxShift
    );
    const rgbShift = Math.round(
      deterministicHash(seed, 2, blockIdx) * 3 * intensity
    );
    const blockEnd = Math.min(by + blockSize, height);
    for (let y = by; y < blockEnd; y++) {
      for (let x = 0; x < width; x++) {
        const dstIdx = (y * width + x) * 4;
        const rx = Math.max(0, Math.min(width - 1, x + shift - rgbShift));
        dst[dstIdx] = src[(y * width + rx) * 4];
        const gx = Math.max(0, Math.min(width - 1, x + shift));
        dst[dstIdx + 1] = src[(y * width + gx) * 4 + 1];
        const bx = Math.max(0, Math.min(width - 1, x + shift + rgbShift));
        dst[dstIdx + 2] = src[(y * width + bx) * 4 + 2];
        dst[dstIdx + 3] = src[(y * width + gx) * 4 + 3];
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyFilmGrain = (ctx2, width, height, params) => {
  const amount = Math.max(0, Math.min(1, num2(params.amount, 0.3)));
  const size = Math.max(1, Math.min(4, Math.round(num2(params.size, 1))));
  const seed = Math.floor(num2(params._seed, 0));
  if (amount === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let y = 0; y < height; y++) {
    const gy = Math.floor(y / size);
    for (let x = 0; x < width; x++) {
      const gx = Math.floor(x / size);
      const n = deterministicHash(seed, gx, gy);
      const noiseDelta = (n - 0.5) * 2 * amount * 255;
      const idx = (y * width + x) * 4;
      data[idx] = clamp2552(data[idx] + noiseDelta);
      data[idx + 1] = clamp2552(data[idx + 1] + noiseDelta);
      data[idx + 2] = clamp2552(data[idx + 2] + noiseDelta);
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyShake = (ctx2, width, height, params) => {
  const offsetX = Math.round(num2(params._offsetX, 0));
  const offsetY = Math.round(num2(params._offsetY, 0));
  if (offsetX === 0 && offsetY === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  ctx2.clearRect(0, 0, width, height);
  ctx2.putImageData(imageData, offsetX, offsetY);
};
var applyFisheye = (ctx2, width, height, params) => {
  const amount = Math.max(0, Math.min(1, num2(params.amount, 0.5)));
  if (amount === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(
    new Uint8ClampedArray(imageData.data).buffer.slice(0)
  );
  const dst32 = new Uint32Array(imageData.data.buffer);
  const cx = width / 2;
  const cy = height / 2;
  const bind = Math.min(cx, cy);
  const power = 1 + amount;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist2 = Math.sqrt(dx * dx + dy * dy);
      if (dist2 < bind) {
        const factor = Math.pow(dist2 / bind, power) * bind / Math.max(dist2, 1e-3);
        const srcX = Math.round(cx + dx * factor);
        const srcY = Math.round(cy + dy * factor);
        if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
          copyPixel32(dst32, y * width + x, src32, srcY * width + srcX);
        }
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applySwirl = (ctx2, width, height, params) => {
  const angle2 = num2(params.angle, 90) * Math.PI / 180;
  const radius = num2(params.radius, 0.5) * Math.min(width, height);
  const cx = num2(params.centerX, 0.5) * width;
  const cy = num2(params.centerY, 0.5) * height;
  if (angle2 === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(
    new Uint8ClampedArray(imageData.data).buffer.slice(0)
  );
  const dst32 = new Uint32Array(imageData.data.buffer);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist2 = Math.sqrt(dx * dx + dy * dy);
      if (dist2 < radius) {
        const t = 1 - dist2 / radius;
        const a = angle2 * t * t;
        const s = Math.sin(a);
        const c = Math.cos(a);
        const srcX = Math.round(cx + c * dx - s * dy);
        const srcY = Math.round(cy + s * dx + c * dy);
        const csx = Math.max(0, Math.min(width - 1, srcX));
        const csy = Math.max(0, Math.min(height - 1, srcY));
        copyPixel32(dst32, y * width + x, src32, csy * width + csx);
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyKaleidoscope = (ctx2, width, height, params) => {
  const segments = Math.max(
    2,
    Math.min(12, Math.round(num2(params.segments, 6)))
  );
  const rotation = num2(params.rotation, 0) * Math.PI / 180;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(
    new Uint8ClampedArray(imageData.data).buffer.slice(0)
  );
  const dst32 = new Uint32Array(imageData.data.buffer);
  const cx = width / 2;
  const cy = height / 2;
  const segAngle = Math.PI * 2 / segments;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      let angle2 = Math.atan2(dy, dx) + rotation;
      const r = Math.sqrt(dx * dx + dy * dy);
      angle2 = (angle2 % segAngle + segAngle) % segAngle;
      if (angle2 > segAngle * 0.5) angle2 = segAngle - angle2;
      const srcX = Math.round(cx + Math.cos(angle2) * r);
      const srcY = Math.round(cy + Math.sin(angle2) * r);
      const csx = Math.max(0, Math.min(width - 1, srcX));
      const csy = Math.max(0, Math.min(height - 1, srcY));
      copyPixel32(dst32, y * width + x, src32, csy * width + csx);
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyPixelate = (ctx2, width, height, params) => {
  const blockSize = Math.max(
    2,
    Math.min(64, Math.round(num2(params.blockSize, 8)))
  );
  const sw = Math.max(1, Math.round(width / blockSize));
  const sh = Math.max(1, Math.round(height / blockSize));
  try {
    ctx2.save();
    ctx2.imageSmoothingEnabled = false;
    ctx2.drawImage(ctx2.canvas, 0, 0, sw, sh);
    ctx2.drawImage(
      ctx2.canvas,
      0,
      0,
      sw,
      sh,
      0,
      0,
      width,
      height
    );
    ctx2.imageSmoothingEnabled = true;
    ctx2.restore();
    return;
  } catch {
    ctx2.restore();
  }
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(imageData.data.buffer);
  for (let by = 0; by < height; by += blockSize) {
    for (let bx = 0; bx < width; bx += blockSize) {
      const sx = Math.min(bx + Math.floor(blockSize / 2), width - 1);
      const sy = Math.min(by + Math.floor(blockSize / 2), height - 1);
      const pixel = src32[sy * width + sx];
      const endY = Math.min(by + blockSize, height);
      const endX = Math.min(bx + blockSize, width);
      for (let y = by; y < endY; y++) {
        const rowBase = y * width;
        for (let x = bx; x < endX; x++) {
          src32[rowBase + x] = pixel;
        }
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyPosterize = (ctx2, width, height, params) => {
  const levels = Math.max(2, Math.min(16, Math.round(num2(params.levels, 4))));
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.round(data[i] / 255 * levels) / levels * 255;
    data[i + 1] = Math.round(data[i + 1] / 255 * levels) / levels * 255;
    data[i + 2] = Math.round(data[i + 2] / 255 * levels) / levels * 255;
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyInvert = (ctx2, width, height, params) => {
  const amount = Math.max(0, Math.min(1, num2(params.amount, 1)));
  if (amount === 0) return;
  if (typeof ctx2.filter === "string") {
    try {
      ctx2.save();
      ctx2.filter = `invert(${amount})`;
      ctx2.drawImage(ctx2.canvas, 0, 0);
      ctx2.restore();
      ctx2.filter = "none";
      return;
    } catch {
      ctx2.restore();
      ctx2.filter = "none";
    }
  }
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i] + (255 - 2 * data[i]) * amount;
    data[i + 1] = data[i + 1] + (255 - 2 * data[i + 1]) * amount;
    data[i + 2] = data[i + 2] + (255 - 2 * data[i + 2]) * amount;
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyDuotone = (ctx2, width, height, params) => {
  const shadowR = num2(params.shadowR, 0);
  const shadowG = num2(params.shadowG, 0);
  const shadowB = num2(params.shadowB, 0.3);
  const highlightR = num2(params.highlightR, 1);
  const highlightG = num2(params.highlightG, 0.9);
  const highlightB = num2(params.highlightB, 0.6);
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
    data[i] = (shadowR + (highlightR - shadowR) * lum) * 255;
    data[i + 1] = (shadowG + (highlightG - shadowG) * lum) * 255;
    data[i + 2] = (shadowB + (highlightB - shadowB) * lum) * 255;
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyHalftone = (ctx2, width, height, params) => {
  const dotSize = Math.max(2, Math.min(20, num2(params.dotSize, 6)));
  const angleDeg = num2(params.angle, 45);
  const angleRad = angleDeg * Math.PI / 180;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  const s = Math.sin(angleRad);
  const c = Math.cos(angleRad);
  const halfDot = dotSize * 0.5;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const rx = c * x - s * y;
      const ry = s * x + c * y;
      const cellX = (rx % dotSize + dotSize) % dotSize - halfDot;
      const cellY = (ry % dotSize + dotSize) % dotSize - halfDot;
      const dist2 = Math.sqrt(cellX * cellX + cellY * cellY) / halfDot;
      const srcIdx = (y * width + x) * 4;
      const lum = (src[srcIdx] * 0.299 + src[srcIdx + 1] * 0.587 + src[srcIdx + 2] * 0.114) / 255;
      const r = 1 - lum;
      const edge = 1.5 / halfDot;
      const st = Math.max(0, Math.min(1, (dist2 - (r - edge)) / (2 * edge)));
      const mask = Math.round((1 - st * st * (3 - 2 * st)) * 255);
      const dstIdx = srcIdx;
      dst[dstIdx] = mask;
      dst[dstIdx + 1] = mask;
      dst[dstIdx + 2] = mask;
      dst[dstIdx + 3] = src[srcIdx + 3];
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyEmboss = (ctx2, width, height, params) => {
  const amount = Math.max(0, Math.min(2, num2(params.amount, 1)));
  if (amount === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const tlIdx = ((y - 1) * width + (x - 1)) * 4;
      const brIdx = ((y + 1) * width + (x + 1)) * 4;
      const dstIdx = (y * width + x) * 4;
      for (let c = 0; c < 3; c++) {
        dst[dstIdx + c] = clamp2552(
          128 + (src[brIdx + c] - src[tlIdx + c]) * amount
        );
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applySpherize = (ctx2, width, height, params) => {
  const amount = Math.max(-1, Math.min(1, num2(params.amount, 0.5)));
  const cx = num2(params.centerX, 0.5) * width;
  const cy = num2(params.centerY, 0.5) * height;
  if (amount === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(
    new Uint8ClampedArray(imageData.data).buffer.slice(0)
  );
  const dst32 = new Uint32Array(imageData.data.buffer);
  const radius = Math.min(width, height) / 2;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist2 = Math.sqrt(dx * dx + dy * dy);
      if (dist2 < radius) {
        const t = dist2 / radius;
        const factor = amount >= 0 ? Math.pow(t, 1 + amount * 2) : Math.pow(t, 1 / (1 - amount * 2));
        const angle2 = Math.atan2(dy, dx);
        const srcX = Math.round(cx + Math.cos(angle2) * factor * radius);
        const srcY = Math.round(cy + Math.sin(angle2) * factor * radius);
        const csx = Math.max(0, Math.min(width - 1, srcX));
        const csy = Math.max(0, Math.min(height - 1, srcY));
        copyPixel32(dst32, y * width + x, src32, csy * width + csx);
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyThermal = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.8)));
  const thermalShift = num2(params._thermalShift, 0.5);
  if (intensity === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
    const shifted = Math.max(0, Math.min(1, lum + (thermalShift - 0.5) * 0.4));
    let tr, tg, tb;
    if (shifted < 0.2) {
      const t = shifted / 0.2;
      tr = 0;
      tg = 0;
      tb = t;
    } else if (shifted < 0.4) {
      const t = (shifted - 0.2) / 0.2;
      tr = t;
      tg = 0;
      tb = 1;
    } else if (shifted < 0.6) {
      const t = (shifted - 0.4) / 0.2;
      tr = 1;
      tg = 0;
      tb = 1 - t;
    } else if (shifted < 0.8) {
      const t = (shifted - 0.6) / 0.2;
      tr = 1;
      tg = t;
      tb = 0;
    } else {
      const t = (shifted - 0.8) / 0.2;
      tr = 1;
      tg = 1;
      tb = t;
    }
    data[i] = (data[i] / 255 + (tr - data[i] / 255) * intensity) * 255;
    data[i + 1] = (data[i + 1] / 255 + (tg - data[i + 1] / 255) * intensity) * 255;
    data[i + 2] = (data[i + 2] / 255 + (tb - data[i + 2] / 255) * intensity) * 255;
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyMotionBlur = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  if (intensity === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src = new Uint8ClampedArray(imageData.data);
  const dst = imageData.data;
  const samples = Math.max(2, Math.min(16, Math.round(num2(params.samples, 8))));
  const offset = Math.round(intensity * 4);
  if (offset === 0) return;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0, count = 0;
      for (let s = 0; s < Math.min(samples, 8); s++) {
        const sx = Math.max(
          0,
          Math.min(width - 1, x - Math.round(offset * s / samples))
        );
        const idx = (y * width + sx) * 4;
        r += src[idx];
        g += src[idx + 1];
        b += src[idx + 2];
        a += src[idx + 3];
        count++;
      }
      const dstIdx = (y * width + x) * 4;
      dst[dstIdx] = r / count;
      dst[dstIdx + 1] = g / count;
      dst[dstIdx + 2] = b / count;
      dst[dstIdx + 3] = a / count;
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyEcho = (ctx2, width, height, params) => {
  const decay = Math.max(0, Math.min(1, num2(params.decay, 0.6)));
  if (decay === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const factor = 1 + decay * 0.15;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = clamp2552(data[i] * factor);
    data[i + 1] = clamp2552(data[i + 1] * factor);
    data[i + 2] = clamp2552(data[i + 2] * factor);
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyColorLut = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 1)));
  const lutIndex = Math.max(
    0,
    Math.min(7, Math.round(num2(params.lutIndex, 0)))
  );
  if (intensity === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i] / 255;
    let g = data[i + 1] / 255;
    let b = data[i + 2] / 255;
    let gr, gg, gb;
    const lum = r * 0.299 + g * 0.587 + b * 0.114;
    switch (lutIndex) {
      case 0:
        gr = Math.pow(r, 0.95) * 1.1 + 0.02;
        gg = Math.pow(g, 1);
        gb = Math.pow(b, 1.1) * 0.9 - 0.02;
        break;
      case 1:
        gr = Math.pow(r, 1.05) * 0.9;
        gg = Math.pow(g, 1);
        gb = Math.pow(b, 0.9) * 1.15 + 0.03;
        break;
      case 2:
        {
          const m = r * 0.8 + lum * 0.2;
          const mg = g * 0.8 + lum * 0.2;
          const mb = b * 0.8 + lum * 0.2;
          gr = Math.pow(m * 0.85 + 0.08, 0.95);
          gg = Math.pow(mg * 0.85 + 0.06, 1);
          gb = Math.pow(mb * 0.85 + 0.04, 1.05);
        }
        break;
      case 3:
        {
          const sh = [0, 0.5, 0.5];
          const hi = [1, 0.6, 0.3];
          gr = r * 0.5 + (sh[0] + (hi[0] - sh[0]) * lum) * 0.5;
          gg = g * 0.5 + (sh[1] + (hi[1] - sh[1]) * lum) * 0.5;
          gb = b * 0.5 + (sh[2] + (hi[2] - sh[2]) * lum) * 0.5;
        }
        break;
      case 4:
        {
          const dl = r * 0.5 + lum * 0.5;
          const dlg = g * 0.5 + lum * 0.5;
          const dlb = b * 0.5 + lum * 0.5;
          gr = (dl - 0.5) * 1.4 + 0.5;
          gg = (dlg - 0.5) * 1.4 + 0.5;
          gb = (dlb - 0.5) * 1.4 + 0.5;
        }
        break;
      case 5:
        gr = Math.pow(r, 0.8) * 1.1;
        gg = Math.pow(g, 1.2) * 0.9;
        gb = Math.pow(b, 0.7) * 1.2;
        break;
      case 6:
        {
          const nl = (lum - 0.5) * 1.5 + 0.5;
          gr = nl;
          gg = nl;
          gb = nl;
        }
        break;
      default:
        gr = Math.pow(r, 0.85) * 1.15 + 0.05;
        gg = Math.pow(g, 1) * 1.05;
        gb = Math.pow(b, 1.2) * 0.8;
        break;
    }
    data[i] = clamp2552((r + (gr - r) * intensity) * 255);
    data[i + 1] = clamp2552((g + (gg - g) * intensity) * 255);
    data[i + 2] = clamp2552((b + (gb - b) * intensity) * 255);
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyTiltShift = (ctx2, width, height, params) => {
  const blurAmount = Math.max(0, Math.min(20, num2(params.blurAmount, 8)));
  const focusPos = Math.max(0, Math.min(1, num2(params.focusPosition, 0.5)));
  const focusWidth = Math.max(0, Math.min(0.5, num2(params.focusWidth, 0.15)));
  if (blurAmount === 0) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const w = width, h = height;
  const rowRadius = new Float32Array(h);
  for (let y = 0; y < h; y++) {
    const ny = y / h;
    const dist2 = Math.abs(ny - focusPos);
    const edge0 = 0;
    const edge1 = focusWidth + 1e-3;
    const d = dist2 - focusWidth * 0.5;
    const t = Math.max(0, Math.min(1, (d - edge0) / (edge1 - edge0)));
    const blur = t * t * (3 - 2 * t);
    rowRadius[y] = blur * blurAmount;
  }
  const temp = new Float32Array(data.length);
  for (let y = 0; y < h; y++) {
    const radius = rowRadius[y];
    if (radius < 0.5) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        temp[i] = data[i];
        temp[i + 1] = data[i + 1];
        temp[i + 2] = data[i + 2];
        temp[i + 3] = data[i + 3];
      }
      continue;
    }
    const sigma2 = radius * radius * 0.25 + 1e-3;
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, a = 0, total = 0;
      const maxTap = Math.min(12, Math.ceil(radius));
      for (let i = -maxTap; i <= maxTap; i++) {
        const weight = Math.exp(-0.5 * i * i / sigma2);
        const sx = Math.max(0, Math.min(w - 1, x + i));
        const si = (y * w + sx) * 4;
        r += data[si] * weight;
        g += data[si + 1] * weight;
        b += data[si + 2] * weight;
        a += data[si + 3] * weight;
        total += weight;
      }
      const di = (y * w + x) * 4;
      temp[di] = r / total;
      temp[di + 1] = g / total;
      temp[di + 2] = b / total;
      temp[di + 3] = a / total;
    }
  }
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const radius = rowRadius[y];
      if (radius < 0.5) {
        const i = (y * w + x) * 4;
        data[i] = temp[i];
        data[i + 1] = temp[i + 1];
        data[i + 2] = temp[i + 2];
        data[i + 3] = temp[i + 3];
        continue;
      }
      const sigma2 = radius * radius * 0.25 + 1e-3;
      let r = 0, g = 0, b = 0, a = 0, total = 0;
      const maxTap = Math.min(12, Math.ceil(radius));
      for (let i = -maxTap; i <= maxTap; i++) {
        const weight = Math.exp(-0.5 * i * i / sigma2);
        const sy = Math.max(0, Math.min(h - 1, y + i));
        const si = (sy * w + x) * 4;
        r += temp[si] * weight;
        g += temp[si + 1] * weight;
        b += temp[si + 2] * weight;
        a += temp[si + 3] * weight;
        total += weight;
      }
      const di = (y * w + x) * 4;
      data[di] = r / total;
      data[di + 1] = g / total;
      data[di + 2] = b / total;
      data[di + 3] = a / total;
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyBokeh = (ctx2, width, height, params) => {
  const radius = Math.max(1, Math.min(20, num2(params.radius, 6)));
  const threshold = Math.max(0, Math.min(1, num2(params.threshold, 0.5)));
  const intensity = Math.max(0, Math.min(2, num2(params.intensity, 1)));
  if (radius <= 1) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const w = width, h = height;
  const sigma2 = radius * radius * 0.25 + 1e-3;
  const maxTap = Math.min(12, Math.ceil(radius));
  const wLen = maxTap * 2 + 1;
  const weights = new Float32Array(wLen);
  for (let ti = 0; ti < wLen; ti++) {
    const i = ti - maxTap;
    weights[ti] = Math.exp(-0.5 * i * i / sigma2);
  }
  const temp = new Float32Array(data.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, a = 0, total = 0;
      for (let ti = 0; ti < wLen; ti++) {
        const sx = Math.max(0, Math.min(w - 1, x + ti - maxTap));
        const si = (y * w + sx) * 4;
        const wt = weights[ti];
        const lum = (data[si] * 0.299 + data[si + 1] * 0.587 + data[si + 2] * 0.114) / 255;
        const brightBoost = 1 + Math.max(lum - threshold, 0) * intensity * 4;
        const w2 = wt * brightBoost;
        r += data[si] * w2;
        g += data[si + 1] * w2;
        b += data[si + 2] * w2;
        a += data[si + 3] * wt;
        total += w2;
      }
      const di = (y * w + x) * 4;
      temp[di] = r / total;
      temp[di + 1] = g / total;
      temp[di + 2] = b / total;
      temp[di + 3] = a / Math.max(1, total);
    }
  }
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      let r = 0, g = 0, b = 0, a = 0, total = 0;
      for (let ti = 0; ti < wLen; ti++) {
        const sy = Math.max(0, Math.min(h - 1, y + ti - maxTap));
        const si = (sy * w + x) * 4;
        const wt = weights[ti];
        const lum = (temp[si] * 0.299 + temp[si + 1] * 0.587 + temp[si + 2] * 0.114) / 255;
        const brightBoost = 1 + Math.max(lum - threshold, 0) * intensity * 4;
        const w2 = wt * brightBoost;
        r += temp[si] * w2;
        g += temp[si + 1] * w2;
        b += temp[si + 2] * w2;
        a += temp[si + 3] * wt;
        total += w2;
      }
      const di = (y * w + x) * 4;
      data[di] = clamp2552(r / total);
      data[di + 1] = clamp2552(g / total);
      data[di + 2] = clamp2552(b / total);
      data[di + 3] = clamp2552(a / Math.max(1, total));
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyLensFlare = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.6)));
  const posX = num2(params.posX, 0.5) * width;
  const posY = num2(params.posY, 0.3) * height;
  const numRays = Math.max(4, Math.round(num2(params.rays, 6)));
  const seed = num2(params._seed, 0);
  if (intensity === 0) return;
  const maxDim = Math.max(width, height);
  ctx2.save();
  ctx2.globalCompositeOperation = "lighter";
  const glowR = maxDim * 0.8;
  const glowN = glowR / maxDim;
  const glowGrad = ctx2.createRadialGradient(posX, posY, 0, posX, posY, glowR);
  glowGrad.addColorStop(0, `rgba(255,243,204,${intensity.toFixed(3)})`);
  glowGrad.addColorStop(
    0.33,
    `rgba(255,243,204,${(intensity * Math.exp(-0.33 * glowN * 6)).toFixed(3)})`
  );
  glowGrad.addColorStop(
    0.67,
    `rgba(255,243,204,${(intensity * Math.exp(-0.67 * glowN * 6)).toFixed(3)})`
  );
  glowGrad.addColorStop(1, `rgba(255,243,204,0)`);
  ctx2.fillStyle = glowGrad;
  ctx2.fillRect(0, 0, width, height);
  const rayLen = maxDim * 0.8;
  const raySegments = 10;
  ctx2.strokeStyle = "rgba(255,204,128,1)";
  for (let i = 0; i < numRays; i++) {
    const rayAngle = i * Math.PI * 2 / numRays + seed * 0.5;
    const dx = Math.cos(rayAngle), dy = Math.sin(rayAngle);
    for (let s = 0; s < raySegments; s++) {
      const t0 = s / raySegments, t1 = (s + 1) / raySegments;
      const alpha = intensity * 0.6 * Math.exp(-t0 * (rayLen / maxDim) * 3);
      if (alpha < 4e-3) break;
      ctx2.globalAlpha = alpha;
      ctx2.lineWidth = Math.max(0.5, 2.5 * (1 - t0 * 0.8));
      ctx2.beginPath();
      ctx2.moveTo(posX + dx * t0 * rayLen, posY + dy * t0 * rayLen);
      ctx2.lineTo(posX + dx * t1 * rayLen, posY + dy * t1 * rayLen);
      ctx2.stroke();
    }
  }
  const ghostX = width - posX, ghostY = height - posY;
  const ghostR = maxDim * 0.6;
  const ghostN = ghostR / maxDim;
  const ghostGrad = ctx2.createRadialGradient(
    ghostX,
    ghostY,
    0,
    ghostX,
    ghostY,
    ghostR
  );
  ghostGrad.addColorStop(
    0,
    `rgba(128,178,255,${(intensity * 0.3).toFixed(3)})`
  );
  ghostGrad.addColorStop(
    0.33,
    `rgba(128,178,255,${(intensity * 0.3 * Math.exp(-0.33 * ghostN * 8)).toFixed(3)})`
  );
  ghostGrad.addColorStop(
    0.67,
    `rgba(128,178,255,${(intensity * 0.3 * Math.exp(-0.67 * ghostN * 8)).toFixed(3)})`
  );
  ghostGrad.addColorStop(1, `rgba(128,178,255,0)`);
  ctx2.fillStyle = ghostGrad;
  ctx2.fillRect(0, 0, width, height);
  ctx2.globalAlpha = intensity * 0.15;
  ctx2.strokeStyle = "rgba(204,128,255,1)";
  ctx2.lineWidth = maxDim * 0.02;
  ctx2.beginPath();
  ctx2.arc(posX, posY, maxDim * 0.3, 0, Math.PI * 2);
  ctx2.stroke();
  ctx2.restore();
};
var applyLightLeak = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  const colorR = Math.max(0, Math.min(1, num2(params.colorR, 1)));
  const colorG = Math.max(0, Math.min(1, num2(params.colorG, 0.5)));
  const colorB = Math.max(0, Math.min(1, num2(params.colorB, 0.2)));
  const seed = num2(params._seed, 0);
  if (intensity === 0) return;
  const maxDim = Math.max(width, height);
  const r = Math.round(colorR * 255);
  const g = Math.round(colorG * 255);
  const b = Math.round(colorB * 255);
  const makeGrad = (cx, cy, radius, alpha) => {
    const n = radius / maxDim;
    const a1 = alpha * Math.exp(-0.33 * n * 2.5);
    const a2 = alpha * Math.exp(-0.67 * n * 2.5);
    const grad = ctx2.createRadialGradient(cx, cy, 0, cx, cy, radius);
    grad.addColorStop(0, `rgba(${r},${g},${b},${alpha.toFixed(3)})`);
    grad.addColorStop(0.33, `rgba(${r},${g},${b},${a1.toFixed(3)})`);
    grad.addColorStop(0.67, `rgba(${r},${g},${b},${a2.toFixed(3)})`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    return grad;
  };
  ctx2.save();
  ctx2.globalCompositeOperation = "screen";
  ctx2.globalAlpha = 1;
  const cx1 = width * (0.5 + Math.sin(seed * 0.7) * 0.3);
  const cy1 = height * (0.5 + Math.cos(seed * 0.5) * 0.3);
  ctx2.fillStyle = makeGrad(cx1, cy1, maxDim * 1.5, intensity);
  ctx2.fillRect(0, 0, width, height);
  const cx2 = width * (0.5 - Math.sin(seed * 0.5 + 1) * 0.4);
  const cy2 = height * (0.5 - Math.cos(seed * 0.3 + 2) * 0.3);
  ctx2.fillStyle = makeGrad(cx2, cy2, maxDim * 1.2, intensity * 0.5);
  ctx2.fillRect(0, 0, width, height);
  ctx2.restore();
};
var applyRain = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  const seed = num2(params._seed, 0);
  const angle2 = num2(params.angle, 10) * Math.PI / 180;
  const dropLength = num2(params.dropLength, 15);
  if (intensity === 0) return;
  const sa = Math.sin(angle2), ca = Math.cos(angle2);
  ctx2.save();
  ctx2.globalCompositeOperation = "lighter";
  for (let layer = 0; layer < 3; layer++) {
    const scale = 1 + layer * 0.5;
    const speed = 1 + layer * 0.3;
    const time = seed * speed;
    const cellW = Math.round((12 + layer * 8) * scale);
    const cellH = dropLength * scale;
    const layerBright = 0.4 + layer * 0.1;
    const yTotal = time * 200;
    const yFrac = (yTotal % cellH + cellH) % cellH;
    const yShift = Math.floor(yTotal / cellH);
    const margin = Math.ceil(Math.abs(sa) * height) + cellW;
    const cols = Math.ceil((width + margin) / cellW) + 1;
    const rows = Math.ceil(height / cellH) + 1;
    ctx2.globalAlpha = Math.min(1, layerBright * intensity);
    ctx2.strokeStyle = "rgba(178,191,217,1)";
    ctx2.lineWidth = Math.max(0.5, 1.5 - layer * 0.3);
    for (let row = -1; row <= rows; row++) {
      const absRow = row + yShift;
      for (let col = 0; col < cols; col++) {
        const h = deterministicHash(layer * 7 + 3, col, absRow);
        if (h >= intensity * 0.3) continue;
        const dropFrac = deterministicHash(layer * 5, col, absRow + 1);
        const rx = (col - 1) * cellW + dropFrac * cellW;
        const ry = row * cellH + yFrac;
        const sx = rx - sa * ry;
        const sy = ry;
        ctx2.beginPath();
        ctx2.moveTo(sx, sy);
        ctx2.lineTo(sx + sa * cellH * 0.8, sy + ca * cellH * 0.8);
        ctx2.stroke();
      }
    }
  }
  ctx2.restore();
};
var applySnow = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  const seed = num2(params._seed, 0);
  const flakeSize = Math.max(1, Math.min(5, num2(params.flakeSize, 2)));
  if (intensity === 0) return;
  ctx2.save();
  ctx2.globalCompositeOperation = "lighter";
  ctx2.fillStyle = "rgba(255,255,255,1)";
  for (let layer = 0; layer < 4; layer++) {
    const scale = 1.5 + layer * 0.8;
    const speed = 30 + layer * 15;
    const drift = Math.sin(seed * 0.3 + layer) * 20;
    const cellSize = flakeSize * scale * 8;
    const layerBright = 0.5 + layer * 0.1;
    const yTotal = seed * speed;
    const yFrac = (yTotal % cellSize + cellSize) % cellSize;
    const yShift = Math.floor(yTotal / cellSize);
    const margin = Math.ceil(Math.abs(drift)) + cellSize;
    const cols = Math.ceil((width + margin * 2) / cellSize) + 1;
    const rows = Math.ceil(height / cellSize) + 1;
    ctx2.globalAlpha = Math.min(1, layerBright * intensity * 0.8);
    for (let row = -1; row <= rows; row++) {
      const absRow = row + yShift;
      for (let col = 0; col < cols; col++) {
        const h = deterministicHash(layer * 13, col, absRow);
        if (h >= intensity * 0.5) continue;
        const offX = (deterministicHash(layer * 7, col, absRow) - 0.5) * 0.3 * cellSize;
        const offY = (deterministicHash(layer * 11, col, absRow) - 0.5) * 0.3 * cellSize;
        const x = col * cellSize + drift + offX + cellSize * 0.5;
        const y = row * cellSize + yFrac + offY + cellSize * 0.5;
        if (x < -cellSize || x > width + cellSize) continue;
        if (y < -cellSize || y > height + cellSize) continue;
        const flakeRadius = Math.max(0.5, (0.15 + h * 0.1) * cellSize * 0.5);
        ctx2.beginPath();
        ctx2.arc(x, y, flakeRadius, 0, Math.PI * 2);
        ctx2.fill();
      }
    }
  }
  ctx2.restore();
};
var applySparkle = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.5)));
  const density = Math.max(0.1, Math.min(1, num2(params.density, 0.3)));
  const seed = num2(params._seed, 0);
  const size = Math.max(1, Math.min(10, num2(params.size, 3)));
  if (intensity === 0) return;
  ctx2.save();
  ctx2.globalCompositeOperation = "screen";
  const seedInt = Math.round(seed);
  const count = Math.round(density * 40);
  for (let i = 0; i < count; i++) {
    const h = deterministicHash(seedInt, i, 30);
    if (h > density) continue;
    const x = deterministicHash(seedInt, i, 31) * width;
    const y = deterministicHash(seedInt, i, 32) * height;
    const twinkle = 0.5 + 0.5 * Math.sin(seed * 6.28 * deterministicHash(seedInt, i, 33));
    const s = size * (0.5 + deterministicHash(seedInt, i, 34) * 0.5);
    ctx2.globalAlpha = intensity * twinkle * 0.8;
    ctx2.fillStyle = "rgba(255, 255, 255, 1)";
    ctx2.beginPath();
    ctx2.arc(x, y, s, 0, Math.PI * 2);
    ctx2.fill();
    ctx2.globalAlpha = intensity * twinkle * 0.4;
    ctx2.fillRect(x - s * 2, y - 0.5, s * 4, 1);
    ctx2.fillRect(x - 0.5, y - s * 2, 1, s * 4);
  }
  ctx2.restore();
};
var applyFlash = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.8)));
  const flash = Math.max(0, Math.min(1, num2(params._flash, 0)));
  if (flash * intensity === 0) return;
  ctx2.save();
  ctx2.globalAlpha = flash * intensity;
  ctx2.fillStyle = "rgba(255, 255, 255, 1)";
  ctx2.fillRect(0, 0, width, height);
  ctx2.restore();
};
var applyZoomPulse = (ctx2, width, height, params) => {
  const zoom = Math.max(1, num2(params._zoom, 1));
  if (zoom <= 1.001) return;
  const srcData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(srcData.data.buffer);
  const dstData = ctx2.createImageData(width, height);
  const dst32 = new Uint32Array(dstData.data.buffer);
  const halfW = width / 2;
  const halfH = height / 2;
  const invZoom = 1 / zoom;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcX = Math.round(halfW + (x - halfW) * invZoom);
      const srcY = Math.round(halfH + (y - halfH) * invZoom);
      if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
        copyPixel32(dst32, y * width + x, src32, srcY * width + srcX);
      }
    }
  }
  ctx2.putImageData(dstData, 0, 0);
};
var applyMirror = (ctx2, width, height, params) => {
  const mode = Math.round(num2(params.mode, 0));
  const offset = num2(params.offset, 0);
  const imageData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(imageData.data.buffer);
  const result32 = new Uint32Array(src32.length);
  result32.set(src32);
  const mx = 0.5 + offset;
  const my = 0.5 + offset;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let sx = x, sy = y;
      const nx = x / width;
      const ny = y / height;
      if (mode === 0) {
        if (nx > mx) sx = Math.floor((2 * mx - nx) * width);
      } else if (mode === 1) {
        if (ny > my) sy = Math.floor((2 * my - ny) * height);
      } else if (mode === 2) {
        if (nx > mx) sx = Math.floor((2 * mx - nx) * width);
        if (ny > my) sy = Math.floor((2 * my - ny) * height);
      } else {
        if (nx > ny) {
          sx = Math.floor(ny * width);
          sy = Math.floor(nx * height);
        }
      }
      sx = Math.max(0, Math.min(width - 1, sx));
      sy = Math.max(0, Math.min(height - 1, sy));
      result32[y * width + x] = src32[sy * width + sx];
    }
  }
  new Uint32Array(imageData.data.buffer).set(result32);
  ctx2.putImageData(imageData, 0, 0);
};
var applyColorShift = (ctx2, width, height, params) => {
  const amount = Math.max(0, Math.min(1, num2(params.amount, 0.5)));
  const hueOffset = num2(params._hueOffset, 0) * amount;
  if (Math.abs(hueOffset) < 0.1) return;
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    const l = (mx + mn) / 2;
    if (mx === mn) continue;
    const d = mx - mn;
    const s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    let h;
    if (mx === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (mx === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
    h = ((h + hueOffset / 360) % 1 + 1) % 1;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hue2rgb2 = (t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    data[i] = Math.round(hue2rgb2(h + 1 / 3) * 255);
    data[i + 1] = Math.round(hue2rgb2(h) * 255);
    data[i + 2] = Math.round(hue2rgb2(h - 1 / 3) * 255);
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyNeonEdge = (ctx2, width, height, params) => {
  const intensity = Math.max(0, Math.min(1, num2(params.intensity, 0.7)));
  const bgDarken = Math.max(0, Math.min(1, num2(params.bgDarken, 0.7)));
  const hueOffset = num2(params._hueOffset, 0);
  const edgeWidth = Math.max(0.5, num2(params.edgeWidth, 1));
  if (intensity === 0) return;
  const step = Math.max(1, Math.round(edgeWidth));
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const result = new Uint8ClampedArray(data.length);
  const lum = (idx) => data[idx] * 0.299 + data[idx + 1] * 0.587 + data[idx + 2] * 0.114;
  const getIdx = (x, y) => (Math.max(0, Math.min(height - 1, y)) * width + Math.max(0, Math.min(width - 1, x))) * 4;
  const hsv2rgb = (h, s, v) => {
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      default:
        return [v, p, q];
    }
  };
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tl = lum(getIdx(x - step, y - step));
      const tc = lum(getIdx(x, y - step));
      const tr = lum(getIdx(x + step, y - step));
      const ml = lum(getIdx(x - step, y));
      const mr = lum(getIdx(x + step, y));
      const bl = lum(getIdx(x - step, y + step));
      const bc = lum(getIdx(x, y + step));
      const br = lum(getIdx(x + step, y + step));
      const gx = -tl - 2 * ml - bl + tr + 2 * mr + br;
      const gy = -tl - 2 * tc - tr + bl + 2 * bc + br;
      const rawEdge = Math.sqrt(gx * gx + gy * gy) / 255;
      const et = Math.max(0, Math.min(1, (rawEdge - 0.05) / 0.25));
      const edge = et * et * (3 - 2 * et);
      const hue = ((hueOffset / 360 + edge * 0.2) % 1 + 1) % 1;
      const [nr, ng, nb] = hsv2rgb(hue, 1, 1);
      const idx = (y * width + x) * 4;
      const darken = 1 - bgDarken * intensity;
      result[idx] = clamp2552(
        Math.round(data[idx] * darken + nr * 255 * edge * intensity)
      );
      result[idx + 1] = clamp2552(
        Math.round(data[idx + 1] * darken + ng * 255 * edge * intensity)
      );
      result[idx + 2] = clamp2552(
        Math.round(data[idx + 2] * darken + nb * 255 * edge * intensity)
      );
      result[idx + 3] = data[idx + 3];
    }
  }
  imageData.data.set(result);
  ctx2.putImageData(imageData, 0, 0);
};
var applySplit = (ctx2, width, height, params) => {
  const layout = Math.round(num2(params.layout, 0));
  const zoom = Math.max(0.01, num2(params.zoom, 1));
  let cols, rows;
  if (layout === 0) {
    cols = 2;
    rows = 2;
  } else if (layout === 1) {
    cols = 3;
    rows = 3;
  } else if (layout === 2) {
    cols = 2;
    rows = 1;
  } else {
    cols = 1;
    rows = 2;
  }
  const srcData = ctx2.getImageData(0, 0, width, height);
  const src32 = new Uint32Array(srcData.data.buffer);
  const dstData = ctx2.createImageData(width, height);
  const dst32 = new Uint32Array(dstData.data.buffer);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let u = x / width * cols % 1;
      let v = y / height * rows % 1;
      u = 0.5 + (u - 0.5) / zoom;
      v = 0.5 + (v - 0.5) / zoom;
      u = Math.max(0, Math.min(1, u));
      v = Math.max(0, Math.min(1, v));
      const srcX = Math.min(width - 1, Math.max(0, Math.floor(u * width)));
      const srcY = Math.min(height - 1, Math.max(0, Math.floor(v * height)));
      copyPixel32(dst32, y * width + x, src32, srcY * width + srcX);
    }
  }
  ctx2.putImageData(dstData, 0, 0);
};
var applyKawaseBlur = (ctx2, width, height, params) => {
  const radius = Math.max(0, num2(params.radius, 4));
  if (radius === 0) return;
  applyBoxBlur(ctx2, width, height, Math.ceil(radius));
};
var applyAscii = (ctx2, width, height, params) => {
  const charSize = Math.max(4, Math.round(num2(params.charSize, 8)));
  const src = ctx2.getImageData(0, 0, width, height);
  const srcData = src.data;
  const dst = ctx2.createImageData(width, height);
  const dstData = dst.data;
  const bitmaps = [
    0,
    65600,
    332772,
    15255086,
    23385164,
    15252014,
    13199452,
    11512810
  ];
  for (let cy = 0; cy < height; cy += charSize) {
    for (let cx = 0; cx < width; cx += charSize) {
      const sx = Math.min(cx + (charSize >> 1), width - 1);
      const sy = Math.min(cy + (charSize >> 1), height - 1);
      const si = (sy * width + sx) * 4;
      const r = srcData[si], g = srcData[si + 1], b = srcData[si + 2], a = srcData[si + 3];
      const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
      const level = Math.min(7, Math.max(0, Math.floor(lum * 8)));
      const bitmap = bitmaps[level];
      for (let py = 0; py < charSize && cy + py < height; py++) {
        for (let px = 0; px < charSize && cx + px < width; px++) {
          const di = ((cy + py) * width + (cx + px)) * 4;
          const gx = Math.floor(px / charSize * 5);
          const gy = Math.floor(py / charSize * 5);
          const bit = bitmap >> gx + gy * 5 & 1;
          if (bit) {
            dstData[di] = r;
            dstData[di + 1] = g;
            dstData[di + 2] = b;
            dstData[di + 3] = a;
          } else {
            dstData[di + 3] = 0;
          }
        }
      }
    }
  }
  ctx2.putImageData(dst, 0, 0);
};
var applyCrossHatch = (ctx2, width, height, params) => {
  const spacing = Math.max(3, num2(params.spacing, 10));
  const lineWidth = Math.max(0.5, num2(params.lineWidth, 1));
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
      let c = 255;
      if (lum < 0.9 && (x + y) % spacing < lineWidth) c = 0;
      if (lum < 0.7 && ((x - y) % spacing + spacing) % spacing < lineWidth)
        c = 0;
      if (lum < 0.5 && (x + y + spacing * 0.5) % spacing < lineWidth) c = 0;
      if (lum < 0.3 && ((x - y + spacing * 0.5) % spacing + spacing) % spacing < lineWidth)
        c = 0;
      data[i] = c;
      data[i + 1] = c;
      data[i + 2] = c;
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyGodray = (ctx2, width, height, params) => {
  const intensity = num2(params.intensity, 0.5);
  const angle2 = num2(params.angle, 30) * Math.PI / 180;
  const lac = num2(params.lacunarity, 2.5);
  const gn = num2(params.gain, 0.5);
  const seed = num2(params._seed, 0);
  const ca = Math.cos(angle2);
  const sa = Math.sin(angle2);
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let y = 0; y < height; y++) {
    const ny = y / height;
    const fade = Math.min(ny / 0.6, 1) * Math.min((1 - ny) / 0.6, 1);
    for (let x = 0; x < width; x++) {
      const nx = x / width;
      const rx = nx * ca - ny * sa;
      const ry = nx * sa + ny * ca;
      const t = fbm2D(rx * 4 + seed * 7.31, ry * 4, {
        octaves: 4,
        lacunarity: lac,
        gain: gn
      });
      const ray = Math.max(0, Math.min(1, t * fade * intensity));
      const i = (y * width + x) * 4;
      data[i] = clamp2552(data[i] + ray * 255);
      data[i + 1] = clamp2552(data[i + 1] + ray * 255);
      data[i + 2] = clamp2552(data[i + 2] + ray * 255);
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applySpotlight = (ctx2, width, height, params) => {
  const posX = num2(params.posX, 0.5);
  const posY = num2(params.posY, 0.5);
  const radius = num2(params.radius, 0.5);
  const softness = num2(params.softness, 0.5);
  const intensity = num2(params.intensity, 1.5);
  const scR = num2(params.spotColorR, 1);
  const scG = num2(params.spotColorG, 1);
  const scB = num2(params.spotColorB, 1);
  const ambient = num2(params.ambient, 0.3);
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let y = 0; y < height; y++) {
    const ny = y / height;
    for (let x = 0; x < width; x++) {
      const nx = x / width;
      const dx = nx - posX, dy = ny - posY;
      const dist2 = Math.sqrt(dx * dx + dy * dy) * 2;
      const edge0 = radius, edge1 = radius + softness;
      const t = Math.max(
        0,
        Math.min(1, (dist2 - edge0) / (edge1 - edge0 || 1e-3))
      );
      const spot = 1 - t * t * (3 - 2 * t);
      const i = (y * width + x) * 4;
      data[i] = clamp2552(data[i] * (ambient + scR * spot * intensity));
      data[i + 1] = clamp2552(data[i + 1] * (ambient + scG * spot * intensity));
      data[i + 2] = clamp2552(data[i + 2] * (ambient + scB * spot * intensity));
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyFire = (ctx2, width, height, params) => {
  const intensity = num2(params.intensity, 0.7);
  const scale = num2(params.scale, 4);
  const speed = num2(params.speed, 1);
  const seed = num2(params._seed, 0);
  const time = seed * speed;
  function fireNoise(px, py, s) {
    return (noise2D(px + s * 7.31, py) + 1) * 0.5;
  }
  function fireFbm(px, py, s, oct) {
    return (fbm2D(px + s * 7.31, py, { octaves: oct }) + 1) * 0.5;
  }
  function fireColor(t) {
    t = Math.max(0, Math.min(1, t));
    if (t < 0.25) return [0.02 + t * 4 * 0.48, t * 4 * 0.05, 0];
    if (t < 0.5) {
      const f2 = (t - 0.25) * 4;
      return [0.5 + f2 * 0.5, 0.05 + f2 * 0.3, f2 * 0];
    }
    if (t < 0.75) {
      const f2 = (t - 0.5) * 4;
      return [1, 0.35 + f2 * 0.4, 0 + f2 * 0.2];
    }
    const f = (t - 0.75) * 4;
    return [1, 0.75 + f * 0.2, 0.2 + f * 0.5];
  }
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  const maxDim = Math.max(width, height);
  const oct1 = maxDim > 800 ? 4 : 6;
  const oct2 = maxDim > 800 ? 3 : 5;
  const oct3 = maxDim > 800 ? 4 : 6;
  for (let y = 0; y < height; y++) {
    const ny = y / height;
    for (let x = 0; x < width; x++) {
      const nx = x / width;
      const qx = fireFbm(nx * scale, ny * scale + time * 0.6, 0, oct1);
      const qy = fireFbm(
        nx * scale + 5.2,
        ny * scale + 1.3 + time * 0.4,
        1,
        oct1
      );
      const rx = fireFbm(
        nx * scale + qx * 3 + 1.7,
        ny * scale + qy * 3 + 9.2 + time * 0.7,
        2,
        oct2
      );
      const ry = fireFbm(
        nx * scale + qx * 2.5 + 8.3,
        ny * scale + qy * 2.5 + 2.8 + time * 0.5,
        3,
        oct2
      );
      const n = fireFbm(
        nx * scale + rx * 2,
        ny * scale + ry * 2 + time * 0.9,
        4,
        oct3
      );
      const baseMask = Math.max(0, Math.min(1, (ny - 0.25) / 0.75));
      const tipMask = Math.max(0, Math.min(1, (1 - ny) / 0.08));
      const hTaper = Math.max(0, Math.min(1, nx / 0.3)) * Math.max(0, Math.min(1, (1 - nx) / 0.3));
      const hMixed = hTaper + (1 - hTaper) * Math.max(0, Math.min(1, (ny - 0.3) / 0.6));
      let fire = n * baseMask * tipMask * hMixed;
      fire = Math.pow(Math.max(fire, 0), 1.3);
      const ember = Math.max(0, 1 - (1 - ny) / 0.2) * (0.3 + 0.2 * fireNoise(nx * 8 + time, ny * 8 + time, 5));
      fire = Math.min(1, fire + ember * 0.4);
      const [fr, fg, fb] = fireColor(fire);
      const spark = fireNoise(nx * 30, ny * 30 - time * 3, 6);
      const sparkVal = spark > 0.92 ? (spark - 0.92) / 0.06 * baseMask * 0.7 : 0;
      const i = (y * width + x) * 4;
      const addR = (fr * fire + sparkVal) * intensity;
      const addG = (fg * fire + sparkVal * 0.8) * intensity;
      const addB = (fb * fire + sparkVal * 0.3) * intensity;
      data[i] = clamp2552(data[i] + addR * 255);
      data[i + 1] = clamp2552(data[i + 1] + addG * 255);
      data[i + 2] = clamp2552(data[i + 2] + addB * 255);
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyFireworks = (ctx2, width, height, params) => {
  const intensity = num2(params.intensity, 0.8);
  const seed = num2(params._seed, 0);
  const density = Math.max(1, Math.min(8, num2(params.density, 4)));
  const trailLen = num2(params.trailLength, 3);
  const aspect = width / height;
  const dragK = 1.8;
  const grav = 0.12;
  const riseDur = 1;
  const cycle = 4;
  const trailR = trailLen * 4e-3 + 5e-3;
  function hash(n) {
    return (Math.sin(n) * 43758.5453 % 1 + 1) % 1;
  }
  function particlePos(cx, cy, vx, vy, t, g, k) {
    const dt = 1 - Math.exp(-k * t);
    const px = cx + vx * dt / k;
    const py = cy + vy * dt / k + g * (t / k - dt / (k * k));
    return [px, py];
  }
  function gaussianSplat(data2, px, py, cr, cg, cb, bright, radius) {
    if (bright < 5e-3) return;
    const rSq = radius * radius + 5e-5;
    const pxX = Math.round(px / aspect * width);
    const pxY = Math.round(py * height);
    const r = Math.ceil(radius * Math.max(width, height) * 1.2);
    const x0 = Math.max(0, pxX - r), x1 = Math.min(width - 1, pxX + r);
    const y0 = Math.max(0, pxY - r), y1 = Math.min(height - 1, pxY + r);
    for (let sy = y0; sy <= y1; sy++) {
      const ny = sy / height;
      for (let sx = x0; sx <= x1; sx++) {
        const nx = sx / width * aspect;
        const dSq = (nx - px) ** 2 + (ny - py) ** 2;
        const g = Math.exp(-dSq / rSq) * bright;
        if (g < 8e-3) continue;
        const i = (sy * width + sx) * 4;
        data2[i] = clamp2552(data2[i] + cr * g * 255);
        data2[i + 1] = clamp2552(data2[i + 1] + cg * g * 255);
        data2[i + 2] = clamp2552(data2[i + 2] + cb * g * 255);
      }
    }
  }
  const imageData = ctx2.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let b = 0; b < density; b++) {
    const phase = hash(b * 7.13) * 5;
    const lt = ((seed + phase) % cycle + cycle) % cycle;
    const cIdx = Math.floor((seed + phase) / cycle);
    const cx = (hash(b * 3.71 + cIdx) * 0.6 + 0.2) * aspect;
    const cy = hash(b * 5.43 + cIdx) * 0.3 + 0.2;
    const launchX = cx + (hash(b * 2.17 + cIdx) - 0.5) * 0.1 * aspect;
    const launchY = 0.95;
    if (lt < riseDur) {
      const rT = lt / riseDur;
      const easeT = rT * rT * (3 - 2 * rT);
      const rocketX = launchX + (cx - launchX) * easeT;
      const rocketY = launchY + (cy - launchY) * easeT;
      gaussianSplat(data, rocketX, rocketY, 1, 0.85, 0.5, 2, 0.017);
      for (let tr = 1; tr <= 10; tr++) {
        const tt = rT - tr * 0.015;
        if (tt < 0) break;
        const eBack = tt * tt * (3 - 2 * tt);
        const tpx = launchX + (cx - launchX) * eBack + (hash(b * 50 + tr + cIdx) - 0.5) * 8e-3;
        const tpy = launchY + (cy - launchY) * eBack;
        const trFade = Math.pow(1 - tr / 11, 2);
        gaussianSplat(data, tpx, tpy, 1, 0.5, 0.15, 0.5 * trFade, 0.012);
      }
      continue;
    }
    const explTime = lt - riseDur;
    const explDur = cycle - riseDur;
    const explT = explTime / explDur;
    const fade = Math.exp(-explTime * 1.2);
    const onset = Math.min(explT / 0.03, 1);
    const hue = hash(b + cIdx * 13) * Math.PI * 2;
    const cR = Math.min(1, (0.55 + 0.45 * Math.cos(hue)) ** 2 * 1.3);
    const cG = Math.min(1, (0.55 + 0.45 * Math.cos(hue + 2.094)) ** 2 * 1.3);
    const cB = Math.min(1, (0.55 + 0.45 * Math.cos(hue + 4.189)) ** 2 * 1.3);
    const burstType = hash(b * 11 + cIdx * 3);
    const numParticles = burstType < 0.4 ? 48 : 32;
    const speedMul = burstType < 0.4 ? 0.45 : 0.55;
    const flashFade = Math.exp(-explTime * 8);
    if (flashFade > 0.01) {
      gaussianSplat(
        data,
        cx,
        cy,
        1,
        0.97,
        0.85,
        3 * flashFade,
        0.015 + explTime * 0.04
      );
    }
    for (let p = 0; p < numParticles; p++) {
      const angle2 = p * 6.2832 / numParticles + hash(b * 100 + p) * 0.3;
      const spd = (0.5 + hash(p * 13 + b) * 0.5) * speedMul;
      const vx = Math.cos(angle2) * spd;
      const vy = Math.sin(angle2) * spd;
      const [px, py] = particlePos(cx, cy, vx, vy, explTime, grav, dragK);
      const twinkle = 0.6 + 0.4 * Math.sin(explTime * 15 + p * 4.3);
      const bright = fade * onset * twinkle * intensity;
      gaussianSplat(data, px, py, cR, cG, cB, bright, trailR);
      gaussianSplat(data, px, py, cR, cG, cB, bright * 0.5, trailR * 0.4);
      const trailSteps = Math.round(trailLen * 1.5 + 2);
      for (let ts = 1; ts <= trailSteps; ts++) {
        const tBack = explTime - ts * 0.04;
        if (tBack < 0) break;
        const [tpx, tpy] = particlePos(cx, cy, vx, vy, tBack, grav, dragK);
        const trailFade = Math.pow(1 - ts / (trailSteps + 1), 1.5);
        gaussianSplat(
          data,
          tpx,
          tpy,
          cR,
          cG,
          cB,
          fade * trailFade * 0.35,
          trailR * 0.77
        );
      }
    }
    if (explT > 0.3) {
      for (let e = 0; e < 16; e++) {
        const ea = e * 0.393 + hash(b * 200 + e) * 0.8;
        const espd = 0.15 + hash(e * 7 + b * 3) * 0.15;
        const evx = Math.cos(ea) * espd;
        const evy = Math.sin(ea) * espd;
        const etime = explTime - 0.3 * explDur;
        if (etime < 0) continue;
        const [epx, epy] = particlePos(
          cx,
          cy,
          evx,
          evy,
          etime * 1.5,
          grav * 2.5,
          dragK * 0.7
        );
        const etwinkle = Math.sin(etime * 8 + e * 1.7) > 0 ? 1 : 0.3;
        const eg = (1 - (explT - 0.3) / 0.7) * etwinkle * 0.3;
        gaussianSplat(
          data,
          epx,
          epy,
          cR * 0.6,
          cG * 0.6,
          cB * 0.6,
          eg,
          trailR * 0.6
        );
      }
    }
  }
  ctx2.putImageData(imageData, 0, 0);
};
var applyCameraMotionBlur = (ctx2, width, height, params) => {
  const samples = Math.max(2, Math.min(32, Math.round(num2(params.samples, 8))));
  const shutterAngle = Math.max(
    0,
    Math.min(360, num2(params.shutterAngle, 180))
  );
  if (shutterAngle === 0) return;
  const blurRadius = Math.max(
    1,
    Math.round(shutterAngle / 360 * samples * 0.5)
  );
  applyBoxBlur(ctx2, width, height, blurRadius);
};
var CANVAS2D_EFFECT_HANDLERS = {
  applyGaussianBlur,
  applyRadialBlur,
  applyWave,
  applyRipple,
  applyRgbSplit,
  applyVignette,
  applyGlow,
  applySharpen,
  applyColorGrading,
  applyVhs,
  applyGlitchBlock,
  applyFilmGrain,
  applyShake,
  applyFisheye,
  applySwirl,
  applyKaleidoscope,
  applyPixelate,
  applyPosterize,
  applyInvert,
  applyDuotone,
  applyHalftone,
  applyEmboss,
  applySpherize,
  applyThermal,
  applyMotionBlur,
  applyEcho,
  applyColorLut,
  applyTiltShift,
  applyBokeh,
  applyLensFlare,
  applyLightLeak,
  applyRain,
  applySnow,
  applySparkle,
  applyFlash,
  applyZoomPulse,
  applyMirror,
  applyColorShift,
  applyNeonEdge,
  applySplit,
  applyKawaseBlur,
  applyAscii,
  applyCrossHatch,
  applyGodray,
  applySpotlight,
  applyFire,
  applyFireworks,
  applyCameraMotionBlur
};
function applyCanvas2DEffect(ctx2, width, height, fallbackName, params) {
  const handler = CANVAS2D_EFFECT_HANDLERS[fallbackName];
  if (handler) {
    handler(ctx2, width, height, params);
  }
}

// ../../shared/keyframes/SpeedRampCalculator.ts
var MIN_SPEED = 0.1;
var MAX_SPEED = 8;
var MAX_LUT_ENTRIES = 1e4;
function clampSpeed(speed) {
  return Math.max(MIN_SPEED, Math.min(MAX_SPEED, speed));
}
var SpeedRampCalculator = class {
  constructor(speedKeyframes, elementDurationMs, sampleIntervalMs = 16) {
    this.lut = [];
    this.totalMediaDurationSec = 0;
    this.buildLUT(speedKeyframes, elementDurationMs, sampleIntervalMs);
  }
  buildLUT(keyframes, durationMs, sampleIntervalMs) {
    if (keyframes.length === 0 || durationMs <= 0) {
      this.lut = [{ timeMs: 0, cumulativeMediaSec: 0, speedAtTime: 1 }];
      this.totalMediaDurationSec = 0;
      return;
    }
    const entries = [];
    let cumulative = 0;
    const firstSpeed = clampSpeed(interpolateKeyframeProperties(keyframes, 0).speed ?? 1);
    entries.push({ timeMs: 0, cumulativeMediaSec: 0, speedAtTime: firstSpeed });
    let prevSpeed = firstSpeed;
    let steps = Math.ceil(durationMs / sampleIntervalMs);
    if (steps > MAX_LUT_ENTRIES) {
      sampleIntervalMs = Math.ceil(durationMs / MAX_LUT_ENTRIES);
      steps = Math.ceil(durationMs / sampleIntervalMs);
    }
    let compensation = 0;
    for (let i = 1; i <= steps; i++) {
      const t = Math.min(i * sampleIntervalMs, durationMs);
      const dt = t - entries[entries.length - 1].timeMs;
      if (dt <= 0) continue;
      const currentSpeed = clampSpeed(interpolateKeyframeProperties(keyframes, t).speed ?? 1);
      const increment = (prevSpeed + currentSpeed) / 2 * (dt / 1e3);
      const y = increment - compensation;
      const newSum = cumulative + y;
      compensation = newSum - cumulative - y;
      cumulative = newSum;
      entries.push({
        timeMs: t,
        cumulativeMediaSec: cumulative,
        speedAtTime: currentSpeed
      });
      prevSpeed = currentSpeed;
    }
    const lastEntry = entries[entries.length - 1];
    if (lastEntry.timeMs < durationMs) {
      const dt = durationMs - lastEntry.timeMs;
      const finalSpeed = clampSpeed(
        interpolateKeyframeProperties(keyframes, durationMs).speed ?? 1
      );
      const increment = (prevSpeed + finalSpeed) / 2 * (dt / 1e3);
      const y = increment - compensation;
      const newSum = cumulative + y;
      compensation = newSum - cumulative - y;
      cumulative = newSum;
      entries.push({
        timeMs: durationMs,
        cumulativeMediaSec: cumulative,
        speedAtTime: finalSpeed
      });
    }
    this.lut = entries;
    this.totalMediaDurationSec = cumulative;
  }
  /** 二分查找 LUT 中 timeMs <= localTimeMs 的最后一个索引，返回该索引及线性插值分数 */
  findLUTSegment(localTimeMs) {
    const lut = this.lut;
    let lo = 0;
    let hi = lut.length - 1;
    while (lo < hi) {
      const mid = lo + hi + 1 >>> 1;
      if (lut[mid].timeMs <= localTimeMs) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }
    if (lo + 1 >= lut.length) return null;
    const segmentDt = lut[lo + 1].timeMs - lut[lo].timeMs;
    if (segmentDt <= 0) return null;
    return { index: lo, fraction: (localTimeMs - lut[lo].timeMs) / segmentDt };
  }
  getMediaTimeAtLocalTime(localTimeMs) {
    if (!isFinite(localTimeMs) || localTimeMs <= 0) return 0;
    const lut = this.lut;
    if (lut.length === 0) return 0;
    const lastEntry = lut[lut.length - 1];
    if (localTimeMs >= lastEntry.timeMs) return lastEntry.cumulativeMediaSec;
    const seg = this.findLUTSegment(localTimeMs);
    if (!seg) return lut[lut.length - 1].cumulativeMediaSec;
    const entry = lut[seg.index];
    const nextEntry = lut[seg.index + 1];
    const result = entry.cumulativeMediaSec + seg.fraction * (nextEntry.cumulativeMediaSec - entry.cumulativeMediaSec);
    return isFinite(result) ? result : entry.cumulativeMediaSec;
  }
  getSpeedAtLocalTime(localTimeMs) {
    if (this.lut.length === 0) return 1;
    if (!isFinite(localTimeMs) || localTimeMs <= 0) return this.lut[0].speedAtTime;
    const lastEntry = this.lut[this.lut.length - 1];
    if (localTimeMs >= lastEntry.timeMs) return lastEntry.speedAtTime;
    const seg = this.findLUTSegment(localTimeMs);
    if (!seg) return this.lut[this.lut.length - 1].speedAtTime;
    const entry = this.lut[seg.index];
    const nextEntry = this.lut[seg.index + 1];
    const result = entry.speedAtTime + seg.fraction * (nextEntry.speedAtTime - entry.speedAtTime);
    return isFinite(result) ? result : entry.speedAtTime;
  }
  getTotalMediaDuration() {
    return this.totalMediaDurationSec;
  }
};

// ../../shared/render/shapeRenderer.ts
function renderShapeElement(ctx2, params, options) {
  const { shapeType, fill } = params;
  const w = params.width;
  const h = params.height;
  const strokeScl = options?.strokeScale ?? 1;
  const brScl = options?.borderRadiusScale ?? 1;
  const stroke = params.stroke;
  const strokeWidth = (params.strokeWidth || 0) * strokeScl;
  if (options?.pixelSnap) {
    applyPixelSnap(ctx2);
  }
  ctx2.fillStyle = fill;
  if (stroke && strokeWidth > 0) {
    ctx2.strokeStyle = stroke;
    ctx2.lineWidth = strokeWidth;
    ctx2.miterLimit = 2;
  }
  const doStroke = () => {
    if (stroke && strokeWidth > 0) ctx2.stroke();
  };
  switch (shapeType) {
    // ─── 矩形 ──────────────────────────────────────────────
    case "rect": {
      const r = (params.shapeBorderRadius || 0) * brScl;
      if (r > 0) {
        drawRoundedRect2(ctx2, w, h, r);
        ctx2.fill();
        strokeRoundedRect(ctx2, stroke, strokeWidth);
      } else {
        ctx2.fillRect(-w / 2, -h / 2, w, h);
        if (stroke && strokeWidth > 0) {
          strokeAlignedRect(ctx2, w, h, strokeWidth);
        }
      }
      break;
    }
    case "roundedRect": {
      const rawR = (params.shapeBorderRadius || 0) * brScl;
      const r = rawR > 0 ? rawR : Math.min(w, h) * 0.1;
      drawRoundedRect2(ctx2, w, h, r);
      ctx2.fill();
      strokeRoundedRect(ctx2, stroke, strokeWidth);
      break;
    }
    // ─── 圆/椭圆 ───────────────────────────────────────────
    case "circle":
    case "ellipse": {
      ctx2.beginPath();
      ctx2.ellipse(0, 0, w / 2, h / 2, 0, 0, Math.PI * 2);
      ctx2.fill();
      doStroke();
      break;
    }
    // ─── 三角形 ─────────────────────────────────────────────
    case "triangle": {
      ctx2.beginPath();
      ctx2.moveTo(0, -h / 2);
      ctx2.lineTo(w / 2, h / 2);
      ctx2.lineTo(-w / 2, h / 2);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    case "rightTriangle": {
      ctx2.beginPath();
      ctx2.moveTo(-w / 2, -h / 2);
      ctx2.lineTo(w / 2, h / 2);
      ctx2.lineTo(-w / 2, h / 2);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    // ─── 线条 ───────────────────────────────────────────────
    case "line": {
      ctx2.beginPath();
      ctx2.lineCap = "round";
      const odd = (strokeWidth & 1) === 1;
      const yOff = isAxisAligned(ctx2) && odd ? 0.5 : 0;
      ctx2.moveTo(-w / 2, yOff);
      ctx2.lineTo(w / 2, yOff);
      if (stroke && strokeWidth > 0) ctx2.stroke();
      break;
    }
    // ─── 多边形 ─────────────────────────────────────────────
    case "polygon": {
      if (params.shapePoints && params.shapePoints.length) {
        drawPolygonPoints(ctx2, params.shapePoints, w, h);
      } else {
        drawRegularPolygon(ctx2, w, h, 5);
      }
      ctx2.fill();
      doStroke();
      break;
    }
    case "diamond": {
      ctx2.beginPath();
      ctx2.moveTo(0, -h / 2);
      ctx2.lineTo(w / 2, 0);
      ctx2.lineTo(0, h / 2);
      ctx2.lineTo(-w / 2, 0);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    case "pentagon": {
      drawRegularPolygon(ctx2, w, h, 5);
      ctx2.fill();
      doStroke();
      break;
    }
    case "hexagon": {
      drawRegularPolygon(ctx2, w, h, 6);
      ctx2.fill();
      doStroke();
      break;
    }
    case "octagon": {
      drawRegularPolygon(ctx2, w, h, 8);
      ctx2.fill();
      doStroke();
      break;
    }
    case "parallelogram": {
      ctx2.beginPath();
      ctx2.moveTo(-w / 2 + w * 0.25, -h / 2);
      ctx2.lineTo(w / 2, -h / 2);
      ctx2.lineTo(w / 2 - w * 0.25, h / 2);
      ctx2.lineTo(-w / 2, h / 2);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    // ─── 环形 ───────────────────────────────────────────────
    case "ring": {
      const R = Math.min(w, h) * 0.45;
      const r = R * 0.5;
      ctx2.beginPath();
      ctx2.arc(0, 0, R, 0, Math.PI * 2);
      ctx2.moveTo(r, 0);
      ctx2.arc(0, 0, r, 0, Math.PI * 2, true);
      fillEvenOdd(ctx2);
      doStroke();
      break;
    }
    case "halfRing": {
      const outerR = w / 2;
      const innerR = outerR * 0.6;
      ctx2.beginPath();
      ctx2.arc(0, h / 2, outerR, Math.PI, 0, false);
      ctx2.lineTo(w / 2 - (outerR - innerR), h / 2);
      ctx2.arc(0, h / 2, innerR, 0, Math.PI, true);
      ctx2.lineTo(-w / 2 + (outerR - innerR), h / 2);
      ctx2.closePath();
      fillEvenOdd(ctx2);
      doStroke();
      break;
    }
    // ─── 弧形 ───────────────────────────────────────────────
    case "semicircle": {
      const R = Math.min(w, h) / 2;
      ctx2.beginPath();
      ctx2.arc(0, 0, R, Math.PI, 0);
      ctx2.lineTo(-R, 0);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    case "quarterCircle": {
      const R = Math.min(w, h);
      ctx2.save();
      ctx2.beginPath();
      ctx2.moveTo(-w / 2, h / 2 - R);
      ctx2.lineTo(-w / 2, h / 2);
      ctx2.arc(-w / 2, h / 2, R, Math.PI / 2, Math.PI);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      ctx2.restore();
      break;
    }
    case "arch": {
      const R = w / 2;
      ctx2.beginPath();
      ctx2.moveTo(-w / 2, h / 2);
      ctx2.lineTo(-w / 2, 0);
      ctx2.arc(0, 0, R, Math.PI, 0, false);
      ctx2.lineTo(w / 2, h / 2);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    // ─── 箭头 ───────────────────────────────────────────────
    case "rightArrow": {
      ctx2.beginPath();
      const y1 = -h / 2 + h / 3;
      const y2 = -h / 2 + 2 * h / 3;
      ctx2.moveTo(-w / 2, y1);
      ctx2.lineTo(-w / 2 + 0.6 * w, y1);
      ctx2.lineTo(-w / 2 + 0.6 * w, -h / 2);
      ctx2.lineTo(w / 2, 0);
      ctx2.lineTo(-w / 2 + 0.6 * w, h / 2);
      ctx2.lineTo(-w / 2 + 0.6 * w, y2);
      ctx2.lineTo(-w / 2, y2);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    case "upArrow": {
      ctx2.beginPath();
      const yMid = -h / 2 + 0.4 * h;
      ctx2.moveTo(-w / 2 + w / 3, h / 2);
      ctx2.lineTo(-w / 2 + w / 3, yMid);
      ctx2.lineTo(-w / 2, yMid);
      ctx2.lineTo(0, -h / 2);
      ctx2.lineTo(w / 2, yMid);
      ctx2.lineTo(-w / 2 + 2 * w / 3, yMid);
      ctx2.lineTo(-w / 2 + 2 * w / 3, h / 2);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    case "downArrow": {
      ctx2.beginPath();
      const yMid = -h / 2 + 0.6 * h;
      ctx2.moveTo(-w / 2 + w / 3, -h / 2);
      ctx2.lineTo(-w / 2 + w / 3, yMid);
      ctx2.lineTo(-w / 2, yMid);
      ctx2.lineTo(0, h / 2);
      ctx2.lineTo(w / 2, yMid);
      ctx2.lineTo(-w / 2 + 2 * w / 3, yMid);
      ctx2.lineTo(-w / 2 + 2 * w / 3, -h / 2);
      ctx2.closePath();
      ctx2.fill();
      doStroke();
      break;
    }
    // ─── 十字/线条图形 ──────────────────────────────────────
    case "cross": {
      ctx2.save();
      ctx2.strokeStyle = fill;
      ctx2.lineCap = "round";
      ctx2.lineWidth = Math.max(strokeWidth || 1, 6);
      const s = Math.min(w, h) * 0.6;
      ctx2.beginPath();
      ctx2.moveTo(-s / 2, -s / 2);
      ctx2.lineTo(s / 2, s / 2);
      ctx2.moveTo(s / 2, -s / 2);
      ctx2.lineTo(-s / 2, s / 2);
      ctx2.stroke();
      ctx2.restore();
      break;
    }
    case "wave": {
      ctx2.save();
      ctx2.beginPath();
      ctx2.strokeStyle = fill;
      ctx2.lineCap = "round";
      ctx2.lineWidth = Math.max(strokeWidth || 1, 6);
      ctx2.moveTo(-w / 2, 0);
      ctx2.quadraticCurveTo(-w / 4, -h * 0.3, 0, 0);
      ctx2.quadraticCurveTo(w / 4, h * 0.3, w / 2, 0);
      ctx2.stroke();
      ctx2.restore();
      break;
    }
    case "plus": {
      const t = Math.min(w, h) / 6;
      ctx2.beginPath();
      ctx2.rect(-w * 0.4, -t / 2, w * 0.8, t);
      ctx2.rect(-t / 2, -h * 0.4, t, h * 0.8);
      ctx2.fill();
      doStroke();
      break;
    }
    // ─── 星形 ───────────────────────────────────────────────
    case "star": {
      drawStar(ctx2, w, h, 5, 0.9, 0.4, -Math.PI / 2);
      ctx2.fill();
      doStroke();
      break;
    }
    case "fourPointStar": {
      drawStar(ctx2, w, h, 4, 0.9, 0.3, 0);
      ctx2.fill();
      doStroke();
      break;
    }
    case "sixPointStar": {
      drawStar(ctx2, w, h, 6, 0.9, 0.4, -Math.PI / 2);
      ctx2.fill();
      doStroke();
      break;
    }
    case "eightPointStar": {
      drawStar(ctx2, w, h, 8, 0.9, 0.4, -Math.PI / 2);
      ctx2.fill();
      doStroke();
      break;
    }
    case "sunBurst": {
      const innerR = Math.min(w, h) / 4;
      const outerR = Math.min(w, h) / 2 * 0.9;
      ctx2.beginPath();
      ctx2.arc(0, 0, innerR, 0, Math.PI * 2);
      ctx2.fill();
      doStroke();
      ctx2.save();
      ctx2.strokeStyle = fill;
      ctx2.lineCap = "round";
      ctx2.lineWidth = Math.max(strokeWidth || 1, 3);
      ctx2.beginPath();
      for (let i = 0; i < 16; i++) {
        const ang = i * Math.PI / 8;
        const x1 = Math.cos(ang) * innerR;
        const y1 = Math.sin(ang) * innerR;
        const x2 = Math.cos(ang) * outerR;
        const y2 = Math.sin(ang) * outerR;
        ctx2.moveTo(x1, y1);
        ctx2.lineTo(x2, y2);
      }
      ctx2.stroke();
      ctx2.restore();
      break;
    }
    // ─── 默认 ───────────────────────────────────────────────
    default: {
      if (params.shapePoints && params.shapePoints.length) {
        drawPolygonPoints(ctx2, params.shapePoints, w, h);
        ctx2.fill();
        doStroke();
      } else {
        ctx2.fillRect(-w / 2, -h / 2, w, h);
        if (stroke && strokeWidth > 0) ctx2.strokeRect(-w / 2, -h / 2, w, h);
      }
      break;
    }
  }
}
function isAxisAligned(ctx2) {
  try {
    const t = ctx2.getTransform();
    return Math.abs(t.b) < 1e-3 && Math.abs(t.c) < 1e-3 && Math.abs(t.a - 1) < 1e-3 && Math.abs(t.d - 1) < 1e-3;
  } catch {
    return false;
  }
}
function applyPixelSnap(ctx2) {
  try {
    const t = ctx2.getTransform();
    if (Math.abs(t.b) < 1e-3 && Math.abs(t.c) < 1e-3 && Math.abs(t.a - 1) < 1e-3 && Math.abs(t.d - 1) < 1e-3) {
      const dx = Math.round(t.e) - t.e;
      const dy = Math.round(t.f) - t.f;
      if (Math.abs(dx) > 1e-3 || Math.abs(dy) > 1e-3) {
        ctx2.translate(dx, dy);
      }
    }
  } catch {
  }
}
function drawRoundedRect2(ctx2, w, h, r) {
  const rr = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  const x = -w / 2;
  const y = -h / 2;
  ctx2.beginPath();
  if (rr > 0) {
    ctx2.moveTo(x + rr, y);
    ctx2.lineTo(x + w - rr, y);
    ctx2.quadraticCurveTo(x + w, y, x + w, y + rr);
    ctx2.lineTo(x + w, y + h - rr);
    ctx2.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
    ctx2.lineTo(x + rr, y + h);
    ctx2.quadraticCurveTo(x, y + h, x, y + h - rr);
    ctx2.lineTo(x, y + rr);
    ctx2.quadraticCurveTo(x, y, x + rr, y);
  } else {
    ctx2.rect(x, y, w, h);
  }
}
function strokeRoundedRect(ctx2, stroke, strokeWidth) {
  if (!stroke || strokeWidth <= 0) return;
  const odd = (strokeWidth & 1) === 1;
  if (isAxisAligned(ctx2) && odd) {
    ctx2.save();
    ctx2.translate(0.5, 0.5);
    ctx2.stroke();
    ctx2.restore();
  } else {
    ctx2.stroke();
  }
}
function strokeAlignedRect(ctx2, w, h, strokeWidth) {
  const odd = (strokeWidth & 1) === 1;
  if (isAxisAligned(ctx2) && odd) {
    ctx2.strokeRect(-w / 2 + 0.5, -h / 2 + 0.5, w - 1, h - 1);
  } else {
    ctx2.strokeRect(-w / 2, -h / 2, w, h);
  }
}
function drawRegularPolygon(ctx2, w, h, sides) {
  const R = Math.min(w, h) / 2;
  ctx2.beginPath();
  for (let i = 0; i < sides; i++) {
    const ang = -Math.PI / 2 + i * 2 * Math.PI / sides;
    const x = Math.cos(ang) * R;
    const y = Math.sin(ang) * R;
    if (i === 0) ctx2.moveTo(x, y);
    else ctx2.lineTo(x, y);
  }
  ctx2.closePath();
}
function drawPolygonPoints(ctx2, points, w, h) {
  if (points.length < 2) return;
  ctx2.beginPath();
  ctx2.moveTo(points[0].x - w / 2, points[0].y - h / 2);
  for (let i = 1; i < points.length; i++) {
    ctx2.lineTo(points[i].x - w / 2, points[i].y - h / 2);
  }
  ctx2.closePath();
}
function drawStar(ctx2, w, h, numPoints, outerRatio, innerRatio, startAngle) {
  const outerR = Math.min(w, h) / 2 * outerRatio;
  const innerR = outerR * innerRatio;
  const totalPoints = numPoints * 2;
  ctx2.beginPath();
  for (let i = 0; i < totalPoints; i++) {
    const ang = startAngle + i * Math.PI / numPoints;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = Math.cos(ang) * r;
    const y = Math.sin(ang) * r;
    if (i === 0) ctx2.moveTo(x, y);
    else ctx2.lineTo(x, y);
  }
  ctx2.closePath();
}
function fillEvenOdd(ctx2) {
  try {
    ctx2.fill("evenodd");
  } catch {
    ctx2.fill();
  }
}

// ../../server/src/renderer/ServerRenderExporter.ts
async function parallelLimit(tasks, limit) {
  const results = new Array(tasks.length);
  let nextIndex = 0;
  async function runNext() {
    while (nextIndex < tasks.length) {
      const idx = nextIndex++;
      try {
        results[idx] = { status: "fulfilled", value: await tasks[idx]() };
      } catch (reason) {
        results[idx] = { status: "rejected", reason };
      }
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, tasks.length) }, () => runNext())
  );
  return results;
}
var QUALITY_MAP = {
  low: { jpegQuality: 0.6, videoBitrate: "1M" },
  medium: { jpegQuality: 0.8, videoBitrate: "2.5M" },
  high: { jpegQuality: 0.9, videoBitrate: "5M" },
  very_high: { jpegQuality: 0.95, videoBitrate: "10M" }
};
var HW_ENCODER_CANDIDATES = [
  // macOS VideoToolbox：使用码率模式（-q:v 与 -b:v 冲突，选一种）
  {
    name: "h264_videotoolbox",
    codec: "h264_videotoolbox",
    extraArgs: ["-allow_sw", "1"],
    useBitrate: true
  },
  // NVIDIA NVENC
  {
    name: "h264_nvenc",
    codec: "h264_nvenc",
    extraArgs: ["-preset", "p4", "-tune", "hq", "-rc", "vbr"],
    useBitrate: true
  },
  // Intel Quick Sync Video
  {
    name: "h264_qsv",
    codec: "h264_qsv",
    extraArgs: ["-preset", "medium"],
    useBitrate: true
  },
  // AMD AMF (Windows/Linux)
  {
    name: "h264_amf",
    codec: "h264_amf",
    extraArgs: ["-quality", "balanced"],
    useBitrate: true
  }
];
var _detectedHwEncoder;
function detectHwEncoder() {
  if (_detectedHwEncoder !== void 0) return _detectedHwEncoder;
  try {
    const output = execSync("ffmpeg -hide_banner -encoders", {
      encoding: "utf8",
      timeout: 5e3,
      stdio: ["pipe", "pipe", "pipe"]
    });
    for (const candidate of HW_ENCODER_CANDIDATES) {
      if (output.includes(candidate.name)) {
        console.log(
          `[ServerRenderExporter] Detected hardware encoder: ${candidate.name}`
        );
        _detectedHwEncoder = {
          codec: candidate.codec,
          extraArgs: candidate.extraArgs,
          useBitrate: candidate.useBitrate
        };
        return _detectedHwEncoder;
      }
    }
  } catch {
  }
  console.log(
    "[ServerRenderExporter] No hardware encoder detected, using libx264"
  );
  _detectedHwEncoder = null;
  return null;
}
var BT709_FLAGS = [
  "-colorspace",
  "bt709",
  "-color_primaries",
  "bt709",
  "-color_trc",
  "bt709",
  "-color_range",
  "tv"
];
function getAvcLevel(width, height, fps) {
  const macroblocks = Math.ceil(width / 16) * Math.ceil(height / 16);
  const mbPerSec = macroblocks * fps;
  if (macroblocks > 8704 || mbPerSec > 522240) return "5.1";
  if (macroblocks > 8192 || mbPerSec > 245760) return "4.2";
  if (macroblocks > 3600 || mbPerSec > 108e3) return "4.1";
  return "3.1";
}
function buildEncoderArgs(bitrate, fps, width, height) {
  const gopSize = String(fps * 2);
  const hw = detectHwEncoder();
  if (hw) {
    return [
      "-c:v",
      hw.codec,
      ...hw.extraArgs,
      ...hw.useBitrate ? ["-b:v", bitrate] : [],
      "-g",
      gopSize,
      "-pix_fmt",
      "yuv420p",
      ...BT709_FLAGS
    ];
  }
  return [
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-profile:v",
    "high",
    "-level",
    getAvcLevel(width, height, fps),
    "-b:v",
    bitrate,
    "-g",
    gopSize,
    "-pix_fmt",
    "yuv420p",
    ...BT709_FLAGS
  ];
}
var ServerRenderExporter = class _ServerRenderExporter {
  constructor() {
    this._textWrapCache = null;
    this._charWidthCache = null;
    this.captionIndex = null;
    this.captionIndexSource = null;
    this._propsPool = null;
    this._lineWidthCache = null;
    this._metricsCache = null;
    this._filterCache = null;
    // Canvas 池：复用离屏 canvas 减少 GC 压力（像素化效果等）
    this._canvasPool = [];
    // 静态元素渲染缓存：无动画/关键帧的文字、图片、形状首帧缓存
    this._staticCache = null;
    // 变速曲线计算器缓存：elementId → SpeedRampCalculator
    this._speedCalcCache = /* @__PURE__ */ new Map();
    // SVG 动画渲染器：检测 SMIL 动画、逐帧烘焙并光栅化
    this.svgAnimator = new ServerSvgAnimator();
    /**
     * 查找当前时间的活跃转场
     */
    this._transitionZoneCache = /* @__PURE__ */ new Map();
    /**
     * 离屏 canvas 缓存，按 "fallbackName_WxH" 键缓存。
     * 避免每帧重复分配 Canvas 对象（heavy effects 每帧都调用）。
     */
    this._effectOffscreenCache = /* @__PURE__ */ new Map();
    // GIF 帧缓存: src → { frames: Image[], delays: number[] }
    this.gifCache = /* @__PURE__ */ new Map();
  }
  // 最终量化输出（Uint8Clamped）
  /** Worker Thread 初始化：在渲染前初始化所有帧级缓存 */
  initializeCaches() {
    this._textWrapCache = /* @__PURE__ */ new Map();
    this._charWidthCache = /* @__PURE__ */ new Map();
    this._propsPool = /* @__PURE__ */ new Map();
    this._lineWidthCache = /* @__PURE__ */ new Map();
    this._metricsCache = /* @__PURE__ */ new Map();
    this._filterCache = /* @__PURE__ */ new Map();
    this._staticCache = /* @__PURE__ */ new Map();
  }
  /**
   * Opt 1: 将 activeElementsByFrame 转为 [trackIndex, elementIndex] 索引对，
   * 序列化进 WorkerSession 传递给 Workers，避免各 Worker 重复重建该表。
   */
  buildActiveFrameIndices(activeElementsByFrame2, renderTracks) {
    const idToIndex = /* @__PURE__ */ new Map();
    for (let ti = 0; ti < renderTracks.length; ti++) {
      const elements = renderTracks[ti].elements;
      for (let ei = 0; ei < elements.length; ei++) {
        idToIndex.set(elements[ei].id, [ti, ei]);
      }
    }
    return activeElementsByFrame2.map(
      (frameEntries) => frameEntries.map(({ element }) => idToIndex.get(element.id)).filter((pair) => pair !== void 0)
    );
  }
  /**
   * Opt 3: 为指定帧范围 [startFrame, endFrame) 收集所有视频帧需求，
   * 返回 videoLocalPath → { cacheKeys, mediaTimes } 映射，
   * 供微批处理预提取或 batchPreExtract 调用。
   */
  buildVideoFrameBatchForWindow(startFrame, endFrame, activeElementsByFrame2, fps, resolvedPaths2) {
    const result = /* @__PURE__ */ new Map();
    const end = Math.min(endFrame, activeElementsByFrame2.length);
    for (let fi = startFrame; fi < end; fi++) {
      const time = fi / fps;
      for (const { element } of activeElementsByFrame2[fi]) {
        if (element.type !== "video" || !element.src) continue;
        const localPath = resolvedPaths2.get(element.src);
        if (!localPath) continue;
        const localTimeRaw = time - element.startTime + element.trimStart;
        const visibleDuration = Math.max(
          0,
          element.duration - element.trimStart - element.trimEnd
        );
        const clampedLocalTime = Math.min(
          Math.max(0, localTimeRaw),
          Math.max(0, visibleDuration - 1e-3)
        );
        const targetMediaTime = Math.max(
          0,
          this.getTargetMediaTime(element, clampedLocalTime)
        );
        const cacheKey = `${localPath}@${targetMediaTime.toFixed(3)}`;
        if (!result.has(localPath)) {
          result.set(localPath, {
            cacheKeys: [],
            mediaTimes: [],
            seen: /* @__PURE__ */ new Set()
          });
        }
        const entry = result.get(localPath);
        if (!entry.seen.has(cacheKey)) {
          entry.seen.add(cacheKey);
          entry.cacheKeys.push(cacheKey);
          entry.mediaTimes.push(targetMediaTime);
        }
      }
    }
    const out = /* @__PURE__ */ new Map();
    for (const [k, v] of result)
      out.set(k, { cacheKeys: v.cacheKeys, mediaTimes: v.mediaTimes });
    return out;
  }
  /** Worker Thread 清理：渲染结束后释放帧级缓存 */
  cleanupCaches() {
    this._textWrapCache = null;
    this._charWidthCache = null;
    this.captionIndex = null;
    this.captionIndexSource = null;
    this._propsPool = null;
    this._lineWidthCache = null;
    this._metricsCache = null;
    this._filterCache = null;
    this._canvasPool.length = 0;
    this._staticCache = null;
    this._transitionZoneCache.clear();
    this._speedCalcCache.clear();
  }
  /**
   * 渲染单帧到 ctx（不含 toBufferSync / encoder.stdin.write）。
   * 串行路径和 Worker Thread 并行路径均调用此方法。
   */
  async renderFrameToBuffer(frameIndex, fps, ctx2, outWidth, outHeight, canvasWidth, canvasHeight, scaleX, scaleY, activeElements, transitions, renderTracks, captions, captionStyle, captionAnimation, backgroundColor, backgroundType, blurIntensity, resolvedPaths2, imageLoader2, videoExtractor2, blurOffCanvas2, blurOffCtx2, totalFrames, totalDuration2, timeOverride) {
    const time = timeOverride !== void 0 ? timeOverride : totalFrames !== void 0 && totalDuration2 !== void 0 && frameIndex === totalFrames - 1 ? totalDuration2 : frameIndex / fps;
    ctx2.clearRect(0, 0, outWidth, outHeight);
    if (backgroundType !== "blur") {
      const bg = backgroundColor || "#000000";
      if (bg.includes("gradient")) {
        this.drawGradientBackground(ctx2, outWidth, outHeight, bg);
      } else {
        ctx2.fillStyle = bg;
        ctx2.fillRect(0, 0, outWidth, outHeight);
      }
    }
    if (backgroundType === "blur") {
      try {
        await this.renderBlurBackground(
          ctx2,
          outWidth,
          outHeight,
          activeElements,
          time,
          blurIntensity * Math.sqrt(scaleX * scaleY),
          resolvedPaths2,
          imageLoader2,
          videoExtractor2,
          blurOffCanvas2,
          blurOffCtx2
        );
      } catch (err) {
        console.warn(
          `[ServerRenderExporter] Failed to render blur background:`,
          err
        );
      }
    }
    const activeTransition = this._findActiveTransition(
      transitions,
      activeElements,
      time
    );
    const transitionElementIds = /* @__PURE__ */ new Set();
    if (activeTransition) {
      transitionElementIds.add(activeTransition.zone.sourceElementId);
      transitionElementIds.add(activeTransition.zone.targetElementId);
    }
    for (const { element } of activeElements) {
      if (transitionElementIds.has(element.id)) continue;
      const elStart = element.startTime + element.trimStart;
      const elEnd = element.startTime + element.duration - element.trimEnd;
      if (time < elStart || time > elEnd) continue;
      try {
        await this.renderElement(
          ctx2,
          element,
          time,
          resolvedPaths2,
          imageLoader2,
          videoExtractor2,
          scaleX,
          scaleY,
          canvasWidth,
          canvasHeight
        );
      } catch (err) {
        console.warn(
          `[ServerRenderExporter] Failed to render element ${element.id}:`,
          err
        );
      }
    }
    if (activeTransition) {
      try {
        await this._renderTransitionFrame(
          ctx2,
          activeTransition,
          activeElements,
          time,
          resolvedPaths2,
          imageLoader2,
          videoExtractor2,
          scaleX,
          scaleY,
          canvasWidth,
          canvasHeight,
          outWidth,
          outHeight
        );
      } catch (err) {
        console.warn(
          `[ServerRenderExporter] Failed to render transition:`,
          err
        );
      }
    }
    if (captions && captions.length > 0) {
      try {
        this.renderCaptionsOverlay(
          ctx2,
          outWidth,
          outHeight,
          time,
          captions,
          captionStyle ?? void 0,
          captionAnimation ?? void 0,
          scaleX,
          scaleY
        );
      } catch (err) {
        console.warn(`[ServerRenderExporter] Failed to render captions:`, err);
      }
    }
    const activeEffects = DataConverter.getActiveEffectElements(
      renderTracks,
      time
    );
    if (activeEffects.length > 0) {
      try {
        const resolvedEffects = this.resolveEffectElements(activeEffects, time);
        if (resolvedEffects.length > 0) {
          this.applyGlobalEffects(ctx2, outWidth, outHeight, resolvedEffects);
        }
      } catch (err) {
        console.warn(
          `[ServerRenderExporter] Failed to apply global effects:`,
          err
        );
      }
    }
  }
  async export(canvasState, outputFormat, resolution, onProgress) {
    const fps = outputFormat.fps || 30;
    const quality = QUALITY_MAP[outputFormat.quality] || QUALITY_MAP.medium;
    const format = outputFormat.format || "mp4";
    const motionBlur = outputFormat.motionBlur ?? null;
    onProgress?.(0, "Parsing project data");
    const {
      elements = [],
      tracks = [],
      animations = [],
      captions = [],
      globalCaptionStyle: captionStyle,
      captionAnimation,
      keyframeTracks = [],
      transitions: rawTransitions = [],
      width: canvasWidth = 1920,
      height: canvasHeight = 1080,
      backgroundColor = "#000000",
      backgroundType,
      blurIntensity = 8,
      maxTime = 0
    } = canvasState;
    const transitions = rawTransitions;
    const outWidth = resolution?.width || canvasWidth;
    const outHeight = resolution?.height || canvasHeight;
    FontRegistry.registerGoogleFonts();
    let tempFontFiles = [];
    const { brandFonts } = FontRegistry.extractRequiredFonts(canvasState);
    if (brandFonts.length > 0) {
      onProgress?.(1, "Downloading custom fonts");
      tempFontFiles = await FontRegistry.registerBrandFonts(brandFonts);
    }
    const renderTracks = DataConverter.convertTracks(
      tracks,
      elements,
      animations,
      keyframeTracks
    );
    const totalDuration2 = (() => {
      if (maxTime > 0) return maxTime / 1e3;
      const tracksDuration = DataConverter.calculateTotalDuration(renderTracks);
      const captionsDuration = captions.length > 0 ? Math.max(
        0,
        ...captions.map((c) => srtTimeToMs(c.endTime) / 1e3)
      ) : 0;
      return Math.max(tracksDuration, captionsDuration);
    })();
    const totalFrames = Math.ceil(totalDuration2 * fps);
    if (totalFrames <= 0) {
      throw new Error(
        `No frames to render (duration = 0). Check that tracks contain elements with non-zero timeFrame, or that maxTime > 0.`
      );
    }
    console.log(
      `[ServerRenderExporter] Rendering ${totalFrames} frames at ${fps}fps, ${outWidth}x${outHeight}, duration=${totalDuration2.toFixed(2)}s`
    );
    onProgress?.(2, "Downloading media assets");
    const mediaResolver = new MediaResolver();
    const imageLoader2 = new ServerImageLoader();
    const videoExtractor2 = new ServerVideoFrameExtractor();
    const mediaSrcs = /* @__PURE__ */ new Set();
    const videoSrcs = /* @__PURE__ */ new Set();
    for (const track of renderTracks) {
      for (const el of track.elements) {
        if (el.src) {
          if (el.type === "video") {
            videoSrcs.add(el.src);
          } else if (el.type === "image" || el.type === "gif" || el.type === "svg") {
            mediaSrcs.add(el.src);
          }
        }
      }
    }
    const resolvedPaths2 = /* @__PURE__ */ new Map();
    const allSrcs = [...mediaSrcs, ...videoSrcs];
    const DOWNLOAD_CONCURRENCY = 6;
    for (let i = 0; i < allSrcs.length; i += DOWNLOAD_CONCURRENCY) {
      const batch = allSrcs.slice(i, i + DOWNLOAD_CONCURRENCY);
      const results = await Promise.allSettled(
        batch.map(async (src) => {
          const localPath = await mediaResolver.resolve(src);
          return { src, localPath };
        })
      );
      for (const result of results) {
        if (result.status === "fulfilled") {
          resolvedPaths2.set(result.value.src, result.value.localPath);
          if (mediaSrcs.has(result.value.src)) {
            try {
              await imageLoader2.load(result.value.localPath);
            } catch (err) {
              console.warn(
                `[ServerRenderExporter] Failed to load image: ${result.value.src}`,
                err
              );
            }
          }
        } else {
          console.warn(
            `[ServerRenderExporter] Failed to resolve media: ${batch[results.indexOf(result)]}`,
            result.reason
          );
        }
      }
    }
    onProgress?.(5, "Preparing render environment");
    const useParallel = os5.cpus().length >= 3 && totalFrames >= 60 && !process.env.DISABLE_WORKER_THREADS;
    const canvas2 = new Canvas(outWidth, outHeight);
    const ctx2 = canvas2.getContext("2d");
    const workDir = path5.join(
      os5.tmpdir(),
      `video-export-${crypto.randomUUID()}`
    );
    fs5.mkdirSync(workDir, { recursive: true });
    const scaleX = outWidth / canvasWidth;
    const scaleY = outHeight / canvasHeight;
    const blurOffCanvas2 = backgroundType === "blur" ? new Canvas(outWidth, outHeight) : null;
    const blurOffCtx2 = blurOffCanvas2?.getContext("2d") ?? null;
    this.initializeCaches();
    const extendBefore = /* @__PURE__ */ new Map();
    const extendAfter = /* @__PURE__ */ new Map();
    if (transitions.length > 0) {
      for (const t of transitions) {
        const halfDur = t.duration / 2;
        const prevAfter = extendAfter.get(t.sourceElementId) ?? 0;
        extendAfter.set(t.sourceElementId, Math.max(prevAfter, halfDur));
        const prevBefore = extendBefore.get(t.targetElementId) ?? 0;
        extendBefore.set(t.targetElementId, Math.max(prevBefore, halfDur));
      }
    }
    const activeElementsByFrame2 = [];
    for (let i = 0; i < totalFrames; i++) {
      const time = i / fps;
      const active = [];
      for (let ti = renderTracks.length - 1; ti >= 0; ti--) {
        const track = renderTracks[ti];
        if (!track.isVisible) continue;
        for (const element of track.elements) {
          if (element.hidden) continue;
          const start = element.startTime + element.trimStart;
          const end = element.startTime + element.duration - element.trimEnd;
          const extB = (extendBefore.get(element.id) ?? 0) / 1e3;
          const extA = (extendAfter.get(element.id) ?? 0) / 1e3;
          if (time >= start - extB && time <= end + extA) {
            active.push({ track, element });
          }
        }
      }
      activeElementsByFrame2.push(active);
    }
    let videoFrameDiskPaths = /* @__PURE__ */ new Map();
    let videoFramesDiskDir = "";
    if (useParallel && videoSrcs.size > 0) {
      videoFramesDiskDir = path5.join(workDir, "video-frames");
      fs5.mkdirSync(videoFramesDiskDir, { recursive: true });
    }
    if (videoSrcs.size > 0) {
      onProgress?.(5, "Pre-extracting video frames");
      videoExtractor2.setCacheLimit(
        Math.max(300, Math.min(5e3, totalFrames + 100))
      );
      const videoFrameMap = /* @__PURE__ */ new Map();
      for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
        const time = frameIndex / fps;
        for (const { element } of activeElementsByFrame2[frameIndex]) {
          if (element.type !== "video" || !element.src) continue;
          const localPath = resolvedPaths2.get(element.src);
          if (!localPath) continue;
          const localTimeRaw = time - element.startTime + element.trimStart;
          const visibleDuration = Math.max(
            0,
            element.duration - element.trimStart - element.trimEnd
          );
          const clampedLocalTime = Math.min(
            Math.max(0, localTimeRaw),
            Math.max(0, visibleDuration - 1e-3)
          );
          const targetMediaTime = Math.max(
            0,
            this.getTargetMediaTime(element, clampedLocalTime)
          );
          const cacheKey = `${localPath}@${targetMediaTime.toFixed(3)}`;
          if (!videoFrameMap.has(localPath)) {
            videoFrameMap.set(localPath, {
              cacheKeys: [],
              mediaTimes: [],
              seen: /* @__PURE__ */ new Set()
            });
          }
          const entry = videoFrameMap.get(localPath);
          if (!entry.seen.has(cacheKey)) {
            entry.seen.add(cacheKey);
            entry.cacheKeys.push(cacheKey);
            entry.mediaTimes.push(targetMediaTime);
          }
        }
      }
      const extractionTasks = Array.from(videoFrameMap.entries()).map(
        ([videoPath, { cacheKeys, mediaTimes }], videoIdx) => {
          const indices = mediaTimes.map((_, i) => i).sort((a, b) => mediaTimes[a] - mediaTimes[b]);
          if (useParallel) {
            return async () => {
              const videoDir = path5.join(videoFramesDiskDir, `v${videoIdx}`);
              fs5.mkdirSync(videoDir, { recursive: true });
              const diskPaths = await videoExtractor2.batchPreExtractToDisk(
                videoPath,
                indices.map((i) => cacheKeys[i]),
                indices.map((i) => mediaTimes[i]),
                videoDir,
                (done, total) => {
                  if (done % 50 === 0)
                    onProgress?.(
                      5 + done / total * 2,
                      `Pre-extracting video frames ${done}/${total}`
                    );
                }
              );
              for (const [k, v] of diskPaths) videoFrameDiskPaths.set(k, v);
            };
          } else {
            return () => videoExtractor2.batchPreExtract(
              videoPath,
              indices.map((i) => cacheKeys[i]),
              indices.map((i) => mediaTimes[i]),
              (done, total) => {
                if (done % 50 === 0) {
                  onProgress?.(
                    5 + done / total * 2,
                    `Pre-extracting video frames ${done}/${total}`
                  );
                }
              }
            );
          }
        }
      );
      const extractResults = await parallelLimit(extractionTasks, 3);
      for (const r of extractResults) {
        if (r.status === "rejected") {
          console.warn(
            "[ServerRenderExporter] Batch pre-extract failed:",
            r.reason
          );
        }
      }
    }
    const audioExtractor = new ServerAudioExtractor();
    const audioTracks = [];
    const audioTrackByElementId = /* @__PURE__ */ new Map();
    for (const track of renderTracks) {
      for (const el of track.elements) {
        if ((el.type === "video" || el.type === "audio") && el.src && !el.muted) {
          const resolvedSrc = resolvedPaths2.get(el.src) || el.src;
          let effectiveSpeed = el.playbackSpeed ?? 1;
          const speedCalc = this.getSpeedCalc(el);
          if (speedCalc) {
            const visDur = Math.max(0, el.duration - el.trimStart - el.trimEnd);
            const totalMedia = speedCalc.getTotalMediaDuration();
            effectiveSpeed = visDur > 0 ? totalMedia / visDur : 1;
          }
          const info = {
            src: resolvedSrc,
            startTime: el.startTime,
            // 可见结束时间：与视频转场 junction 公式保持一致
            // = startTime + duration - trimStart - trimEnd（与前端 AudioProcessor._buildCrossfadeZones 一致）
            endTime: el.startTime + el.duration - el.trimStart - el.trimEnd,
            mediaStartTime: el.mediaStartTime || 0,
            volume: el.volume ?? 1,
            playbackSpeed: effectiveSpeed,
            crossfadeZones: []
          };
          audioTracks.push(info);
          audioTrackByElementId.set(el.id, info);
        }
      }
    }
    for (const t of transitions) {
      const srcTrack = audioTrackByElementId.get(t.sourceElementId);
      const tgtTrack = audioTrackByElementId.get(t.targetElementId);
      if (!srcTrack && !tgtTrack) continue;
      const halfDurSec = t.duration / 2e3;
      const junctionSec = srcTrack ? srcTrack.endTime : tgtTrack.startTime;
      const zoneStartSec = junctionSec - halfDurSec;
      const zoneDurSec = t.duration / 1e3;
      if (srcTrack) {
        srcTrack.crossfadeZones.push({
          zoneStartSec,
          zoneDurSec,
          role: "source"
        });
      }
      if (tgtTrack) {
        tgtTrack.crossfadeZones.push({
          zoneStartSec,
          zoneDurSec,
          role: "target"
        });
      }
    }
    let audioPath = null;
    let audioPromise = Promise.resolve(null);
    if (audioTracks.length > 0) {
      const audioTarget = path5.join(workDir, "audio.wav");
      audioPromise = audioExtractor.mixAudioTracks(audioTracks, totalDuration2, audioTarget).catch((err) => {
        console.warn("[ServerRenderExporter] Audio extraction failed:", err);
        return null;
      });
    }
    onProgress?.(8, "Rendering frames");
    const outputFilename = `output_${crypto.randomUUID()}.${format}`;
    let outputPath = path5.join(workDir, outputFilename);
    const encoderArgs = buildEncoderArgs(
      quality.videoBitrate,
      fps,
      outWidth,
      outHeight
    );
    const ffmpegArgs = [
      "-f",
      "rawvideo",
      "-pixel_format",
      "rgba",
      "-video_size",
      `${outWidth}x${outHeight}`,
      "-framerate",
      String(fps),
      "-i",
      "pipe:0",
      ...encoderArgs,
      "-movflags",
      "+faststart",
      "-y",
      outputPath
    ];
    const encoder = spawnProcess("ffmpeg", ffmpegArgs, {
      stdio: ["pipe", "pipe", "pipe"]
    });
    let encoderError = null;
    encoder.stderr.on("data", () => {
    });
    encoder.on("error", (err) => {
      encoderError = new Error(
        `FFmpeg pipe encoder spawn error: ${err.message}`
      );
    });
    try {
      const renderOneFrameSerial = async (frameIndex) => {
        let frameBuffer;
        if (motionBlur) {
          const nominalTime = frameIndex === totalFrames - 1 ? totalDuration2 : frameIndex / fps;
          const samples = calculateMotionBlurSamples(
            nominalTime,
            1 / fps,
            motionBlur
          );
          const pixelCount = outWidth * outHeight * 4;
          if (!this._motionBlurAccBuffer || this._motionBlurAccBuffer.length !== pixelCount) {
            this._motionBlurAccBuffer = new Float64Array(pixelCount);
          } else {
            this._motionBlurAccBuffer.fill(0);
          }
          for (const sample of samples) {
            await this.renderFrameToBuffer(
              frameIndex,
              fps,
              ctx2,
              outWidth,
              outHeight,
              canvasWidth,
              canvasHeight,
              scaleX,
              scaleY,
              activeElementsByFrame2[frameIndex],
              transitions,
              renderTracks,
              captions,
              captionStyle,
              captionAnimation,
              backgroundColor,
              backgroundType === "blur" ? "blur" : void 0,
              blurIntensity,
              resolvedPaths2,
              imageLoader2,
              videoExtractor2,
              blurOffCanvas2,
              blurOffCtx2,
              totalFrames,
              totalDuration2,
              sample.time
              // timeOverride
            );
            const raw = canvas2.toBufferSync("raw");
            accumulateSubFrame(
              this._motionBlurAccBuffer,
              new Uint8ClampedArray(raw.buffer, raw.byteOffset, raw.byteLength),
              sample.weight
            );
          }
          if (!this._motionBlurFinalBuffer || this._motionBlurFinalBuffer.length !== pixelCount) {
            this._motionBlurFinalBuffer = new Uint8ClampedArray(pixelCount);
          }
          finalizeAccumulation(
            this._motionBlurAccBuffer,
            this._motionBlurFinalBuffer
          );
          frameBuffer = Buffer.from(this._motionBlurFinalBuffer.buffer);
        } else {
          await this.renderFrameToBuffer(
            frameIndex,
            fps,
            ctx2,
            outWidth,
            outHeight,
            canvasWidth,
            canvasHeight,
            scaleX,
            scaleY,
            activeElementsByFrame2[frameIndex],
            transitions,
            renderTracks,
            captions,
            captionStyle,
            captionAnimation,
            backgroundColor,
            backgroundType === "blur" ? "blur" : void 0,
            blurIntensity,
            resolvedPaths2,
            imageLoader2,
            videoExtractor2,
            blurOffCanvas2,
            blurOffCtx2,
            totalFrames,
            totalDuration2
          );
          frameBuffer = canvas2.toBufferSync("raw");
        }
        if (encoderError) throw encoderError;
        const canWrite = encoder.stdin.write(frameBuffer);
        if (!canWrite)
          await new Promise((r) => encoder.stdin.once("drain", r));
        if (frameIndex % 10 === 0) {
          onProgress?.(
            8 + frameIndex / totalFrames * 82,
            `Rendering frame ${frameIndex + 1}/${totalFrames}`
          );
        }
      };
      const MICRO_LOOK_AHEAD = 30;
      const MICRO_TRIGGER = 10;
      const microPrefetch = async (frameIndex) => {
        if (videoSrcs.size === 0 || frameIndex % MICRO_TRIGGER !== 0) return;
        const batchMap = this.buildVideoFrameBatchForWindow(
          frameIndex,
          frameIndex + MICRO_LOOK_AHEAD,
          activeElementsByFrame2,
          fps,
          resolvedPaths2
        );
        await Promise.all(
          [...batchMap.entries()].map(
            ([videoPath, { cacheKeys, mediaTimes }]) => videoExtractor2.batchPreExtract(videoPath, cacheKeys, mediaTimes).catch((err) => {
              console.debug(
                `[microPrefetch] batchPreExtract failed for ${videoPath}: ${err?.message ?? err}`
              );
            })
          )
        );
      };
      if (useParallel) {
        const { WorkerFrameRenderer: WorkerFrameRenderer2 } = await Promise.resolve().then(() => (init_WorkerFrameRenderer(), WorkerFrameRenderer_exports));
        try {
          await new WorkerFrameRenderer2().renderAllFrames(
            {
              renderTracks,
              transitions,
              captions: captions || [],
              captionStyle: captionStyle ?? null,
              captionAnimation: captionAnimation ?? null,
              outWidth,
              outHeight,
              canvasWidth,
              canvasHeight,
              scaleX,
              scaleY,
              fps,
              totalFrames,
              totalDuration: totalDuration2,
              backgroundColor,
              backgroundType: backgroundType === "blur" ? "blur" : void 0,
              blurIntensity,
              resolvedPaths: Object.fromEntries(resolvedPaths2),
              videoFrameDiskPaths: Object.fromEntries(videoFrameDiskPaths),
              // Opt 1: 预建索引表，Workers 无需重算
              activeElementIndices: this.buildActiveFrameIndices(
                activeElementsByFrame2,
                renderTracks
              ),
              // Opt 2: 运动模糊配置
              motionBlur: motionBlur ?? null
            },
            totalFrames,
            async (_frameIndex, buffer) => {
              if (encoderError) throw encoderError;
              const canWrite = encoder.stdin.write(Buffer.from(buffer));
              if (!canWrite)
                await new Promise((r) => encoder.stdin.once("drain", r));
            },
            (fi) => {
              if (fi % 10 === 0) {
                onProgress?.(
                  8 + fi / totalFrames * 82,
                  `Rendering frame ${fi + 1}/${totalFrames}`
                );
              }
            }
          );
        } catch (parallelErr) {
          console.warn(
            "[ServerRenderExporter] Parallel rendering failed, falling back to serial:",
            parallelErr
          );
          for (const [key, filePath] of videoFrameDiskPaths) {
            await videoExtractor2.preloadFrameFromDisk(key, filePath);
          }
          for (let fi = 0; fi < totalFrames; fi++) {
            await microPrefetch(fi);
            await renderOneFrameSerial(fi);
          }
        }
      } else {
        for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
          await microPrefetch(frameIndex);
          await renderOneFrameSerial(frameIndex);
        }
      }
      if (encoderError) throw encoderError;
      encoder.stdin.end();
      await new Promise((resolve2, reject) => {
        encoder.on("close", (code) => {
          if (code === 0) {
            resolve2();
          } else {
            reject(
              encoderError || new Error(`FFmpeg pipe encoding failed (code ${code})`)
            );
          }
        });
      });
      audioPath = await audioPromise;
      if (audioPath) {
        onProgress?.(92, "Merging audio");
        const muxedPath = path5.join(
          workDir,
          `muxed_${crypto.randomUUID()}.${format}`
        );
        await this.muxVideoAudio(outputPath, audioPath, muxedPath);
        try {
          fs5.unlinkSync(outputPath);
        } catch {
        }
        outputPath = muxedPath;
      }
    } catch (err) {
      try {
        encoder.stdin.destroy();
      } catch {
      }
      try {
        encoder.kill("SIGKILL");
      } catch {
      }
      try {
        fs5.rmSync(workDir, { recursive: true, force: true });
      } catch {
      }
      throw err;
    } finally {
      this.cleanupCaches();
      try {
        if (audioPath && fs5.existsSync(audioPath)) {
          fs5.unlinkSync(audioPath);
        }
      } catch {
      }
      imageLoader2.clear();
      videoExtractor2.clear();
      mediaResolver.cleanup();
      this.gifCache.clear();
      this._effectOffscreenCache.clear();
      this.svgAnimator.clear();
      try {
        if (videoFramesDiskDir)
          fs5.rmSync(videoFramesDiskDir, { recursive: true, force: true });
      } catch {
      }
      FontRegistry.cleanupTempFonts(tempFontFiles);
    }
    onProgress?.(95, "Finalizing");
    onProgress?.(100, "Export complete");
    return outputPath;
  }
  /**
   * 合并视频和音频轨道（FFmpeg mux）
   */
  muxVideoAudio(videoPath, audioPath, outputPath) {
    return new Promise((resolve2, reject) => {
      const proc = spawnProcess(
        "ffmpeg",
        [
          "-i",
          videoPath,
          "-i",
          audioPath,
          "-c:v",
          "copy",
          "-c:a",
          "aac",
          "-b:a",
          "192k",
          "-movflags",
          "+faststart",
          "-y",
          outputPath
        ],
        { stdio: ["pipe", "pipe", "pipe"] }
      );
      const stderrChunks = [];
      proc.stderr.on("data", (chunk) => stderrChunks.push(chunk));
      proc.on(
        "error",
        (err) => reject(new Error(`FFmpeg mux error: ${err.message}`))
      );
      proc.on("close", (code) => {
        if (code === 0) resolve2();
        else
          reject(
            new Error(
              `FFmpeg mux failed (code ${code}): ${Buffer.concat(stderrChunks).toString().slice(-500)}`
            )
          );
      });
    });
  }
  _findActiveTransition(transitions, activeElements, timeSec) {
    if (transitions.length === 0) return null;
    const timeMs = timeSec * 1e3;
    for (const t of transitions) {
      let zone = this._transitionZoneCache.get(t.id);
      if (!zone) {
        const sourceEl = activeElements.find(
          (e) => e.element.id === t.sourceElementId
        )?.element;
        const targetEl = activeElements.find(
          (e) => e.element.id === t.targetElementId
        )?.element;
        if (!sourceEl || !targetEl) continue;
        const sourceEndMs = (sourceEl.startTime + sourceEl.duration - sourceEl.trimStart - sourceEl.trimEnd) * 1e3;
        const halfDur = t.duration / 2;
        zone = {
          transitionId: t.id,
          sourceElementId: t.sourceElementId,
          targetElementId: t.targetElementId,
          type: t.type,
          zoneStart: sourceEndMs - halfDur,
          zoneEnd: sourceEndMs + halfDur,
          junction: sourceEndMs,
          duration: t.duration,
          easing: t.easing
        };
        this._transitionZoneCache.set(t.id, zone);
      }
      if (timeMs >= zone.zoneStart && timeMs <= zone.zoneEnd) {
        return { zone, transition: t };
      }
    }
    return null;
  }
  /**
   * 渲染转场合成帧（双离屏画布）
   * 与前端 TimelineRenderer._renderTransitionFrame 保持一致：
   * 1. 钳制 source/target 渲染时间到各自可见范围
   * 2. 剥离 source 的出场动画 / target 的入场动画
   * 3. 对 rawProgress 施加缓动函数
   * 4. blur/pixelate 类型走增强路径（CSS filter blur / 降采样像素化）
   */
  async _renderTransitionFrame(ctx2, active, activeElements, time, resolvedPaths2, imageLoader2, videoExtractor2, scaleX, scaleY, canvasWidth, canvasHeight, outWidth, outHeight) {
    const { zone } = active;
    const timeMs = time * 1e3;
    const sourceEntry = activeElements.find(
      (e) => e.element.id === zone.sourceElementId
    );
    const targetEntry = activeElements.find(
      (e) => e.element.id === zone.targetElementId
    );
    if (!sourceEntry || !targetEntry) {
      if (sourceEntry) {
        await this.renderElement(
          ctx2,
          sourceEntry.element,
          time,
          resolvedPaths2,
          imageLoader2,
          videoExtractor2,
          scaleX,
          scaleY,
          canvasWidth,
          canvasHeight
        );
      }
      if (targetEntry) {
        await this.renderElement(
          ctx2,
          targetEntry.element,
          time,
          resolvedPaths2,
          imageLoader2,
          videoExtractor2,
          scaleX,
          scaleY,
          canvasWidth,
          canvasHeight
        );
      }
      return;
    }
    const srcEl = sourceEntry.element;
    const tgtEl = targetEntry.element;
    const srcStart = srcEl.startTime + srcEl.trimStart;
    const srcEnd = srcEl.startTime + srcEl.duration - srcEl.trimEnd;
    const tgtStart = tgtEl.startTime + tgtEl.trimStart;
    const tgtEnd = tgtEl.startTime + tgtEl.duration - tgtEl.trimEnd;
    const sourceTime = Math.max(srcStart, Math.min(time, srcEnd));
    const targetTime = Math.max(tgtStart, Math.min(time, tgtEnd));
    const sourceForRender = this._prepareElementForTransition(srcEl, "source");
    const targetForRender = this._prepareElementForTransition(tgtEl, "target");
    const canvasA = new Canvas(outWidth, outHeight);
    const ctxA = canvasA.getContext("2d");
    const canvasB = new Canvas(outWidth, outHeight);
    const ctxB = canvasB.getContext("2d");
    ctxA.clearRect(0, 0, outWidth, outHeight);
    await this.renderElement(
      ctxA,
      sourceForRender,
      sourceTime,
      resolvedPaths2,
      imageLoader2,
      videoExtractor2,
      scaleX,
      scaleY,
      canvasWidth,
      canvasHeight
    );
    ctxB.clearRect(0, 0, outWidth, outHeight);
    await this.renderElement(
      ctxB,
      targetForRender,
      targetTime,
      resolvedPaths2,
      imageLoader2,
      videoExtractor2,
      scaleX,
      scaleY,
      canvasWidth,
      canvasHeight
    );
    const rawProgress = Math.max(
      0,
      Math.min(1, (timeMs - zone.zoneStart) / (zone.zoneEnd - zone.zoneStart))
    );
    const progress = applyTransitionEasing(rawProgress, zone.type, zone.easing);
    if (zone.type === "blur") {
      const exportScale = Math.sqrt(scaleX * scaleY);
      this._renderBlurTransition(
        ctx2,
        canvasA,
        canvasB,
        outWidth,
        outHeight,
        progress,
        exportScale
      );
      return;
    }
    if (zone.type === "pixelate") {
      const exportScale = Math.sqrt(scaleX * scaleY);
      this._renderPixelateTransition(
        ctx2,
        canvasA,
        canvasB,
        outWidth,
        outHeight,
        progress,
        exportScale
      );
      return;
    }
    if (zone.type === "crossZoom") {
      const exportScale = Math.sqrt(scaleX * scaleY);
      this._renderCrossZoomTransition(
        ctx2,
        canvasA,
        canvasB,
        outWidth,
        outHeight,
        progress,
        exportScale
      );
      return;
    }
    if (zone.type === "whipPan") {
      const exportScale = Math.sqrt(scaleX * scaleY);
      this._renderWhipPanTransition(
        ctx2,
        canvasA,
        canvasB,
        outWidth,
        outHeight,
        progress,
        exportScale
      );
      return;
    }
    applyTransitionBlend(
      zone.type,
      ctx2,
      canvasA,
      canvasB,
      outWidth,
      outHeight,
      progress
    );
  }
  /**
   * 剥离转场期间不应参与的动画：
   * - source 元素：去掉出场动画（避免与转场淡出叠加）
   * - target 元素：去掉入场动画（避免与转场淡入叠加）
   */
  _prepareElementForTransition(element, role) {
    if (!element.animations || element.animations.length === 0) return element;
    const filtered = element.animations.filter(
      (a) => role === "source" ? !EXIT_ANIMATION_TYPES.has(a.type) : !ENTRANCE_ANIMATION_TYPES.has(a.type)
    );
    if (filtered.length === element.animations.length) return element;
    return { ...element, animations: filtered };
  }
  /**
   * blur 转场增强渲染：CSS filter blur，模糊强度在 progress=0.5 时达到峰值
   * 与前端 TimelineRenderer.renderBlurTransition 保持一致
   */
  _renderBlurTransition(ctx2, srcCanvas, tgtCanvas, w, h, progress, exportScale = 1) {
    const p = progress;
    const maxBlur = 20 * exportScale;
    const blurAmount = maxBlur * (1 - Math.abs(p * 2 - 1));
    const filterStr = blurAmount > 0.5 ? `blur(${blurAmount}px)` : "none";
    ctx2.save();
    ctx2.globalAlpha = 1 - p;
    try {
      ctx2.filter = filterStr;
    } catch {
    }
    ctx2.drawImage(srcCanvas, 0, 0, w, h);
    ctx2.restore();
    try {
      ctx2.filter = "none";
    } catch {
    }
    ctx2.save();
    ctx2.globalAlpha = p;
    try {
      ctx2.filter = filterStr;
    } catch {
    }
    ctx2.drawImage(tgtCanvas, 0, 0, w, h);
    ctx2.restore();
    try {
      ctx2.filter = "none";
    } catch {
    }
  }
  /**
   * pixelate 转场增强渲染：降采样放大实现像素化效果，像素块大小在 progress=0.5 时最大
   * 与前端 TimelineRenderer.renderPixelateTransition 保持一致
   */
  _renderPixelateTransition(ctx2, srcCanvas, tgtCanvas, w, h, progress, exportScale = 1) {
    const p = progress;
    const maxBlockSize = Math.round(30 * exportScale);
    const blockSize = Math.max(
      1,
      Math.round(maxBlockSize * (1 - Math.abs(p * 2 - 1)))
    );
    if (blockSize <= 1) {
      ctx2.save();
      ctx2.globalAlpha = 1 - p;
      ctx2.drawImage(srcCanvas, 0, 0, w, h);
      ctx2.restore();
      ctx2.save();
      ctx2.globalAlpha = p;
      ctx2.drawImage(tgtCanvas, 0, 0, w, h);
      ctx2.restore();
      return;
    }
    const smallW = Math.max(1, Math.ceil(w / blockSize));
    const smallH = Math.max(1, Math.ceil(h / blockSize));
    const tmpItem = this.acquireCanvas(smallW, smallH);
    const { canvas: tmpCanvas, ctx: tmpCtx } = tmpItem;
    try {
      const prevSmoothing = ctx2.imageSmoothingEnabled;
      ctx2.save();
      ctx2.globalAlpha = 1 - p;
      tmpCtx.clearRect(0, 0, smallW, smallH);
      tmpCtx.drawImage(srcCanvas, 0, 0, smallW, smallH);
      ctx2.imageSmoothingEnabled = false;
      ctx2.drawImage(tmpCanvas, 0, 0, w, h);
      ctx2.restore();
      ctx2.save();
      ctx2.globalAlpha = p;
      tmpCtx.clearRect(0, 0, smallW, smallH);
      tmpCtx.drawImage(tgtCanvas, 0, 0, smallW, smallH);
      ctx2.imageSmoothingEnabled = false;
      ctx2.drawImage(tmpCanvas, 0, 0, w, h);
      ctx2.restore();
      ctx2.imageSmoothingEnabled = prevSmoothing;
    } finally {
      this.releaseCanvas(tmpItem);
    }
  }
  /**
   * crossZoom 转场增强渲染：source 放大模糊淡出 + target 缩小模糊淡入
   * 与前端 TimelineRenderer.renderCrossZoomTransition 保持一致
   */
  _renderCrossZoomTransition(ctx2, srcCanvas, tgtCanvas, w, h, progress, exportScale = 1) {
    const p = progress;
    const maxBlur = 20 * exportScale;
    const srcScale = 1 + p;
    const srcBlur = maxBlur * p;
    ctx2.save();
    ctx2.globalAlpha = 1 - p;
    if (srcBlur > 0.5) {
      try {
        ctx2.filter = `blur(${srcBlur}px)`;
      } catch {
      }
    }
    const sx = w * (1 - srcScale) / 2;
    const sy = h * (1 - srcScale) / 2;
    ctx2.drawImage(srcCanvas, sx, sy, w * srcScale, h * srcScale);
    ctx2.restore();
    try {
      ctx2.filter = "none";
    } catch {
    }
    const tgtScale = 0.5 + p * 0.5;
    const tgtBlur = maxBlur * (1 - p);
    ctx2.save();
    ctx2.globalAlpha = p;
    if (tgtBlur > 0.5) {
      try {
        ctx2.filter = `blur(${tgtBlur}px)`;
      } catch {
      }
    }
    const tx = w * (1 - tgtScale) / 2;
    const ty = h * (1 - tgtScale) / 2;
    ctx2.drawImage(tgtCanvas, tx, ty, w * tgtScale, h * tgtScale);
    ctx2.restore();
    try {
      ctx2.filter = "none";
    } catch {
    }
  }
  /**
   * whipPan 转场增强渲染：横向推挤 + 运动模糊
   * 与前端 TimelineRenderer.renderWhipPanTransition 保持一致
   */
  _renderWhipPanTransition(ctx2, srcCanvas, tgtCanvas, w, h, progress, exportScale = 1) {
    const p = progress;
    const blurIntensity = 1 - Math.abs(p * 2 - 1);
    const blurAmount = 30 * exportScale * blurIntensity;
    const filterStr = blurAmount > 0.5 ? `blur(${blurAmount}px)` : "none";
    ctx2.save();
    ctx2.beginPath();
    ctx2.rect(0, 0, w, h);
    ctx2.clip();
    ctx2.save();
    if (blurAmount > 0.5) {
      try {
        ctx2.filter = filterStr;
      } catch {
      }
    }
    ctx2.drawImage(srcCanvas, -w * p, 0, w, h);
    ctx2.restore();
    try {
      ctx2.filter = "none";
    } catch {
    }
    ctx2.save();
    if (blurAmount > 0.5) {
      try {
        ctx2.filter = filterStr;
      } catch {
      }
    }
    ctx2.drawImage(tgtCanvas, w * (1 - p), 0, w, h);
    ctx2.restore();
    try {
      ctx2.filter = "none";
    } catch {
    }
    ctx2.restore();
  }
  calculateElementProperties(element, currentTime, canvasWidth, canvasHeight) {
    const localTime = currentTime - element.startTime;
    let props;
    if (this._propsPool) {
      const pooled = this._propsPool.get(element.id);
      if (pooled) {
        this.cleanAnimationProperties(pooled, element);
        Object.assign(pooled, element);
        props = pooled;
      } else {
        props = { ...element };
        this._propsPool.set(element.id, props);
      }
    } else {
      props = { ...element };
    }
    const preAnimX = props.x;
    const preAnimY = props.y;
    if (element.animations) {
      for (const animation of element.animations) {
        props = applyAnimation2(
          props,
          animation,
          localTime,
          canvasWidth,
          canvasHeight
        );
      }
    }
    const dx = (props.x ?? preAnimX) - preAnimX;
    const dy = (props.y ?? preAnimY) - preAnimY;
    if (dx !== 0)
      props.centerX = (props.centerX ?? preAnimX + element.width / 2) + dx;
    if (dy !== 0)
      props.centerY = (props.centerY ?? preAnimY + element.height / 2) + dy;
    if (element.keyframeTracks && element.keyframeTracks.length > 0) {
      let blockedProperties;
      if (element.animations) {
        const blocked = /* @__PURE__ */ new Set();
        for (const anim of element.animations) {
          let isActive = false;
          if (ENTRANCE_ANIMATION_TYPES.has(anim.type)) {
            isActive = localTime >= 0 && localTime < anim.duration;
          } else if (EXIT_ANIMATION_TYPES.has(anim.type)) {
            const animStart = element.duration - anim.duration;
            isActive = localTime >= animStart && localTime <= element.duration;
          }
          if (isActive) {
            for (const prop of getAnimationAffectedProperties(anim.type)) {
              blocked.add(prop);
            }
          }
        }
        if (blocked.size > 0) {
          blockedProperties = blocked;
        }
      }
      props = applyKeyframeInterpolation2(
        props,
        element.keyframeTracks,
        localTime,
        blockedProperties
      );
    }
    return props;
  }
  cleanAnimationProperties(pooled, element) {
    const pooledAny = pooled;
    for (const key of Object.keys(pooledAny)) {
      if (key[0] === "_" && !(key in element)) {
        delete pooledAny[key];
      }
    }
    if (!("skewX" in element)) delete pooledAny.skewX;
    if (!("skewY" in element)) delete pooledAny.skewY;
  }
  /**
   * 从 canvas 池获取尺寸匹配的离屏 canvas（容差 ±10%），无匹配则新建
   */
  acquireCanvas(w, h) {
    for (let i = 0; i < this._canvasPool.length; i++) {
      const item = this._canvasPool[i];
      if (item.w >= w && item.h >= h && item.w <= w * 1.1 && item.h <= h * 1.1) {
        this._canvasPool.splice(i, 1);
        item.ctx.clearRect(0, 0, item.w, item.h);
        return item;
      }
    }
    const canvas2 = new Canvas(w, h);
    return { canvas: canvas2, ctx: canvas2.getContext("2d"), w, h };
  }
  /**
   * 归还离屏 canvas 到池中（上限 8 个）
   */
  releaseCanvas(item) {
    if (this._canvasPool.length < 8) {
      this._canvasPool.push(item);
    }
  }
  /**
   * 判断元素是否为静态（无动画、无关键帧、非视频/GIF）
   */
  isStaticElement(element) {
    if (element.animations && element.animations.length > 0) return false;
    if (element.keyframeTracks && element.keyframeTracks.length > 0)
      return false;
    if (element.type === "video" || element.type === "gif") return false;
    return true;
  }
  /**
   * 半静态元素：仅有 opacity 关键帧（无动画、非视频/GIF）
   * 可缓存渲染内容，运行时通过 ctx.globalAlpha 调制透明度
   */
  isSemiStaticElement(element) {
    if (!element.keyframeTracks || element.keyframeTracks.length === 0)
      return false;
    if (element.animations && element.animations.length > 0) return false;
    if (element.type === "video" || element.type === "gif") return false;
    return element.keyframeTracks.every(
      (t) => !t.enabled || t.propertyType === "opacity"
    );
  }
  cachedMeasureWidth(ctx2, text, spacingPx = 0) {
    if (spacingPx === 0) {
      if (!this._lineWidthCache) return ctx2.measureText(text).width;
      const key2 = `${ctx2.font}|${text}`;
      const cached2 = this._lineWidthCache.get(key2);
      if (cached2 !== void 0) return cached2;
      const width2 = ctx2.measureText(text).width;
      this._lineWidthCache.set(key2, width2);
      this.evictOldEntries(this._lineWidthCache, 5e3);
      return width2;
    }
    if (!this._lineWidthCache)
      return measureTextWithSpacing(ctx2, text, spacingPx);
    const key = `${ctx2.font}|${text}|s${spacingPx}`;
    const cached = this._lineWidthCache.get(key);
    if (cached !== void 0) return cached;
    const width = measureTextWithSpacing(ctx2, text, spacingPx);
    this._lineWidthCache.set(key, width);
    this.evictOldEntries(this._lineWidthCache, 5e3);
    return width;
  }
  cachedTextMetrics(ctx2, fontSize) {
    if (!this._metricsCache) {
      const m2 = ctx2.measureText("Mg");
      return {
        ascent: m2.actualBoundingBoxAscent ?? fontSize * 0.8,
        descent: m2.actualBoundingBoxDescent ?? fontSize * 0.2
      };
    }
    const cached = this._metricsCache.get(ctx2.font);
    if (cached) return cached;
    const m = ctx2.measureText("Mg");
    const metrics = {
      ascent: m.actualBoundingBoxAscent ?? fontSize * 0.8,
      descent: m.actualBoundingBoxDescent ?? fontSize * 0.2
    };
    this._metricsCache.set(ctx2.font, metrics);
    this.evictOldEntries(this._metricsCache, 500);
    return metrics;
  }
  cachedGetFilter(props) {
    if (!this._filterCache) return getCompositeFilter(props);
    const key = `${props.brightness ?? 0}|${props.contrast ?? 0}|${props.saturation ?? 0}|${props.hue ?? 0}|${props._blurAmount ?? props.blur ?? 0}|${props.effectType ?? ""}`;
    const cached = this._filterCache.get(key);
    if (cached !== void 0) return cached;
    const filter = getCompositeFilter(props);
    this._filterCache.set(key, filter);
    this.evictOldEntries(this._filterCache, 1e3);
    return filter;
  }
  /** 获取或创建元素的 SpeedRampCalculator（缓存），无速度关键帧时返回 null */
  getSpeedCalc(element) {
    if (this._speedCalcCache.has(element.id)) {
      return this._speedCalcCache.get(element.id);
    }
    const speedTrack = element.keyframeTracks?.find(
      (t) => t.propertyType === "speed" && t.enabled && t.keyframes.length >= 2
    );
    if (!speedTrack) return null;
    const visDur = Math.max(
      0,
      element.duration - element.trimStart - element.trimEnd
    );
    const calc = new SpeedRampCalculator(speedTrack.keyframes, visDur * 1e3);
    this._speedCalcCache.set(element.id, calc);
    return calc;
  }
  /**
   * 计算变速曲线下的目标媒体时间（秒）
   * 有 speed 关键帧时使用 SpeedRampCalculator 积分，否则使用静态 playbackSpeed
   */
  getTargetMediaTime(element, clampedLocalTime) {
    const mediaStart = element.mediaStartTime || 0;
    const calc = this.getSpeedCalc(element);
    if (!calc) {
      return mediaStart + clampedLocalTime * (element.playbackSpeed ?? 1);
    }
    return mediaStart + calc.getMediaTimeAtLocalTime(clampedLocalTime * 1e3);
  }
  measureCharWidth(ctx2, baseFontSpec, char, charWidthCache) {
    if (!charWidthCache) return ctx2.measureText(char).width;
    const cacheKey = `${baseFontSpec}|${char}`;
    const cached = charWidthCache.get(cacheKey);
    if (cached !== void 0) return cached;
    const width = ctx2.measureText(char).width;
    charWidthCache.set(cacheKey, width);
    this.evictOldEntries(charWidthCache, 5e3);
    return width;
  }
  evictOldEntries(cache, maxSize) {
    if (cache.size <= maxSize) return;
    const evictCount = Math.ceil(maxSize / 2);
    let count = 0;
    for (const key of cache.keys()) {
      if (count >= evictCount) break;
      cache.delete(key);
      count++;
    }
  }
  getWrappedText(ctx2, text, availableWidth, spacingPx = 0) {
    if (!this._textWrapCache)
      return wrapTextByGrapheme(text, availableWidth, ctx2, spacingPx);
    const key = `${text}|${ctx2.font}|${availableWidth}|${spacingPx}`;
    const cached = this._textWrapCache.get(key);
    if (cached) return cached;
    const wrapped = wrapTextByGrapheme(text, availableWidth, ctx2, spacingPx);
    this._textWrapCache.set(key, wrapped);
    this.evictOldEntries(this._textWrapCache, 2e3);
    return wrapped;
  }
  applyTransforms(ctx2, element, scaleX, scaleY) {
    const centerX = (element.centerX ?? element.x + element.width / 2) * scaleX;
    const centerY = (element.centerY ?? element.y + element.height / 2) * scaleY;
    const glitchOffsetX = (element._glitchOffsetX ?? 0) * scaleX;
    const glitchOffsetY = (element._glitchOffsetY ?? 0) * scaleY;
    ctx2.translate(centerX + glitchOffsetX, centerY + glitchOffsetY);
    const rotateX = element._rotateX ?? 0;
    const rotateY = element._rotateY ?? 0;
    if (rotateX !== 0 || rotateY !== 0) {
      apply3DRotation(
        ctx2,
        rotateX,
        rotateY,
        element.width * scaleX,
        element.height * scaleY
      );
    }
    if (element.rotation) {
      ctx2.rotate(element.rotation * Math.PI / 180);
    }
    const skewX = element.skewX ?? 0;
    const skewY = element.skewY ?? 0;
    if (skewX !== 0 || skewY !== 0) {
      const skewXRad = skewX * Math.PI / 180;
      const skewYRad = skewY * Math.PI / 180;
      ctx2.transform(1, Math.tan(skewYRad), Math.tan(skewXRad), 1, 0, 0);
    }
    const sx = element.scaleX ?? 1;
    const sy = element.scaleY ?? 1;
    const fx = element.flipX ? -1 : 1;
    const fy = element.flipY ? -1 : 1;
    ctx2.scale(sx * fx, sy * fy);
    if (element.opacity !== void 0) {
      ctx2.globalAlpha = Math.max(0, Math.min(1, element.opacity));
    }
  }
  /**
   * 渲染单个元素到 Canvas
   */
  async renderElement(ctx2, element, time, resolvedPaths2, imageLoader2, videoExtractor2, scaleX, scaleY, canvasWidth, canvasHeight) {
    const localTime = time - element.startTime;
    const props = this.calculateElementProperties(
      element,
      time,
      canvasWidth,
      canvasHeight
    );
    if ((props.opacity ?? 1) <= 0) return;
    const cachedStatic = this._staticCache?.get(element.id);
    if (cachedStatic) {
      ctx2.save();
      this.applyTransforms(ctx2, props, scaleX, scaleY);
      ctx2.drawImage(
        cachedStatic.canvas,
        -cachedStatic.drawWidth / 2,
        -cachedStatic.drawHeight / 2
      );
      ctx2.restore();
      return;
    }
    ctx2.save();
    try {
      this.applyTransforms(ctx2, props, scaleX, scaleY);
      if (props.blendMode && props.blendMode !== "normal") {
        ctx2.globalCompositeOperation = props.blendMode;
      }
      const drawWidth = props.width * scaleX;
      const drawHeight = props.height * scaleY;
      applyClipEffects(ctx2, props, drawWidth, drawHeight);
      applyBlurFilter(ctx2, props._blurAmount ?? 0, scaleX);
      const renderCtx = ctx2;
      const postFx = detectActivePostEffects(props);
      if (postFx.dissolve) {
        renderCtx.globalAlpha = renderCtx.globalAlpha * (1 - postFx.dissolveProgress);
        const dissolvePixelSize = calculateDissolvePixelSize(
          postFx.dissolveProgress
        );
        if (dissolvePixelSize > 1) {
          const { pixelWidth: dpw, pixelHeight: dph } = calculatePixelateDownsample(
            drawWidth,
            drawHeight,
            dissolvePixelSize
          );
          const poolItem = this.acquireCanvas(dpw, dph);
          const offCtx = poolItem.ctx;
          offCtx.save();
          offCtx.translate(dpw / 2, dph / 2);
          offCtx.scale(dpw / drawWidth, dph / drawHeight);
          await this.dispatchElementRender(
            offCtx,
            props,
            element,
            time,
            resolvedPaths2,
            imageLoader2,
            videoExtractor2,
            drawWidth,
            drawHeight,
            scaleX,
            scaleY
          );
          offCtx.restore();
          renderPixelated(
            renderCtx,
            poolItem.canvas,
            drawWidth,
            drawHeight
          );
          this.releaseCanvas(poolItem);
        } else {
          await this.dispatchElementRender(
            renderCtx,
            props,
            element,
            time,
            resolvedPaths2,
            imageLoader2,
            videoExtractor2,
            drawWidth,
            drawHeight,
            scaleX,
            scaleY
          );
        }
      } else if (postFx.pixelate) {
        const { pixelWidth, pixelHeight } = calculatePixelateDownsample(
          drawWidth,
          drawHeight,
          postFx.pixelSize
        );
        const poolItem = this.acquireCanvas(pixelWidth, pixelHeight);
        const offCtx = poolItem.ctx;
        offCtx.save();
        offCtx.translate(pixelWidth / 2, pixelHeight / 2);
        offCtx.scale(pixelWidth / drawWidth, pixelHeight / drawHeight);
        const tempProps = { ...props, _pixelSize: void 0 };
        await this.dispatchElementRender(
          offCtx,
          tempProps,
          element,
          time,
          resolvedPaths2,
          imageLoader2,
          videoExtractor2,
          drawWidth,
          drawHeight,
          scaleX,
          scaleY
        );
        offCtx.restore();
        renderPixelated(
          renderCtx,
          poolItem.canvas,
          drawWidth,
          drawHeight
        );
        this.releaseCanvas(poolItem);
      } else if (postFx.glitch) {
        const poolItem = this.acquireCanvas(
          Math.ceil(drawWidth),
          Math.ceil(drawHeight)
        );
        const offCtx = poolItem.ctx;
        offCtx.save();
        offCtx.translate(drawWidth / 2, drawHeight / 2);
        await this.dispatchElementRender(
          offCtx,
          props,
          element,
          time,
          resolvedPaths2,
          imageLoader2,
          videoExtractor2,
          drawWidth,
          drawHeight,
          scaleX,
          scaleY
        );
        offCtx.restore();
        const splitPx = postFx.rgbSplit * scaleX;
        renderGlitchRGBSplit(
          renderCtx,
          poolItem.canvas,
          drawWidth,
          drawHeight,
          splitPx
        );
        this.releaseCanvas(poolItem);
      } else {
        const isFullStatic = this.isStaticElement(element);
        const isSemiStatic = !isFullStatic && this.isSemiStaticElement(element);
        const isAnimatedSvg = (isFullStatic || isSemiStatic) && element.type === "svg" && !!element.src ? this.svgAnimator.isAnimatedSvg(
          resolvedPaths2.get(element.src) ?? ""
        ) : false;
        if (this._staticCache && (isFullStatic || isSemiStatic) && !isAnimatedSvg && !this._staticCache.has(element.id)) {
          const offCanvas = new Canvas(drawWidth, drawHeight);
          const offCtx = offCanvas.getContext("2d");
          offCtx.translate(drawWidth / 2, drawHeight / 2);
          const renderProps = isSemiStatic ? { ...props, opacity: 1 } : props;
          await this.dispatchElementRender(
            offCtx,
            renderProps,
            element,
            time,
            resolvedPaths2,
            imageLoader2,
            videoExtractor2,
            drawWidth,
            drawHeight,
            scaleX,
            scaleY
          );
          this._staticCache.set(element.id, {
            canvas: offCanvas,
            drawWidth,
            drawHeight
          });
          renderCtx.drawImage(
            offCanvas,
            -drawWidth / 2,
            -drawHeight / 2
          );
        } else {
          await this.dispatchElementRender(
            renderCtx,
            props,
            element,
            time,
            resolvedPaths2,
            imageLoader2,
            videoExtractor2,
            drawWidth,
            drawHeight,
            scaleX,
            scaleY
          );
        }
      }
    } finally {
      ctx2.restore();
      try {
        ctx2.filter = "none";
      } catch {
      }
    }
  }
  /**
   * 将 effect RenderElement 列表解析为 ResolvedEffect[] (按 renderOrder 排序)
   * 镜像前端 TimelineRenderer.resolveEffectElements 逻辑，含效果参数关键帧插值
   */
  resolveEffectElements(effectElements, timeSec) {
    const resolved = [];
    for (const el of effectElements) {
      const layers = el.globalEffectLayers;
      if (!layers || layers.length === 0) continue;
      const localTimeMs = (timeSec - el.startTime) * 1e3;
      const layerEffects = resolveEffectLayers(layers, localTimeMs);
      if (el.keyframeTracks && el.keyframeTracks.length > 0) {
        const trackIndex = buildEffectParamIndex(el.keyframeTracks);
        for (let i = 0; i < layerEffects.length; i++) {
          const track = trackIndex.get(i);
          if (track) {
            const interpolated = interpolateEffectKeyframes(
              track,
              layers[i],
              localTimeMs
            );
            if (interpolated) {
              Object.assign(layerEffects[i].params, interpolated);
            }
          }
        }
      }
      resolved.push(...layerEffects);
    }
    return sortResolvedEffects(resolved);
  }
  static {
    /**
     * 高开销 Canvas 2D 效果的降分辨率倍数。
     * 这些效果是 per-pixel FBM / domain-warping，复杂度 O(W×H)。
     * 在 1/N 分辨率的离屏 canvas 上渲染后 drawImage 缩放回原尺寸，
     * 视觉几乎无损（火焰/焰火/光线本身就是模糊的叠加效果）。
     */
    this.EFFECT_DOWNSCALE = {
      applyFire: 4,
      // 5× domain-warped FBM, 28 octaves/pixel → 16× fewer pixels
      applyFireworks: 3,
      // 48 particles × 12 trail gaussian splats  → 9× fewer pixels
      applyGodray: 3
      // per-pixel FBM turbulence                 → 9× fewer pixels
    };
  }
  applyGlobalEffects(ctx2, width, height, effects) {
    const adaptiveScale = (w, h, factor) => {
      const base = 480;
      return Math.max(factor, Math.round(Math.max(w, h) / base));
    };
    for (const effect of effects) {
      const fallbackName = effect.descriptor.canvas2dFallback;
      if (!fallbackName) continue;
      const baseFactor = _ServerRenderExporter.EFFECT_DOWNSCALE[fallbackName];
      if (baseFactor && baseFactor > 1) {
        const scale = adaptiveScale(width, height, baseFactor);
        const sw = Math.max(1, Math.round(width / scale));
        const sh = Math.max(1, Math.round(height / scale));
        const cacheKey = `${fallbackName}_${sw}x${sh}`;
        let cached = this._effectOffscreenCache.get(cacheKey);
        if (!cached || cached.w !== sw || cached.h !== sh) {
          cached = { canvas: new Canvas(sw, sh), w: sw, h: sh };
          this._effectOffscreenCache.set(cacheKey, cached);
        }
        const offCtx = cached.canvas.getContext("2d");
        offCtx.globalCompositeOperation = "source-over";
        offCtx.globalAlpha = 1;
        offCtx.fillStyle = "#000000";
        offCtx.fillRect(0, 0, sw, sh);
        try {
          applyCanvas2DEffect(offCtx, sw, sh, fallbackName, effect.params);
        } catch {
          continue;
        }
        try {
          ctx2.save();
          ctx2.globalCompositeOperation = "lighter";
          ctx2.drawImage(cached.canvas, 0, 0, width, height);
          ctx2.restore();
        } catch {
          ctx2.restore?.();
        }
      } else {
        try {
          applyCanvas2DEffect(ctx2, width, height, fallbackName, effect.params);
        } catch {
        }
      }
    }
  }
  /**
   * 分发元素渲染到具体类型处理器
   */
  async dispatchElementRender(ctx2, props, element, time, resolvedPaths2, imageLoader2, videoExtractor2, drawWidth, drawHeight, scaleX, scaleY) {
    switch (props.type) {
      case "image": {
        if (!element.src) break;
        const localPath = resolvedPaths2.get(element.src);
        if (!localPath) break;
        try {
          const img = await imageLoader2.load(localPath);
          this.drawImageElement(
            ctx2,
            img,
            props,
            drawWidth,
            drawHeight,
            scaleX,
            scaleY
          );
        } catch {
        }
        break;
      }
      case "svg": {
        if (!element.src) break;
        const localPath = resolvedPaths2.get(element.src);
        if (!localPath) break;
        try {
          if (this.svgAnimator.isAnimatedSvg(localPath)) {
            const localTimeSeconds = time - element.startTime;
            const pngBuffer = await this.svgAnimator.rasterize(
              localPath,
              drawWidth,
              drawHeight,
              localTimeSeconds
            );
            const img = await loadImage3(pngBuffer);
            this.drawImageElement(
              ctx2,
              img,
              props,
              drawWidth,
              drawHeight,
              scaleX,
              scaleY
            );
          } else {
            const img = await imageLoader2.load(localPath);
            this.drawImageElement(
              ctx2,
              img,
              props,
              drawWidth,
              drawHeight,
              scaleX,
              scaleY
            );
          }
        } catch (err) {
          console.warn(
            "[ServerSvgAnimator] rasterize failed, falling back to static:",
            err
          );
          try {
            const img = await imageLoader2.load(localPath);
            this.drawImageElement(
              ctx2,
              img,
              props,
              drawWidth,
              drawHeight,
              scaleX,
              scaleY
            );
          } catch {
          }
        }
        break;
      }
      case "gif": {
        if (!element.src) break;
        const localPath = resolvedPaths2.get(element.src);
        if (!localPath) break;
        try {
          const gifLocalTime = time - element.startTime;
          const gifFrame = await this.getGifFrame(localPath, gifLocalTime);
          this.drawImageElement(
            ctx2,
            gifFrame,
            props,
            drawWidth,
            drawHeight,
            scaleX,
            scaleY
          );
        } catch {
          try {
            const img = await imageLoader2.load(localPath);
            this.drawImageElement(
              ctx2,
              img,
              props,
              drawWidth,
              drawHeight,
              scaleX,
              scaleY
            );
          } catch {
          }
        }
        break;
      }
      case "video": {
        if (!element.src) break;
        const localPath = resolvedPaths2.get(element.src);
        if (!localPath) break;
        const localTimeRaw = time - element.startTime + element.trimStart;
        const visibleDuration = Math.max(
          0,
          element.duration - element.trimStart - element.trimEnd
        );
        const clampedLocalTime = Math.min(
          Math.max(0, localTimeRaw),
          Math.max(0, visibleDuration - 1e-3)
        );
        const targetMediaTime = this.getTargetMediaTime(
          element,
          clampedLocalTime
        );
        try {
          const frame = await videoExtractor2.extractFrame(
            localPath,
            Math.max(0, targetMediaTime)
          );
          this.drawImageElement(
            ctx2,
            frame,
            props,
            drawWidth,
            drawHeight,
            scaleX,
            scaleY
          );
        } catch {
        }
        break;
      }
      case "text": {
        this.renderTextElement(ctx2, props, element, scaleX, scaleY);
        break;
      }
      case "shape": {
        this.renderShapeElement(
          ctx2,
          props,
          element,
          drawWidth,
          drawHeight,
          scaleX,
          scaleY
        );
        break;
      }
      default:
        break;
    }
  }
  async getGifFrame(localPath, localTimeSec) {
    let cached = this.gifCache.get(localPath);
    if (!cached) {
      const metadata = await sharp2(localPath, { animated: true }).metadata();
      const pageCount = metadata.pages || 1;
      const delays = metadata.delay || [];
      while (delays.length < pageCount) {
        delays.push(delays.length > 0 ? delays[delays.length - 1] : 100);
      }
      const frames = await this.loadGifFrames(localPath, pageCount);
      const totalDuration2 = delays.reduce((a, b) => a + b, 0);
      cached = { frames, delays, totalDuration: totalDuration2 };
      this.gifCache.set(localPath, cached);
    }
    if (cached.frames.length <= 1) {
      return cached.frames[0];
    }
    const timeMs = localTimeSec * 1e3;
    const cycleTime = cached.totalDuration;
    const timeInCycle = (timeMs % cycleTime + cycleTime) % cycleTime;
    let accumulated = 0;
    for (let i = 0; i < cached.delays.length; i++) {
      accumulated += cached.delays[i];
      if (timeInCycle < accumulated) {
        return cached.frames[i];
      }
    }
    return cached.frames[cached.frames.length - 1];
  }
  async loadGifFrames(localPath, pageCount) {
    const frames = [];
    const batchSize = 10;
    for (let start = 0; start < pageCount; start += batchSize) {
      const end = Math.min(start + batchSize, pageCount);
      const batch = await Promise.all(
        Array.from({ length: end - start }, async (_, j) => {
          const buf = await sharp2(localPath, { page: start + j }).png().toBuffer();
          return loadImage3(buf);
        })
      );
      frames.push(...batch);
    }
    return frames;
  }
  renderShapeElement(ctx2, props, element, drawWidth, drawHeight, scaleX, scaleY = scaleX) {
    const shapeType = props.shapeType || element.shapeType;
    renderShapeElement(
      ctx2,
      {
        shapeType: shapeType || "rect",
        width: drawWidth,
        height: drawHeight,
        fill: props.fill || element.fill || "#000000",
        stroke: props.stroke || element.stroke,
        strokeWidth: (props.strokeWidth ?? element.strokeWidth) || 0,
        shapeBorderRadius: props.shapeBorderRadius || element.shapeBorderRadius || 0,
        shapePoints: props.shapePoints || element.shapePoints
      },
      {
        strokeScale: scaleX,
        borderRadiusScale: Math.min(scaleX, scaleY)
      }
    );
  }
  /**
   * 渲染图片/视频元素（含 crop、cover、border radius、border、filter）
   * 核心绘制委托给共享 drawMediaCore
   */
  drawImageElement(ctx2, img, props, drawWidth, drawHeight, scaleX = 1, scaleY = 1) {
    const minScale = Math.min(scaleX, scaleY);
    const filter = this.cachedGetFilter(props);
    const esx = props.scaleX ?? 1;
    const esy = props.scaleY ?? 1;
    drawMediaCore(
      ctx2,
      img,
      img.naturalWidth ?? img.width,
      img.naturalHeight ?? img.height,
      {
        width: drawWidth,
        height: drawHeight,
        coverWidth: esx !== 1 || esy !== 1 ? drawWidth * esx : void 0,
        coverHeight: esx !== 1 || esy !== 1 ? drawHeight * esy : void 0,
        filter: filter && filter !== "none" ? filter : void 0,
        borderRadius: (props.borderRadius ?? 0) * minScale,
        cropX: props.cropX,
        cropY: props.cropY,
        cropWidth: props.cropWidth,
        cropHeight: props.cropHeight,
        maskEnabled: props.maskEnabled,
        maskShapeType: props.maskShapeType,
        maskX: props.maskX,
        maskY: props.maskY,
        maskScaleX: props.maskScaleX,
        maskScaleY: props.maskScaleY,
        maskRotation: props.maskRotation,
        maskInverted: props.maskInverted,
        maskSides: props.maskSides,
        maskInnerRadius: props.maskInnerRadius,
        maskPathData: props.maskPathData,
        maskFeather: props.maskFeather,
        maskMode: props.maskMode,
        maskEffectType: props.maskEffectType,
        maskEffectIntensity: props.maskEffectIntensity
      }
    );
    const borderWidth = props.borderWidth ?? 0;
    if (borderWidth > 0) {
      drawMediaBorder(ctx2, {
        ...props,
        width: drawWidth,
        height: drawHeight,
        borderWidth: borderWidth * minScale,
        borderRadius: (props.borderRadius ?? 0) * minScale
      });
    }
  }
  /**
   * 渲染文本元素（含阴影、描边、下划线/删除线、换行、背景色）
   * 与前端 TextRenderer 保持一致的渲染管线：
   *   Pass 1: 填充文字（带阴影）
   *   Pass 2: 禁用阴影 → 描边（无阴影）→ 装饰线（无阴影）→ 恢复阴影
   */
  renderTextElement(ctx2, props, element, scaleX, scaleY) {
    const text = props.text ?? element.text;
    if (!text) return;
    const fontSize = (props.fontSize || element.fontSize || 24) * scaleX;
    const fontWeight = props.fontWeight || element.fontWeight || "normal";
    const fontStyle = props.fontStyle || element.fontStyle || "normal";
    const fontFamily = props.fontFamily || element.fontFamily || "Arial";
    const textColor = props.color || element.color || "#000000";
    const textAlign = props.textAlign || element.textAlign || "center";
    const lineHeightFactor = element.lineHeight ?? 1.16;
    const FONT_SIZE_MULT = 1.13;
    const FONT_SIZE_FRACTION = 0.222;
    const lineHeight = fontSize * lineHeightFactor * FONT_SIZE_MULT;
    ctx2.font = `${fontStyle} ${fontWeight} ${fontSize}px "${fontFamily}"`;
    ctx2.textBaseline = "alphabetic";
    ctx2.textAlign = textAlign;
    try {
      ctx2.fontKerning = "normal";
      ctx2.textRendering = "optimizeLegibility";
      ctx2.imageSmoothingEnabled = true;
      ctx2.imageSmoothingQuality = "high";
    } catch {
    }
    const transform = ctx2.getTransform ? ctx2.getTransform() : null;
    const noRotation = transform && Math.abs(transform.b) < 1e-3 && Math.abs(transform.c) < 1e-3 && Math.abs(transform.a) > 1e-3 && Math.abs(transform.d) > 1e-3;
    if (noRotation) {
      const dx = Math.round(transform.e) - transform.e;
      const dy = Math.round(transform.f) - transform.f;
      if (Math.abs(dx) > 1e-3 || Math.abs(dy) > 1e-3) {
        ctx2.translate(dx / transform.a, dy / transform.d);
      }
    }
    const charSpacingPx = charSpacingToPx(
      props.charSpacing ?? element.charSpacing ?? 0,
      fontSize
    );
    const elementWidth = props.width * scaleX;
    const elementHeight = props.height * scaleY;
    const padding = (element.padding || 5) * scaleX;
    const textboxWidth = (element.textboxWidth || props.width) * scaleX;
    const availableTextWidth = Math.max(0, textboxWidth - padding * 2);
    const wrappedLines = this.getWrappedText(
      ctx2,
      text,
      availableTextWidth,
      charSpacingPx
    );
    const baselineInLine = fontSize * FONT_SIZE_MULT * (1 - FONT_SIZE_FRACTION);
    const totalTextHeight = wrappedLines.length * lineHeight;
    const backgroundWidth = elementWidth + padding * 2;
    const backgroundHeight = elementHeight + padding * 2;
    const bgColor = props.backgroundColor || element.backgroundColor;
    if (bgColor) {
      const prevShadow = captureShadow(ctx2);
      disableShadow(ctx2);
      drawRoundedRect(
        ctx2,
        -backgroundWidth / 2,
        -backgroundHeight / 2,
        backgroundWidth,
        backgroundHeight,
        10 * scaleX,
        10 * scaleY,
        bgColor
      );
      restoreShadow(ctx2, prevShadow);
    }
    const textBlockCenterOffset = Math.max(
      0,
      (elementHeight - totalTextHeight) / 2
    );
    const textStartY = -backgroundHeight / 2 + padding + textBlockCenterOffset + baselineInLine;
    const lineXs = [];
    const lineYs = [];
    const lineWs = [];
    let baseX = 0;
    switch (textAlign) {
      case "left":
        baseX = -backgroundWidth / 2 + padding;
        break;
      case "right":
        baseX = backgroundWidth / 2 - padding;
        break;
      case "center":
      default:
        baseX = 0;
        break;
    }
    for (let i = 0; i < wrappedLines.length; i++) {
      lineXs[i] = baseX;
      lineYs[i] = textStartY + i * lineHeight;
      lineWs[i] = this.cachedMeasureWidth(ctx2, wrappedLines[i], charSpacingPx);
    }
    if (noRotation) {
      for (let i = 0; i < wrappedLines.length; i++) {
        lineYs[i] = Math.round(lineYs[i] * transform.d) / transform.d;
        if (textAlign !== "center") {
          lineXs[i] = Math.round(lineXs[i] * transform.a) / transform.a;
        }
      }
    }
    const strokeColor = props.strokeColor || element.strokeColor;
    const strokeWidth = (props.strokeWidth ?? element.strokeWidth ?? 0) * scaleX;
    const fontSpec = `${fontStyle} ${fontWeight} ${fontSize}px "${fontFamily}"`;
    const hadShadow = !!props.shadowColor || props.shadowBlur !== void 0 || props.shadowOffsetX !== void 0 || props.shadowOffsetY !== void 0;
    const elemSx = props.scaleX ?? 1;
    const elemSy = props.scaleY ?? 1;
    const elemSxAbs = Math.abs(elemSx) || 1;
    const elemSyAbs = Math.abs(elemSy) || 1;
    let renderCtx = ctx2;
    let tmpCanvas = null;
    const applyShadow = (target) => {
      target.shadowColor = props.shadowColor || "#000000";
      target.shadowBlur = (props.shadowBlur ?? 0) * (scaleX + scaleY) * (elemSxAbs + elemSyAbs) / 4;
      target.shadowOffsetX = (props.shadowOffsetX ?? 0) * scaleX * elemSxAbs;
      target.shadowOffsetY = (props.shadowOffsetY ?? 0) * scaleY * elemSyAbs;
    };
    if (hadShadow) {
      const tw = Math.round(backgroundWidth * elemSxAbs) || 1;
      const th = Math.round(backgroundHeight * elemSyAbs) || 1;
      if (tw > 0 && th > 0) {
        tmpCanvas = new Canvas(tw, th);
        renderCtx = tmpCanvas.getContext("2d");
        renderCtx.scale(elemSxAbs, elemSyAbs);
        renderCtx.translate(backgroundWidth / 2, backgroundHeight / 2);
        renderCtx.font = ctx2.font;
        renderCtx.textAlign = ctx2.textAlign;
        renderCtx.textBaseline = ctx2.textBaseline;
        try {
          renderCtx.fontKerning = "normal";
          renderCtx.textRendering = "optimizeLegibility";
          renderCtx.imageSmoothingEnabled = true;
          renderCtx.imageSmoothingQuality = "high";
        } catch {
        }
      }
    }
    const hasCharAnimation = renderTextCharAnimations2(
      renderCtx,
      props,
      wrappedLines,
      lineXs,
      lineYs,
      lineWs,
      textAlign,
      textColor,
      fontSpec,
      strokeColor || "",
      strokeWidth,
      scaleX,
      scaleY,
      charSpacingPx,
      this._charWidthCache,
      hadShadow
      // skipShadow: shadow managed by per-call or composite
    );
    if (!hasCharAnimation) {
      const applyFillStyle = () => {
        if (props.useGradient && props.gradientColors && props.gradientColors.length >= 2) {
          const drawWidth = Math.max(...lineWs, 1);
          renderCtx.fillStyle = createTextGradient(
            renderCtx,
            props.gradientColors,
            drawWidth
          );
        } else {
          renderCtx.fillStyle = textColor;
        }
      };
      const fillAllLines = () => {
        applyFillStyle();
        if (charSpacingPx > 0) {
          for (let i = 0; i < wrappedLines.length; i++) {
            fillTextWithSpacing(
              renderCtx,
              wrappedLines[i],
              lineXs[i],
              lineYs[i],
              textAlign,
              charSpacingPx
            );
          }
        } else {
          for (let i = 0; i < wrappedLines.length; i++) {
            renderCtx.fillText(wrappedLines[i], lineXs[i], lineYs[i]);
          }
        }
      };
      const hasStroke = strokeWidth > 0 && !!strokeColor;
      fillAllLines();
      if (hasStroke) {
        drawStrokeTextLines(
          renderCtx,
          wrappedLines,
          lineXs,
          lineYs,
          strokeColor,
          strokeWidth,
          textAlign,
          charSpacingPx
        );
      }
      drawTextDecorations(renderCtx, {
        underline: !!(props.underline ?? element.underline),
        linethrough: !!(props.linethrough ?? element.linethrough),
        textColor,
        textAlign,
        lineXs,
        lineYs,
        lineWs,
        fontSize
      });
    }
    if (hadShadow && tmpCanvas) {
      const dw = tmpCanvas.width / elemSxAbs;
      const dh = tmpCanvas.height / elemSyAbs;
      const halfPxW = Math.round(tmpCanvas.width / 2) / elemSxAbs;
      const halfPxH = Math.round(tmpCanvas.height / 2) / elemSyAbs;
      applyShadow(ctx2);
      ctx2.drawImage(tmpCanvas, -halfPxW, -halfPxH, dw, dh);
      disableShadow(ctx2);
    }
  }
  /**
   * 查找当前时间对应的字幕（二分搜索 + lastHit 缓存）
   */
  findCaptionAt(timeSec, captions) {
    if (captions !== this.captionIndexSource) {
      this.captionIndex = new CaptionIndex(captions);
      this.captionIndexSource = captions;
    }
    return this.captionIndex.findAt(timeSec);
  }
  /**
   * 渲染字幕叠加层 — 委托给 captionTextRenderer 适配器
   */
  renderCaptionsOverlay(ctx2, canvasWidth, canvasHeight, timeSec, captions, style, animation, captionScaleX = 1, captionScaleY = 1) {
    const current = this.findCaptionAt(timeSec, captions);
    if (!current) return;
    const currentTimeMs = timeSec * 1e3;
    const captionStartMs = srtTimeToMs(current.startTime);
    const captionEndMs = srtTimeToMs(current.endTime);
    const defaultColor = style?.fontColor ?? "#FFFFFF";
    const animState = calculateCaptionAnimationState(
      currentTimeMs,
      captionStartMs,
      captionEndMs,
      current.text || "",
      animation,
      defaultColor,
      canvasHeight,
      current.wordTimings
    );
    if (animState.opacity <= 0) return;
    const charWidthCache = this._charWidthCache;
    const fns = {
      wrapText: (c, t, maxWidth, spacingPx) => this.getWrappedText(c, t, maxWidth, spacingPx),
      measureLineWidth: (c, line, spacingPx) => this.cachedMeasureWidth(c, line, spacingPx),
      getCharWidth: (c, fontSpec, char) => this.measureCharWidth(c, fontSpec, char, charWidthCache),
      measureTextMetrics: (c, fontSize) => this.cachedTextMetrics(c, fontSize)
    };
    renderCaptionTextServer(
      ctx2,
      current.text || "",
      canvasWidth,
      canvasHeight,
      style,
      animState,
      fns,
      captionScaleX,
      captionScaleY
    );
  }
  /**
   * 绘制渐变背景（与前端 TimelineRenderer.drawGradientBackground 一致）
   */
  drawGradientBackground(ctx2, canvasWidth, canvasHeight, gradientString) {
    try {
      if (gradientString.includes("linear-gradient")) {
        const gradient = ctx2.createLinearGradient(
          0,
          0,
          canvasWidth,
          canvasHeight
        );
        const colors = gradientString.match(/#[0-9a-fA-F]{6}/g) || [];
        colors.forEach((color, index) => {
          gradient.addColorStop(index / Math.max(1, colors.length - 1), color);
        });
        ctx2.fillStyle = gradient;
        ctx2.fillRect(0, 0, canvasWidth, canvasHeight);
      } else if (gradientString.includes("radial-gradient")) {
        const gradient = ctx2.createRadialGradient(
          canvasWidth / 2,
          canvasHeight / 2,
          0,
          canvasWidth / 2,
          canvasHeight / 2,
          Math.max(canvasWidth, canvasHeight) / 2
        );
        const colors = gradientString.match(/#[0-9a-fA-F]{6}/g) || [];
        colors.forEach((color, index) => {
          gradient.addColorStop(index / Math.max(1, colors.length - 1), color);
        });
        ctx2.fillStyle = gradient;
        ctx2.fillRect(0, 0, canvasWidth, canvasHeight);
      } else {
        ctx2.fillStyle = "#000000";
        ctx2.fillRect(0, 0, canvasWidth, canvasHeight);
      }
    } catch (error) {
      console.warn(
        "[ServerRenderExporter] Failed to draw gradient background:",
        error
      );
      ctx2.fillStyle = "#000000";
      ctx2.fillRect(0, 0, canvasWidth, canvasHeight);
    }
  }
  /**
   * 渲染模糊背景（与前端 TimelineRenderer.renderBlurBackground 一致）
   * 找到第一个视频/图片元素，cover-fit 绘制到离屏画布，然后模糊覆盖到主画布
   */
  async renderBlurBackground(ctx2, outWidth, outHeight, activeElements, time, blurIntensity, resolvedPaths2, imageLoader2, videoExtractor2, offCanvas, offCtx) {
    const bgCandidate = activeElements.find(
      ({ element: element2 }) => (element2.type === "video" || element2.type === "image") && element2.src
    );
    if (!bgCandidate) return;
    const element = bgCandidate.element;
    const localPath = resolvedPaths2.get(element.src);
    if (!localPath) return;
    if (!offCanvas || !offCtx) {
      offCanvas = new Canvas(outWidth, outHeight);
      offCtx = offCanvas.getContext("2d");
    } else {
      offCtx.clearRect(0, 0, outWidth, outHeight);
    }
    try {
      let sourceImg;
      if (element.type === "video") {
        const localTimeRaw = time - element.startTime + element.trimStart;
        const visibleDuration = Math.max(
          0,
          element.duration - element.trimStart - element.trimEnd
        );
        const clampedLocalTime = Math.min(
          Math.max(0, localTimeRaw),
          Math.max(0, visibleDuration - 1e-3)
        );
        const targetMediaTime = this.getTargetMediaTime(
          element,
          clampedLocalTime
        );
        sourceImg = await videoExtractor2.extractFrame(
          localPath,
          Math.max(0, targetMediaTime)
        );
      } else {
        sourceImg = await imageLoader2.load(localPath);
      }
      const imgW = sourceImg.naturalWidth ?? sourceImg.width;
      const imgH = sourceImg.naturalHeight ?? sourceImg.height;
      const imgAspect = imgW / imgH;
      const canvasAspect = outWidth / outHeight;
      let drawWidth, drawHeight, drawX, drawY;
      if (imgAspect > canvasAspect) {
        drawHeight = outHeight;
        drawWidth = drawHeight * imgAspect;
        drawX = (outWidth - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = outWidth;
        drawHeight = drawWidth / imgAspect;
        drawX = 0;
        drawY = (outHeight - drawHeight) / 2;
      }
      offCtx.drawImage(sourceImg, drawX, drawY, drawWidth, drawHeight);
      ctx2.save();
      try {
        ctx2.filter = `blur(${Math.max(0, blurIntensity)}px)`;
      } catch {
      }
      ctx2.drawImage(offCanvas, 0, 0);
      ctx2.restore();
      try {
        ctx2.filter = "none";
      } catch {
      }
    } catch (err) {
      console.warn(
        "[ServerRenderExporter] Failed to render blur background:",
        err
      );
    }
  }
  /**
   * 使用 FFmpeg 将帧序列 + 音频编码为视频
   */
  encodeVideo(framesDir, audioPath, outputPath, fps, bitrate, _format, width = 1920, height = 1080) {
    return new Promise((resolve2, reject) => {
      const encoderArgs = buildEncoderArgs(bitrate, fps, width, height);
      const args = [
        "-framerate",
        String(fps),
        "-i",
        path5.join(framesDir, "frame_%06d.jpg")
      ];
      if (audioPath) {
        args.push("-i", audioPath);
      }
      args.push(...encoderArgs);
      if (audioPath) {
        args.push("-c:a", "aac", "-b:a", "192k");
      }
      args.push("-movflags", "+faststart", "-y", outputPath);
      const proc = spawnProcess("ffmpeg", args, {
        stdio: ["pipe", "pipe", "pipe"]
      });
      proc.stderr.on("data", () => {
      });
      proc.on("close", (code) => {
        if (code === 0) {
          resolve2();
        } else {
          reject(new Error(`FFmpeg encoding failed (code ${code})`));
        }
      });
      proc.on("error", (err) => {
        reject(new Error(`FFmpeg spawn error: ${err.message}`));
      });
    });
  }
};

// ../../server/src/renderer/frameWorker.ts
if (isMainThread) {
  throw new Error("frameWorker.ts must be run as a Worker Thread, not directly.");
}
var session = workerData;
var WorkerVideoExtractor = class {
  constructor(diskPaths) {
    this.imageCache = /* @__PURE__ */ new Map();
    this.diskPaths = diskPaths;
  }
  async extractFrame(videoPath, timeSeconds) {
    const key = `${videoPath}@${timeSeconds.toFixed(3)}`;
    const cached = this.imageCache.get(key);
    if (cached) return cached;
    const filePath = this.diskPaths.get(key);
    if (!filePath) {
      throw new Error(`[frameWorker] Pre-extracted frame not found for key: ${key}`);
    }
    const img = await loadImage4(filePath);
    this.imageCache.set(key, img);
    return img;
  }
  setCacheLimit(_n) {
  }
  async preloadFrameFromDisk(_key, _path) {
  }
  clear() {
    this.imageCache.clear();
  }
  get cacheSize() {
    return this.imageCache.size;
  }
};
var canvas = new Canvas2(session.outWidth, session.outHeight);
var ctx = canvas.getContext("2d");
var blurOffCanvas = session.backgroundType === "blur" ? new Canvas2(session.outWidth, session.outHeight) : null;
var blurOffCtx = blurOffCanvas?.getContext("2d") ?? null;
var renderer = new ServerRenderExporter();
renderer.initializeCaches();
var imageLoader = new ServerImageLoader();
var videoExtractor = new WorkerVideoExtractor(
  new Map(Object.entries(session.videoFrameDiskPaths))
);
var resolvedPaths = new Map(Object.entries(session.resolvedPaths));
var totalDuration = session.totalDuration;
var activeElementsByFrame;
if (session.activeElementIndices) {
  activeElementsByFrame = session.activeElementIndices.map(
    (frameEntries) => frameEntries.reduce(
      (acc, [ti, ei]) => {
        const track = session.renderTracks[ti];
        const element = track?.elements[ei];
        if (track && element) acc.push({ track, element });
        return acc;
      },
      []
    )
  );
} else {
  activeElementsByFrame = DataConverter.buildActiveElementsByFrame(
    session.renderTracks,
    session.totalFrames,
    session.fps,
    totalDuration,
    session.transitions
  );
}
var mbConfig = session.motionBlur ?? null;
var mbAccBuffer = mbConfig ? new Float64Array(session.outWidth * session.outHeight * 4) : null;
var mbSubCanvas = mbConfig ? new Canvas2(session.outWidth, session.outHeight) : null;
var mbSubCtx = mbSubCanvas?.getContext("2d") ?? null;
parentPort.postMessage({ type: "ready" });
parentPort.on("message", async (msg) => {
  if (msg.type !== "renderFrame") return;
  const { frameIndex } = msg;
  try {
    let ab;
    if (mbConfig && mbAccBuffer && mbSubCanvas && mbSubCtx) {
      const nominalTime = frameIndex === session.totalFrames - 1 ? session.totalDuration : frameIndex / session.fps;
      const samples = calculateMotionBlurSamples(nominalTime, 1 / session.fps, mbConfig);
      mbAccBuffer.fill(0);
      for (const sample of samples) {
        await renderer.renderFrameToBuffer(
          frameIndex,
          session.fps,
          mbSubCtx,
          session.outWidth,
          session.outHeight,
          session.canvasWidth,
          session.canvasHeight,
          session.scaleX,
          session.scaleY,
          activeElementsByFrame[frameIndex],
          session.transitions,
          session.renderTracks,
          session.captions,
          session.captionStyle ?? void 0,
          session.captionAnimation ?? void 0,
          session.backgroundColor,
          session.backgroundType,
          session.blurIntensity,
          resolvedPaths,
          imageLoader,
          videoExtractor,
          blurOffCanvas,
          blurOffCtx,
          session.totalFrames,
          session.totalDuration,
          sample.time
          // timeOverride：子帧时间点
        );
        const raw = mbSubCanvas.toBufferSync("raw");
        accumulateSubFrame(
          mbAccBuffer,
          new Uint8ClampedArray(raw.buffer, raw.byteOffset, raw.byteLength),
          sample.weight
        );
      }
      const finalPixels = new Uint8ClampedArray(mbAccBuffer.length);
      finalizeAccumulation(mbAccBuffer, finalPixels);
      ab = finalPixels.buffer.slice(0);
    } else {
      await renderer.renderFrameToBuffer(
        frameIndex,
        session.fps,
        ctx,
        session.outWidth,
        session.outHeight,
        session.canvasWidth,
        session.canvasHeight,
        session.scaleX,
        session.scaleY,
        activeElementsByFrame[frameIndex],
        session.transitions,
        session.renderTracks,
        session.captions,
        session.captionStyle ?? void 0,
        session.captionAnimation ?? void 0,
        session.backgroundColor,
        session.backgroundType,
        session.blurIntensity,
        resolvedPaths,
        imageLoader,
        videoExtractor,
        blurOffCanvas,
        blurOffCtx,
        session.totalFrames,
        session.totalDuration
      );
      const raw = canvas.toBufferSync("raw");
      ab = raw.byteOffset === 0 && raw.byteLength === raw.buffer.byteLength ? raw.buffer : raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength);
    }
    parentPort.postMessage(
      { type: "frameResult", frameIndex, buffer: ab },
      [ab]
      // Transfer list：ab 在 Worker 侧立即 detach，主线程接管内存
    );
  } catch (err) {
    parentPort.postMessage({
      type: "frameError",
      frameIndex,
      error: err instanceof Error ? err.message : String(err)
    });
  }
});

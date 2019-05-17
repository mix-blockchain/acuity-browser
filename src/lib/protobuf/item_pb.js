/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Item', null, global);
goog.exportSymbol('proto.Mixin', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Mixin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Mixin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Mixin.displayName = 'proto.Mixin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Item.repeatedFields_, null);
};
goog.inherits(proto.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Item.displayName = 'proto.Item';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Mixin.prototype.toObject = function(opt_includeInstance) {
  return proto.Mixin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Mixin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mixin.toObject = function(includeInstance, msg) {
  var f, obj = {
    mixinId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payload: msg.getPayload_asB64(),
    extraId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Mixin}
 */
proto.Mixin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Mixin;
  return proto.Mixin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Mixin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Mixin}
 */
proto.Mixin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setMixinId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExtraId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Mixin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Mixin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Mixin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Mixin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMixinId();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getExtraId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional fixed32 mixin_id = 1;
 * @return {number}
 */
proto.Mixin.prototype.getMixinId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Mixin.prototype.setMixinId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Mixin.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.Mixin.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.Mixin.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.Mixin.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 extra_id = 3;
 * @return {number}
 */
proto.Mixin.prototype.getExtraId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Mixin.prototype.setExtraId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Item.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    mixinList: jspb.Message.toObjectList(msg.getMixinList(),
    proto.Mixin.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Item}
 */
proto.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Item;
  return proto.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Item}
 */
proto.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Mixin;
      reader.readMessage(value,proto.Mixin.deserializeBinaryFromReader);
      msg.addMixin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMixinList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Mixin.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Mixin mixin = 1;
 * @return {!Array<!proto.Mixin>}
 */
proto.Item.prototype.getMixinList = function() {
  return /** @type{!Array<!proto.Mixin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Mixin, 1));
};


/** @param {!Array<!proto.Mixin>} value */
proto.Item.prototype.setMixinList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Mixin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Mixin}
 */
proto.Item.prototype.addMixin = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Mixin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.Item.prototype.clearMixinList = function() {
  this.setMixinList([]);
};


goog.object.extend(exports, proto);

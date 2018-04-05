var searchIndex = {};
searchIndex["askalono"] = {"doc":"askalono is a crate that is Quite Good at detecting licenses from text.","items":[[3,"TextData","askalono","A structure representing compiled text/matching data.",null,null],[3,"Match","","Information about text that was compared against licenses in the store.",null,null],[12,"score","","Confidence score of the match, ranging from 0 to 1.",0,null],[12,"name","","The name of the closest matching license in the `Store`. This will always be something that exists in the store, regardless of the score.",0,null],[12,"aliases","","Alternate names for the matched license.",0,null],[12,"license_type","","The type of the license that matched. Useful to know if the match was the complete text, a header, or something else.",0,null],[12,"data","","A reference to the license data that matched inside the `Store`. May be useful for diagnostic purposes or to further optimize the result.",0,null],[3,"Store","","A representation of a collection of known licenses.",null,null],[4,"LicenseType","","The type of a license entry (typically in a `Store`).",null,null],[13,"Original","","The canonical text of the license.",1,null],[13,"Header","","A license header. There may be more than one in a `Store`.",1,null],[13,"Alternate","","An alternate form of a license. This is intended to be used for alternate formats of a license, not for variants where the text has different meaning. Not currently used in askalono's SPDX dataset.",1,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"licensetype"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"licensetype"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new TextData structure from a string.",2,{"inputs":[{"name":"str"}],"output":{"name":"textdata"}}],[11,"without_text","","Consume this `TextData`, returning one without normalized/processed text stored.",2,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"lines_view","","Get the bounds of the active line view.",2,null],[11,"lines","","Get a slice of the normalized lines in this `TextData`.",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"match_score","","Compare this `TextData` with another, returning a similarity score.",2,{"inputs":[{"name":"self"},{"name":"textdata"}],"output":{"name":"f32"}}],[11,"optimize_bounds","","Attempt to optimize a known match to locate possible line ranges.",2,null],[11,"from","","",2,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"match"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"analyze","","Compare the given `TextData` against all licenses in the `Store`.",3,{"inputs":[{"name":"self"},{"name":"textdata"}],"output":{"generics":["match","error"],"name":"result"}}],[11,"default","","",3,{"inputs":[],"output":{"name":"store"}}],[11,"new","","Create a new `Store`.",3,{"inputs":[],"output":{"name":"store"}}],[11,"from_cache","","Create a store from a cache file.",3,{"inputs":[{"name":"r"}],"output":{"generics":["store","error"],"name":"result"}}],[11,"to_cache","","Serialize the current store.",3,{"inputs":[{"name":"self"},{"name":"w"}],"output":{"generics":["error"],"name":"result"}}],[11,"load_spdx","","Fill the store with SPDX JSON data.",3,{"inputs":[{"name":"self"},{"name":"path"},{"name":"bool"}],"output":{"generics":["error"],"name":"result"}}]],"paths":[[3,"Match"],[4,"LicenseType"],[3,"TextData"],[3,"Store"]]};
searchIndex["cfg_if"] = {"doc":"A macro for defining #[cfg] if-else statements.","items":[[14,"cfg_if","cfg_if","",null,null]],"paths":[]};
searchIndex["lazy_static"] = {"doc":"A macro for declaring lazily evaluated statics.","items":[[5,"initialize","lazy_static","Takes a shared reference to a lazy static and initializes it if it has not been already.",null,{"inputs":[{"name":"t"}],"output":null}],[8,"LazyStatic","","Support trait for enabling a few common operation on lazy static values.",null,null],[14,"__lazy_static_create","","",null,null],[14,"lazy_static","","",null,null]],"paths":[]};
searchIndex["memoffset"] = {"doc":"A crate used for calculating offsets of struct members and their spans.","items":[[14,"offset_of","memoffset","Calculates the offset of the specified field from the start of the struct. This macro supports arbitrary amount of subscripts and recursive member-accesses.",null,null],[14,"span_of","","Produces a range instance representing the sub-slice containing the specified member.",null,null]],"paths":[]};
searchIndex["nodrop"] = {"doc":"The nodrop crate has the following cargo feature flags:","items":[[3,"NoDrop","nodrop","A type holding T that will not call its destructor on drop",null,null],[11,"new","","Create a new NoDrop.",0,{"inputs":[{"name":"t"}],"output":{"name":"nodrop"}}],[11,"into_inner","","Extract the inner value.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"drop","","",0,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}]],"paths":[[3,"NoDrop"]]};
searchIndex["quote"] = {"doc":"Quasi-quoting without a Syntex dependency, intended for use with Macros 1.1.","items":[[3,"Tokens","quote","Tokens produced by a `quote!(...)` invocation.",null,null],[3,"ByteStr","","Wrap a `&str` so it interpolates as a byte-string: `b\"abc\"`.",null,null],[12,"0","","",0,null],[3,"Hex","","Wrap an integer so it interpolates as a hexadecimal.",null,null],[12,"0","","",1,null],[3,"Ident","","An identifier that should be interpolated without quotes.",null,null],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"tokens"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":{"name":"bool"}}],[11,"new","","Empty tokens.",2,{"inputs":[],"output":{"name":"self"}}],[11,"append","","For use by `ToTokens` implementations.",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"append_all","","For use by `ToTokens` implementations.",2,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"append_separated","","For use by `ToTokens` implementations.",2,{"inputs":[{"name":"self"},{"name":"i"},{"name":"s"}],"output":null}],[11,"append_terminated","","For use by `ToTokens` implementations.",2,{"inputs":[{"name":"self"},{"name":"i"},{"name":"s"}],"output":null}],[11,"as_str","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"into_string","","",2,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"parse","","",2,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"as_ref","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_tokens","","",0,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",2,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"to_tokens","","",1,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"ident"}}],[11,"hash","","",3,null],[11,"new","","",3,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"generics":["str"],"name":"cow"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"as_ref","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"generics":["error"],"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"bool"}}],[11,"to_tokens","","",3,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[8,"ToTokens","","Types that can be interpolated inside a `quote!(...)` invocation.",null,null],[10,"to_tokens","","Write `self` to the given `Tokens`.",4,{"inputs":[{"name":"self"},{"name":"tokens"}],"output":null}],[14,"quote","","The whole point.",null,null]],"paths":[[3,"ByteStr"],[3,"Hex"],[3,"Tokens"],[3,"Ident"],[8,"ToTokens"]]};
searchIndex["scopeguard"] = {"doc":"A scope guard will run a given closure when it goes out of scope, even if the code between panics. (as long as panic doesn't abort)","items":[[3,"ScopeGuard","scopeguard","`ScopeGuard` is a scope guard that may own a protected value.",null,null],[4,"Always","","Always run on scope exit.",null,null],[5,"guard","","Create a new `ScopeGuard` owning `v` and with deferred closure `dropfn`.",null,{"inputs":[{"name":"t"},{"name":"f"}],"output":{"generics":["always"],"name":"scopeguard"}}],[8,"Strategy","","",null,null],[10,"should_run","","Return `true` if the guard’s associated code should run (in the context where this method is called).",0,{"inputs":[],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"should_run","","",1,{"inputs":[],"output":{"name":"bool"}}],[11,"with_strategy","","Create a `ScopeGuard` that owns `v` (accessible through deref) and calls `dropfn` when its destructor runs.",2,{"inputs":[{"name":"t"},{"name":"f"}],"output":{"name":"scopeguard"}}],[11,"deref","","",2,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"deref_mut","","",2,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"drop","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"defer","","Macro to create a `ScopeGuard` (always run).",null,null],[14,"defer_on_unwind","","Macro to create a `ScopeGuard` (run on unwinding from panic).",null,null]],"paths":[[8,"Strategy"],[4,"Always"],[3,"ScopeGuard"]]};
searchIndex["unicode_xid"] = {"doc":"Determine if a `char` is a valid identifier for a parser and/or lexer according to Unicode Standard Annex #31 rules.","items":[[17,"UNICODE_VERSION","unicode_xid","The version of Unicode that this version of unicode-xid is based on.",null,null],[8,"UnicodeXID","","Methods for determining if a character is a valid identifier character.",null,null],[10,"is_xid_start","","Returns whether the specified character satisfies the 'XID_Start' Unicode property.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"is_xid_continue","","Returns whether the specified `char` satisfies the 'XID_Continue' Unicode property.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}]],"paths":[[8,"UnicodeXID"]]};
initSearch(searchIndex);
## What is WID?

A word id(wid) is a randomly generated concatenation of words from a dictionary that will match a certain length. This was created from many long nights of staring at guid's in logs trying to match them up at different points in the log. A wid is easy for the human to read, remember, and spot later on down the road without even trying.

To use wid, var wid = require('wid');, and call wid.NewWID(someLength) to generate a wid!
Some use cases:

1. **Replace a GUID when you are using a GUID just for a in memory object
2. **Replace a key name in redis
3. **Great for any id property in an object
4. **seed a text file for replacement later

**Note**: TS file is included. If you run WebStorm 7 it may try to add the TS watcher. Do not fret, should not bother it.

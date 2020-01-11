const memory = require('./memory')

class Array {
    constructor() {
        this.length = 0
        this._capacity = 0
        this.ptr = memory.allocate(this.length)
    }
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        memory.set(this.ptr + this.length, value)
        this.length++
    }
    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory!')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Provided index exceeds bounds of array')
        }
        return memory.get(this.ptr + index)
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Nothing to pop!')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Provided index exceeds the bounds of the array')
        }
        if (this.length >= this._capacity) {
            this._rezise((this.length + 1) * Array.SIZE_RATIO)
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Provided index exceeds the bounds of the array')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }
}
Array.SIZE_RATIO = 3
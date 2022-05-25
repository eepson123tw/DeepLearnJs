

Object.defineProperty(Element.prototype, 'innerHTML2', {
    get: function () {
        var output = []
        var childNode = this.firstChild
        var serializer = new XMLSerializer()
        while (childNode) {
            output.push(serializer.serializeToString(childNode))
            childNode = childNode.nextSibling
        }
        return output.join('')
    },
    set: function (text) {
        while (this.firstChild) {
            this.removeChild(this.firstChild)
        }
        var parser = new DOMParser()
        parser.async = false
        var element
        var childNode
        try {
            element = parser.parseFromString(text, 'text/html').documentElement
            childNode = element.firstChild
            while (childNode) {
                this.appendChild(this.ownerDocument.importNode(childNode, true))
                childNode = childNode.nextSibling
            }
        } catch (e) {
            throw new Error('Error parsing XML string')
        };
    }
})

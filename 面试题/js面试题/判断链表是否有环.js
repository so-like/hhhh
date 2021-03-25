function huan(head){
    // 定义两个指针 一个快一个慢
    if(head == null){
        return null
    }
    let fast = head,
        slow = head
    while(fast && fast.next){
        // 判断快慢指针是否相遇
        fast = fast.next.next
        slow = slow.next
        if(fast == slow){
            return true
        }
    }
    // 如果出循环就说明没有环
    return false
}
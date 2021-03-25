function reserves(head,k){
    // 判断你如果链表为空则返回head
    if(head==null){
        return head
    }
    let pre=null,
    // cur为当前节点 p为当前节点指针
        cur=head,
        p=head
    // 开始for循环
    for(var i=0;i<k;i++){
        if(p == null){
            return head
        }
        // 如果剩的数组不够name就直接返回 如果够p指针后移
        p=p.next
    }
    for(let j=0;j<k;j++){
        var next = cur.next
        cur.next = pre;
        pre = cur
        cur = next
    }
    head.next = reserves(cur,k)
    return pre;
}
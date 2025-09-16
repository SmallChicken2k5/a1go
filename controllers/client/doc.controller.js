// [GET] /docs
module.exports.index = (req, res) => {
    const docs = [
        {
            title: 'Clean Code - Tóm tắt chương 1',
            href: '/docs/clean-code-1',
            meta: '3 ngày trước',
            desc: 'Nguyên tắc đặt tên, hàm nhỏ, một cấp trừu tượng.',
            tags: ['clean-code', 'best-practices']
        },
        {
            title: 'Node.js Streams cơ bản',
            href: '/docs/node-streams',
            meta: '5 ngày trước',
            desc: 'Tổng quan Readable/Writable, piping, backpressure.',
            tags: ['nodejs', 'backend']
        },
        {
            title: 'SQL Indexing 101',
            href: '/docs/sql-index',
            meta: '1 tuần trước',
            desc: 'B-tree, phủ chỉ mục, tránh full scan.',
            tags: ['database', 'performance']
        }
    ];

    const filters = [
        { label: 'Tất cả', icon: 'bi-collection', href: '/docs' },
        { label: 'Web', icon: 'bi-window', href: '/docs?tag=web' },
        { label: 'AI/ML', icon: 'bi-robot', href: '/docs?tag=ai' },
        { label: 'DSA', icon: 'bi-braces', href: '/docs?tag=dsa' },
        { label: 'DevOps', icon: 'bi-boxes', href: '/docs?tag=devops' },
        { label: 'Database', icon: 'bi-database', href: '/docs?tag=db' }
    ];

    res.render('client/pages/docs/index', { 
        title: 'Documentation', 
        docs, 
        filters 
    });
}
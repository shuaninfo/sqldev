pid=`ps -ef|grep sqldev|grep -v grep|awk '{print $2}'`
if [ ! -n "$pid" ]; then
        echo '尚未启动';
else
        echo '启动进程为 => '$pid;
        echo '准备关闭'
        kill -9 $pid;
        echo '已关闭';
fi
